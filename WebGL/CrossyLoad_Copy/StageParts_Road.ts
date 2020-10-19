import ModelDrawComponent from "../Component/ModelDrawComponent";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import RandomHelper from "../Tool/RandomHelper";
import Transform from "../Transform";
import DamageObstacleComponent from "./DamageObStacle";
import RoundTrip from "./RoundTrip";
import Stage from "./Stage";
import StageParts from "./StageParts";

export default class StageParts_Road extends StageParts{
    meshName:string;
    size:Vector3;
    carCount:number;
    ary_cars:Array<GameObject>;
    stage:Stage;
    speed:number;
    constructor(arg_stage:Stage, arg_meshName:string,arg_size:Vector3,arg_carCount:number){
        super();
        this.meshName= arg_meshName;
        this.size=arg_size;
        this.carCount=arg_carCount;
        this.ary_cars=new Array(this.carCount);
        this.stage=arg_stage;
    }

    OnSet(){
        var modelTransform=new Transform(new Vector3(0,0.5,0),new Vector3(0,0,0),new Vector3(9,1,1));
        modelTransform.BaseTransform=this.gameObject.transform;
        this.gameObject.SetComponent(new ModelDrawComponent(false, "cube_position","blue","ambient",1,false,null,modelTransform));

        var time=RandomHelper.GetRandomInt(3,6);
        for(var i=0;i<this.carCount;i++){
            var carTrans= new Transform();
            carTrans.BaseTransform=this.gameObject.transform;
            var damage=new DamageObstacleComponent(this.stage,"red");



            var trip=new RoundTrip(new Vector3(6,-0.5,0),new Vector3(-6,-0.5,0),50*time,50*RandomHelper.GetRandomInt(0,time-1),true);
            this.ary_cars.push(this.gameObject.Manager.AddGameObject("car",carTrans,"car",[damage,trip]));
        }
        
    }
    Destroy(){
        this.stage=null;
        this.gameObject. Dead();
        this.ary_cars.forEach(car=>car.Dead());
        this.ary_cars.length=0;
    }


}