import Component from "../Component/Component";
import Vector3 from "../Math/Vector3";

export default class RoundTrip extends Component{
    start:Vector3;
    end:Vector3;
    time:number;
    currentTime:number=0;
    TimeUpdate:Function;

    constructor (arg_start:Vector3,arg_end:Vector3,arg_time:number,arg_currentTime:number,arg_isLoop:boolean){
        super();
        this.start= arg_start;
        this.end= arg_end.Sub(this.start);
        this.time=arg_time;
        this.currentTime=arg_currentTime;
        if(arg_isLoop){
            this.TimeUpdate=this.TimeUpdate_Loop;
        }else{
            this.TimeUpdate=this.TimeUpdate_NoLoop;
        }
    }

    TimeUpdate_NoLoop(){

        this.currentTime++;

        if(this.currentTime>this.time){
            this.currentTime=0;
            this.Dead();
        }
    }
    TimeUpdate_Loop(){
        
        this.currentTime++;

        if(this.currentTime>this.time){
            this.currentTime=0;
        }
    }

    Update(){
        this.TimeUpdate();
        this.gameObject.transform.Position=this.start.Add(this.end.Multiply(this.currentTime/this.time));
    }

}