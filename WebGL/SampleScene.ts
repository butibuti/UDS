import Scene from "./Scene/Scene";
import ISceneManager from "./Scene/ISceneManager";
import ResourceCreater from "./Tool/ResourceCreater";
import Quaternion from "./Math/Quat";
import Vector4 from "./Math/Vector4";
import Vector3 from "./Math/Vector3";
import PointLight from "./Light/PointLight";
import ModelDrawComponent from "./Component/ModelDrawComponent";
import GameObject from "./GameObject/GameObject";
import FrameBufferTexture from "./Resource/FrameBufferTexture";

import CollisionComponent from "./Component/CollisionComponent";
import Transform from "./Transform";
import Input from "./Tool/Input";
import SceneChanger from "./Component/SceneChanger";
import TransformAnimation from "./Component/TransformAnimation";
import Easing from "./Tool/Easing";
import SucideComponent from "./Component/SucideComponent";
import SinWaveMover from "./Component/SinWaveMover";
import CameraChaser from "./Component/CameraChaser";
import ObstacleComponent from "./SinWaveGame/ObstacleComponent";
import Stage from "./SinWaveGame/Stage";

enum PrimitiveType{
  sphere=0,box_AABB=1,box_OBB=2,point=3,
}

class float{

  data:Float32Array;
  constructor(){
    this.data=new Float32Array(1);
  }
}


export default class SampleScene extends Scene{
    constructor(sceneManger:ISceneManager){
        super(sceneManger);
        this.zoomData.data[0]=0.5;
    }
    aQuaternion = new Quaternion().Identity();
    bQuaternion = new Quaternion().Identity();
    sQuaternion = new Quaternion().Identity();
    zoomData=new float();
    
    stage:Stage;
    


    projectionPlane:GameObject;
    LoadingUpdate(){
      
    }
    
    async OnLoad(){
      
      
      
      var frameBuffer= this.sceneManager.GetResourceContainer().AddTexture(ResourceCreater.CreateFrameBuffer(1024,1024,this.sceneManager.GetGraphicDevice()),"playCamera");
      
  
      
      
      var material=this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial (new Vector4(0.1,0.1,0.1,1.0),this.sceneManager.GetGraphicDevice(),[this.sceneManager.GetResourceContainer().GetTexture("playCamera")]),"playCameraMaterial");
      material.AddExParam(4,1,this.zoomData);

      

    }


    OnInitialize(){
      this.renderer.AddLayer();
      this.UseCollisionManager();
      this.AddCamera(0 ,1,"main",false,this.sceneManager.GetResourceContainer().GetTexture("playCamera") as FrameBufferTexture);
  // 頂点シェーダとフラグメントシェーダの生成
    
      
      var light=new PointLight(this.sceneManager.GetGraphicDevice());
      light.transform.Position=new Vector3(-5,-5,10);
      //this.renderer.SetLight(light,0);
      this.renderer.SetLight(light,1);
      this.sceneManager.GetGraphicDevice().EnableStencil();
  

      this.GetCamera("main").transform.Position=new Vector3(0,0,80);
      
      

      this.GetCamera("main").transform.LookAt( new Vector3(0,0,-1),Vector3.yAxis);
      this.GetCamera("main").clearColor=new Vector4(0.3,0.3,0.3,1.0);



      
      this.projectionPlane=this.gameObjectManager.AddGameObject("projectionCube");
      //this.cube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
     
      

      //this.anotherCube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
      {

        this.projectionPlane.SetComponent(new ModelDrawComponent(false, "plane","playCameraMaterial","texShader",0,false)) as ModelDrawComponent;
        this.projectionPlane.transform.Scale=new Vector3(0,0,1);
    
      }
     
      
      var floor=this.gameObjectManager.AddGameObject("floor",new Transform(new Vector3(0,5,-2),new Vector3(90,0,0),new Vector3(100,100,5)));
      //floor.SetComponent(new  ModelDrawComponent(true, "floor","gray","pointLight",1,false));

      
      //this.anotherCube.transform.BaseTransform=this.cube.transform;
      
      this.projectionPlane.transform.Position=new Vector3(0,0,-1);
      
      
       this.stage=new Stage(this);
      
      
    }
    OnStart(){
      Input.AddKeyDownEvent(this,"sampleSceneEvent",true);
      if(this.IsLoaded()){
        
        var trans=new Transform(new Vector3(0,0,-1),new Vector3(0,0,0),new Vector3(500,500,1));
        this.projectionPlane.SetComponent(new TransformAnimation(90,false,trans,this.projectionPlane.transform,Easing.EaseInOutCirc));
        
      this.stage.Reset();
      }
    }
    OnEnd(){
      Input.RemoveKeyDownEvent("sampleSceneEvent");
    }
    OnUpdate(){
        // カウンタを元にラジアンを算出
      var rad = (this.sceneManager.GetGameTime().AbsoluteFrame % 360) * Math.PI / 180;
        
      var time = 1.5;
      
      
      
      

    }
    OnKeyDown(e:KeyboardEvent){

      
          if(e.key=="Escape"){
            var sceneChangeObject=this.gameObjectManager.GetGameObject("sceneChanger");
            if(sceneChangeObject){
              return;
            }
            sceneChangeObject=this.gameObjectManager.AddGameObject("sceneChanger");
            sceneChangeObject.SetComponent(new SceneChanger("title",100,null));
            var trans=new Transform(new Vector3(0,0,-1),new Vector3(0,0,0),new Vector3(0,0,0));
            sceneChangeObject.SetComponent(new TransformAnimation(90,false,trans,this.projectionPlane.transform,Easing.EaseInOutCirc));
            sceneChangeObject.SetComponent(new SucideComponent(100));
          }
          
    }
}