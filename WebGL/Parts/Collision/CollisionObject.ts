import GameObject from "../../GameObject/GameObject";
import OctCell from "./OctCell";
import CollisionPrimitive from "./Primitive/CollisionPrimitive";

export default class CollisionObject{
    object:GameObject;
    collisionPrimitive:CollisionPrimitive;

    p_cell:OctCell=null;			
            			
    shp_next:CollisionObject;
    shp_bef:CollisionObject;

     Remove():boolean{
        if (this.p_cell==null)
        return false;


    if (this.shp_next)
    {
        this.shp_next.shp_bef = this.shp_bef;
    }
    if (this.shp_bef)
    {
        this.shp_bef.shp_next = this.shp_next;
    }
    this.p_cell.OnRemove(this);
    this.shp_next = null;
    this.shp_bef = null;
    this.p_cell = null;
    return true;
    }

    RegistCell(arg_pCell:OctCell)
    {
        this.p_cell = arg_pCell;
    }

    GetBefObj():CollisionObject {
        return this.shp_bef;
    }
    GetNextObj():CollisionObject {
        return this.shp_next;
    }

    constructor (arg_obj:GameObject,arg_prim:CollisionPrimitive){
        this.object=arg_obj;
        this.collisionPrimitive=arg_prim;
    }
    Update(){
        this.collisionPrimitive.Update();
    }

    HitCheck(arg_collisionObject:CollisionObject){
        if(arg_collisionObject.collisionPrimitive.IsHit(this.collisionPrimitive)){
            this.object.Hit(arg_collisionObject.object);
            arg_collisionObject.object.Hit(this.object);
        }
    }


}