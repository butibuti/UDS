import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import ISound from "../Resource/ISound";
import Input from "../Tool/Input";
import MathHelper from "../Tool/MathHelper";
import Component from "./Component";

export default class SinWaveMover extends Component{

    startY: number;
    pushT:number;
    waveScale:number;
    movePase:number;
    isPush:boolean;
    velocity:Vector3;
    speed:number;

    upSe:ISound;
    deadSe:ISound;
    constructor(arg_waveScale:number,arg_movePase:number){
        super();
        this.waveScale=arg_waveScale;
        this.pushT=0;
        this.movePase=arg_movePase;
        this.isPush=false;
        this.speed=0.1;
    }

    OnSet(){

        this.startY=this.gameObject.transform.Position.y;

        Input.AddKeyUpEvent(this,"sinWaveEvent",false);
        Input.AddKeyDownEvent(this,"sinWaveEvent",false);
        this.velocity=new Vector3(0,0,0);

        this.deadSe=this.gameObject.Manager.Scene.GetSceneManager().GetResourceContainer().GetSound("kill");
        this.upSe=this.gameObject.Manager.Scene.GetSceneManager().GetResourceContainer().GetSound("up");
    }

    Update(){

        
        if(this.isPush){
            this.upSe.Play();
            this.pushT+=this.movePase;
            this.gameObject.transform.TranslateX(this.movePase*0.05);
            var sinPos=-Math.sin( MathHelper.ToRadian(this.pushT))*this.waveScale+this.startY;
            //console.log(sinPos+this.startY);
            this.gameObject.transform.SetPositionY(sinPos);
        }else{
            this.gameObject.transform.SetPosition.Add_b(this.velocity.Multiply(this.speed));
            //this.velocity.x=this.velocity.x*0.99;
            //this.velocity.y=this.velocity.y+0.0005;
            this.speed*=0.95;
            //console.log(this.velocity.Multiply(this.speed));

        }
        
        if(this.gameObject.transform.Position.y<=-20){
            this.ToStart();
        }else if(this.gameObject.transform.Position.y>4.5){
            this.gameObject.transform.SetPositionY(4.5);
        }
    }
    OnKeyDown(e:KeyboardEvent){

        if(e.key=="q"){
            return;
        }
        if(!this.isPush)
        this.startY=this.gameObject.transform.Position.y;
        this.isPush=true;
    }
    OnKeyUp(e:KeyboardEvent){

        if(e.key=="q"){
            this.ToStart();
        }
        this.velocity.x=this.movePase*0.05;
        this.pushT+=this.movePase;
        this.velocity.y=(-Math.sin( MathHelper.ToRadian(this.pushT))*this.waveScale+this.startY)-this.gameObject.transform.Position.y;
        this.velocity.Normalize_b();
        //this.velocity.y=this.velocity.y*10;
        this.speed=0.2;
        this.pushT=0;
        this.isPush=false;
        this.startY=this.gameObject.transform.Position.y;
    }

    ToStart(){

        this.isPush=false;
        this.pushT=0;
        this.gameObject.transform.Position=new Vector3(-6,0,-1);
        this.startY=this.gameObject.transform.Position.y;
        this.velocity.x=0;
        this.velocity.y=0;
        this.velocity.z=0;
        this.deadSe.Play();
        return;
    }
    
    Hit(arg_gameObject:GameObject){
        this.ToStart();
    }
}