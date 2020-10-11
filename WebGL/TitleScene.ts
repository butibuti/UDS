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

import TextDrawComponent from "./Component/TextDrawComponent";
import Transform from "./Transform";
import LoadScene from "./LoadScene";
import Input from "./Tool/Input";
import TransformAnimation from "./Component/TransformAnimation";
import SceneChanger from "./Component/SceneChanger";
import Easing from "./Tool/Easing";
import SucideComponent from "./Component/SucideComponent";



class float{

  data:Float32Array;
  constructor(){
    this.data=new Float32Array(1);
  }
}


export default class TitleScene extends Scene{
    constructor(sceneManger:ISceneManager){
        super(sceneManger);
        this.zoomData.data[0]=0.5;
    }
    
    aQuaternion = new Quaternion().Identity();
    bQuaternion = new Quaternion().Identity();
    sQuaternion = new Quaternion().Identity();
    zoomData=new float();
    

    texts:GameObject;

    isLoad=false;
    projectionPlane:GameObject;
    zoomDirection=1.0;
    LoadingUpdate(){
      
    }
    
    async OnLoad(){
        
      this.sceneManager.GetResourceContainer().AddShader(ResourceCreater.CreateShader ('shader/UVNormalColorVS.glsl',"shader/DefaultFS.glsl",this.sceneManager.GetGraphicDevice()),"texShader");
      this.sceneManager.GetResourceContainer().AddShader(ResourceCreater.CreateShader ('shader/UVNormalColorVS.glsl',"shader/FontShaderFS.glsl",this.sceneManager.GetGraphicDevice()),"fontShader");
      
  
      
      this.sceneManager.GetResourceContainer().AddGeometry(ResourceCreater.CreateGeometry( GeometryGenerater.CreatePlane(new Vector2(1,1),false, new Vector4(1.0,1.0,1.0,1)),true,false,false,this.sceneManager.GetGraphicDevice()),"plane");
      
      
      this.sceneManager.GetResourceContainer().AddSoundFromFile("audio/Ending.mp3","sample");
      
      // テクスチャを生成
      
      this.sceneManager.GetResourceContainer().AddTexture(ResourceCreater.CreateTexture ('image/charmap.png',this.sceneManager.GetGraphicDevice()),"font");
      var frameBuffer= this.sceneManager.GetResourceContainer().AddTexture(ResourceCreater.CreateFrameBuffer(1024,1024,this.sceneManager.GetGraphicDevice()),"titleCamera");
      
      frameBuffer= this.sceneManager.GetResourceContainer().AddTexture(ResourceCreater.CreateFrameBuffer(1024,1024,this.sceneManager.GetGraphicDevice()),"loadingCamera");
  
      var material=this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial (new Vector4(0.1,0.1,0.1,1.0),this.sceneManager.GetGraphicDevice(),[this.sceneManager.GetResourceContainer().GetTexture("titleCamera")]),"titleCameraMaterial");
      material.AddExParam(4,1,this.zoomData);

      material=this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial (new Vector4(0.1,0.1,0.1,1.0),this.sceneManager.GetGraphicDevice(),[this.sceneManager.GetResourceContainer().GetTexture("loadingCamera")]),"loadingCameraMaterial");
      
      

    }


    OnInitialize(){
      
      this.renderer.AddLayer();
      this.AddCamera(0 ,1,"main",false,this.sceneManager.GetResourceContainer().GetTexture("titleCamera") as FrameBufferTexture);
  // 頂点シェーダとフラグメントシェーダの生成
    
      var light=new PointLight(this.sceneManager.GetGraphicDevice());
      light.transform.Position=new Vector3(-5,-5,10);
      //this.renderer.SetLight(light,0);
      this.renderer.SetLight(light,1);
      this.sceneManager.GetGraphicDevice().EnableStencil();
  

      this.GetCamera("main").transform.Position=new Vector3(0,0,10);
      
      

      this.GetCamera("main").transform.LookAt( new Vector3(0,0,0),Vector3.yAxis);
      this.GetCamera("main").clearColor=new Vector4(1.0,1.0,1.0,1.0);



      
      this.texts=this.gameObjectManager.AddGameObject("text");

      this.projectionPlane=this.gameObjectManager.AddGameObject("projectionPlane");

    //this.torus.SetComponent(new ModelDrawComponent("hsvTorus","caloryMaterial","pointLight",1)) as ModelDrawComponent;
  
      //this.cube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
     
      var tr=new Transform();
      tr.Position=new Vector3(1,1,1);
      var tr2=new Transform();
      tr2.Position=new Vector3(-1,-1,2);

      var transform=new Transform();

      transform.Scale=new Vector3(0.5,0.5,0.5);
      transform.Position=new Vector3(0,-1.0,0);

      var pressAnyTransform=new Transform();

      pressAnyTransform.Scale=new Vector3(0.25,0.25,0.25);
      pressAnyTransform.Position=new Vector3(0,1,0);


      var pressTarget=new Transform();
      pressTarget.Scale=new Vector3(0.4,0.4,0.4);
      pressTarget.Position=new Vector3(0,1,0);

      this.texts.SetComponent(new TextDrawComponent("Title", "font","fontShader",new Vector4(0.75,0.75,0.25,1),1,true,transform)) as ModelDrawComponent;
      this.texts.SetComponent(new TextDrawComponent("Press Any Key", "font","fontShader",new Vector4(0.0,0.0,0.0,1),1,true,pressAnyTransform)) as ModelDrawComponent;
      this.texts.SetComponent(new TransformAnimation(60,true, pressTarget,pressAnyTransform));
      //this.anotherCube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,true)) as ModelDrawComponent;
      
      this.projectionPlane.SetComponent(new ModelDrawComponent(false, "plane","titleCameraMaterial","texShader",0,false)) as ModelDrawComponent;
      this.projectionPlane.transform.Scale=new Vector3(500,500,1);
  
    
      
      this.texts.transform.Position=new Vector3(0,0,0.5);
      
      this.projectionPlane.transform.Position=new Vector3(0,0,-1);
      
    }
    OnUpdate(){
        // カウンタを元にラジアンを算出
        //console.log(this.projectionPlane.transform.Scale);
        
      //this.texts.transform.Position=(new Vector3( 0,slide/10,0));
      
      

    }
    OnStart(){
      Input.AddKeyDownEvent(this,"titleSceneEvent",true);
      if(this.IsLoaded()){
        
        var trans=new Transform(new Vector3(0,0,-1),new Vector3(0,0,0),new Vector3(500,500,1));
        this.texts.SetComponent(new TransformAnimation(90,false,trans,this.projectionPlane.transform,Easing.EaseInOutCirc));
        
      }
    }
    OnEnd(){      
        Input.RemoveKeyDownEvent("titleSceneEvent");
        this.gameObjectManager.GetGameObject("sceneChanger").Dead();
    }
    OnKeyDown(e:KeyboardEvent){
      if(e.key!="Escape"){
        var sceneChangeObject=this.gameObjectManager.GetGameObject("sceneChanger");
        if(sceneChangeObject){
          return;
        }
        sceneChangeObject=this.gameObjectManager.AddGameObject("sceneChanger");
        sceneChangeObject.SetComponent(new SceneChanger("load",100,null));
        var trans=new Transform(new Vector3(0,0,-1),new Vector3(0,0,0),new Vector3(0,0,0));
        sceneChangeObject.SetComponent(new TransformAnimation(90,false,trans,this.projectionPlane.transform,Easing.EaseInOutCirc));
        sceneChangeObject.SetComponent(new SucideComponent(100));
      }
        
    }
}