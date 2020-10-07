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
        this.OnRemove();
        this.gameObject=null;
    }
    OnRemove(){

    }
    Update(){

    }
}