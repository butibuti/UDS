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

  const stageRange=[ [1,1,2,2,2,3],[1,1,1,2,2,2],[1,1,2,3,3,4]];
  const stageArrayLength=512;

  const ary_cars=["crab","turtle"]

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

    stageArray:Int16Array;

    constructor(arg_scene:IScene){
        super();
        this.playScene=arg_scene;
        this.startPos=new Vector3(0,-0.5,1);


        this.coinse=this.playScene.GetSceneManager().GetResourceContainer().GetSound("title");
        this.ary_stagePrts=new Array();

        this.stageArray=new Int16Array(stageArrayLength);
        this.StageArrayCreate();
    }
    StageArrayCreate(){

        for(var i=0;i<stageArrayLength;){
            var stage=RandomHelper.GetRandomInt(0,2);
            var range=stageRange[stage][ RandomHelper.GetRandomInt(1,5)];
            for(var j=0;j<range;j++,i++){
                this.stageArray[i]=stage;
            }
        }
    }
    OnSet(){
        
        this.playerComponent=new PlayerComponent(15,this);
        this.player=this.playScene.GetGameManager().AddGameObject("player",new Transform(this.startPos.Clone(),new Vector3(0,0,0),new Vector3(1,1,1)),"player",[this.playerComponent]);
      
        this.player.SetComponent(new CollisionComponent(PrimitiveType.box_AABB,new Vector3(1.0,1.0,1.0),0));
        this.player.transform.BaseTransform=this.gameObject.transform;
      
        this.ui=new CrossyUI();
        this.playScene.GetGameManager().AddGameObject("ui",new Transform(),"ui",[this.ui]);
      

        var camera=this.playScene.GetGameManager().AddGameObject("cameraman",this.playScene.GetCamera("main").transform);
        camera.SetComponent(new CameraChaser(0.01,this.player.transform));
        camera.transform.BaseTransform=this.gameObject.transform;
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
            //this.gameObject.transform.TranslateZ(1.0);
            this.ui.SetArrival(this.arrival);
            if(this.arrival>this.stageStock){
                this.StageAdd(this.arrival+7);
                this.StageDestroy();
            }
        }
    }
    Create(){


        this.CreateSafeZone(3);
        for(var i=0;i<11;i++){
            this.StageAdd(i);
        }

        for(var i=0;i<3;i++){

            var coin=new CoinComponent(this);
            var coinTrans=new Transform(new Vector3(0,-0.5,-5+i));
            coinTrans.BaseTransform=this.gameObject.transform;
            
            this.playScene.GetGameManager().AddGameObject("coin",coinTrans,"coin",[coin]);
            
        }
    }
    Destroy(){
        this.gameObject.Manager.GetGameObjects(GameObjectIDManager.GetID("coin")).forEach(coin=>coin.Dead());
        this.ary_stagePrts.forEach(parts=>parts.Destroy());

        this.ary_stagePrts.length=0;
    }
    StageAdd(arg_addpos:number){

        var addStageTransform=new Transform(new Vector3(0,0,-(arg_addpos)));
        addStageTransform.BaseTransform=this.gameObject.transform;
        
        var stageNum=this.stageArray[arg_addpos%stageArrayLength];

        switch(stageNum){
            case 0:
                var safe=new StageParts_Safe(this);
                this.ary_stagePrts.push(safe);
                this.playScene.GetGameManager().AddGameObject("safeArea",addStageTransform,"safeArea",[safe]);
            
            break;
            case 1:
                var road=new StageParts_Road(this,ary_cars[RandomHelper.GetRandomInt(0,1)],new Vector3(1,1,1),RandomHelper.GetRandomInt(1,2));
                this.ary_stagePrts.push(road);
                this.playScene.GetGameManager().AddGameObject("road",addStageTransform,"road",[road]);
            
            break;
            
            case 2:
                var rail=new StageParts_Rail(this,"utubo",new Vector3(1,1,1));
                this.ary_stagePrts.push(rail);
                this.playScene.GetGameManager().AddGameObject("rail",addStageTransform,"rail",[rail]);
            
            break;
        }
        
    }
    CreateSafeZone(arg_safeCount:number){
        for(var i=0;i<arg_safeCount;i++){

            var addStageTransform=new Transform(new Vector3(0,0,arg_safeCount-i));
            addStageTransform.BaseTransform=this.gameObject.transform;
              
            var safe=new StageParts_Safe(this);
            this.ary_stagePrts.push(safe);
            this.playScene.GetGameManager().AddGameObject("safeArea",addStageTransform,"safeArea",[safe]);
            
        }
    }
    StageDestroy(){

        this.ary_stagePrts[0].Destroy();
        this.ary_stagePrts.splice(0,1);
    }

    Update(){
        //this.gameObject.transform.TranslateZ(0.01);

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
        this.StageArrayCreate();
        this.gameObject.transform.SetPositionZ(0);
        this.playerComponent.Reset();
        this.player.Update();
        this.coin=0;
        this.arrival=0;
        this.Destroy();
        this.Create();
        this.ui.SetCoinNum(this.coin);
        this.ui.SetArrival(this.arrival);
        this.playScene.GetCamera("main").transform.Position=new Vector3(2,-8,6);
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