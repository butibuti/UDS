import ModelDrawComponent from "../Component/ModelDrawComponent";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import GameObjectIDManager from "../Parts/GameObjectIDManager";
import RandomHelper from "../Tool/RandomHelper";
import Transform from "../Transform";
import DamageObstacleComponent from "./DamageObStacle";
import RoundTrip from "./RoundTrip";
import RoundTrip_Wait from "./RoundTrip_Wait";
import Stage from "./Stage";
import StageParts from "./StageParts";

export default class StageParts_Rail extends StageParts{
    meshName:string;
    size:Vector3;
    stage:Stage;
    speed:number;
    train:GameObject;
    constructor(arg_stage:Stage, arg_meshName:string,arg_size:Vector3){
        super();
        this.meshName= arg_meshName;
        this.size=arg_size;
        this.stage=arg_stage;
    }

    OnSet(){
        var modelTransform=new Transform(new Vector3(0,0.5,0),new Vector3(0,0,0),new Vector3(9,1,1));
        modelTransform.BaseTransform=this.gameObject.transform;
        this.gameObject.SetComponent(new ModelDrawComponent(false, "cube_position","red","ambient",1,false,null,modelTransform));

        var time=RandomHelper.GetRandomInt(1,3);
        var currentTime=RandomHelper.GetRandomInt(1,4);
        var trainTrans= new Transform();
        trainTrans.BaseTransform=this.gameObject.transform;
        var damage=new DamageObstacleComponent(this.stage,"red");



        var trip=new RoundTrip_Wait(new Vector3(15,-0.5,0),new Vector3(-15,-0.5,0),70,0,time*200,Math.min(time, currentTime)*100,true);
        this.train=(this.gameObject.Manager.AddGameObject("car",trainTrans,"car",[damage,trip]));
        
        
    }
    Destroy(){
        this.stage=null;
        this.gameObject. Dead();
        this.train.Dead();
    }


}