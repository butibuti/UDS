import ModelDrawComponent from "../Component/ModelDrawComponent";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import { PrimitiveType } from "../Parts/Collision/PrimitiveType";
import RandomHelper from "../Tool/RandomHelper";
import Transform from "../Transform";
import DamageObstacleComponent from "./DamageObStacle";
import ObstacleComponent from "./ObstacleComponent";
import RoundTrip from "./RoundTrip";
import Stage from "./Stage";
import StageParts from "./StageParts";

const ary_meshes=["sango"]

const ary_deco=["scallops","seaweed"]

const ary_positions_reset=[0,1,2,3,4,5,6,-6,-5,-4,-3,-2,-1,];

const ary_decoY=[0,-0.5];

var ary_positions=ary_positions_reset.slice();

export default class StageParts_Safe extends StageParts{
    size:Vector3;
    carCount:number;
    ary_obstacles:Array<GameObject>;
    stage:Stage;
    baseMaterialName:string;
    constructor(arg_stage:Stage,arg_materialName:string,isStart?:boolean){
        super();

        if(isStart){
            ary_positions[0]=1;
        }

        this.carCount=RandomHelper.GetRandomInt(2,3);
        
        this.ary_obstacles=new Array(this.carCount);
        this.stage=arg_stage;
        this.baseMaterialName=arg_materialName;
        
    }

    OnSet(){
        var modelTransform=new Transform(new Vector3(0,0.5,0),new Vector3(0,0,0),new Vector3(9,1,1));
        modelTransform.BaseTransform=this.gameObject.transform;
        this.gameObject.SetComponent(new ModelDrawComponent(false, "cube_position",this.baseMaterialName,"ambient",1,false,null,modelTransform));

        for(var i=0;i<this.carCount;i++){
            var position=RandomHelper.GetRandomInt(0,12-i);
            var obstacleTrans= new Transform(new Vector3(ary_positions[position],-0.5,0));
            ary_positions.splice(position,1);
            obstacleTrans.BaseTransform=this.gameObject.transform;

            var modelTransform=new Transform(new Vector3(0,0.1,0),new Vector3(180,90*RandomHelper.GetRandomInt(0,3),0),new Vector3(0.0025,0.0025,0.0025))
            modelTransform.BaseTransform=obstacleTrans;

            var drawComp= (new ModelDrawComponent(false, "nonTexcube","red","onlyMaterial",1,false,ary_meshes[0],modelTransform));
            
            var obstacle=new ObstacleComponent(PrimitiveType.box_AABB,new Vector3(1,1,1), this.stage);

            var obs=this.gameObject.Manager.AddGameObject("obstacle",obstacleTrans,"obstacle",[obstacle,drawComp]);

            this.ary_obstacles.push(obs);
        }
        
        var decoCount=RandomHelper.GetRandomInt(1,4);
        for(var i=0;i<decoCount;i++){
            var position=RandomHelper.GetRandomInt(0,12-(i+this.carCount));
            var decoNum=RandomHelper.GetRandomInt(0,1);
            var obstacleTrans= new Transform(new Vector3(ary_positions[position],ary_decoY[decoNum],0));
            ary_positions.splice(position,1);
            obstacleTrans.BaseTransform=this.gameObject.transform;

            var modelTransform=new Transform(new Vector3(0,0,0),new Vector3(0,90*RandomHelper.GetRandomInt(0,3),0),new Vector3(0.0025,0.0025,0.0025))
            modelTransform.BaseTransform=obstacleTrans;

            var drawComp= (new ModelDrawComponent(false, "nonTexcube","red","onlyMaterial",1,false,ary_deco[decoNum],modelTransform));
            
            this.gameObject.SetComponent(drawComp);
        }

        ary_positions=ary_positions_reset.slice();
    }
    Destroy(){
        this.stage=null;
        this.gameObject. Dead();
        this.ary_obstacles.forEach(obstacle=>{obstacle.Dead()});
    }


}