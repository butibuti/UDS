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

    currentTime:number=0;
    time:number;
    direction:number=1;

    constructor(arg_time:number,arg_targetTransform:Transform, arg_transform?:Transform){
        super();

        console.log("transform");
        this.time=arg_time;
        this.linerPase=1.0/arg_time;
        this.targetTransform=arg_targetTransform;
        
        if(arg_transform){
            this.transform=arg_transform;
        }
        
    }

    OnSet(){

        if(!this.transform){
            this.transform=this.gameObject.transform;
        }
        this.offset=this.targetTransform.Position.Sub(this.transform.Position);
        this.scalePase=this.targetTransform.Scale.Sub(this.transform.Scale);
    
        this.initPosition=this.transform.Position;
        this.initScale=this.transform.Scale;
    }

    Update(){
        if(this.currentTime>=this.time){
            this.currentTime=this.time;
            this.direction=-1;
        }else if(this.currentTime<=0){
            this.currentTime=0;
            this.direction=1;
        }

        this.currentTime+=this.direction;


        this.transform.Position=this.initPosition.Add(this.offset.Multiply(this.currentTime/this.time));
        this.transform.Scale= this.initScale.Add(this.scalePase.Multiply(Easing.easeInOutBack( this.currentTime/this.time)));
        //this.transform.Rotation= this.transform.Rotation

    }
}