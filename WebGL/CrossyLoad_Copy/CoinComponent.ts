import CollisionComponent from "../Component/CollisionComponent";
import Component from "../Component/Component";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import Vector4 from "../Math/Vector4";
import GameObjectIDManager from "../Parts/GameObjectIDManager";
import Transform from "../Transform";
import Stage from "./Stage";

enum PrimitiveType{
    sphere=0,box_AABB=1,box_OBB=2,point=3,
}
export default class CoinComponent extends Component{

    drawComponent:ModelDrawComponent;
    stage:Stage;
    isGet:boolean=false;
    constructor(arg_stage:Stage){
        super();
        this.stage=arg_stage;
    }
    OnSet(){
        var modelTransform=new Transform(new Vector3(0,0.25,0),new Vector3(180,180,0),new Vector3(0.0025,0.0025,0.0025));
        modelTransform.BaseTransform=this.gameObject.transform;
        this.drawComponent=new ModelDrawComponent(true, "sphere","yellow","onlyMaterial",1,false,"coin",modelTransform);
        this.gameObject.SetComponent(this.drawComponent);
        this.gameObject.SetComponent(new CollisionComponent(PrimitiveType.sphere,new Vector3(0.3,0.3,0.3),0));
    }
    Update(){

        

    }
    OnCollision(arg_gameObject:GameObject){
        if(arg_gameObject.objectID!=GameObjectIDManager.GetID("player")||this.isGet){
            return;
        }
        this.stage.GetCoin();
        this.gameObject.Dead();
        this.isGet=true;
    }

    ReSet(){
        this.drawComponent.RegistDraw();
        this.isGet=false;
    }
}