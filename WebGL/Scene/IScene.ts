import IRenderer from "../Parts/IRenderer";
import ISceneManager from "./ISceneManager";

export default interface IScene{
    Draw():void;
    Update():void;
    OnUpdate():void;
    Start():void;
    OnStart():void;
    End():void;
    OnEnd():void;
    Initialize():void;
    OnInitialize():void;
    GetRenderer():IRenderer;
    GetSceneManager():ISceneManager;
    LoadingUpdate();
    IsLoaded ():boolean;
    Release();
    OnRelease();
    BefLoad();
    Load();
    OnLoad();
}