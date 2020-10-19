import ModelDrawComponent from "../Component/ModelDrawComponent";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import { PrimitiveType } from "../Parts/Collision/PrimitiveType";
import RandomHelper from "../Tool/RandomHelper";
import Transform from "../Transform";
import DamageObstacleComponent from "./DamageObStacle";
import ObstacleComponent from "./ObstacleComponent";
import RoundTrip from "./RoundTrip";
import Stage from "./Stage";
import StageParts from "./StageParts";

export default class StageParts_Safe extends StageParts{
    meshName:string;
    size:Vector3;
    carCount:number;
    ary_obstacles:Array<GameObject>;
    stage:Stage;
    constructor(arg_stage:Stage, arg_meshName:string){
        super();
        this.meshName= arg_meshName;
        
        this.carCount=RandomHelper.GetRandomInt(0,3);
        this.ary_obstacles=new Array(this.carCount);
        this.stage=arg_stage;
        
    }

    OnSet(){
        var modelTransform=new Transform(new Vector3(0,0.5,0),new Vector3(0,0,0),new Vector3(9,1,1));
        modelTransform.BaseTransform=this.gameObject.transform;
        this.gameObject.SetComponent(new ModelDrawComponent(false, "cube_position","green","ambient",1,false,null,modelTransform));

        var time=RandomHelper.GetRandomInt(-6,6);
        for(var i=0;i<this.carCount;i++){
            var carTrans= new Transform(new Vector3(time,-0.5,0));
            carTrans.BaseTransform=this.gameObject.transform;
            var obstacle=new ObstacleComponent(PrimitiveType.box_AABB,new Vector3(1,1,1), this.stage,"red");

            var obs=this.gameObject.Manager.AddGameObject("obstacle",carTrans,"obstacle",[obstacle]);

            this.ary_obstacles.push(obs);
        }
        
    }
    Destroy(){
        this.stage=null;
        this.gameObject. Dead();
        this.ary_obstacles.forEach(obstacle=>{obstacle.Dead()});
    }


}