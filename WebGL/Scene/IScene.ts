import CollisionManager from "../Parts/Collision/CollisionManager";
import IRenderer from "../Parts/IRenderer";
import ISceneManager from "./ISceneManager";

export default interface IScene{
    IsCurrentScene():boolean;
    SetCurrentScene(arg_iscurrent:boolean);
    Update:Function;
    Draw():void;
    OnUpdate():void;
    Start(information?:any):void;
    OnStart(information?:any):void;
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