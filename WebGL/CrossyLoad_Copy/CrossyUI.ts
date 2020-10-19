import Component from "../Component/Component";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import TextDrawComponent from "../Component/TextDrawComponent";
import TransformAnimation from "../Component/TransformAnimation";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import Vector4 from "../Math/Vector4";
import Easing from "../Tool/Easing";
import Transform from "../Transform";

export default class CrossyUI extends Component{
    coinText:TextDrawComponent;
    arrivalText:TextDrawComponent;
    retry:TextDrawComponent;
    logo:ModelDrawComponent;

    retryAnim:TransformAnimation;

    retryTransform_Show:Transform;
    retryTransform_Hide:Transform;

    logoTransform_Show:Transform;
    logoTransform_Hide:Transform;

    constructor(){
        super();
    }

    OnSet(){
        var coinTrans=new Transform(new Vector3(400,-400,-1),new Vector3(0,0,0),new Vector3(50,50,50));
        this.coinText=new TextDrawComponent("0","font","fontShader",new Vector4(0.9,0.9,0.25,1),2,false,coinTrans);
        var arrivalTrans=new Transform(new Vector3(-400,-400,-1),new Vector3(0,0,0),new Vector3(50,50,50));
        this.arrivalText=new TextDrawComponent("0","font","fontShader",new Vector4(0.1,0.1,0.1,1),2,false,arrivalTrans);
        this.gameObject.SetComponent(this.coinText);

        this.gameObject.SetComponent(this.arrivalText);


        var retryTrans=new Transform(new Vector3(0,300,-1),new Vector3(0,0,0),new Vector3(40,40,40));

        this.retry=new TextDrawComponent("Press any Key","font","fontShader",new Vector4(0.1,0.1,0.1,1),2,false,retryTrans);
        
        this.retryTransform_Hide=new Transform(new Vector3( 0,300,-1),new Vector3(0,0,0),new Vector3(40,40,40));
        this.retryTransform_Show=new Transform(new Vector3( 0,200,-1),new Vector3(0,0,0),new Vector3(40,40,40));

        this.retryAnim=new TransformAnimation(40,false,this.retryTransform_Hide ,retryTrans,Easing.EaseInOutQuint,true);

        this.gameObject.SetComponent(this.retry); 
        this.gameObject.SetComponent(this.retryAnim);
        this.retry.UnRegistDraw();

        this.logo=new ModelDrawComponent(false, "plane","caloryMaterial","texShader",2,false,null,new Transform(new Vector3(-1110,0,-0.5),new Vector3(0,0,180),new Vector3(600,600,600)));

        this.gameObject.SetComponent(this.logo);

        this.logoTransform_Show=new Transform(new Vector3(0,0,-0.5),new Vector3(0,0,180),new Vector3(600,600,600));
        this.logoTransform_Hide=new Transform(new Vector3(1100,0,-0.5),new Vector3(0,0,180),new Vector3(600,600,600));



    }
    SetCoinNum(arg_coin:number){
        this.coinText.SetText(arg_coin+"");
    }
    SetArrival(arg_arrival:number){
        this.arrivalText.SetText(arg_arrival+"");
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

        var logoAnim =new TransformAnimation(30,false,this.logoTransform_Show,this.logo.transform,Easing.EaseInOutCirc);
        this.gameObject.SetComponent(logoAnim);
    }
    HideOut(){

        var logoAnim =new TransformAnimation(30,false,this.logoTransform_Hide,this.logo.transform,Easing.EaseInOutCirc);
        this.gameObject.SetComponent(logoAnim);
    }
    Reset(){
        this.logo.transform.Position=new Vector3(-1110,0,-0.5);
    }
}