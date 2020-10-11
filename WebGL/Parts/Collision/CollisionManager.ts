import Vector3 from "../../Math/Vector3";
import ID from "../ID";
import CollisionObject from "./CollisionObject";
import CollisionLayer from "./Octree";

class Layer{
    octree:CollisionLayer;
    constructor(){
        this.octree=new CollisionLayer(6,new Vector3(-30,-30,-30),new Vector3(30,30,30))
    }

    Regist(arg_registObj: CollisionObject): ID {
        
        return this.octree.RegistCollisionObj(arg_registObj);
    }
    UnRegist(arg_ID: ID) {
        
        this.octree.UnRegistCollisionObj(arg_ID);
    }
    Check(){
        this.octree.Update();
        
        var  list_objStack=new Array<CollisionObject >();
        var  vec_collisionObjects=new Array<CollisionObject >();
		
        this.octree.CreateCollisionObjectList(0, vec_collisionObjects, list_objStack);
        
        //console.log(vec_collisionObjects);
        for(var i=0;i<vec_collisionObjects.length;i+=2){
         
                vec_collisionObjects[i].HitCheck(vec_collisionObjects[i+1]);
                
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