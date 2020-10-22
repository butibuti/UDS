import Component from "../Component/Component";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import TransformAnimation from "../Component/TransformAnimation";
import Vector3 from "../Math/Vector3";
import RandomHelper from "../Tool/RandomHelper";
import Transform from "../Transform";

export default class SignalComponent extends Component{
    time:number;
    currentTime:number=0;
    alertTime:number;
    alertTiming:number;
    isOn: boolean=false;
    fishBaseTransform:Transform;
    crownFishTransform:Transform;

    constructor (arg_time:number,arg_currentTime:number,arg_alertTiming:number,arg_alertTime:number){
        super();
        this.time=arg_time;
        this.currentTime=arg_currentTime;
        this.alertTime=arg_alertTime;
        this.alertTiming=arg_alertTiming;
}

    OnSet(){
        
        var poleTransform=new Transform(new Vector3( -0.5,-1,0.4),new Vector3(0,0,0),new Vector3(0.125,2,0.125));
         poleTransform.BaseTransform=this.gameObject.transform;
         
         var crownFishY=RandomHelper.GetRandomInt(2,-2)/4.0;
         this.fishBaseTransform=new Transform(new Vector3( -0.5,-2+crownFishY,0.4),new Vector3(0,0,0),new Vector3(1.0,1.0,1.0));
        this.crownFishTransform=new Transform(new Vector3( 0,0,0.5),new Vector3(0,0,0),new Vector3(0.0025,0.0025,0.0025));

        this.fishBaseTransform.BaseTransform=this.gameObject.transform;
        this.crownFishTransform.BaseTransform=this.fishBaseTransform;

        this.gameObject.SetComponent(new ModelDrawComponent(true,"nonTexcube","blue","pointLight",1,false,null,poleTransform))
        this.gameObject.SetComponent(new ModelDrawComponent(true,"nonTexcube","red","onlyMaterial",1,false,"clownfish",this.crownFishTransform))

        this.gameObject.SetComponent(new TransformAnimation(RandomHelper.GetRandomInt(4,8)*20,true,new Transform(new Vector3(0,0.5,0.5),new Vector3(0,0,0),new Vector3(0.0025,0.0025,0.0025)),this.crownFishTransform));
    
    }
    SignalOn(){
        this.fishBaseTransform.RollY_Local_Degrees(6);
        this.isOn=true;
    }

    SignalOff(){
        this.isOn=false;
    }

    Update(){
        this.currentTime++;

        if(this.currentTime>this.time){
            this.currentTime=0;
        }

        if(this.currentTime>this.alertTiming+this.alertTime){
            this.SignalOff();
        }else
        if(this.currentTime>this.alertTiming){
            this.SignalOn();
            
        }
        

    }

}