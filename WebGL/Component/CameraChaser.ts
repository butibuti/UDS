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
        if(xlength>17){
            this.velocity.x =-1*(xlength-17)/Math.abs(xlength-17)* (xlength-17)*(xlength-17)*this.speed;
        }else if(xlength<3){
            this.velocity.x =-1*(xlength-3)/Math.abs(xlength+3)* (xlength+3)*(xlength+3)*this.speed;
        }else{
            this.velocity.x=0;
        }

        var z= this.gameObject.transform.Position.z- this.targetTransform.Position.z+this.offsetZ;

        if(z>-0.5){
            this.velocity.z =-1*(z)/Math.abs(z+0.5)* (z+0.5)*(z+0.5)*this.speed;
        }else if(z<-3.5){
            this.velocity.z =-1*(z)/Math.abs(z+3.5)* (z+3.5)*(z+3.5)*this.speed;
        }else{
            this.velocity.z=0;
        }


        this.gameObject.transform.SetPosition.Add_b((this.velocity));
    }
}