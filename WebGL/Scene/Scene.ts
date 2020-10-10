import IScene from "./IScene";
import IRenderer from "../Parts/IRenderer"
import Renderer from "../Parts/Renderer"
import Camera from "../Graphic/Camera";
import ISceneManager from "./ISceneManager";
import GameObjectManager from "../GameObject/GameObjectManager";
import FrameBufferTexture from "../Resource/FrameBufferTexture";
import CollisionManager from "../Parts/Collision/CollisionManager";

function Sleep(time) {
    return new Promise( (resolve) => {
      setTimeout(resolve, time)
    })
}

export default class Scene implements IScene{
    sceneManager:ISceneManager;
    renderer:IRenderer;
    collisionManager:CollisionManager;
    gameObjectManager:GameObjectManager;
    private isLoaded:boolean=false;
    private map_camera:Map<string, Camera>;
    private ary_camera:Array<Camera>;
    constructor(sceneManger:ISceneManager){
        this.renderer=new Renderer();
        this.map_camera=new Map();
        this.ary_camera=new Array();
        this.sceneManager=sceneManger;
        this.gameObjectManager=new GameObjectManager(this);
        this.collisionManager=new CollisionManager();
        this.AddCamera(0,0,"last",true);
    }
    GetCollisionManager(): CollisionManager {
        return this.collisionManager;
    }
    IsLoaded ():boolean{
        return this.isLoaded;
    }
    Release(){
        this.OnRelease();
        this.sceneManager=null;
        this.gameObjectManager.Release();
        this.collisionManager.Release();
        this.renderer.Release();
    }
    OnRelease(){

    }
    AddCamera(order:number, layer:number,cameraName:string,isPararell:boolean,frameBufferTexture?:FrameBufferTexture):Camera{
        var newCamera:Camera;
        if(frameBufferTexture){
            newCamera=new Camera(this.sceneManager.GetGraphicDevice(),layer,isPararell,frameBufferTexture);
        }else
        newCamera=new Camera(this.sceneManager.GetGraphicDevice(),layer,isPararell);

        this.ary_camera.splice(order,0,newCamera);

        this.map_camera[cameraName]=newCamera;
        return newCamera;
    }
    GetCamera(cameraName:string):Camera{
        return this.map_camera[cameraName];

    }
    Draw(): void {
        this.ary_camera.forEach(camera=>this.renderer.Draw(camera));
        
        this.sceneManager.GetGraphicDevice().Present();
    }
    Update(): void {
        this.OnUpdate();
        this.gameObjectManager.Update();
        this.collisionManager.Check();
        this.Draw();
    }
    LoadingUpdate():void{
        console.log("now loading");
    }
    OnUpdate(): void {
    }
    Start(): void {
        this.OnStart();
    }
    OnStart(): void {
    }
    End(): void {
        this.OnEnd();
    }
    OnEnd(): void {
    }
    Initialize(): void {
        this.OnInitialize();
    }
    BefLoad():void{

    }
    async Load(){
        await this.OnLoad();
        
        while(this.sceneManager.GetResourceContainer().GetLoadingObjCount()){
            await Sleep(100); 
        }
        console.log("end loading");
        this.isLoaded=true;
        this.Initialize();
    }
    async OnLoad(){

    }
    OnInitialize(): void {
    }
    GetRenderer():IRenderer{
        return this.renderer;
    }
    GetSceneManager():ISceneManager{
        return this.sceneManager;
    }
}