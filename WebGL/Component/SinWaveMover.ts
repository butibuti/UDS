import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import ISound from "../Resource/ISound";
import Input from "../Tool/Input";
import MathHelper from "../Tool/MathHelper";
import Transform from "../Transform";
import Component from "./Component";
import ModelDrawComponent from "./ModelDrawComponent";

const soundDelay:number=5;

export default class SinWaveMover extends Component{

    startY: number;
    t:number;
    waveScale:number;
    initWaveScale:number;
    movePase:number;
    isPush:boolean;
    soundframe:number;
    upSe:ISound;
    deadSe:ISound;

    direction:number=1;
    subLinePase=10;
    sublLineCount=30;

    ary_subLineTransforms:Array<Transform>;

    constructor(arg_waveScale:number,arg_movePase:number){
        super();
        this.waveScale=arg_waveScale;
        this.initWaveScale=arg_waveScale;
        this.t=0;
        this.movePase=arg_movePase;
        this.isPush=false;
        this.soundframe=0;

        this.ary_subLineTransforms=new Array(this.sublLineCount);
        MathHelper.InitSinRets();
    }

    OnSet(){

        this.startY=this.gameObject.transform.Position.y;

        Input.AddKeyUpEvent(this,"sinWaveEvent",false);
        Input.AddKeyDownEvent(this,"sinWaveEvent",false);

        this.deadSe=this.gameObject.Manager.Scene.GetSceneManager().GetResourceContainer().GetSound("kill");
        this.upSe=this.gameObject.Manager.Scene.GetSceneManager().GetResourceContainer().GetSound("up");
        
        for(var i=0;i<this.sublLineCount;i++){
         
            this.ary_subLineTransforms[i]=(this.gameObject.transform.Clone());

            this.ary_subLineTransforms[i].Scale=new Vector3(0.3,0.3,0.3);
            this.gameObject.SetComponent(new ModelDrawComponent(false,"plane","circleMaterial","texShader",1,true,null,this.ary_subLineTransforms[i]));
        }
    }

    Update(){

        
        if(this.isPush){
            this.waveScale+=0.1;
        }
        this.t+=this.movePase;
        this.t= this.t%360;

        this.gameObject.transform.TranslateX(this.movePase*0.05);



        var sinPos=-MathHelper.GetSinPos(this.t)*this.waveScale*this.direction+this.startY;
        
        this.gameObject.transform.SetPositionY(sinPos);
        var offX=this.gameObject.transform.Position.x;
        for(var i=0;i<this.sublLineCount;i++){
         
            this.ary_subLineTransforms[i].SetPosition.x=offX+this.movePase*0.05*this.subLinePase*i;
            this.ary_subLineTransforms[i].SetPosition.y=-MathHelper.GetSinPos(this.t+this.subLinePase*this.movePase*i)*this.waveScale*this.direction+this.startY;
        }

        this.soundframe--;
        if(this.soundframe<=0){
            //this.upSe.Play_new();
            this.soundframe=soundDelay;
        }

    }
    OnKeyDown(e:KeyboardEvent){

        if(e.key=="q"){
            return;
        }
        if(!this.isPush){

            this.startY=this.gameObject.transform.Position.y;
            if(this.t>=90&&this.t<270){

                console.log("up");
                this.direction=1;
            }else{
                console.log("down");
                this.direction=-1;
            }
            this.t=0;
            this.waveScale= this.initWaveScale;
        }
        this.isPush=true;
    }
    OnKeyUp(e:KeyboardEvent){

        if(e.key=="q"){
            this.ToStart();
        }
        this.isPush=false;
    }

    ToStart(){

        this.isPush=false;
        this.t=0;
        this.gameObject.transform.Position=new Vector3(-6,0,-1);
        this.startY=this.gameObject.transform.Position.y;
        this.deadSe.Play();
        return;
    }
    
    Hit(arg_gameObject:GameObject){
        this.ToStart();
    }
}