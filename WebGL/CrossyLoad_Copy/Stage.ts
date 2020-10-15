import CameraChaser from "../Component/CameraChaser";
import CollisionComponent from "../Component/CollisionComponent";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import SinWaveMover from "../Component/SinWaveMover";
import GameObject from "../GameObject/GameObject";
import Vector2 from "../Math/Vector2";
import Vector3 from "../Math/Vector3";
import IScene from "../Scene/IScene";
import Transform from "../Transform";
import CheckPoint from "./CheckPoint";
import CoinComponent from "./CoinComponent";

import ObstacleComponent from "./ObstacleComponent";
import PlayerComponent from "./PlayerComponent";

enum PrimitiveType{
    sphere=0,box_AABB=1,box_OBB=2,point=3,
  }
export default class Stage{

    ary_obstacle:Array< ObstacleComponent>;
    ary_coin:Array<CoinComponent>;

    playScene:IScene;

    startPos:Vector3;
    player:GameObject;
    playerComponent:PlayerComponent;

    constructor(arg_scene:IScene){
        this.ary_obstacle=new Array();
        this.ary_coin=new Array();
        this.playScene=arg_scene;
        this.startPos=new Vector3(0,-0.5,0);

        this.playerComponent=new PlayerComponent(15);
      this.player=this.playScene.GetGameManager().AddGameObject("cube",new Transform(this.startPos.Clone(),new Vector3(0,0,0),new Vector3(1,1,1)),"player",[this.playerComponent]);
      
      this.player.SetComponent(new CollisionComponent(PrimitiveType.box_OBB,new Vector3(1.0,1.0,1.0),0));
       
      

      
      var camera=this.playScene.GetGameManager().AddGameObject("cameraman",this.playScene.GetCamera("main").transform);
      camera.SetComponent(new CameraChaser(0.01,this.player.transform));
      
    }

    Release(){
        this.playScene=null;
        this.ary_obstacle.length=0;
    }


    AddObstacle(obstacle:ObstacleComponent){
        this.ary_obstacle.push(obstacle);
        obstacle.stage=this;
    }

    GetRing(){


    }

    GetCoin(){

    }

    Failed(){
        
     }
     Start(){
         this.playerComponent.ToStart();
     }

    Reset(){
        this.playerComponent.Reset();
        this.ary_coin.forEach(coin=>coin.ReSet());
    }


}