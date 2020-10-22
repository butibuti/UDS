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
import Easing from "../Tool/Easing";


export default class PlayerComponent extends Component{

    startY: number;
    movePase:number;
    isPush:boolean;
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

    canControll: boolean=true;

    isInvisible=false;

    invisibleEffect:ModelDrawComponent;

    constructor(arg_movePase:number,arg_stage:Stage){
        super();
        this.movePase=arg_movePase;
        this.isPush=false;
        this.stage=arg_stage;
        this.ary_sensor=new Array();
    }

    OnSet(){

        this.startY=this.gameObject.transform.Position.y;
        

        this.deadSe=this.gameObject.Manager.Scene.GetSceneManager().GetResourceContainer().GetSound("kill");
        this.upSe=this.gameObject.Manager.Scene.GetSceneManager().GetResourceContainer().GetSound("up");
        
        this.poppingComponent=new PoppingAnimation(this, this.movePase,false);

        this.modelTransform=new Transform(new Vector3(0,0,0),new Vector3(0,0,0),new Vector3(0.2,0.2,0.15));
        this.modelTransform.BaseTransform=this.gameObject.transform;
        this.gameObject.SetComponent(this.poppingComponent);
        this.gameObject.SetComponent(new ModelDrawComponent(true, "cube","caloryMaterial","texShader_light",1,false,"maguro",this.modelTransform)) as ModelDrawComponent;
        
        var effectTransform=new Transform(new Vector3(0,0,0),new Vector3(0,0,0),new  Vector3(0,0,0));
        effectTransform.BaseTransform=this.gameObject.transform;
        this.invisibleEffect=new ModelDrawComponent(false,"effectSphere","yellow","rainbowAlpha",1,false,null,effectTransform);
        this.gameObject.SetComponent(this.invisibleEffect);
        this.invisibleEffect.UnRegistDraw();


        this.minimumTransform=new Transform(new Vector3(0,0.1,0),new Vector3(0,0,0),new Vector3(0.3,0.16,0.18));
        this.maximumTransform=new Transform(new Vector3(0,-0.1,0),new Vector3(0,0,0),new Vector3(0.2,0.2,0.15));
        
        this.scaleComponent=new TransformAnimation(30,true,this.minimumTransform,this.modelTransform,Easing.EaseInOutCirc);
        this.gameObject.SetComponent(this.scaleComponent);
    
        this.ary_targets=new Array(4);

        this.ary_targets[0]=new Transform(this.gameObject.transform.Position.Add_b( new Vector3(0,0,-1)));
        this.ary_targets[1]=new Transform(this.gameObject.transform.Position.Add_b( new Vector3(0,0,1)),new Vector3(0,180,0));
        this.ary_targets[2]=new Transform(this.gameObject.transform.Position.Add_b( new Vector3(1,0,0)),new Vector3(0,-90,0));
        this.ary_targets[3]=new Transform(this.gameObject.transform.Position.Add_b( new Vector3(-1,0,0)),new Vector3(0,90,0));
        
        this.ary_targets.forEach(target=>target.BaseTransform=this.stage.gameObject.transform);

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

        if(this.isInvisible){
            this.invisibleEffect.transform.RollX_Local_Degrees(2);
            this.invisibleEffect.transform.RollY_Local_Degrees(2);
        }
        if(!this.canControll){
            return;
        }
        if(this.isPush){
            
        }

        if(this.keyboardEvent&& !this.poppingComponent.IsMove()){
            var target:Transform;

            switch(this.keyboardEvent.key){
                case "w":
                    target =this.ary_targets[0];
                    if(!this.ary_sensor[0].CanMove()){
                        target.Position=this.gameObject.transform.LocalPosition;
                    }else
                    target.Position=this.ary_sensor[0].GetPosition();
                    
                    this.stage.GoFront(this.gameObject.transform.LocalPosition.z);
                    
                this.poppingComponent.SetTarget(this.movePase,target);
                break;
                case "s":
                    // if(this.gameObject.transform.Position.z>1){
                    //     break;
                    // }
                    target =this.ary_targets[1];
                    if(!this.ary_sensor[1].CanMove()){
                        target.Position=this.gameObject.transform.LocalPosition;
                    }else
                    target.Position=this.ary_sensor[1].GetPosition();
                    
                this.poppingComponent.SetTarget(this.movePase,target);
                break;
                case "a":
                    if(this.gameObject.transform.Position.x<=-4){
                        break;
                    }
                    target =this.ary_targets[3];
                    if(!this.ary_sensor[3].CanMove()){
                        target.Position=this.gameObject.transform.LocalPosition;
                    }else
                    target.Position=this.ary_sensor[3].GetPosition();
                    
                this.poppingComponent.SetTarget(this.movePase,target);
                break;
                case "d":
                    if(this.gameObject.transform.Position.x>=4){
                        break;
                    }
                    target =this.ary_targets[2];
                    if(!this.ary_sensor[2].CanMove()){
                        target.Position=this.gameObject.transform.LocalPosition;
                    }else
                    target.Position=this.ary_sensor[2].GetPosition();
                    
                this.poppingComponent.SetTarget(this.movePase,target);
                break;
            }
            
        this.upSe.Play_new();
            this.keyboardEvent=null;
        }
        

    }

