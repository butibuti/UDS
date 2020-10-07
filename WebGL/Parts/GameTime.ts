
export default class GameTime{
    private absFrame:number;
    private relFrame:number;
    private timePase:number;
    private time:number;
    constructor (){
        this.time=new Date().getTime();
        this.absFrame=0;
        this.relFrame=0;
        this.timePase=1.0;
    }

    Count():void{
        this.absFrame++;
        this.relFrame+=this.timePase;
    }

    get elapsedTime():number{
        return this.time-new Date().getTime();
    }

    get AbsoluteFrame():number{
        return this.absFrame;
    }

    get RelativeFrame():number{
        return this.relFrame;
    }

    get TimePase():number{
        return this.timePase;
    }
    set TimePase(arg_timePase:number){
        this.timePase=arg_timePase;
    }
}