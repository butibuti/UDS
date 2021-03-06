import IScene from "./IScene";
import IRenderer from "../Parts/IRenderer"
import Renderer from "../Parts/Renderer"
import Camera from "../Graphic/Camera";
import ISceneManager from "./ISceneManager";
import GameObjectManager from "../GameObject/GameObjectManager";
import FrameBufferTexture from "../Resource/FrameBufferTexture";
import CollisionManager from "../Parts/Collision/CollisionManager";
import Vector4 from "../Math/Vector4";

function Sleep(time) {
    return new Promise( (resolve) => {
      setTimeout(resolve, time)
    })
}

export default class Scene implements IScene{
    isCurrent=false;
    Update: Function;
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
        this.Update=this.Update_WithoutCollision;
        this.AddCamera(0,0,"last",true);
        //this.GetCamera("last").clearColor=new Vector4(1,0,0,1);
    }
    IsCurrentScene(): boolean {
        return this.isCurrent;
    }
    SetCurrentScene(arg_iscurrent: boolean) {
        this.isCurrent=arg_iscurrent;
    }
    
    GetGameManager():GameObjectManager{
        return this.gameObjectManager;
    }
    

    UseCollisionManager(){
        this.collisionManager=new CollisionManager();
        this.Update=this.Update_WithCollision;

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
    GetCameraCount():number{
        return this.ary_camera.length;
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

    Update_WithCollision(){

        this.OnUpdate();
        this.gameObjectManager.Update();
        this.collisionManager.Check();
        this.Draw();
    }
    Update_WithoutCollision(){

        this.OnUpdate();
        this.gameObjectManager.Update();
        this.Draw();
    }

    LoadingUpdate():void{
       this.OnLoadingUpdate();
       this.Draw();
    }
    OnLoadingUpdate():void{
    }
    OnUpdate(): void {
    }
    Start(information?:any): void {
        this.OnStart(information);
    }
    OnStart(information?:any): void {
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
        this.BefLoad();
        await this.OnLoad();
        
        while(this.sceneManager.GetResourceContainer().GetLoadingObjCount()){
            await Sleep(100); 
        }
        
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