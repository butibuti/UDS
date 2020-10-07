export default class Sound{
    
    private audioElement:HTMLAudioElement;

    constructor (arg_src:string){
        this.audioElement=document.createElement('audio');
        this.audioElement.src=arg_src;
        this.audioElement.preload="auto";
    }

    Play(){
        this.audioElement.play();
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