import Component from "../Component/Component";
import Vector3 from "../Math/Vector3";

export default class RoundTrip_Wait extends Component{
    start:Vector3;
    end:Vector3;
    time:number;
    waitTime:number;
    currentWaitTime:number;
    currentTime:number;
    TimeUpdate:Function;

    constructor (arg_start:Vector3,arg_end:Vector3,arg_time:number,arg_currentTime:number,arg_waitTime:number,arg_waitCurrentTime:number,arg_isLoop:boolean){
        super();
        this.start= arg_start;
        this.end= arg_end.Sub(this.start);
        this.time=arg_time;
        this.currentTime=arg_currentTime;
        this.waitTime=arg_waitTime;
        this.currentWaitTime=arg_waitCurrentTime;

        if(this.currentWaitTime){
            this.currentTime=this.time+1;
        }

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
        
        if(this.currentWaitTime<=0){

            this.currentTime++;
        }

        if(this.currentTime>this.time){
            
            this.currentWaitTime++;

            if(this.currentWaitTime>this.waitTime){
                this.currentTime=0;
                this.currentWaitTime=0;
            }
        }
    }

    Update(){
        this.TimeUpdate();
        this.gameObject.transform.Position=this.start.Add(this.end.Multiply(this.currentTime/this.time));
    }

}