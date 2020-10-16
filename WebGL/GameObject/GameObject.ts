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
    private ary_currentHitObjects:Array<GameObject>;
    private ary_befHitObjects:Array<GameObject>;
    private isComplexHit: boolean=false;
    Collision:Function;
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

    get ComplexHit():boolean{
        return this.isComplexHit;
    }
    set ComplexHit(other:boolean){
        this.isComplexHit=other;

        if(this.isComplexHit){
            this.Collision=this.Collision_Complex;
        }else{
            this.Collision=this.Collision_Simple;
        }
    }

    get GameTime():GameTime{
        return this.Manager.Scene.GetSceneManager().GetGameTime();
    }

    constructor(arg_manager:GameObjectManager,arg_name:string,arg_transform:Transform,arg_idName:string,arg_ary_components?:Array<Component>){
        this.transform=arg_transform;
        
        this.Collision=this.Collision_Simple;
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

        this.ary_currentHitObjects=new Array();
        this.ary_befHitObjects=new Array();
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
        this.Collision();
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
        
        this.ary_currentHitObjects.push(arg_object);
        
    }
    Collision_Simple(){
        this.ary_currentHitObjects.forEach(obj=>{this.components.forEach(component=>component.OnCollision(obj))});
        this.ary_currentHitObjects.length=0;
    }
    Collision_Complex(){
        
        this.ary_currentHitObjects.forEach(obj=>{
            if(this.ary_befHitObjects.includes(obj))
             this.components.forEach(component=>component.OnCollision(obj));
             else{
                this.components.forEach(component=>component.OnCollisionEnter(obj));
             }
        });
        this.ary_befHitObjects.forEach(obj=>{
            if(!this.ary_currentHitObjects.includes(obj))
             this.components.forEach(component=>component.OnCollisionRelease(obj));
             
        });
        this.ary_befHitObjects=this.ary_currentHitObjects;
        this.ary_currentHitObjects=new Array();
    }
}