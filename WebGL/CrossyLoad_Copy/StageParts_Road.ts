import ModelDrawComponent from "../Component/ModelDrawComponent";
import TransformAnimation from "../Component/TransformAnimation";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import Easing from "../Tool/Easing";
import RandomHelper from "../Tool/RandomHelper";
import Transform from "../Transform";
import CoinComponent from "./CoinComponent";
import DamageObstacleComponent from "./DamageObStacle";
import RoundTrip from "./RoundTrip";
import Stage from "./Stage";
import StageParts from "./StageParts";


const ary_positions_reset=[0,1,2,3,4,-4,-3,-2,-1,];

const randomAryLength=9;


var ary_positions=ary_positions_reset.slice();

const ary_coinCount=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1];

export default class StageParts_Road extends StageParts{
    meshName:string;
    size:Vector3;
    rotate:Vector3;
    carCount:number;
    ary_cars:Array<GameObject>;
    stage:Stage;
    speed:number;
    baseMaterialName:string;
    constructor(arg_stage:Stage,arg_materialName:string, arg_meshName:string,arg_size:Vector3,arg_rotate:Vector3,arg_carCount:number){
        super();
        this.meshName= arg_meshName;
        this.size=arg_size;
        this.carCount=arg_carCount;
        this.ary_cars=new Array(this.carCount);
        this.rotate=arg_rotate;
        this.stage=arg_stage;
        this.baseMaterialName=arg_materialName;
    }

    OnSet(){
        var modelTransform=new Transform(new Vector3(0,0.5,0),new Vector3(0,0,0),new Vector3(9,1,1));
        modelTransform.BaseTransform=this.gameObject.transform;
        this.gameObject.SetComponent(new ModelDrawComponent(false, "cube_position",this.baseMaterialName,"ambient",1,false,null,modelTransform));

        this.gameObject.SetComponent(new ModelDrawComponent(false, "sandwitchCube_position",this.baseMaterialName+"_d","ambient",1,false,null,modelTransform));

        var direction=RandomHelper.GetRandomInt(0,1);
        if(direction<1){
            direction=-1;
        }
        var time=RandomHelper.GetRandomInt(3,6);
        for(var i=0;i<this.carCount;i++){
            var carTrans= new Transform(new Vector3(0,0,0),new Vector3(0,0,0));
            carTrans.BaseTransform=this.gameObject.transform;
            var damage=new DamageObstacleComponent(this.stage,this.size);


            var carModelTransform=new Transform(new Vector3(0,0,0),new Vector3(180,90*direction,0).Add_b(this.rotate),new Vector3(0.0025,0.0025,0.0025));
            carModelTransform.BaseTransform=carTrans;
            var carModel= (new ModelDrawComponent(false, "nonTexcube","red","onlyMaterial",1,false,this.meshName,carModelTransform));
           
            var trip=new RoundTrip(new Vector3(8*direction,-0.5,0),new Vector3(-8*direction,-0.5,0),50*time,50*RandomHelper.GetRandomInt(0,time-1),true);
            this.ary_cars.push(this.gameObject.Manager.AddGameObject("car",carTrans,"car",[damage,trip,carModel]));
        }
        
        var coinCount=ary_coinCount[ RandomHelper.GetRandomInt(0,ary_coinCount.length-1)];
        for(var i=0;i<coinCount;i++){
            var position=RandomHelper.GetRandomInt(0,randomAryLength-(i));
            var coin=new CoinComponent(this.stage);
            var coinTrans=new Transform(new Vector3(ary_positions[position],-0.5,0));
            coinTrans.BaseTransform=this.gameObject.transform;
            
            this.ary_cars.push( this.gameObject.Manager.AddGameObject("coin",coinTrans,"coin",[coin]));
            ary_positions.splice(position,1);
        }

        ary_positions=ary_positions_reset.slice();
    }
    Destroy(){
        this.stage=null;
        this.gameObject. Dead();
        this.ary_cars.forEach(car=>car.Dead());
        this.ary_cars.length=0;
    }


}