import GameObject from "../GameObject/GameObject";

export default class Component{
    gameObject:GameObject;
    private isRemove:boolean;
    
    get IsRemove():boolean{
        return this.isRemove;
    }
    Set(arg_obj:GameObject){
        this.gameObject=arg_obj;
        this.isRemove=false;
        this.OnSet();
    }
    Dead(){
        this.isRemove=true;
    }
    
    OnSet(){

    }
    Remove(){
        this.isRemove=true;
        this.OnRemove();
        this.gameObject=null;
    }
    OnRemove(){

    }
    Release(){

        this.OnRelease();
        this.gameObject=null;
    }
    OnRelease(){
    }
    Update(){

    }
    OnCollision(arg_gameObject:GameObject){
        
    }
    OnCollisionEnter(arg_gameObject:GameObject){
        
    }
    OnCollisionRelease(arg_gameObject:GameObject){
        
    }

    GetComponentName():string{
        return "Component";
    }
}