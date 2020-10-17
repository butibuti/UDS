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

    constructor(){
        super();
    }

    OnSet(){
        var coinTrans=new Transform(new Vector3(300,-200,-1),new Vector3(0,0,0),new Vector3(50,50,50));
        this.coinText=new TextDrawComponent("0","font","fontShader",new Vector4(0.9,0.9,0.25,1),2,false,coinTrans);
        var arrivalTrans=new Transform(new Vector3(-300,-200,-1),new Vector3(0,0,0),new Vector3(50,50,50));
        this.arrivalText=new TextDrawComponent("0","font","fontShader",new Vector4(0.1,0.1,0.1,1),2,false,arrivalTrans);
        this.gameObject.SetComponent(this.coinText);

        this.gameObject.SetComponent(this.arrivalText);


        var retryTrans=new Transform(new Vector3(0,300,-1),new Vector3(0,0,0),new Vector3(40,40,40));

        this.retry=new TextDrawComponent("Press any Key","font","fontShader",new Vector4(0.1,0.1,0.1,1),2,false,retryTrans);
        
        this.retryTransform_Hide=new Transform(new Vector3( 0,300,-1),new Vector3(0,0,0),new Vector3(40,40,40));
        this.retryTransform_Show=new Transform(new Vector3( 0,200,-1),new Vector3(0,0,0),new Vector3(40,40,40));

        this.retryAnim=new TransformAnimation(20,false,this.retryTransform_Hide ,retryTrans,Easing.EaseOutCirc,true);

        this.gameObject.SetComponent(this.retry); 
        this.gameObject.SetComponent(this.retryAnim);
        this.retry.UnRegistDraw();
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

    }
    HideOut(){

    }
}