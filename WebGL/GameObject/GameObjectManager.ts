import GameObject from "./GameObject"
import Transform from "../Transform";
import IScene from "../Scene/IScene";

export default class GameObjectManager{
    private gameObjects:Array<GameObject>;
    private newGameObjects:Array<GameObject>;
    private map_gameObjects:Map<string,GameObject>;
    private scene:IScene;

    get Scene(){
        return this.scene;
    }

    constructor(arg_scene:IScene){
        this.gameObjects=new Array();
        this.newGameObjects=new Array();
        this.map_gameObjects=new Map();
        this.scene=arg_scene;
    }
    AddGameObject(arg_name:string,arg_transform?:Transform):GameObject{
        var newObj:GameObject;
        if(this.map_gameObjects[arg_name]){
        var num=1;
        var name=arg_name+"_"+num;
        while(this.map_gameObjects[name]){
            num++;
            name=arg_name+"_"+num;
        }
        arg_name=name;
    }
        if(arg_transform){
            newObj=new GameObject(this,arg_name,arg_transform);

        }else{
            newObj=new GameObject(this,arg_name,new Transform());
        }
        this.map_gameObjects[arg_name]=newObj;
        this.newGameObjects.push(newObj);
        return newObj;
    }

    RemoveObject(arg_gameObjName:string):void{
        this.map_gameObjects[arg_gameObjName].Dead();
    }
    UnRegistObject(arg_gameObjectName:string){
       this.map_gameObjects.delete(arg_gameObjectName);
    }
    Update():void{
        
        this.gameObjects=this.gameObjects.concat(this.newGameObjects);
        this.newGameObjects=new Array();

        this.gameObjects.forEach(obj=>obj.Update());
        this.gameObjects.filter(obj=>obj.IsRemove).forEach(obj=>obj.Remove());

        this.gameObjects=this.gameObjects.filter(obj=>!obj.IsRemove);
    }
    GetGameObject(arg_gameObjectName:string):GameObject{

        return this.map_gameObjects[arg_gameObjectName]

    }
    RegistObj(obj:GameObject){
        this.map_gameObjects[obj.Name]=obj;
    }

    Release(){
        this.map_gameObjects.clear();
        this.newGameObjects.forEach(obj=>obj.Release());
        this.newGameObjects.length=0;
        this.gameObjects.forEach(obj=>obj.Release());
        this.gameObjects.length=0;
        this.scene=null;
    }
}