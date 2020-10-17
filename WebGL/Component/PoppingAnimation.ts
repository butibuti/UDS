import PlayerComponent from "../CrossyLoad_Copy/PlayerComponent";
import Quaternion from "../Math/Quat";
import Vector3 from "../Math/Vector3";
import Easing from "../Tool/Easing";
import Transform from "../Transform";
import Component from "./Component";

export default class PoppingAnimation extends Component{
    private rotateQuat:Quaternion;
    private targetRotateQuat:Quaternion;
    private targetTransform:Transform;
    private transform:Transform;

    private offset:Vector3;
    private initPosition:Vector3;
    private initScale:Vector3;
    private scalePase:Vector3;
    private linerPase:number;    
    easingFunction:Function;
    TimeUpdate:Function;
    private currentTime:number=0;
    private time:number;
    private direction:number=1;
    private playerCompoent:PlayerComponent;

    constructor(arg_moveObject:PlayerComponent, arg_time:number,arg_isLoop:boolean,arg_targetTransform?:Transform, arg_transform?:Transform,arg_easingFunction?:Function){
        super();

        this.playerCompoent=arg_moveObject;
        this.time=arg_time;
        this.linerPase=1.0/arg_time;
        if(arg_targetTransform)
        this.targetTransform=arg_targetTransform;
        
        if(arg_transform){
            this.transform=arg_transform;
        }
        if(arg_easingFunction){
            this.easingFunction=arg_easingFunction;
        }else{
            this.easingFunction=Easing. EaseInOutCubic;
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
        if(!this.targetTransform){
            this.targetTransform=this.gameObject.transform;
        }
        this.offset=this.targetTransform.Position.Sub(this.transform.Position);
        this.scalePase=this.targetTransform.Scale.Sub(this.transform.Scale);
    
        this.initPosition=this.transform.Position;
        this.initScale=this.transform.Scale;
        this.rotateQuat=this.transform.Rotation.ToQuaternion();
        this.targetRotateQuat=this.targetTransform.Rotation.ToQuaternion();
    }

    SetTarget(arg_time:number,arg_targetTransform:Transform){
        this.currentTime=0;
        this.time=arg_time;
        this.targetTransform=arg_targetTransform;

        this.offset=this.targetTransform.Position.Sub(this.transform.Position);
        this.scalePase=this.targetTransform.Scale.Sub(this.transform.Scale);
    
        this.initPosition=this.transform.LocalPosition;
        this.initScale=this.transform.Scale;
        this.rotateQuat=this.transform.Rotation.ToQuaternion();
        this.targetRotateQuat=this.targetTransform.Rotation.ToQuaternion();
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

        if(this.currentTime>this.time){

        }else if(this.currentTime==this.time-1){
            
            this.playerCompoent.OnMoveEnd();
        }
        this.currentTime+=this.direction;
    }

    IsMove():boolean{
        if(this.currentTime>this.time+1){
            return false;
        }else{
            return true;
        }
    }

    Update(){

        this.TimeUpdate();
        var t=this.easingFunction( this.currentTime/this.time);
        if(t>1){
            return;
        }
        this.transform.Position=this.initPosition.Add(this.offset.Multiply(t).AddY(-Easing.Parabola(t)));
        this.transform.Scale= this.initScale.Add(this.scalePase.Multiply(t));
        //this.transform.Rotation= this.transform.Rotation
        this.transform.Rotation=this.rotateQuat.SphereLerp(this.targetRotateQuat,t).ToMatrix4x4();

    }
}