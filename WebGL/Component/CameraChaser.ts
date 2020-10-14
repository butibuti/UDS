import Vector3 from "../Math/Vector3";
import Input from "../Tool/Input";
import MathHelper from "../Tool/MathHelper";
import Transform from "../Transform";
import Component from "./Component";

export default class CameraChaser extends Component{

    minY:number;
    offsetY:number;
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
        this.offsetY=this.gameObject.transform.Position.y-this.targetTransform.Position.y;
    }

    Update(){
        //this.velocity.y = this.targetTransform.Position.y;
        var xlength=this.targetTransform.Position.x-this.gameObject.transform.Position.x+this.offsetX;
        
        this.velocity.x =xlength/Math.abs(xlength)* xlength*xlength*this.speed;

        if(xlength*this.speed>1){
            this.velocity.x =xlength/2;
        }

        var y= this.gameObject.transform.Position.y- this.targetTransform.Position.y-this.offsetY;

        if(y>10){
            this.velocity.y =-1*(y)/Math.abs(y-10)* (y-10)*(y-10)*this.speed;
        }else if(y<-10){
            this.velocity.y =-1*(y+1)/Math.abs(y+10)* (y+10)*(y+10)*this.speed;
        }else{
            this.velocity.y=0;
        }


        this.gameObject.transform.SetPosition.Add_b((this.velocity));
    }
}