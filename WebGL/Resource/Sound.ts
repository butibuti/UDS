import ISound from "./ISound";

export default class Sound implements ISound{
    
    private audioElement:HTMLAudioElement;

    constructor (arg_src:string){
        this.audioElement=document.createElement('audio');
        this.audioElement.src=arg_src;
        this.audioElement.preload="auto";
    }

    Play(){
        this.audioElement.play();
    }
    Play_new(){
        var audioElement=document.createElement('audio');
        audioElement.src=this.audioElement.src;
        audioElement.preload="auto";audioElement.play();
    }
    Pause(){
        this.audioElement.pause();
    }

    Mute(){
        this.audioElement.muted=true;
    }

    SetVolume(arg_volume:number){
        this.audioElement.volume=arg_volume;
    }

    GetVolume():number{
        return this.audioElement.volume;
    }

    DisMute(){
        this.audioElement.muted=false;
    }

    Reset(){
        this.audioElement.currentTime=0.0;
    }

    SetLoop(arg_isLoop:boolean){
        this.audioElement.loop=arg_isLoop;
    }

}