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
    anotherCube:GameObject;


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
      this.AddCamera(0 ,1,"main",false,this.sceneManager.GetResourceContainer().GetTexture("playCamera") as FrameBufferTexture);
  // 頂点シェーダとフラグメントシェーダの生成
    
      var light=new PointLight(this.sceneManager.GetGraphicDevice());
      light.transform.Position=new Vector3(-5,-5,10);
      //this.renderer.SetLight(light,0);
      this.renderer.SetLight(light,1);
      this.sceneManager.GetGraphicDevice().EnableStencil();
  

      this.GetCamera("main").transform.Position=new Vector3(0,-3,10);
      
      

      this.GetCamera("main").transform.LookAt( new Vector3(0,0,0),Vector3.yAxis);
      this.GetCamera("main").clearColor=new Vector4(0.3,0.3,0.3,1.0);



      
      this.cube=this.gameObjectManager.AddGameObject("cube");
      this.anotherCube=this.gameObjectManager.AddGameObject("cube");

      this.projectionPlane=this.gameObjectManager.AddGameObject("projectionCube");

    //this.torus.SetComponent(new ModelDrawComponent("hsvTorus","caloryMaterial","pointLight",1)) as ModelDrawComponent;
  
      //this.cube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
     
      var tr=new Transform();
      tr.Position=new Vector3(1,1,1);
      var tr2=new Transform();
      tr2.Position=new Vector3(-1,-1,2);

      this.cube.SetComponent(new TextDrawComponent("butibuti", "font","fontShader",new Vector4(0.75,0.75,0.25,1),1,true)) as ModelDrawComponent;
      this.cube.SetComponent(new TextDrawComponent("butibuti", "font","fontShader",new Vector4(1.0,1.0,1.0,1),1,true,tr)) as ModelDrawComponent;
      this.cube.SetComponent(new TextDrawComponent("butibuti", "font","fontShader",new Vector4(0.5,0.75,0.75,1),1,true,tr2)) as ModelDrawComponent;
      //this.anotherCube.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,true)) as ModelDrawComponent;
      
      this.projectionPlane.SetComponent(new ModelDrawComponent(false, "plane","playCameraMaterial","texShader",0,false)) as ModelDrawComponent;
     this.projectionPlane.transform.Scale=new Vector3(500,500,1);
  
      this.cube.SetComponent(new SampleComponent());
      
      this.cube.transform.Position=new Vector3(0.5,0,0.5);
      this.anotherCube.transform.Position=new Vector3(-1,-5,10)
      
      this.projectionPlane.transform.Position=new Vector3(0,0,-1);
      
      this.cube.SetComponent(new CollisionComponent(PrimitiveType.box_OBB,new Vector3(1.0,1.0,1.0),0));
      this.anotherCube.SetComponent(new CollisionComponent(PrimitiveType.box_OBB,new Vector3(1.0,1.0,1.0),0));

    }
    OnStart(){
      
      Input.AddKeyDownEvent(this,true);
    }
    OnEnd(){
      
      Input.RemoveKeyDownEvent(this);
    }
    OnUpdate(){
        // カウンタを元にラジアンを算出
      var rad = (this.sceneManager.GetGameTime().AbsoluteFrame % 360) * Math.PI / 180;
        
      var time = 1.5;
      
      
      
      

    }
    OnKeyDown(e:KeyboardEvent){
            
          this.sceneManager.ChangeScene("title");
    }
}