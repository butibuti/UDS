import Vector3 from "../Math/Vector3";
import Input from "../Tool/Input";
import MathHelper from "../Tool/MathHelper";
import Transform from "../Transform";
import Component from "./Component";

const zMin=-2.5;
const zMax=-2.25;
const xMin=2.0;
const xMax=3.0;

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
        


        if(xlength*this.speed>1){
            this.velocity.x =xlength/2;
        
        }else
        if(xlength>xMax){
            this.velocity.x =-1* (xlength-xMax)*(xlength-xMax)*this.speed;
        }else
        if(xlength<xMin)
        {
            this.velocity.x =(xlength-xMin)*(xlength-xMin)*this.speed;
        }else{
            this.velocity.x=0;
        }

        var z= this.gameObject.transform.Position.z- this.targetTransform.Position.z+this.offsetZ;

        //console.log(z);
        if(z>zMax){
            this.velocity.z =-1* (z-zMax)*(z-zMax)*this.speed;
        }
        else if(z<zMin){
            this.velocity.z = (z-zMin)*(z-zMin)*this.speed*2;
        }
        else{
             this.velocity.z=0;
         }

        this.gameObject.transform.SetPosition.Add_b((this.velocity));
    }
}