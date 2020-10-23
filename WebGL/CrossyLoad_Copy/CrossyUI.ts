import Component from "../Component/Component";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import TextDrawComponent from "../Component/TextDrawComponent";
import TransformAnimation from "../Component/TransformAnimation";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import Vector4 from "../Math/Vector4";
import Easing from "../Tool/Easing";
import Transform from "../Transform";
import RoundTrip from "./RoundTrip";

const maskLinerFrame=30;
const maskLinerFrameMax=60;

export default class CrossyUI extends Component{
    comboBarDrawComponent:ModelDrawComponent;
    feverBarDrawComponent:ModelDrawComponent;
    activeBarDrawComponent:ModelDrawComponent;
    arrivalText:TextDrawComponent;
    retry:TextDrawComponent;
    logo:ModelDrawComponent;

    retryAnim:TransformAnimation;

    retryTransform_Show:Transform;
    retryTransform_Hide:Transform;

    logoTransform_Show:Transform;
    logoTransform_Hide:Transform;

    maskColor:Vector4;

    maskDir:number=-1.0;
    maskPer:number=0;
    isMask:boolean=false;
    mask: ModelDrawComponent;

    constructor(){
        super();
    }

    OnSet(){

        
        var comboBarBaseTransform=new Transform(new Vector3(400,0,-1),new Vector3(0,0,0),new Vector3(1,1.0,1));
        
        var comboBarTransform=new Transform(new Vector3(0,200,0),new Vector3(0,0,0),new Vector3(50,300,1));
        
        comboBarTransform.BaseTransform=comboBarBaseTransform;

        this.feverBarDrawComponent=new ModelDrawComponent(false,"uvNormalBar","yellow","rainbow",2,false,null,comboBarTransform);
        this.comboBarDrawComponent=new ModelDrawComponent(false,"uvNormalBar","yellow","onlyMaterial",2,false,null,comboBarTransform);
        
        this.gameObject.SetComponent(this.comboBarDrawComponent);
        this.gameObject.SetComponent(this.feverBarDrawComponent);
        
        this.activeBarDrawComponent=this.comboBarDrawComponent;
        var arrivalTrans=new Transform(new Vector3(-400,-400,-1),new Vector3(0,0,0),new Vector3(50,50,50));
        this.arrivalText=new TextDrawComponent("0","font","fontShader",new Vector4(0.9,0.9,0.25,1),2,false,arrivalTrans);
        

        this.gameObject.SetComponent(this.arrivalText);


        var retryTrans=new Transform(new Vector3(0,300,-1),new Vector3(0,0,0),new Vector3(40,40,40));

        this.retry=new TextDrawComponent("Press any Key","font","fontShader",new Vector4(0.1,0.1,0.1,1),2,false,retryTrans);
        
        this.retryTransform_Hide=new Transform(new Vector3( 0,300,-1),new Vector3(0,0,0),new Vector3(40,40,40));
        this.retryTransform_Show=new Transform(new Vector3( 0,200,-1),new Vector3(0,0,0),new Vector3(40,40,40));

        this.retryAnim=new TransformAnimation(40,false,this.retryTransform_Hide ,retryTrans,Easing.EaseInOutQuint,true);


        this.maskColor=new Vector4(0.5,0.5,1.0,0.0);
        
        this.mask=new ModelDrawComponent(false, "plane_position","red","simpleColor",2,false,null,new Transform(new Vector3(0,0,-0.8),new Vector3(0,0,0),new Vector3(600,600,600)));

        this.gameObject.Manager.AddGameObject("mask",new Transform(),"mask",[this.mask]);
        this.mask.UnRegistDraw();
        this.mask.model.AddExParam(4,4,this.maskColor);


        this.gameObject.SetComponent(this.retry); 
        this.gameObject.SetComponent(this.retryAnim);
        this.retry.UnRegistDraw();

        this.logo=new ModelDrawComponent(false, "plane","logoMaterial","texShader",2,false,null,new Transform(new Vector3(-1110,0,-0.5),new Vector3(0,0,180),new Vector3(600,600,600)));

        this.gameObject.SetComponent(this.logo);


        this.logoTransform_Show=new Transform(new Vector3(-20,-100,-0.5),new Vector3(0,0,180),new Vector3(600,600,600));
        this.logoTransform_Hide=new Transform(new Vector3(1100,-100,-0.5),new Vector3(0,0,180),new Vector3(600,600,600));



    }

    Update(){

        if(this.isMask){

            this.maskPer+=this.maskDir;

            if(this.maskPer>maskLinerFrameMax){
                this.maskPer=maskLinerFrameMax;
                this.maskDir=-1;
            }
            if(this.maskPer<0){
                this.maskPer=0;
                this.isMask=false;this.mask.UnRegistDraw();
            }

            this.maskColor.data[3]=this.maskPer/maskLinerFrame;
        }

        
    }

    SetCoinNum(arg_coin:number){
        //this.comboBarDrawComponent.SetText(arg_coin+"");
    }
    SetArrival(arg_arrival:number){
        this.arrivalText.SetText(arg_arrival+"");

    }

    SetComboMater(arg_persentage:number){
        
        this.activeBarDrawComponent.transform.SetScaleY(arg_persentage*300);
    }

    FeverStart(){
        this.activeBarDrawComponent=this.feverBarDrawComponent;
        this.comboBarDrawComponent.UnRegistDraw();
        this.feverBarDrawComponent.RegistDraw();
        
    }

    FeverEnd(){
        this.activeBarDrawComponent=this.comboBarDrawComponent;

        this.comboBarDrawComponent.RegistDraw();
        this.feverBarDrawComponent.UnRegistDraw();
    }

    ShowRetry(){
        this.retryAnim.ChangeTarget(this.retryTransform_Show);
        this.retry.RegistDraw();
    }
    HideRetry(){
        this.retryAnim.ChangeTarget(this.retryTransform_Hide);
        this.retry.UnRegistDraw();
    }
    HideIn(){

        var logoAnim =new TransformAnimation(30,false,this.logoTransform_Show,this.logo.transform);
        this.gameObject.SetComponent(logoAnim);
    }
    HideOut(){

        var logoAnim =new TransformAnimation(30,false,this.logoTransform_Hide,this.logo.transform);
        this.gameObject.SetComponent(logoAnim);
    }
    MaskIn(){
        this.maskDir=1.0;
        this.isMask=true;
        this.mask.RegistDraw();

        this.logo.UnRegistDraw();
        this.logo.RegistDraw();
    }
    Reset(){
        this.logo.transform.Position=new Vector3(-1110,-100,-0.5);
        this.maskColor.data[3]=0;
    }
}