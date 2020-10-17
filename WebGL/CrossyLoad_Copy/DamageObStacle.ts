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

enum PrimitiveType{
    sphere=0,box_AABB=1,box_OBB=2,point=3,
}


export default class DamageObstacleComponent extends Component{
    materialName:string="green";
    stage:Stage;
    constructor(arg_stage:Stage, arg_materialName?:string){
        super();
        
        this.materialName=arg_materialName;
        this.stage=arg_stage;
    }
    OnSet(){
        this.gameObject.objectID=GameObjectIDManager.GetID("damageObstacle");
        
        this.gameObject.SetComponent(new ModelDrawComponent(true, "nonTexcube","red","pointLight",1,false));
        this.gameObject.SetComponent(new CollisionComponent(PrimitiveType.box_AABB,new Vector3(1,1,1),0));
        
        
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