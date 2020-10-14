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
import SampleScene from "./SampleScene";

enum PrimitiveType{
  sphere=0,box_AABB=1,box_OBB=2,point=3,
}

class float{

  data:Float32Array;
  constructor(){
    this.data=new Float32Array(1);
  }
}


export default class LoadScene extends Scene{
    constructor(sceneManger:ISceneManager){
        super(sceneManger);
        this.zoomData.data[0]=0.5;
    }
    
    aQuaternion = new Quaternion().Identity();
    bQuaternion = new Quaternion().Identity();
    sQuaternion = new Quaternion().Identity();
    zoomData=new float();
    

    cube:GameObject;
    anotherCube:GameObject;


    projectionPlane:GameObject;
    zoomDirection=1.0;


    BefLoad(){
        this.renderer.AddLayer();
        this.AddCamera(0 ,1,"main",false,this.sceneManager.GetResourceContainer().GetTexture("loadingCamera") as FrameBufferTexture);
    // 頂点シェーダとフラグメントシェーダの生成
      
    
        var light=new PointLight(this.sceneManager.GetGraphicDevice());
        light.transform.Position=new Vector3(-5,-5,10);
        //this.renderer.SetLight(light,0);
        this.renderer.SetLight(light,1);
        this.sceneManager.GetGraphicDevice().EnableStencil();
    
  
        this.GetCamera("main").transform.Position=new Vector3(0,-3,10);
        
        
  
        this.GetCamera("main").transform.LookAt( new Vector3(0,0,0),Vector3.yAxis);
        this.GetCamera("main").clearColor=new Vector4(0.0,0.0,0.0,1.0);
  
  
  
        
        this.cube=this.gameObjectManager.AddGameObject("cube");
        this.anotherCube=this.gameObjectManager.AddGameObject("cube");
  
        this.projectionPlane=this.gameObjectManager.AddGameObject("projectionCube");
  
      //this.torus.SetComponent(new ModelDrawComponent("hsvTorus","caloryMaterial","pointLight",1)) as ModelDrawComponent;
    
        //this.cube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
       
        var tr=new Transform();
        tr.Position=new Vector3(1,1,1);
        var tr2=new Transform();
        tr2.Position=new Vector3(-1,-1,2);
  
        this.cube.SetComponent(new TextDrawComponent("loading", "font","fontShader",new Vector4(0.75,0.75,0.25,1),1,true)) as ModelDrawComponent;
        
        //this.anotherCube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,true)) as ModelDrawComponent;
        
        this.projectionPlane.SetComponent(new ModelDrawComponent(false, "plane","loadingCameraMaterial","texShader",0,false)) as ModelDrawComponent;
       this.projectionPlane.transform.Scale=new Vector3(500,500,1);
    
       
        
        this.cube.transform.Position=new Vector3(0.5,0,0.5);
        this.anotherCube.transform.Position=new Vector3(-1,-5,10)
        
        this.projectionPlane.transform.Position=new Vector3(0,0,-1);
        
        
    }
    

    OnLoadingUpdate():void{
      
    }
    
