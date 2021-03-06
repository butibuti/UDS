import CameraChaser from "../Component/CameraChaser";
import CollisionComponent from "../Component/CollisionComponent";
import Component from "../Component/Component";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import GameObjectIDManager from "../Parts/GameObjectIDManager";
import ISound from "../Resource/ISound";
import IScene from "../Scene/IScene";
import Input from "../Tool/Input";
import RandomHelper from "../Tool/RandomHelper";
import Transform from "../Transform";
import CoinComponent from "./CoinComponent";
import CrossyUI from "./CrossyUI";

import PlayerComponent from "./PlayerComponent";
import StageParts from "./StageParts";
import StageParts_Road from "./StageParts_Road";
import StageParts_Safe from "./StageParts_Safe";
import StageParts_Rail from "./StageParts_Rail";
import ModelDrawComponent from "../Component/ModelDrawComponent";

enum PrimitiveType{
    sphere=0,box_AABB=1,box_OBB=2,point=3,
  }

  const stageRange=[ [1,1,2,2,2,3],[1,1,1,2,2,2],[1,1,2,3,3,4]];
  const stageTable=[0,0,1,1,1,2,2,2];
  const stageArrayLength=512;

  const ary_cars=["crab","turtle","turtle","utubo"]
  const ary_carSizes=[new Vector3(1,1,1),new Vector3(1,1,1),new Vector3(1,1,1),new Vector3(5,1,1)]
  const ary_carRotate=[new Vector3(0,90,0),new Vector3(0,0,0),new Vector3(0,0,0),new Vector3(0,180,0)]

export default class Stage extends Component{


    playScene:IScene;

    startPos:Vector3;
    player:GameObject;
    ui:CrossyUI;
    playerComponent:PlayerComponent;

    projectionComponent:ModelDrawComponent;

    coinse:ISound;

    coin:number=0;

    arrival:number=0;

    isFailed:boolean;

    fadeCount:number=-1;
    startCount:number=-1;

    ary_stagePrts:Array<StageParts>;

    stageStock=2;

    stageArray:Int16Array;

    feverGage=0;

    gageMinLine=0.0;

    gageDownPase=0.4;
    gageUpPase=10;

    rank:number=null;
    firstScore:number=null;

