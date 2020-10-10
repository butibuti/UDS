import CollisionManager from "../Parts/Collision/CollisionManager";
import IRenderer from "../Parts/IRenderer";
import ISceneManager from "./ISceneManager";

export default interface IScene{
    isCurrent:boolean;
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
    GetCollisionManager():CollisionManager;
    GetSceneManager():ISceneManager;
    LoadingUpdate():void;
    OnLoadingUpdate():void;
    IsLoaded ():boolean;
    Release();
    OnRelease();
    BefLoad();
    Load();
    OnLoad();
}