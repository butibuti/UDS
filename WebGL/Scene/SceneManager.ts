import ISceneManager from "./ISceneManager";
import IScene from "./IScene";
import GameTime from "../Parts/GameTime";
import ResourceContainer from "../Parts/ResourceContainer";
import ModelCreater from "../Parts/ModelCreater";
import GraphicDevice from "../Graphic/GraphicDevice";

export default class  SceneManager  implements ISceneManager{
    map_scenes:Map<string,IScene>;
    currentScene:IScene;
    gameTime:GameTime;
    resourceContainer:ResourceContainer;
    modelCreater:ModelCreater;
    graphicDevice:GraphicDevice;
    constructor(arg_modelCreater:ModelCreater,arg_resourceContainer:ResourceContainer,arg_graphicDevice:GraphicDevice) {
        this.map_scenes=new Map();
        this.resourceContainer=arg_resourceContainer;
        this.modelCreater=arg_modelCreater;
        this.graphicDevice=arg_graphicDevice;
        this.gameTime=new GameTime();
    }
    GetGraphicDevice(): GraphicDevice {
        return this.graphicDevice;
    }
    GetModelCreater(): ModelCreater {
        return this.modelCreater;
    }
    GetResourceContainer(): ResourceContainer {
        return this.resourceContainer;
    }
    GetGameTime(): GameTime {
        return this.gameTime;
    }
    Update(): void {
        if(this.currentScene.IsLoaded())
        {
        this.currentScene.Update();
        this.gameTime.Count();
        }
        else{
            this.currentScene.OnLoadingUpdate();
            this.currentScene.Draw();
        }
    }
    AddScene(arg_scene: IScene, key: string): IScene {
        arg_scene.Load();
        this.map_scenes[key]=arg_scene;
        return arg_scene;
    }
    GetScene(key: string): IScene {
        return this.map_scenes[key];
    }
    GetCurrentScene(): IScene {
        return this.currentScene;
    }
    ChangeScene(key: string) {
        if(this.currentScene)
        this.currentScene.End();
        this.currentScene=this.map_scenes[key];
        this.currentScene.Start();
    }
    RemoveScene(key: string) {
        if(this.map_scenes[key]){
            this.map_scenes[key].Release();
            delete this.map_scenes[key];
        }
    }
}