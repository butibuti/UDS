import Transform from "../Transform"
import Component from "../Component/Component";
import GameObjectManager from "./GameObjectManager"
import IRenderer from "../Parts/IRenderer";
import IScene from "../Scene/IScene"
import GameTime from "../Parts/GameTime";
import CollisionManager from "../Parts/Collision/CollisionManager";
import ID from "../Parts/ID";
import GameObjectIDManager from "../Parts/GameObjectIDManager";
export default class GameObject{
    transform :Transform;
    private isRemove:boolean;
    private components:Array<Component>;
    private newComponents:Array<Component>;
    private name:string;
    private manager:GameObjectManager;
    objectID:ID;
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

    constructor(arg_manager:GameObjectManager,arg_name:string,arg_transform:Transform,arg_idName:string,arg_ary_components?:Array<Component>){
        this.transform=arg_transform;
        
        this.newComponents=new Array();
        this.isRemove=false;
        this.name=arg_name;
        this.manager=arg_manager;
        
        if(arg_ary_components){
            this.components=arg_ary_components;
        }else
        this.components=new Array();

        this.objectID=GameObjectIDManager.GetID(arg_idName);
        this.components.forEach(component=>component.Set(this));
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
    GetComponent(arg_serchName:string, arg_count:number ):Component{
        
        return this.components.filter(component=>component.GetComponentName()==arg_serchName)[arg_count];
    }
    Hit(arg_object:GameObject){
        
        console.log("collision:"+this.name+","+arg_object.name);
        this.components.forEach(component=>component.Hit(arg_object));
        
    }
}