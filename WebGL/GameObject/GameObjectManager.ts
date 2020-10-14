import GameObject from "./GameObject"
import Transform from "../Transform";
import IScene from "../Scene/IScene";
import Component from "../Component/Component";

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
    AddGameObject(arg_name:string,arg_transform?:Transform,arg_idName?:string,arg_ary_componets?:Array<Component>):GameObject{
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
        if(!arg_idName){
            arg_idName="none";
        }
        if(arg_transform){
            if(arg_ary_componets)
            newObj=new GameObject(this,arg_name,arg_transform,arg_idName,arg_ary_componets);
            else{
                newObj=new GameObject(this,arg_name,arg_transform,arg_idName);
            }

        }else{
            if(arg_ary_componets)
            newObj=new GameObject(this,arg_name,new Transform(),arg_idName, arg_ary_componets);
            else{
                
            newObj=new GameObject(this,arg_name,new Transform(),arg_idName);
            }
        }
        this.map_gameObjects[arg_name]=newObj;
        this.newGameObjects.push(newObj);
        return newObj;
    }

    RemoveObject(arg_gameObjName:string):void{
        this.map_gameObjects[arg_gameObjName].Dead();
    }
    UnRegistObject(arg_gameObjectName:string){
       this.map_gameObjects[arg_gameObjectName]=null;
    }
    Update():void{
        
        this.gameObjects=this.gameObjects.concat(this.newGameObjects);
        this.newGameObjects=new Array();

        this.gameObjects.forEach(obj=>obj.Update());
        this.gameObjects.filter(obj=>obj.IsRemove).forEach(obj=>obj.Remove());

        this.gameObjects=this.gameObjects.filter(obj=>!obj.IsRemove);
        //console.log(this.gameObjects.length);
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