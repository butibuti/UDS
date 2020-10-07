export default interface ISound{

    
    Play();
    Pause();
    Mute();
    SetVolume(arg_volume:number);
    GetVolume():number;
    DisMute();
    Reset();
    SetLoop(arg_isLoop:boolean);
}