    FeverStart(){
        this.isInvisible=true;

        this.gameObject.SetComponent(new TransformAnimation(40,false,new Transform(new Vector3(0,0,0),new Vector3(0,0,0),new Vector3(1,1,1)),this.invisibleEffect.transform));
        this.invisibleEffect.UnRegistDraw();
        this.invisibleEffect.RegistDraw();
        
    }

    FeverEnd(){

        this.isInvisible=false;
        this.gameObject.SetComponent(new TransformAnimation(30,false,new Transform(new Vector3(0,0,0),new Vector3(0,0,0),new Vector3(0,0,0)),this.invisibleEffect.transform));
        
    }

    get IsFever(){
        return this.isInvisible;
    }

    OnMoveEnd(){
        this.ary_sensor.forEach(sensor=>sensor.SetPosition(this.gameObject.transform.LocalPosition));
    }

    SetCanControll(arg_canControll:boolean){
        this.canControll=arg_canControll;
    }
    OnKeyDown(e:KeyboardEvent){

        if(!this.canControll){
            console.log("cantControll!");
            return;
        }
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

        if(!this.canControll){
            return;
        }
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
        
        this.gameObject.transform.Position=new Vector3(0,-0.5,1);
        this.gameObject.transform.BaseTransform=this.stage.gameObject.transform;
        this.OnMoveEnd();
        var target =this.ary_targets[0];
        target.Position=new Vector3(0,-0.5,1);
        target.BaseTransform=this.stage.gameObject.transform;
        this.modelTransform.Scale=new Vector3(0.2,0.2,0.15);

        this.poppingComponent.Start();
        this.poppingComponent.SetTarget(this.movePase,target);
        if(this.scaleComponent){
            this.scaleComponent.Remove();
        }
        this.scaleComponent=new TransformAnimation(30,true,this.minimumTransform,this.modelTransform,Easing.EaseInOutCirc);
        this.gameObject.SetComponent(this.scaleComponent);
    
        this.invisibleEffect.UnRegistDraw();
    }
    
    DeadAnimation_Press(arg_gameObject:GameObject){
        if(this.scaleComponent){
            this.scaleComponent.Remove();
        }
        var petanko=new Transform(new Vector3(0,0.2,0),new Vector3(0,0,0),new Vector3(0.4,0.05,0.22));
        this.scaleComponent=new TransformAnimation(10,false,petanko,this.modelTransform,Easing.EaseInOutCirc);

        this.gameObject.SetComponent(this.scaleComponent);
        this.poppingComponent.Stop();
    }
    DeadAnimation_Strike(arg_gameObject:GameObject){
        this.gameObject.transform.SetPositionX(this.gameObject.transform.Position.Sub(arg_gameObject.transform.Position).x);
        this.gameObject.transform.SetPositionY(this.gameObject.transform.LocalPosition.y);
        this.gameObject.transform.SetPositionZ(0.55);
        this.gameObject.transform.BaseTransform=arg_gameObject.transform;
        if(this.scaleComponent){
            this.scaleComponent.Remove();
        }
        var petanko=new Transform(new Vector3(0,0,0),new Vector3(0,0,0),new Vector3(0.22,0.22,0.05));
        this.scaleComponent=new TransformAnimation(10,false,petanko,this.modelTransform);

        this.gameObject.SetComponent(this.scaleComponent);
        this.poppingComponent.Stop();
    }

    OnCollisionEnter(arg_gameObject:GameObject){
        
        if(arg_gameObject.objectID==GameObjectIDManager.GetID("damageObstacle")&&!this.isInvisible){
            if(arg_gameObject.transform.Position.z<this.gameObject.transform.Position.z){
                this.DeadAnimation_Press(arg_gameObject);
            }else{
                this.DeadAnimation_Press(arg_gameObject);
            }
            this.stage.Failed();
            return;
        }
        
    }
}