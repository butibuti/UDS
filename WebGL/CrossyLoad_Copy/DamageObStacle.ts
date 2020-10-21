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

enum PrimitiveType{
    sphere=0,box_AABB=1,box_OBB=2,point=3,
}


export default class DamageObstacleComponent extends Component{
    stage:Stage;
    size:Vector3;
    constructor(arg_stage:Stage,arg_size:Vector3){
        super();
        
        this.stage=arg_stage;
        this.size=arg_size;
    }
    OnSet(){
        this.gameObject.objectID=GameObjectIDManager.GetID("damageObstacle");
        this.gameObject.SetComponent(new CollisionComponent(PrimitiveType.box_AABB,this.size,0));
        
        
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