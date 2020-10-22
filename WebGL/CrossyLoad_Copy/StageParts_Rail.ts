import ModelDrawComponent from "../Component/ModelDrawComponent";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import RandomHelper from "../Tool/RandomHelper";
import Transform from "../Transform";
import DamageObstacleComponent from "./DamageObStacle";
import RoundTrip_Wait from "./RoundTrip_Wait";
import SignalComponent from "./SignalComponent";
import Stage from "./Stage";
import StageParts from "./StageParts";

export default class StageParts_Rail extends StageParts{
    meshName:string;
    size:Vector3;
    stage:Stage;
    speed:number;
    train:GameObject;
    baseMaterialName:string;
    constructor(arg_stage:Stage,arg_materialName:string, arg_meshName:string,arg_size:Vector3){
        super();
        this.meshName= arg_meshName;
        this.size=arg_size;
        this.stage=arg_stage;
        this.baseMaterialName=arg_materialName;
    }

    OnSet(){
        var modelTransform=new Transform(new Vector3(0,0.5,0),new Vector3(0,0,0),new Vector3(9,1,1));
        modelTransform.BaseTransform=this.gameObject.transform;
        this.gameObject.SetComponent(new ModelDrawComponent(false, "cube_position",this.baseMaterialName,"ambient",1,false,null,modelTransform));

        var direction=RandomHelper.GetRandomInt(0,1);
        if(direction<1){
            direction=-1;
        }
        var time=RandomHelper.GetRandomInt(3,5);
        var currentTime=RandomHelper.GetRandomInt(1,4);

        currentTime=Math.min(time, currentTime)*100;
        time*=200;

        var trainTrans= new Transform();
        trainTrans.BaseTransform=this.gameObject.transform;
        var damage=new DamageObstacleComponent(this.stage,new Vector3(15,1,1));

        var trainModelTransform=new Transform(new Vector3(0,0,0),new Vector3(180,90*-direction,0),new Vector3(0.0025,0.0025,0.0025));
        trainModelTransform.BaseTransform=trainTrans;
        var trainModel= (new ModelDrawComponent(false, "nonTexcube","red","onlyMaterial",1,false,this.meshName,trainModelTransform));
        
        var trip=new RoundTrip_Wait(new Vector3(20*direction,-0.5,0),new Vector3(-20*direction,-0.5,0),70,0,time,currentTime,true);
        this.train=(this.gameObject.Manager.AddGameObject("train",trainTrans,"train",[damage,trip,trainModel]));
        
        var signal=new SignalComponent(time,currentTime,time-120,120);

        this.gameObject.SetComponent(signal);
    }
    Destroy(){
        this.stage=null;
        this.gameObject. Dead();
        this.train.Dead();
    }


}