import CameraChaser from "../Component/CameraChaser";
import CollisionComponent from "../Component/CollisionComponent";
import Component from "../Component/Component";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import SinWaveMover from "../Component/SinWaveMover";
import GameObject from "../GameObject/GameObject";
import Vector2 from "../Math/Vector2";
import Vector3 from "../Math/Vector3";
import GameObjectIDManager from "../Parts/GameObjectIDManager";
import ISound from "../Resource/ISound";
import IScene from "../Scene/IScene";
import Input from "../Tool/Input";
import Transform from "../Transform";
import CheckPoint from "./CheckPoint";
import CoinComponent from "./CoinComponent";
import CrossyUI from "./CrossyUI";
import DamageObstacleComponent from "./DamageObStacle";

import ObstacleComponent from "./ObstacleComponent";
import PlayerComponent from "./PlayerComponent";

enum PrimitiveType{
    sphere=0,box_AABB=1,box_OBB=2,point=3,
  }
export default class Stage extends Component{


    playScene:IScene;

    startPos:Vector3;
    player:GameObject;
    ui:CrossyUI;
    playerComponent:PlayerComponent;

    coinse:ISound;

    coin:number=0;

    arrival:number=0;

    fadeCount:number=-1;

    startWait=30;

    isFailed:boolean;

    constructor(arg_scene:IScene){
        super();
        this.playScene=arg_scene;
        this.startPos=new Vector3(0,-0.5,0);


        this.coinse=this.playScene.GetSceneManager().GetResourceContainer().GetSound("title");
        
    }
    OnSet(){
        
        this.playerComponent=new PlayerComponent(15,this);
        this.player=this.playScene.GetGameManager().AddGameObject("cube",new Transform(this.startPos.Clone(),new Vector3(0,0,0),new Vector3(1,1,1)),"player",[this.playerComponent]);
      
        this.player.SetComponent(new CollisionComponent(PrimitiveType.box_AABB,new Vector3(1.0,1.0,1.0),0));
        this.player.transform.BaseTransform=this.gameObject.transform;
      
        this.ui=new CrossyUI();
        this.playScene.GetGameManager().AddGameObject("ui",new Transform(),"ui",[this.ui]);
      

        var camera=this.playScene.GetGameManager().AddGameObject("cameraman",this.playScene.GetCamera("main").transform);
        camera.SetComponent(new CameraChaser(0.01,this.player.transform));
        
        var floor=this.playScene.GetGameManager().AddGameObject("floor",new Transform(new Vector3(0,0,0),new Vector3(90,0,0),new Vector3(10,10,5)));
        floor.SetComponent(new  ModelDrawComponent(false, "plane","caloryMaterial","texShader",1,false));
        floor.transform.BaseTransform=this.gameObject.transform;
        this.Create();
}
    OnRemove(){
        this.playScene=null;
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
    Create(){
        for(var i=0;i<3;i++){

            var coin=new CoinComponent(this);
            var coinTrans=new Transform(new Vector3(0,-0.5,-5+i));
            coinTrans.BaseTransform=this.gameObject.transform;
            
            this.playScene.GetGameManager().AddGameObject("coin",coinTrans,"coin",[coin]);
            
        }
        for(var i=0;i<5;i++){
            var obstacleTrans=new Transform(new Vector3(3-i,-0.5,-4));
            obstacleTrans.BaseTransform=this.gameObject.transform;
            
            var obstacleComponent=new ObstacleComponent(PrimitiveType.box_AABB,new Vector3(1,1,1),this,"green");
            this.playScene.GetGameManager().AddGameObject("obstacle",obstacleTrans,"obstacle",[obstacleComponent]);
        }
        for(var i=0;i<5;i++){
            var obstacleTrans=new Transform(new Vector3(3-i,-0.5,-6));
            obstacleTrans.BaseTransform=this.gameObject.transform;
            
            var damageObstacleComponent=new DamageObstacleComponent(this,"green");
            this.playScene.GetGameManager().AddGameObject("damageObstacle",obstacleTrans,"damageObstacle",[damageObstacleComponent]);
        }
        
    }
    Destroy(){
        this.gameObject.Manager.GetGameObjects(GameObjectIDManager.GetID("coin")).forEach(coin=>coin.Dead());
        
        this.gameObject.Manager.GetGameObjects(GameObjectIDManager.GetID("obstacle")).forEach(obs=>obs.Dead());
        this.gameObject.Manager.GetGameObjects(GameObjectIDManager.GetID("damageObstacle")).forEach(obs=>obs.Dead());
    }

    Update(){
        this.gameObject.transform.TranslateZ(0.01);

        if(this.fadeCount==0){
            this.Reset();
            this.ui.HideOut();
            this.fadeCount=-1;this.startWait=30;
        }else
        if(this.fadeCount>0){
            this.fadeCount--;
        }
        if(this.startWait<=0){
            this.playerComponent.SetCanControll(true);
        }else{
            this.startWait--;
        }
    }

    Failed(){if(this.fadeCount>0){
        return;
    }
        this.ui.ShowRetry();
        Input.AddKeyDownEvent(this,"stage_retry",true);
        this.playerComponent.SetCanControll(false);
        this.startWait=30;
     }
     ToStart(){
         this.playerComponent.ToStart();
     }

    Reset(){
        this.gameObject.transform.SetPositionZ(0);
        this.playerComponent.Reset();
        this.coin=0;
        this.arrival=0;
        this.Destroy();
        this.Create();
        this.ui.SetCoinNum(this.coin);
        this.ui.SetArrival(this.arrival);

    }


    OnKeyDown(e:KeyboardEvent){
        if(this.fadeCount>0){
            return;
        }
        Input.RemoveKeyDownEvent("stage_retry");
        this.ui.HideRetry();
        this.ui.Reset();
        this.ui.HideIn();
        this.fadeCount=60;
    }
}