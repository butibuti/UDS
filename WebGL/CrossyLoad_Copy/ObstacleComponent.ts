import ID from "../Parts/ID";
import CollisionObject from "../Parts/Collision/CollisionObject";
import CollisionObjectCreater from "../Tool/CollisionObjectCreater";
import Vector3 from "../Math/Vector3";
import Component from "../Component/Component";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import CollisionComponent from "../Component/CollisionComponent";
import GameObjectIDManager from "../Parts/GameObjectIDManager";
import GameObject from "../GameObject/GameObject";
import Stage from "./Stage";
import Transform from "../Transform";
import RandomHelper from "../Tool/RandomHelper";

enum PrimitiveType{
    sphere=0,box_AABB=1,box_OBB=2,point=3,
}


export default class ObstacleComponent extends Component{
    type:PrimitiveType;
    size:Vector3;
    stage:Stage;
    constructor(arg_type:PrimitiveType,arg_size:Vector3,arg_stage:Stage){
        super();
        this.type=arg_type;
        this.size=arg_size;
        this.stage=arg_stage;
    }
    OnSet(){
        this.gameObject.objectID=GameObjectIDManager.GetID("obstacle");
        switch(this.type){
            case PrimitiveType.sphere:
                this.gameObject.SetComponent(new CollisionComponent(PrimitiveType.sphere,this.size,0));
               break;
            case PrimitiveType.point:
                
            break;
            case PrimitiveType.box_AABB:
                
                this.gameObject.SetComponent(new CollisionComponent(PrimitiveType.box_AABB,this.size,0));
              break;
            case PrimitiveType.box_OBB:this.gameObject.SetComponent(new CollisionComponent(PrimitiveType.box_OBB,this.size,0));
            break;
        }
        
        
    }
    OnRemove(){
        
    }

    Update(){
        
    }
    OnCollision(arg_gameObject:GameObject){
        if(arg_gameObject.objectID!=GameObjectIDManager.GetID("player")){
            return;
        }
    }
}