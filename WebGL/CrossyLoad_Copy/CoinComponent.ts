import CollisionComponent from "../Component/CollisionComponent";
import Component from "../Component/Component";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import Vector4 from "../Math/Vector4";
import GameObjectIDManager from "../Parts/GameObjectIDManager";
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
        this.drawComponent=new ModelDrawComponent(true, "sphere","yellow","pointLight",1,false);
        this.gameObject.SetComponent(this.drawComponent);
        this.gameObject.SetComponent(new CollisionComponent(PrimitiveType.sphere,new Vector3(0.3,0.3,0.3),0));
    }
    Update(){

        
        this.gameObject.transform.RollY_Local_Degrees(2);

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