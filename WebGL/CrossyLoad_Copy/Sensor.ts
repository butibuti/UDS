import { transform } from "typescript";
import Component from "../Component/Component";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";


export default class Sensor extends Component{
    parentObject:GameObject;
    offSet:Vector3;
    canMove:boolean=true;
    constructor(arg_parent:GameObject,arg_offSet:Vector3){
        super();
        this.parentObject=arg_parent;
        this.offSet=arg_offSet;
    }
    OnSet(){
        this.gameObject.transform.Position=this.parentObject.transform.Position.Add_b(this.offSet);
        this.gameObject.transform.Scale=new Vector3(0.5,0.5,0.5);
        this.gameObject.SetComponent(new ModelDrawComponent(false, "cube","red","pointLight",1,false,null)) as ModelDrawComponent;
        
    }
    SetPosition(arg_position:Vector3){
        
        this.gameObject.transform.Position=arg_position.Add(this.offSet);
    }
    GetPosition():Vector3{
        
        return this.gameObject.transform.Position;
        
    }
    CanMove():boolean{
        return this.canMove;
    }
}