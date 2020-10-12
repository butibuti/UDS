import Scene from "./Scene/Scene";
import ISceneManager from "./Scene/ISceneManager";
import ResourceCreater from "./Tool/ResourceCreater";
import GeometryGenerater from "./Tool/GeometryGenerator";
import Quaternion from "./Math/Quat";
import Vector4 from "./Math/Vector4";
import Vector3 from "./Math/Vector3";
import PointLight from "./Light/PointLight";
import ModelDrawComponent from "./Component/ModelDrawComponent";
import GameObject from "./GameObject/GameObject";
import FrameBufferTexture from "./Resource/FrameBufferTexture";
import Vector2 from "./Math/Vector2";
import SampleComponent from "./Component/SampleComponent";

import CollisionComponent from "./Component/CollisionComponent";
import Matrix4x4 from "./Math/Matrix";
import TextDrawComponent from "./Component/TextDrawComponent";
import Transform from "./Transform";
import Input from "./Tool/Input";
import SceneChanger from "./Component/SceneChanger";
import TransformAnimation from "./Component/TransformAnimation";
import Easing from "./Tool/Easing";
import SucideComponent from "./Component/SucideComponent";
import SinWaveMover from "./Component/SinWaveMover";
import Component from "./Component/Component";
import CameraChaser from "./Component/CameraChaser";

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
    

    cube:GameObject;
    


    projectionPlane:GameObject;
    zoomDirection=1.0;
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
  

      this.GetCamera("main").transform.Position=new Vector3(-25,-10,35);
      
      

      this.GetCamera("main").transform.LookAt( new Vector3(0,0,-1),Vector3.yAxis);
      this.GetCamera("main").clearColor=new Vector4(0.3,0.3,0.3,1.0);



      
      this.cube=this.gameObjectManager.AddGameObject("cube",new Transform(new Vector3(-10,0,-1),new Vector3(10,10,10),new Vector3(1,1,1)));
      
      this.projectionPlane=this.gameObjectManager.AddGameObject("projectionCube");
      //this.cube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
     
      

      
      this.cube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
      //this.anotherCube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
      {

        this.projectionPlane.SetComponent(new ModelDrawComponent(false, "plane","playCameraMaterial","texShader",0,false)) as ModelDrawComponent;
        this.projectionPlane.transform.Scale=new Vector3(0,0,1);
    
      }
     
      
      
      //this.anotherCube.transform.BaseTransform=this.cube.transform;
      
      this.projectionPlane.transform.Position=new Vector3(0,0,-1);
      
      this.cube.SetComponent(new CollisionComponent(PrimitiveType.box_OBB,new Vector3(1.0,1.0,1.0),0));
      this.cube.SetComponent(new SinWaveMover(3,3));

      
      var obj=this.gameObjectManager.AddGameObject("sphere",new Transform(new Vector3(16,0,-1),new Vector3(0,0,0),new Vector3(2.8,2.8,2.8)));
      obj.SetComponent(new ModelDrawComponent(true, "sphere","red","pointLight",1,false));
      obj.SetComponent(new CollisionComponent(PrimitiveType.sphere,new Vector3(0.5,0.5,0.5),0));
      obj.SetComponent(new SampleComponent());
      
      obj=this.gameObjectManager.AddGameObject("sphere",new Transform(new Vector3(20,-5,-1),new Vector3(0,0,0),new Vector3(6,6,6)));
      obj.SetComponent(new ModelDrawComponent(true, "sphere","green","pointLight",1,false));
      obj.SetComponent(new CollisionComponent(PrimitiveType.sphere,new Vector3(0.5,0.5,0.5),0));
      obj.SetComponent(new SampleComponent());
      
      var floor=this.gameObjectManager.AddGameObject("floor",new Transform(new Vector3(0,5,-2),new Vector3(90,0,0),new Vector3(100,100,100)));
      floor.SetComponent(new  ModelDrawComponent(true, "floor","gray","pointLight",1,false));

      var camera=this.gameObjectManager.AddGameObject("cameraman",this.GetCamera("main").transform);
      camera.SetComponent(new CameraChaser(0.03,this.cube.transform));
    }
    OnStart(){
      Input.AddKeyDownEvent(this,"sampleSceneEvent",true);
      if(this.IsLoaded()){
        
        var trans=new Transform(new Vector3(0,0,-1),new Vector3(0,0,0),new Vector3(500,500,1));
        this.cube.SetComponent(new TransformAnimation(90,false,trans,this.projectionPlane.transform,Easing.EaseInOutCirc));
      
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