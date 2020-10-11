import Transform from "../Transform"
import Component from "../Component/Component";
import GameObjectManager from "./GameObjectManager"
import IRenderer from "../Parts/IRenderer";
import IScene from "../Scene/IScene"
import GameTime from "../Parts/GameTime";
import CollisionManager from "../Parts/Collision/CollisionManager";
export default class GameObject{
    transform :Transform;
    private isRemove:boolean;
    private components:Array<Component>;
    private newComponents:Array<Component>;
    private name:string;
    private manager:GameObjectManager;
    get IsRemove():boolean{
        return this.isRemove;
    }
    get Name():string{
        return this.name;
    }
    get Manager ():GameObjectManager{
        return this.manager;
    }
    set Name(arg_name:string){
        this.manager.UnRegistObject(this.name);
        this.name=arg_name;

    }

    get GameTime():GameTime{
        return this.Manager.Scene.GetSceneManager().GetGameTime();
    }

    constructor(arg_manager:GameObjectManager,arg_name:string,arg_transform:Transform){
        this.transform=arg_transform;
        this.components=new Array();
        this.newComponents=new Array();
        this.isRemove=false;
        this.name=arg_name;
        this.manager=arg_manager;
    }
    Remove(){

        this.components.forEach(component=>component.Remove());
        this.components.length=0;
        this.manager.UnRegistObject(this.name);
        this.manager=null;
    }
    Release(){
        this.components.forEach(component=>component.Remove());
        this.components.length=0;
        this.manager=null;
    }
    Dead(){
        this.isRemove=true;
    }
    GetRenderer():IRenderer{
        return this.manager.Scene.GetRenderer();
    }
    GetCollisionManager():CollisionManager{
        return this.manager.Scene.GetCollisionManager();
    }
    Update():void{
        this.components=this.components.concat(this.newComponents);
        this.newComponents=new Array();
        
        
        this.components.forEach(component=>component.Update());
        var remove=this.components.filter(component=>component.IsRemove);
        remove.forEach(remove=>remove.Remove());
        this.components= this.components.filter(component=>!component.IsRemove);
    }
    Initialize():void{
        
    }
    SetComponent(arg_component:Component):Component{
        arg_component.Set(this);
        this.newComponents.push(arg_component);
        return arg_component;
    }
    Hit(arg_object:GameObject){
        //if(this!=arg_object)
        console.log("collision:"+this.name+","+arg_object.name);
        this.components.forEach(component=>component.Hit(arg_object));
        
    }
}