    constructor(arg_scene:IScene,arg_projection:ModelDrawComponent){
        super();
        this.playScene=arg_scene;
        this.startPos=new Vector3(0,-0.5,1);

        this.projectionComponent=arg_projection;

        this.coinse=this.playScene.GetSceneManager().GetResourceContainer().GetSound("title");
        this.ary_stagePrts=new Array();

        this.stageArray=new Int16Array(stageArrayLength);
        this.StageArrayCreate();
    }
    StageArrayCreate(){

        for(var i=0;i<stageArrayLength;){
            var stage=stageTable[ RandomHelper.GetRandomInt(0,stageTable.length-1)];
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
        camera.SetComponent(new CameraChaser(0.02,this.player.transform));
        camera.transform.BaseTransform=this.gameObject.transform;
         this.Create();

         this.ui.HideIn();
}
    OnRemove(){
        this.playScene=null;
    }



    GetCoin(){
        this.coinse.Play_new();
        this.coin++;
        if( this.playerComponent.IsFever){

        }else
        this.gageMinLine+=this.gageUpPase;
        this.GageUp();
        
    }

    GageUp(){

        if(this.feverGage<100&&!this.playerComponent.IsFever){

            this.feverGage+=this.gageUpPase;
        }
        this.gageDownPase=0.2;
        if(this.feverGage>=100){
            this.ui.FeverStart();
            this.gageMinLine=0;
        this.playerComponent.FeverStart();
        }
    }
    GoFront(arg_z:number){
        arg_z=Math.floor(-arg_z)+2;

        if(arg_z==1){
            
        this.ui.HideOut();
        }

        if(this.arrival< arg_z){
            this.arrival=arg_z;
            this.GageUp();
            this.gameObject.transform.TranslateZ(1.0);
            this.ui.SetArrival(this.arrival);
            if(this.arrival>this.stageStock){
                this.StageAdd(this.arrival+8);
                this.StageDestroy();
            }
        }
    }
    Create(){


        this.CreateSafeZone(3);
        for(var i=0;i<11;i++){
            this.StageAdd(i);
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
        var baseMaterialNameEx="";
        if(arg_addpos%2!=0){
            baseMaterialNameEx="_d"
        }
        switch(stageNum){
            case 0:
                var safe=new StageParts_Safe(this,"safe"+baseMaterialNameEx,RandomHelper.GetRandomInt(1,2));
                this.ary_stagePrts.push(safe);
                this.playScene.GetGameManager().AddGameObject("safeArea",addStageTransform,"safeArea",[safe]);
            
            break;
            case 1:
                var carNum=RandomHelper.GetRandomInt(0,3);


                var road=new StageParts_Road(this,"road"+baseMaterialNameEx,ary_cars[carNum],ary_carSizes[carNum].Clone(),ary_carRotate[carNum],RandomHelper.GetRandomInt(1,2));
                this.ary_stagePrts.push(road);
                this.playScene.GetGameManager().AddGameObject("road",addStageTransform,"road",[road]);
            
            break;
            
            case 2:
                var rail=new StageParts_Rail(this,"rail"+baseMaterialNameEx,"fishes",new Vector3(1,1,1));
                this.ary_stagePrts.push(rail);
                this.playScene.GetGameManager().AddGameObject("rail",addStageTransform,"rail",[rail]);
            
            break;
        }
        
    }
    CreateSafeZone(arg_safeCount:number){
        for(var i=0;i<arg_safeCount;i++){

            var addStageTransform=new Transform(new Vector3(0,0,arg_safeCount-i));
            addStageTransform.BaseTransform=this.gameObject.transform;
            var baseMaterialNameEx="";
        if((i+1)%2!=0){
            baseMaterialNameEx="_d"
        }

            var carCount=RandomHelper.GetRandomInt(0,2);
            var safe=new StageParts_Safe(this,"safe"+baseMaterialNameEx,carCount,true);
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

        this.ui.SetComboMater(this.feverGage/100);

        this.feverGage-=this.gageDownPase;

        if(this.feverGage<this.gageMinLine){
            this.feverGage=this.gageMinLine;
            this.gageDownPase=0.0;
            this.playerComponent.FeverEnd();
            this.ui.FeverEnd();
        }


        if(this.fadeCount==0&&this.rank!=null){
            this.ShowRanking();
            this.Reset();
        }else
        if(this.fadeCount>0){
            this.fadeCount--;
        }
        if(this.startCount==0){
            this.playerComponent.SetCanControll(true);
            this.startCount=-1;
        }else if(this.startCount>0){
            this.startCount--;
        }
        
        

        
    }
    SendArrival(){
        
        
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("POST","/score",true);
        xmlHttp.setRequestHeader("content-type","application/json");
        xmlHttp.onreadystatechange =ResieveRankInfo(xmlHttp,this);
        xmlHttp.send('{"score":'+this.arrival+'}');
    }

    Failed(){
        if(this.isFailed){
            return;
        }
        this.ui.ShowRetry();
        Input.AddKeyDownEvent(this,"stage_retry",true);
        this.playerComponent.SetCanControll(false);
        this.isFailed=true;

        this.SendArrival();
     }
     ToStart(){
         this.playerComponent.ToStart();
     }

     ShowRanking(){
         this.ui.ShowRanking(this.arrival, this.rank,this.firstScore);
        this.rank=null;
     }

     ReRegistScreen(){
        this.projectionComponent.UnRegistDraw();
        this.projectionComponent.RegistDraw();
     }

    Reset(){
        
        this.StageArrayCreate();
        this.gameObject.transform.SetPositionZ(0);
        this.coin=0;
        this.arrival=0;
        this.Destroy();
        this.Create();
        this.ui.SetArrival(this.arrival);
        this.feverGage=0;
        this.gageDownPase=0.2;
        this.gageUpPase=10;
        this.gageMinLine=0.0;
        this.fadeCount=-1;
        this.isFailed=false;
    }


    OnKeyDown(e:KeyboardEvent){
        if(!this.isFailed){
            
            this.fadeCount=-1;
            this.playerComponent.Reset();
            this.player.transform.Position=new Vector3(0,-0.5,1);
            this.playScene.GetCamera("main").transform.Position=new Vector3(1.5,-9,8);
            this.player.Update();
            this.ui.MaskOut();
            this.rank=null;
            this.ui.HideRanking();
            Input.RemoveKeyDownEvent("stage_retry");
            this.startCount=30;
            return;
        }
        if(this.fadeCount>0){
            return;
        }
        this.ui.HideRetry();
        this.ui.Reset();
        this.ui.HideIn();
        this.ui.MaskIn();
        this.ReRegistScreen();
        this.fadeCount=60;
    }
}


function ResieveRankInfo(xmlHttp:XMLHttpRequest,stage:Stage){
    return  function() {
        var data=xmlHttp.responseText.split(",");
        stage.rank=parseInt( data[0]);
        stage.firstScore=parseInt( data[1]);
    }
}