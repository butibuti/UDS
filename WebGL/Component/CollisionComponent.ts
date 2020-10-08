import Component from "./Component";

import ID from "../Parts/ID";
import CollisionObject from "../Parts/Collision/CollisionObject";
import CollisionObjectCreater from "../Tool/CollisionObjectCreater";
import Vector3 from "../Math/Vector3";

enum PrimitiveType{
    sphere=0,box_AABB=1,box_OBB=2,point=3,
}


export default class CollisionComponent extends Component{
    type:PrimitiveType;
    collision:CollisionObject;
    size:Vector3;
    id:ID;
    layer:number=0;
    constructor(arg_type:PrimitiveType,arg_size:Vector3,layer?:number){
        super();
        this.type=arg_type;
        this.size=arg_size;
        if(layer){
            this.layer=layer;
        }
    }
    OnSet(){
        switch(this.type){
            case PrimitiveType.sphere:
                this.collision=CollisionObjectCreater.CreateSphere(this.size.x,this.gameObject);
            break;
            case PrimitiveType.point:
                this.collision=CollisionObjectCreater.CreatePoint(this.gameObject);
            break;
            case PrimitiveType.box_AABB:
                this.collision=CollisionObjectCreater.CreateCube_AABB(this.size,this.gameObject);
            break;
            case PrimitiveType.box_OBB:
                this.collision=CollisionObjectCreater.CreateCube_OBB(this.size,this.gameObject);
            break;
        }
        this.id=this.gameObject.GetCollisionManager().Regist(this.collision,this.layer);
        
    }
    OnRemove(){
        this.gameObject.GetCollisionManager().UnRegist(this.id, this.layer);
    }

    Update(){
        
        this.collision.Update();
    }
}