    async OnLoad(){
      
      this.sceneManager.GetResourceContainer().AddShader(ResourceCreater.CreateShader ('shader/PointLightVS.glsl',"shader/PointLightFS.glsl",this.sceneManager.GetGraphicDevice()),"pointLight");
  
      
      this.sceneManager.GetResourceContainer().AddShader(ResourceCreater.CreateShader ('shader/UVNormalVS.glsl',"shader/DefaultFS_light.glsl",this.sceneManager.GetGraphicDevice()),"texShader_light");
      this.sceneManager.GetResourceContainer().AddShader(ResourceCreater.CreateShader ('shader/UVNormalVS.glsl',"shader/ZoomBlur.glsl",this.sceneManager.GetGraphicDevice()),"zoomEffect");
      this.sceneManager.GetResourceContainer().AddShader(ResourceCreater.CreateShader ('shader/UVNormalVS.glsl',"shader/DotEffect.glsl",this.sceneManager.GetGraphicDevice()),"dotEffect");
      this.sceneManager.GetResourceContainer().AddShader(ResourceCreater.CreateShader ('shader/UVNormalColorVS.glsl',"shader/BlackTestFS.glsl",this.sceneManager.GetGraphicDevice()),"black");
  
      this.sceneManager.GetResourceContainer().AddGeometry(ResourceCreater.CreateGeometry　( GeometryGenerater.CreateTorus(32,32,0.5,1),false,true,true,this.sceneManager.GetGraphicDevice()),"hsvTorus");
      this.sceneManager.GetResourceContainer().AddGeometry(ResourceCreater.CreateGeometry( GeometryGenerater.CreateCube(1,new Vector4(1.0,1.0,1.0,1)),true,true,true,this.sceneManager.GetGraphicDevice()),"cube");
      this.sceneManager.GetResourceContainer().AddGeometry(ResourceCreater.CreateGeometry( GeometryGenerater.CreateSphere(12,12,0.5,new Vector4(0.0,0.0,0.0,1)),false,true,true,this.sceneManager.GetGraphicDevice()),"sphere");
      this.sceneManager.GetResourceContainer().AddGeometry(ResourceCreater.CreateGeometry( GeometryGenerater.CreatePlane(new Vector2(1,1),false, new Vector4(1.0,1.0,1.0,1)),true,false,false,this.sceneManager.GetGraphicDevice()),"plane");
      this.sceneManager.GetResourceContainer().AddGeometry(ResourceCreater.CreateGeometry( GeometryGenerater.CreatePlane(new Vector2(1,1),false, new Vector4(1.0,1.0,1.0,1)),false,true,true,this.sceneManager.GetGraphicDevice()),"floor");
      
      //this.sceneManger.GetResourceContainer().AddMesh(ResourceCreater.CreateMeshResourceFromFile("model/Maguro/maguro.b3m",this.sceneManger.GetResourceContainer(),this.sceneManger.GetGraphicDevice()),"maguro");
      this.sceneManager.GetResourceContainer().AddSoundFromFile("audio/kill2.wav","kill");
      this.sceneManager.GetResourceContainer().AddSoundFromFile("audio/up_se.wav","up");
      
      // テクスチャを生成
      var caloryTexture= ResourceCreater.CreateTexture ('image/calory.png',this.sceneManager.GetGraphicDevice());
      this.sceneManager.GetResourceContainer().AddTexture(caloryTexture,"calory");
      this.sceneManager.GetResourceContainer().AddTextureFromFile("image/circle32.png",this.sceneManager.GetGraphicDevice());
      
      
      var material=this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial (new Vector4(0.1,0.1,0.1,1.0),this.sceneManager.GetGraphicDevice(),[this.sceneManager.GetResourceContainer().GetTexture("calory")]),"caloryMaterial");
      material.AddExParam(4,3,new Vector3(5,5,10));
      material=this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial (new Vector4(0.1,0.1,0.1,1.0),this.sceneManager.GetGraphicDevice(),[this.sceneManager.GetResourceContainer().GetTexture("image/circle32.png")]),"circleMaterial");
      material.AddExParam(4,3,new Vector3(5,5,10));
      
      
      material= this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial(new Vector4(1.0, 0.5, 0.5, 1.0),this.sceneManager.GetGraphicDevice()),"red");
      
      material= this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial(new Vector4(0.5, 0.5, 0.5, 1.0),this.sceneManager.GetGraphicDevice()),"gray");
      material= this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial(new Vector4(0.8, 0.8, 0.8, 1.0),this.sceneManager.GetGraphicDevice()),"white");
      material= this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial(new Vector4(0.9, 0.8, 0.3, 1.0),this.sceneManager.GetGraphicDevice()),"yellow");
      
      material= this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial(new Vector4(0.5, 0.5, 1.0, 1.0),this.sceneManager.GetGraphicDevice()),"blue");
      
      material= this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial(new Vector4(0.5, 1.0, 0.5, 1.0),this.sceneManager.GetGraphicDevice()),"green");
      
      
      material=this.sceneManager.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial(new Vector4(0.1, 0.1, 0.1, 1.0),this.sceneManager.GetGraphicDevice()),"zoomEffect");
      
        this.sceneManager.AddScene(new SampleScene(this.sceneManager),"sample");
      

    }


    OnInitialize(){
      if(this.isCurrent)
      this.sceneManager.ChangeScene("sample");
    }
    OnStart(){
      this.sceneManager.ChangeScene("sample");
    }
    
}