import Vector3 from "../../Math/Vector3";
import ID from "../ID";
import CollisionObject from "./CollisionObject";
import OctCell from "./OctCell";

 const MaxLevel = 7;

 
 const  LEVEL_FLAG= [ (111 << 0),(111 << 3),(111 << 6),(111 << 9),(111 << 12),(111 << 15),(111 << 18),(111 << 21),(111<< 24),(111 << 27),];
	class OctreeHelper {

		static BitSeparate( n:number):number
		{
			var s = n;
			s = (s | s << 8) & 0x0000f00f;
			s = (s | s << 4) & 0x000c30c3;
			s = (s | s << 2) & 0x00249249;
			return s;
		}
		static  GetLevel(arg_flag:number,arg_level:number) {
			var out = 1;
			for (var i=0 ;i < arg_level; i++) {

				var Check = (arg_flag >> (i * 3)) & 0x7;
				if (Check != 0)
					out = i + 1;
			}
			return out;
		}
	};

export default class CollisionLayer 
	{
		vec_shp_collisionObjs:Array<CollisionObject>;
		vec_index:Array<ID>;
		ary_cells:Array<OctCell>;
		OctPow=Array<number>(MaxLevel + 1);
		OctPowSevenDevided =Array<number>(MaxLevel + 1);
		width:Vector3;	
		rangeMin:Vector3;	
		rangeMax:Vector3;	
		unit:Vector3;		
		maxCellNum:number;	
		maxLevel:number;	
		constructor(arg_level:number,arg_minPos:Vector3,arg_maxPos:Vector3){
			if(arg_level<=MaxLevel)
				this.maxLevel = arg_level; 
			else{
				this.maxLevel = MaxLevel;
			}
			this.rangeMax = arg_maxPos;
			this.rangeMin = arg_minPos;
			this.width = this.rangeMax.Sub( this.rangeMin);
			this.OctPow[0] = 1;
			this.OctPowSevenDevided[0] = 0;
			for (var i = 1; i < MaxLevel + 1; i++) {
				this.OctPow[i] =this. OctPow[i - 1] * 8;
				this.OctPowSevenDevided[i] = (this.OctPow[i] - 1) / 7;
			}
			this.maxCellNum = this.OctPowSevenDevided[MaxLevel-1];
	
			this.unit =this. width .Div ((1 <<this. maxLevel));

			console.log(this.unit);

			this.ary_cells = new Array<OctCell>(this.maxCellNum);
	
			this.CreateCell(0);

			this.vec_shp_collisionObjs=new Array<CollisionObject>();
			this.vec_index=new Array<ID>();
		}
		Release() {
			this.vec_shp_collisionObjs.length=0;
			
			this.vec_index.length=0;
			for (var i = 0; i < this.maxCellNum; i++) {
				if (this.ary_cells[i] )
					this.ary_cells[i].Release();
			}
			this.ary_cells.length=0;
		}
		RegistCollisionObj(arg_collisionObj:CollisionObject ):ID{

			var id =new ID( this.vec_shp_collisionObjs.length-1);

			this.vec_shp_collisionObjs.push(arg_collisionObj);
		
			this.vec_index.push(id);
			return id;
		}
		UnRegistCollisionObj(arg_index:ID){
			var index = arg_index.num;
			if (index >= this.vec_shp_collisionObjs.length) {
				return;
			}
			
			this.vec_shp_collisionObjs[index].Remove();
			this.vec_shp_collisionObjs.splice(index,1);
			this.vec_index.splice(index,1);
		
			
			
		
			for (var i=index-1 ;i<this.vec_index.length;i++) {
				this.vec_index[i].num--;
			}
		}
		Initialize(){

		}
		
		Update(){

			this.RegistOctree();
			
		}
		RegistOctree() {
			for (var itr = 0; itr <this.vec_shp_collisionObjs.length; itr++) {
				var minPoint=new Vector3(0,0,0), maxPoint=new Vector3(0,0,0);
				this.vec_shp_collisionObjs[itr].collisionPrimitive.GetMaxPointAndMinPoint(maxPoint, minPoint);
				var cellNum = this.GetMortonSpace(minPoint, maxPoint);

				if (cellNum > this.maxCellNum) {
					continue;
				}
				if (!this.ary_cells[cellNum]) {
					this.CreateCell(cellNum);
				}
				this.ary_cells[cellNum].RegistObject(this.vec_shp_collisionObjs[itr]);
			}
		}
		
		Get3DMortonNumber(  x:number, y:number,z:number):number
		{
			return OctreeHelper.BitSeparate(x) | OctreeHelper.BitSeparate(y) << 1 | OctreeHelper.BitSeparate(z) << 2;
		}
		Get3DMortonNumber_Vec3(arg_position:Vector3):number
		{
			return this.Get3DMortonNumber(
				((arg_position.x -this. rangeMin.x) / this.unit.x),
				((arg_position.y - this.rangeMin.y) / this.unit.y),
				((arg_position.z - this.rangeMin.z) /this. unit.z));
		}
		GetMortonSpace(arg_minPos:Vector3,arg_maxPos:Vector3):number {
			var maxSpace = this.Get3DMortonNumber_Vec3(arg_maxPos );
			var levelCheckFlag = this.Get3DMortonNumber_Vec3(arg_minPos) ^maxSpace;
			var level = OctreeHelper.GetLevel(levelCheckFlag,this.maxLevel);
			var num= (maxSpace >> ((level)*3 ));
			
			num += this.OctPowSevenDevided[this.maxLevel - level];
			return num;
		}
		CreateCollisionObjectList( arg_cellNum:number,  arg_output:Array<CollisionObject>,  arg_stack:Array<CollisionObject>) {
			
			var objItr= this.ary_cells[arg_cellNum].GetHead();
			//var i=0;
			while (objItr!=null)
			{
				var rObjItr =objItr.shp_next;
				while (rObjItr!=null) {
					// 衝突リスト作成
					arg_output.push( objItr);
					arg_output.push(rObjItr);
					rObjItr = rObjItr.shp_next;
					}
				// ② 衝突スタックとの衝突リスト作成
				for (var itr = 0; itr <arg_stack.length; itr++) {
					arg_output.push(objItr);
					arg_output.push(arg_stack[ itr]);
				}
				objItr = objItr.shp_next;
				
			}
			//console.log(i);

			var ChildFlag = false;
			// ③ 子空間
			var ObjNum = 0;
			var i:number, nextCellNum:number;
			for (i = 0; i < 8; i++) {
				nextCellNum = arg_cellNum * 8 + 1 + i;
				if (nextCellNum < this.maxCellNum &&this. ary_cells[arg_cellNum * 8 + 1 + i]) {
					if (!ChildFlag) {
						objItr =this. ary_cells[arg_cellNum].GetHead();
						while (objItr) {
							arg_stack.push(objItr);
							ObjNum++;
							objItr = objItr.shp_next;
						}
					}
					ChildFlag = true;
					this.CreateCollisionObjectList(arg_cellNum * 8 + 1 + i, arg_output, arg_stack);	
				}
			}

			// ⑤ スタックからオブジェクトを外す
			if (ChildFlag) {
				for (i = 0; i < ObjNum; i++)
					arg_stack.pop();
			}

		}
		CreateCell(arg_cellNum:number) {
			while (!this.ary_cells[arg_cellNum])
			{
				// 指定の要素番号に空間を新規作成
				this.ary_cells[arg_cellNum]= new OctCell();
				// 親空間にジャンプ
				arg_cellNum = (arg_cellNum - 1) >> 3;
				if (arg_cellNum >=this.maxCellNum) break;
			}

		}
	};
