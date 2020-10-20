import Vector3 from "../Math/Vector3";
import Input from "../Tool/Input";
import MathHelper from "../Tool/MathHelper";
import Transform from "../Transform";
import Component from "./Component";

export default class CameraChaser extends Component{

    minY:number;
    offsetZ:number;
    offsetX:number;
    targetTransform:Transform;
    speed:number;

    velocity:Vector3;
    constructor(arg_speed:number,arg_tragetTransform:Transform){
        super();
        this.speed=arg_speed;
        this.targetTransform=arg_tragetTransform;
        this.velocity=new Vector3(0,0,0);
    }

    OnSet(){
        this.offsetX=this.gameObject.transform.Position.x-this.targetTransform.Position.x;
        this.offsetZ=this.gameObject.transform.Position.y-this.targetTransform.Position.y;
    }

    Update(){
        //this.velocity.y = this.targetTransform.Position.y;
        var xlength=this.gameObject.transform.Position.x-this.targetTransform.Position.x+this.offsetX;
        
        //this.velocity.x =xlength/Math.abs(xlength)* xlength*xlength*this.speed;

        if(xlength*this.speed>1){
            this.velocity.x =xlength/2;
        
        }else
        if(xlength>3){
            this.velocity.x =-1*(xlength-3)/Math.abs(xlength-3)* (xlength-3)*(xlength-3)*this.speed;
        }else if(xlength<3){
            this.velocity.x =-1*(xlength-3)/Math.abs(xlength+3)* (xlength+3)*(xlength+3)*this.speed;
        }else{
            this.velocity.x=0;
        }

        var z= this.gameObject.transform.Position.z- this.targetTransform.Position.z+this.offsetZ;

        const zMin=-4.0;
        const zMax=-4.5;
        if(z>zMin){
            console.log("zMOve");
            this.velocity.z =-1* (z-zMin)*(z-zMin)*this.speed;
        }
        else if(z<zMax){
            this.velocity.z = (z-zMax)*(z-zMax)*this.speed*1.5;
        }
        else{
             this.velocity.z=0;
         }
console.log(z);

        this.gameObject.transform.SetPosition.Add_b((this.velocity));
    }
}