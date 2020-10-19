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
import RandomHelper from "../Tool/RandomHelper";
import Transform from "../Transform";
import CheckPoint from "./CheckPoint";
import CoinComponent from "./CoinComponent";
import CrossyUI from "./CrossyUI";
import DamageObstacleComponent from "./DamageObStacle";

import ObstacleComponent from "./ObstacleComponent";
import PlayerComponent from "./PlayerComponent";
import StageParts from "./StageParts";
import StageParts_Road from "./StageParts_Road";
import StageParts_Safe from "./StageParts_Safe";
import StageParts_Rail from "./StageParts_Rail";

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

    ary_stagePrts:Array<StageParts>;

    stageStock=3;

    constructor(arg_scene:IScene){
        super();
        this.playScene=arg_scene;
        this.startPos=new Vector3(0,-0.5,0);


        this.coinse=this.playScene.GetSceneManager().GetResourceContainer().GetSound("title");
        this.ary_stagePrts=new Array();
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
        
        // var floor=this.playScene.GetGameManager().AddGameObject("floor",new Transform(new Vector3(0,0,0),new Vector3(90,0,0),new Vector3(10,10,5)));
        // floor.SetComponent(new  ModelDrawComponent(false, "plane","caloryMaterial","texShader",1,false));
        // floor.transform.BaseTransform=this.gameObject.transform;
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
            if(this.arrival>this.stageStock){
                this.StageAdd();
            }
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
            var safeTransform=new Transform(new Vector3(0,0,-i));
            safeTransform.BaseTransform=this.gameObject.transform;
            
            //var damageObstacleComponent=new DamageObstacleComponent(this,"green");
            var safe=new StageParts_Safe(this,"");
            this.ary_stagePrts.push(safe);
            this.playScene.GetGameManager().AddGameObject("safeArea",safeTransform,"safeArea",[safe]);
        
        }
        for(var i=0;i<5;i++){
            var roadTransform=new Transform(new Vector3(0,0,-5-i));
            roadTransform.BaseTransform=this.gameObject.transform;
            
            //var damageObstacleComponent=new DamageObstacleComponent(this,"green");
            var road=new StageParts_Road(this,"",new Vector3(1,1,1),RandomHelper.GetRandomInt(1,2));
            this.ary_stagePrts.push(road);
            this.playScene.GetGameManager().AddGameObject("road",roadTransform,"road",[road]);
        }
        for(var i=0;i<1;i++){
            var railTransform=new Transform(new Vector3(0,0,-10-i));
            railTransform.BaseTransform=this.gameObject.transform;
            
            //var damageObstacleComponent=new DamageObstacleComponent(this,"green");
            var rail=new StageParts_Rail(this,"",new Vector3(1,1,1));
            this.ary_stagePrts.push(rail);
            this.playScene.GetGameManager().AddGameObject("rail",railTransform,"rail",[rail]);
        }
        
    }
    Destroy(){
        this.gameObject.Manager.GetGameObjects(GameObjectIDManager.GetID("coin")).forEach(coin=>coin.Dead());
        this.ary_stagePrts.forEach(parts=>parts.Destroy());

        this.ary_stagePrts.length=0;
    }
    StageAdd(){

        var railTransform=new Transform(new Vector3(0,0,-(this.arrival+7)));
        railTransform.BaseTransform=this.gameObject.transform;
        
        //var damageObstacleComponent=new DamageObstacleComponent(this,"green");
        var rail=new StageParts_Rail(this,"",new Vector3(1,1,1));
        this.ary_stagePrts.push(rail);
        this.playScene.GetGameManager().AddGameObject("rail",railTransform,"rail",[rail]);

        this.ary_stagePrts[0].Destroy();
        this.ary_stagePrts.splice(0,1);
        //this.gameObject.Manager.LogObjectCount();
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
        }else if(this.fadeCount>0){
            this.startWait--;
        }
    }

    Failed(){
        if(this.fadeCount>0){
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
        this.player.Update();
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