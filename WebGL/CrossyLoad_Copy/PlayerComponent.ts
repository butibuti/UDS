import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import GameObjectIDManager from "../Parts/GameObjectIDManager";
import ISound from "../Resource/ISound";
import Input from "../Tool/Input";
import MathHelper from "../Tool/MathHelper";
import Transform from "../Transform";
import Component from "../Component/Component";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import TransformAnimation from "../Component/TransformAnimation";
import PoppingAnimation from "../Component/PoppingAnimation";
import Stage from "./Stage";
import Sensor from "./Sensor";

const soundDelay:number=5;

export default class PlayerComponent extends Component{

    startY: number;
    movePase:number;
    isPush:boolean;
    soundframe:number;
    upSe:ISound;
    deadSe:ISound;

    direction:number=1;
    isMove=false;
    keyboardEvent:KeyboardEvent=null;

    poppingComponent:PoppingAnimation;
    modelTransform:Transform;

    scaleComponent:TransformAnimation;
    minimumTransform:Transform;
    maximumTransform:Transform;

    ary_targets:Array<Transform>;

    stage:Stage;

    ary_sensor:Array<Sensor>;

    constructor(arg_movePase:number,arg_stage:Stage){
        super();
        this.movePase=arg_movePase;
        this.isPush=false;
        this.soundframe=0;
        this.stage=arg_stage;
        this.ary_sensor=new Array();
    }

    OnSet(){

        this.startY=this.gameObject.transform.Position.y;
        

        this.deadSe=this.gameObject.Manager.Scene.GetSceneManager().GetResourceContainer().GetSound("kill");
        this.upSe=this.gameObject.Manager.Scene.GetSceneManager().GetResourceContainer().GetSound("up");
        
        this.poppingComponent=new PoppingAnimation(this, this.movePase,false);

        this.modelTransform=new Transform();
        this.modelTransform.BaseTransform=this.gameObject.transform;
        this.gameObject.SetComponent(this.poppingComponent);
        this.gameObject.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false,null,this.modelTransform)) as ModelDrawComponent;
        this.minimumTransform=new Transform(new Vector3(0,0.1,0),new Vector3(0,0,0),new Vector3(1.2,0.8,1.2));
        this.maximumTransform=new Transform(new Vector3(0,-0.1,0),new Vector3(0,0,0),new Vector3(1.0,1.0,1.0));
        this.scaleComponent=new TransformAnimation(30,true,this.minimumTransform,this.modelTransform);
        this.gameObject.SetComponent(this.scaleComponent);
    
        this.ary_targets=new Array(4);

        this.ary_targets[0]=new Transform(this.gameObject.transform.Position.Add_b( new Vector3(0,0,-1)));
        this.ary_targets[1]=new Transform(this.gameObject.transform.Position.Add_b( new Vector3(0,0,1)),new Vector3(0,180,0));
        this.ary_targets[2]=new Transform(this.gameObject.transform.Position.Add_b( new Vector3(1,0,0)),new Vector3(0,-90,0));
        this.ary_targets[3]=new Transform(this.gameObject.transform.Position.Add_b( new Vector3(-1,0,0)),new Vector3(0,90,0));
        
        this.ary_sensor[0]=new Sensor(this.gameObject,new Vector3(0,0,-1));
        this.ary_sensor[1]=new Sensor(this.gameObject,new Vector3(0,0,1));
        this.ary_sensor[2]=new Sensor(this.gameObject,new Vector3(1,0,0));
        this.ary_sensor[3]=new Sensor(this.gameObject,new Vector3(-1,0,0));

        this.ary_sensor.forEach(sensor=>{var obj= this.gameObject.Manager.AddGameObject("sensor",new Transform(),null,[sensor]); obj.transform.BaseTransform=this.stage.gameObject.transform});
        this.gameObject.ComplexHit=true;
    }
    GetComponentName():string{
        return "PlayerComponent";
    }
    Update(){

        
        if(this.isPush){
            
        }

        if(this.keyboardEvent&& !this.poppingComponent.IsMove()){
            var target:Transform;

            switch(this.keyboardEvent.key){
                case "w":
                    target =this.ary_targets[0];
                    if(!this.ary_sensor[0].CanMove()){
                        target.Position=this.gameObject.transform.Position;
                    }else
                    target.Position=this.ary_sensor[0].GetPosition();
                    
                    this.stage.GoFront(this.gameObject.transform.LocalPosition.z);
                break;
                case "s":
                    target =this.ary_targets[1];
                    if(!this.ary_sensor[1].CanMove()){
                        target.Position=this.gameObject.transform.Position;
                    }else
                    target.Position=this.ary_sensor[1].GetPosition();
                    
                break;
                case "d":
                    target =this.ary_targets[2];
                    if(!this.ary_sensor[2].CanMove()){
                        target.Position=this.gameObject.transform.Position;
                    }else
                    target.Position=this.ary_sensor[2].GetPosition();
                    
                break;
                case "a":
                    target =this.ary_targets[3];
                    if(!this.ary_sensor[3].CanMove()){
                        target.Position=this.gameObject.transform.Position;
                    }else
                    target.Position=this.ary_sensor[3].GetPosition();
                    
                break;
            }
            if(( this.keyboardEvent.key=="w"||this.keyboardEvent.key=="s"||this.keyboardEvent.key=="a"||this.keyboardEvent.key=="d")){
                
                this.poppingComponent.SetTarget(this.movePase,target);
            }
            
        this.upSe.Play_new();
            this.keyboardEvent=null;
        }
        

        this.soundframe--;
        if(this.soundframe<=0){
            this.soundframe=soundDelay;
        }

    }

    OnMoveEnd(){
        this.ary_sensor.forEach(sensor=>sensor.SetPosition(this.gameObject.transform.LocalPosition));
    }

    OnKeyDown(e:KeyboardEvent){

        if(e.key=="q"){
            return;
        }
        if(this.keyboardEvent!=null){
            return;
        }
        if(this.isPush){
            return;
        }
        if(this.scaleComponent){
            this.scaleComponent.Remove();
        }

        this.scaleComponent=new TransformAnimation(5,false,this.minimumTransform,this.modelTransform);

        this.gameObject.SetComponent(this.scaleComponent);
        this.isPush=true;
    }
    OnKeyUp(e:KeyboardEvent){

        if(e.key=="q"){
            this.ToStart();
        }
        if(this.keyboardEvent!=null){
            return;
        }

        if(this.scaleComponent){
            this.scaleComponent.Remove();
        }

        this.scaleComponent=new TransformAnimation(10,false,this.maximumTransform,this.modelTransform);

        this.gameObject.SetComponent(this.scaleComponent);
        this.keyboardEvent=e;
        this.isPush=false;
    }

    ToStart(){

        Input.AddKeyUpEvent(this,"playerEvent",false);
        Input.AddKeyDownEvent(this,"playerEvent",false);
        this.isPush=false;
    }

    Reset(){
        
        Input.RemoveKeyUpEvent("playerEvent");
        Input.RemoveKeyDownEvent("playerEvent");
        
        this.gameObject.transform.Position=new Vector3(0,-0.5,0);
        this.OnMoveEnd();
        var target =this.ary_targets[0];
        target.Position=new Vector3(0,-0.5,0);
        this.poppingComponent.SetTarget(this.movePase,target);
    }
    
    DeadAnimation(){

    }

    OnCollisionEnter(arg_gameObject:GameObject){
        
        if(arg_gameObject.objectID==GameObjectIDManager.GetID("damageObstacle")){
            this.DeadAnimation();
            this.stage.Failed();
            return;
        }
        
    }
}