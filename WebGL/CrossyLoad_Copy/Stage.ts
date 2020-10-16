import CameraChaser from "../Component/CameraChaser";
import CollisionComponent from "../Component/CollisionComponent";
import Component from "../Component/Component";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import SinWaveMover from "../Component/SinWaveMover";
import GameObject from "../GameObject/GameObject";
import Vector2 from "../Math/Vector2";
import Vector3 from "../Math/Vector3";
import ISound from "../Resource/ISound";
import IScene from "../Scene/IScene";
import Transform from "../Transform";
import CheckPoint from "./CheckPoint";
import CoinComponent from "./CoinComponent";
import CrossyUI from "./CrossyUI";

import ObstacleComponent from "./ObstacleComponent";
import PlayerComponent from "./PlayerComponent";

enum PrimitiveType{
    sphere=0,box_AABB=1,box_OBB=2,point=3,
  }
export default class Stage extends Component{

    ary_obstacle:Array< ObstacleComponent>;
    ary_coin:Array<CoinComponent>;

    playScene:IScene;

    startPos:Vector3;
    player:GameObject;
    ui:CrossyUI;
    playerComponent:PlayerComponent;

    coinse:ISound;

    coin:number=0;

    arrival:number=0;

    constructor(arg_scene:IScene){
        super();
        this.playScene=arg_scene;
        this.ary_obstacle=new Array();
        this.ary_coin=new Array();
        this.startPos=new Vector3(0,-0.5,0);


        this.coinse=this.playScene.GetSceneManager().GetResourceContainer().GetSound("title");
    
    }
    OnSet(){
        
        console.log("stage");
        this.playerComponent=new PlayerComponent(15,this);
        this.player=this.playScene.GetGameManager().AddGameObject("cube",new Transform(this.startPos.Clone(),new Vector3(0,0,0),new Vector3(1,1,1)),"player",[this.playerComponent]);
      
        this.player.SetComponent(new CollisionComponent(PrimitiveType.box_OBB,new Vector3(1.0,1.0,1.0),0));
        this.player.transform.BaseTransform=this.gameObject.transform;
      
        this.ui=new CrossyUI();
        this.playScene.GetGameManager().AddGameObject("ui",new Transform(),"ui",[this.ui]);
      

        for(var i=0;i<3;i++){

            var coin=new CoinComponent(this);
            var coinTrans=new Transform(new Vector3(0,-0.5,-5+i));
            coinTrans.BaseTransform=this.gameObject.transform;
            this.playScene.GetGameManager().AddGameObject("coin",coinTrans,"coin",[coin]);
            this.ary_coin.push(coin);
        }
        var camera=this.playScene.GetGameManager().AddGameObject("cameraman",this.playScene.GetCamera("main").transform);
        camera.SetComponent(new CameraChaser(0.01,this.player.transform));
        var floor=this.playScene.GetGameManager().AddGameObject("floor",new Transform(new Vector3(0,0,0),new Vector3(90,0,0),new Vector3(10,10,5)));
        floor.SetComponent(new  ModelDrawComponent(false, "plane","caloryMaterial","texShader",1,false));
        floor.transform.BaseTransform=this.gameObject.transform;
        for(var i=0;i<5;i++){
            var obstacleTrans=new Transform(new Vector3(3-i,-0.5,-4));
            obstacleTrans.BaseTransform=this.gameObject.transform;
            var obstacleComponent=new ObstacleComponent(PrimitiveType.box_OBB,new Vector3(1,1,1),this,"green");
            this.playScene.GetGameManager().AddGameObject("obstacle",obstacleTrans,"obstatcle",[obstacleComponent]);
        }
}
    OnRemove(){
        this.playScene=null;
    }


    AddObstacle(obstacle:ObstacleComponent){
        this.ary_obstacle.push(obstacle);
        obstacle.stage=this;
    }

    GetRing(){
        
    }

    GetCoin(){
        this.coinse.Play_new();
        this.coin++;
        this.ui.SetCoinNum(this.coin);
    }

    GoFront(arg_z:number){
        arg_z=Math.trunc(-arg_z);
        if(this.arrival< arg_z){
            this.arrival=arg_z;
            this.ui.SetArrival(this.arrival);
        }

    }

    Update(){
        this.gameObject.transform.TranslateZ(0.01);
    }

    Failed(){
        
     }
     ToStart(){
         this.playerComponent.ToStart();
     }

    Reset(){
        this.playerComponent.Reset();
    }


}