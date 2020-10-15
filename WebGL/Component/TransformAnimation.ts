import Quaternion from "../Math/Quat";
import Vector3 from "../Math/Vector3";
import Easing from "../Tool/Easing";
import Transform from "../Transform";
import Component from "./Component";

export default class TransformAnimation extends Component{
    rotateQuat:Quaternion;
    targetRotateQuat:Quaternion;
    targetTransform:Transform;
    transform:Transform;

    offset:Vector3;
    initPosition:Vector3;
    initScale:Vector3;
    scalePase:Vector3;
    linerPase:number;    
    easingFunction:Function;
    TimeUpdate:Function;
    currentTime:number=0;
    time:number;
    direction:number=1;

    constructor(arg_time:number,arg_isLoop:boolean,arg_targetTransform:Transform, arg_transform?:Transform,arg_easingFunction?:Function){
        super();

        
        this.time=arg_time;
        this.linerPase=1.0/arg_time;
        this.targetTransform=arg_targetTransform;
        
        if(arg_transform){
            this.transform=arg_transform;
        }
        if(arg_easingFunction){
            this.easingFunction=arg_easingFunction;
        }else{
            this.easingFunction=Easing. EaseInOutBack;
        }

        if(arg_isLoop){
            this.TimeUpdate=this.TimeUpdate_Loop;
        }else{
            this.TimeUpdate=this.TimeUpdate_NoLoop;
        }
    }

    OnSet(){

        if(!this.transform){
            this.transform=this.gameObject.transform;
        }
        this.offset=this.targetTransform.Position.Sub(this.transform.LocalPosition);
        this.scalePase=this.targetTransform.Scale.Sub(this.transform.Scale);
    
        this.initPosition=this.transform.LocalPosition;
        this.initScale=this.transform.Scale;
    }


    TimeUpdate_Loop(){

        if(this.currentTime>=this.time){
            this.currentTime=this.time;
            this.direction=-1;
        }else if(this.currentTime<=0){
            this.currentTime=0;
            this.direction=1;
        }
        this.currentTime+=this.direction;
    }
    TimeUpdate_NoLoop(){

        if(this.currentTime>=this.time){
            this.currentTime=this.time;
            this.Remove();
        }
        this.currentTime+=this.direction;
    }

    Update(){

        this.TimeUpdate();
        this.transform.Position=this.initPosition.Add(this.offset.Multiply(this.currentTime/this.time));
        this.transform.Scale= this.initScale.Add(this.scalePase.Multiply(this.easingFunction( this.currentTime/this.time)));
        //this.transform.Rotation= this.transform.Rotation

    }
}