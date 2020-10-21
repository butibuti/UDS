import { transform } from "typescript";
import CollisionComponent from "../Component/CollisionComponent";
import Component from "../Component/Component";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import GameObjectIDManager from "../Parts/GameObjectIDManager";

enum PrimitiveType{
    sphere=0,box_AABB=1,box_OBB=2,point=3,
  }

export default class Sensor extends Component{
    parentObject:GameObject;
    offSet:Vector3;
    hitNum:number=0;
    constructor(arg_parent:GameObject,arg_offSet:Vector3){
        super();
        this.parentObject=arg_parent;
        this.offSet=arg_offSet;
    }
    OnSet(){
        this.gameObject.transform.Position=this.parentObject.transform.Position.Add_b(this.offSet);
        this.gameObject.transform.Scale=new Vector3(0.5,0.5,0.5);
        //this.gameObject.SetComponent(new ModelDrawComponent(true, "nonTexcube","red","pointLight",1,false));
        this.gameObject.ComplexHit=true;
        this.gameObject.SetComponent(new CollisionComponent(PrimitiveType.box_AABB,new Vector3(1.0,1.0,1.0),0));
              
    }
    SetPosition(arg_position:Vector3){
        
        this.gameObject.transform.Position=arg_position.Add(this.offSet);
    }
    GetPosition():Vector3{
        
        return this.gameObject.transform.LocalPosition;
        
    }
    CanMove():boolean{
        return !this.hitNum;
    }
    OnCollisionEnter(arg_gameObject:GameObject){
        
        if(arg_gameObject.objectID!=GameObjectIDManager.GetID("obstacle")){
            return;
        }
        this.hitNum+=1;
    }
    OnCollisionRelease(arg_gameObject:GameObject){
        
        if(arg_gameObject.objectID!=GameObjectIDManager.GetID("obstacle")){
            return;
        }
        this.hitNum-=1;
    }
}