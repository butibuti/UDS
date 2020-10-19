import Vector3 from "../../Math/Vector3";
import ID from "../ID";
import CollisionObject from "./CollisionObject";
import CollisionLayer from "./Octree";

class Layer{
    octree:CollisionLayer;
    
    list_objStack=new Array<CollisionObject >();
    vec_collisionObjects=new Array<CollisionObject >();
    constructor(){
        this.octree=new CollisionLayer(6,new Vector3(-20,-20,-20),new Vector3(20,20,20))
    }

    Regist(arg_registObj: CollisionObject): ID {
        
        return this.octree.RegistCollisionObj(arg_registObj);
    }
    UnRegist(arg_ID: ID) {
        
        this.octree.UnRegistCollisionObj(arg_ID);
    }
    Check(){
        this.octree.Update();
        this.vec_collisionObjects.length=0;
        this.list_objStack.length=0;
		
        this.octree.CreateCollisionObjectList(0, this.vec_collisionObjects, this.list_objStack);
        
        var length=this.vec_collisionObjects.length;
        for(var i=0;i<length;i+=2){
         
            this.vec_collisionObjects[i].HitCheck(this.vec_collisionObjects[i+1]);
                
        }
        
    }
    Release(){
        this.octree.Release();
    }
}

export default class CollisionManager{
    
    layers:Array< Layer>;
    constructor(){
        this.layers=new Array();
        this.layers.push(new Layer());
    }

    Regist(arg_registObj: CollisionObject, layer: number): ID {
        if(this.layers.length<= layer){
            layer=0;
        }
        return this.layers[layer].Regist(arg_registObj);
    }
    UnRegist(arg_ID: ID, layer: number) {
        if(this.layers.length<= layer){
            layer=0;
        }
        this.layers[layer].UnRegist(arg_ID);
    }

    AddLayer(){
        this.layers.push(new Layer());
    }
    Check(): void {
        this.layers.forEach(layer=>layer.Check());
    }
    Release():void{
        this.layers.forEach(layer=>layer.Release() );
        this.layers.length=0;
    }

}