import CollisionComponent from "../Component/CollisionComponent";
import Component from "../Component/Component";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import GameObjectIDManager from "../Parts/GameObjectIDManager";
import Stage from "./Stage";

enum PrimitiveType{
    sphere=0,box_AABB=1,box_OBB=2,point=3,
}
export default class IkaRing extends Component{

    drawComponent:ModelDrawComponent;
    stage:Stage;
    constructor(arg_stage:Stage){
        super();
        this.stage=arg_stage;
    }
    OnSet(){
        this.drawComponent=new ModelDrawComponent(true, "sphere","white","pointLight",1,false);
        this.gameObject.SetComponent(this.drawComponent);
        this.gameObject.SetComponent(new CollisionComponent(PrimitiveType.sphere,new Vector3(0.5,0.5,0.5),0));
    }
    Update(){

        
        this.gameObject.transform.RollY_Local_Degrees(2);

    }
    Hit(arg_gameObject:GameObject){
        if(arg_gameObject.objectID!=GameObjectIDManager.GetID("player")){
            return;
        }
        this.drawComponent.UnRegistDraw();
        this.stage.GetRing();
    }

    ReSet(){
        this.drawComponent.RegistDraw();
    }
}