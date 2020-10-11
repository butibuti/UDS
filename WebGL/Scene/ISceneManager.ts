import IScene from "./IScene";
import GameTime from "../Parts/GameTime";
import ResourceContainer from "../Parts/ResourceContainer";
import ModelCreater from "../Parts/ModelCreater";
import GraphicDevice from "../Graphic/GraphicDevice";

export default interface ISceneManager{
    Update():void;
    AddScene(arg_scene:IScene,key:string):IScene;
    GetScene(key:string):IScene;
    GetCurrentScene():IScene;
    ChangeScene(key:string,information?:any);
    RemoveScene(key:string);
    GetGameTime():GameTime;
    GetResourceContainer():ResourceContainer;
    GetModelCreater():ModelCreater;
    GetGraphicDevice():GraphicDevice;
}