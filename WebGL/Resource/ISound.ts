export default interface ISound{

    
    Play();
    Play_new();
    Pause();
    Mute();
    SetVolume(arg_volume:number);
    GetVolume():number;
    DisMute();
    Reset();
    SetLoop(arg_isLoop:boolean);
}