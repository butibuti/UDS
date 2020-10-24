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
    first:TextDrawComponent;
    yourFirstScore:TextDrawComponent;
    yourRank:TextDrawComponent;
    yourScore:TextDrawComponent;
    firstScore:TextDrawComponent;
    logo:ModelDrawComponent;

    retryTransform_Show:Transform;
    retryTransform_Hide:Transform;

    
    retryTransform:Transform;

    logoTransform_Show:Transform;
    logoTransform_Hide:Transform;

    rankingTransform_Show:Transform;
    rankingTransform_Hide:Transform;

    rankingBaseTransform:Transform;

    maskColor:Vector4;

    maskDir:number=-1.0;
    maskPer:number=0;
    isMask:boolean=false;
    mask: ModelDrawComponent;

    constructor(){
        super();
    }

    OnSet(){

        
        var comboBarBaseTransform=new Transform(new Vector3(0,0,-1),new Vector3(0,0,0),new Vector3(1,1.0,1));
        
        var comboBarTransform=new Transform(new Vector3(0,400,0),new Vector3(0,0,0),new Vector3(50,20,1));
        
        comboBarTransform.BaseTransform=comboBarBaseTransform;

        this.feverBarDrawComponent=new ModelDrawComponent(false,"uvNormalPlane","yellow","rainbow",2,false,null,comboBarTransform);
        this.comboBarDrawComponent=new ModelDrawComponent(false,"uvNormalPlane","yellow","onlyMaterial",2,false,null,comboBarTransform);
        
        this.gameObject.SetComponent(this.comboBarDrawComponent);
        this.gameObject.SetComponent(this.feverBarDrawComponent);
        
        this.activeBarDrawComponent=this.comboBarDrawComponent;
        var arrivalTrans=new Transform(new Vector3(-400,-400,-1),new Vector3(0,0,0),new Vector3(50,50,50));
        this.arrivalText=new TextDrawComponent("0","font","fontShader",new Vector4(0.9,0.9,0.25,1),2,false,arrivalTrans);
        

        this.gameObject.SetComponent(this.arrivalText);


        this.retryTransform=new Transform(new Vector3(-1000,300,-1),new Vector3(0,0,0),new Vector3(40,40,40));

        this.retry=new TextDrawComponent("Press any Key","font","fontShader",new Vector4(0.9,0.9,1.0,1),2,false,this.retryTransform);
        
        

        this.retryTransform_Hide=new Transform(new Vector3( 1000,200,-1),new Vector3(0,0,0),new Vector3(40,40,40));
        this.retryTransform_Show=new Transform(new Vector3( 0,200,-1),new Vector3(0,0,0),new Vector3(40,40,40));



        this.maskColor=new Vector4(0.5,0.5,1.0,0.0);
        
        this.mask=new ModelDrawComponent(false, "plane_position","red","simpleColor",2,false,null,new Transform(new Vector3(0,0,-0.8),new Vector3(0,0,0),new Vector3(600,600,600)));

        this.gameObject.Manager.AddGameObject("mask",new Transform(),"mask",[this.mask]);
        this.mask.UnRegistDraw();
        this.mask.model.AddExParam(4,4,this.maskColor);


        this.gameObject.SetComponent(this.retry);
        this.retry.UnRegistDraw();

        this.logo=new ModelDrawComponent(false, "plane","logoMaterial","texShader",2,false,null,new Transform(new Vector3(-1110,-300,-0.5),new Vector3(0,0,180),new Vector3(600,600,600)));

        this.gameObject.SetComponent(this.logo);
        {

            this.rankingBaseTransform=new Transform();
            
            var yourRankTrans=new Transform(new Vector3(0,0,-0.5),new Vector3(0,0,0),new Vector3(75,75,50));
            yourRankTrans.BaseTransform=this.rankingBaseTransform;
            var yourScoreTrans=new Transform(new Vector3(0,150,-0.5),new Vector3(0,0,0),new Vector3(75,75,50));
            yourScoreTrans.BaseTransform=this.rankingBaseTransform;
            var firstScoreTrans=new Transform(new Vector3(0,300,-0.5),new Vector3(0,0,0),new Vector3(75,75,50));
            firstScoreTrans.BaseTransform=this.rankingBaseTransform;

        

        
            var yourFirstTrans=new Transform(new Vector3(0,0,-0.5),new Vector3(0,0,0),new Vector3(75,75,50));
            yourFirstTrans.BaseTransform=this.rankingBaseTransform;
            var yourFirstScoreTrans=new Transform(new Vector3(0,200,-0.5),new Vector3(0,0,0),new Vector3(75,75,50));
            yourFirstScoreTrans.BaseTransform=this.rankingBaseTransform;

        

            this.firstScore=new TextDrawComponent("1st Score:","font","fontShader",new Vector4(0.9,0.9,0.25,1),2,false,firstScoreTrans);
            this.first=new TextDrawComponent(" You are No.1!!","font","fontShader",new Vector4(0.9,0.9,0.25,1),2,false,yourFirstTrans);
            this.yourScore=new TextDrawComponent("Score:","font","fontShader",new Vector4(1.0,1.0,1.0,1),2,false,yourScoreTrans);
            this.yourRank=new TextDrawComponent("Rank:","font","fontShader",new Vector4(1.0,1.0,1.0,1),2,false,yourRankTrans);
            this.yourFirstScore=new TextDrawComponent("Score:","font","fontShader",new Vector4(0.9,0.9,0.25,1),2,false,yourFirstScoreTrans);

            this.gameObject.SetComponent(this.firstScore);
            this.gameObject.SetComponent(this.first);
            this.gameObject.SetComponent(this.yourScore);
            this.gameObject.SetComponent(this.yourRank);
            this.gameObject.SetComponent(this.yourFirstScore);

            this.firstScore.UnRegistDraw();
            this.first.UnRegistDraw();
            this.yourScore.UnRegistDraw();
            this.yourRank.UnRegistDraw();
            this.yourFirstScore.UnRegistDraw();
}
        this.logoTransform_Show=new Transform(new Vector3(-20,-300,-0.5),new Vector3(0,0,180),new Vector3(600,600,600));
        this.logoTransform_Hide=new Transform(new Vector3(1100,-300,-0.5),new Vector3(0,0,180),new Vector3(600,600,600));

        this.rankingTransform_Show=new Transform();
        this.rankingTransform_Hide=new Transform(new Vector3(1100,0,0));


    }

    Update(){

        if(this.isMask){

            this.maskPer+=this.maskDir;

            if(this.maskPer>maskLinerFrameMax){
                this.maskPer=maskLinerFrameMax;
            }
            if(this.maskPer<0){
                this.maskPer=0;
                this.isMask=false;
                this.mask.UnRegistDraw();
            }

            this.maskColor.data[3]=this.maskPer/maskLinerFrame;
        }

        
    }

    ShowRanking(arg_arrival:number,arg_rank:number,arg_firstScore:number){
        this.logo.UnRegistDraw();
        
        this.first.UnRegistDraw();
        this.yourFirstScore.UnRegistDraw();
        this.firstScore.UnRegistDraw();
        this.yourRank.UnRegistDraw();
        this.yourScore.UnRegistDraw();

        if(arg_rank<=1){
            this.yourFirstScore.SetText(" Score:"+arg_arrival);
            this.first.RegistDraw();
            this.yourFirstScore.RegistDraw();
        }else{

            this.firstScore.SetText(" 1st Score:"+arg_firstScore);
            this.yourRank.SetText(" Rank:"+arg_rank);
            this.yourScore.SetText(" Score:"+arg_arrival);
            this.firstScore.RegistDraw();
            this.yourRank.RegistDraw();
            this.yourScore.RegistDraw();
        }
        this.logo.RegistDraw();

        this.gameObject.SetComponent(new TransformAnimation(45,false,this.rankingTransform_Show,this.rankingBaseTransform,Easing.EaseInOutCirc,Easing.EaseInOutCirc));
    }

    HideRanking(){

        this.gameObject.SetComponent(new TransformAnimation(45,false,this.rankingTransform_Hide,this.rankingBaseTransform,Easing.EaseInOutCirc,Easing.EaseInOutCirc));
    }
    
    SetArrival(arg_arrival:number){
        this.arrivalText.SetText(arg_arrival+"");

    }

    SetComboMater(arg_persentage:number){
        
        this.activeBarDrawComponent.transform.SetScaleX(arg_persentage*500);
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
        
        this.retry.transform.Position=new Vector3(-1000,200,0);
        var retryAnim=new TransformAnimation(60,false,this.retryTransform_Show ,this.retryTransform,Easing.EaseInOutQuint,Easing.EaseInOutCirc,true);
 
        this.gameObject.SetComponent(retryAnim);
        this.retry.RegistDraw();
    }
    HideRetry(){
        var retryAnim=new TransformAnimation(60,false,this.retryTransform_Hide ,this.retryTransform,Easing.EaseInOutQuint,Easing.EaseInOutCirc,true);
 
        this.gameObject.SetComponent(retryAnim);
        this.retry.UnRegistDraw();
    }
    HideIn(){

        var logoAnim =new TransformAnimation(60,false,this.logoTransform_Show,this.logo.transform,Easing.EaseInOutBack,Easing.EaseInOutCirc);
        this.gameObject.SetComponent(logoAnim);
    }
    HideOut(){

        var logoAnim =new TransformAnimation(60,false,this.logoTransform_Hide,this.logo.transform,Easing.EaseInOutBack,Easing.EaseInOutCirc);
        this.gameObject.SetComponent(logoAnim);
    }
    MaskIn(){
        this.maskDir=1.0;
        this.isMask=true;
        this.mask.RegistDraw();

        this.logo.UnRegistDraw();
        this.logo.RegistDraw();
    }
    MaskOut(){

        this.maskDir=-1;
    }
    Reset(){
        this.logo.transform.Position=new Vector3(-1110,-300,-0.5);
        this.rankingBaseTransform.Position=new Vector3(-1000,0,0);
        this.maskColor.data[3]=0;
    }
}