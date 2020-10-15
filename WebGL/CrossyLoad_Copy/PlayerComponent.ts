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
    e:KeyboardEvent=null;

    poppingComponent:PoppingAnimation;
    modelTransform:Transform;

    scaleComponent:TransformAnimation;
    minimumTransform:Transform;
    maximumTransform:Transform;

    constructor(arg_movePase:number){
        super();
        this.movePase=arg_movePase;
        this.isPush=false;
        this.soundframe=0;

    }

    OnSet(){

        this.startY=this.gameObject.transform.Position.y;


        this.deadSe=this.gameObject.Manager.Scene.GetSceneManager().GetResourceContainer().GetSound("kill");
        this.upSe=this.gameObject.Manager.Scene.GetSceneManager().GetResourceContainer().GetSound("up");
        
        this.poppingComponent=new PoppingAnimation(this.movePase,false);

        this.modelTransform=new Transform();
        this.modelTransform.BaseTransform=this.gameObject.transform;
        this.gameObject.SetComponent(this.poppingComponent);
        this.gameObject.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false,null,this.modelTransform)) as ModelDrawComponent;
        this.minimumTransform=new Transform(new Vector3(0,0.1,0),new Vector3(0,0,0),new Vector3(1.2,0.8,1.2));
        this.maximumTransform=new Transform(new Vector3(0,-0.1,0),new Vector3(0,0,0),new Vector3(1.0,1.0,1.0));
        this.scaleComponent=new TransformAnimation(30,true,this.minimumTransform,this.modelTransform);
        this.gameObject.SetComponent(this.scaleComponent);
    
    }
    GetComponentName():string{
        return "PlayerComponent";
    }
    Update(){

        
        if(this.isPush){
            
        }

        if(this.e&& !this.poppingComponent.IsMove()){
            var target:Transform;
            switch(this.e.key){
                case "w":
                    target=new Transform(this.gameObject.transform.Position.Add_b( new Vector3(0,0,-1)));
                    
                break;
                case "s":
                    target =new Transform(this.gameObject.transform.Position.Add_b( new Vector3(0,0,1)),new Vector3(0,180,0));
                    
                break;
                case "d":
                    target =new Transform(this.gameObject.transform.Position.Add_b( new Vector3(1,0,0)),new Vector3(0,-90,0));
                    
                break;
                case "a":
                    target =new Transform(this.gameObject.transform.Position.Add_b( new Vector3(-1,0,0)),new Vector3(0,90,0));
                    
                break;
            }
            if(this.e.key=="w"||this.e.key=="s"||this.e.key=="a"||this.e.key=="d"){
                
                this.poppingComponent.SetTarget(this.movePase,target);
            }
            
        this.upSe.Play_new();
            this.e=null;
        }
        

        this.soundframe--;
        if(this.soundframe<=0){
            this.soundframe=soundDelay;
        }

    }
    OnKeyDown(e:KeyboardEvent){

        if(e.key=="q"){
            return;
        }
        if(this.e!=null){
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
        if(this.e!=null){
            return;
        }

        if(this.scaleComponent){
            this.scaleComponent.Remove();
        }

        this.scaleComponent=new TransformAnimation(10,false,this.maximumTransform,this.modelTransform);

        this.gameObject.SetComponent(this.scaleComponent);
        this.e=e;
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
    }
    
}