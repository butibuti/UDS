import Scene from "./Scene/Scene";
import ISceneManager from "./Scene/ISceneManager";
import ResourceCreater from "./Tool/ResourceCreater";
import GeometryGenerater from "./Tool/GeometryGenerator";
import Quaternion from "./Math/Quat";
import Transform from "./Transform";
import Vector4 from "./Math/Vector4";
import Vector3 from "./Math/Vector3";
import PointLight from "./Light/PointLight";
import ModelDrawComponent from "./Component/ModelDrawComponent";
import GameObject from "./GameObject/GameObject";
import Camera from "./Camera";
import GraphicDevice from "./GraphicDevice";
import FrameBufferTexture from "./FrameBufferTexture";
import Vector2 from "./Math/Vector2";
import Matrix4x4 from "./Math/Matrix";
import ResourceContainer from "./Parts/ResourceContainer";

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
    torus:GameObject;
    cube:GameObject;
    projectionPlane:GameObject;
    zoomDirection=1.0;
    LoadingUpdate(){
      
    }
    
    async OnLoad(){
      
      this.sceneManger.GetResourceContainer().AddShader(ResourceCreater.CreateShader ('public/shader/PointLightVS.glsl',"public/shader/PointLightFS.glsl",this.sceneManger.GetGraphicDevice()),"pointLight");
  
      this.sceneManger.GetResourceContainer().AddShader(ResourceCreater.CreateShader ('public/shader/UVNormalColorVS.glsl',"public/shader/DefaultFS.glsl",this.sceneManger.GetGraphicDevice()),"texShader");
      this.sceneManger.GetResourceContainer().AddShader(ResourceCreater.CreateShader ('public/shader/UVNormalVS.glsl',"public/shader/DefaultFS_light.glsl",this.sceneManger.GetGraphicDevice()),"texShader_light");
      this.sceneManger.GetResourceContainer().AddShader(ResourceCreater.CreateShader ('public/shader/UVNormalVS.glsl',"public/shader/ZoomBlur.glsl",this.sceneManger.GetGraphicDevice()),"zoomEffect");
      this.sceneManger.GetResourceContainer().AddShader(ResourceCreater.CreateShader ('public/shader/UVNormalVS.glsl',"public/shader/DotEffect.glsl",this.sceneManger.GetGraphicDevice()),"dotEffect");
      this.sceneManger.GetResourceContainer().AddShader(ResourceCreater.CreateShader ('public/shader/UVNormalColorVS.glsl',"public/shader/BlackTestFS.glsl",this.sceneManger.GetGraphicDevice()),"black");
  
      this.sceneManger.GetResourceContainer().AddGeometry(ResourceCreater.CreateGeometry　( GeometryGenerater.CreateTorus(32,32,0.5,1),false,true,true,this.sceneManger.GetGraphicDevice()),"hsvTorus");
      this.sceneManger.GetResourceContainer().AddGeometry(ResourceCreater.CreateGeometry( GeometryGenerater.CreateCube(1,new Vector4(1.0,1.0,1.0,1)),true,true,true,this.sceneManger.GetGraphicDevice()),"cube");
      this.sceneManger.GetResourceContainer().AddGeometry(ResourceCreater.CreateGeometry( GeometryGenerater.CreatePlane(new Vector2(1,1),new Vector4(1.0,1.0,1.0,1)),true,false,false,this.sceneManger.GetGraphicDevice()),"plane");
      
      this.sceneManger.GetResourceContainer().AddMesh(ResourceCreater.CreateMeshResourceFromFile("public/model/Maguro/maguro.b3m",this.sceneManger.GetResourceContainer(),this.sceneManger.GetGraphicDevice()),"maguro");
      this.sceneManger.GetResourceContainer().AddSoundFromFile("public/audio/Ending.mp3","sample");
      
      // テクスチャを生成
      var caloryTexture= ResourceCreater.CreateTexture ('public/image/calory.png',this.sceneManger.GetGraphicDevice())
      this.sceneManger.GetResourceContainer().AddTexture(caloryTexture,"calory");
      var frameBuffer= this.sceneManger.GetResourceContainer().AddTexture(ResourceCreater.CreateFrameBuffer(1024,1024,this.sceneManger.GetGraphicDevice()),"camera");
      
  
      
      var material=this.sceneManger.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial (new Vector4(0.1,0.1,0.1,1.0),this.sceneManger.GetGraphicDevice(),[this.sceneManger.GetResourceContainer().GetTexture("calory")]),"caloryMaterial");
      material.AddExParam(4,3,new Vector3(5,5,10));
      
      material=this.sceneManger.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial (new Vector4(0.1,0.1,0.1,1.0),this.sceneManger.GetGraphicDevice(),[this.sceneManger.GetResourceContainer().GetTexture("camera")]),"cameraMaterial");
      material.AddExParam(4,1,this.zoomData);

      material= this.sceneManger.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial(new Vector4(0.1, 0.1, 0.1, 1.0),this.sceneManger.GetGraphicDevice()),"nonTextureMaterial");
      material.AddExParam(4,3,new Vector3(5,5,10));
      
      material=this.sceneManger.GetResourceContainer().AddMaterial(ResourceCreater.CreateMaterial(new Vector4(0.1, 0.1, 0.1, 1.0),this.sceneManger.GetGraphicDevice()),"zoomEffect");
      
      

    }


    OnInitialize(){
      
      this.renderer.AddLayer();
      this.AddCamera(0 ,1,"main",false,this.sceneManger.GetResourceContainer().GetTexture("camera") as FrameBufferTexture);
  // 頂点シェーダとフラグメントシェーダの生成
    
      var light=new PointLight(this.sceneManger.GetGraphicDevice());
      light.transform.Position=new Vector3(-5,-5,10);
      //this.renderer.SetLight(light,0);
      this.renderer.SetLight(light,1);
      this.sceneManger.GetGraphicDevice().EnableStencil();
  

      this.GetCamera("main").transform.Position=new Vector3(0,-3,10);
    //this.GetCamera("main").transform.Rotation=new Matrix4x4().Rotate_b(0* Math.PI / 180,new Vector3(0,0,1));
    // カメラの上方向を表すベクトル
      var camUpDirection =new Vector3(0,1,0);

      this.GetCamera("main").transform.LookAt( new Vector3(0,0,0),camUpDirection);
      this.GetCamera("main").clearColor=new Vector4(0.3,0.3,0.3,1.0);



      this.torus= this.gameObjectManager.AddGameObject("torus");
      this.cube=this.gameObjectManager.AddGameObject("cube");
      this.projectionPlane=this.gameObjectManager.AddGameObject("projectionCube");

    //this.torus.SetComponent(new ModelDrawComponent("hsvTorus","caloryMaterial","pointLight",1)) as ModelDrawComponent;
  
      this.cube.SetComponent(new ModelDrawComponent(true, "cube","nonTextureMaterial","texShader_light",1,"maguro")) as ModelDrawComponent;
      this.projectionPlane.SetComponent(new ModelDrawComponent(false, "plane","cameraMaterial","dotEffect",0)) as ModelDrawComponent;
      this.projectionPlane.transform.Scale=new Vector3(500,500,1);
  
      this. torus.transform.generateFunc=this. torus.transform.ScaleTranslateRotation;
      this. torus.transform.Position=new Vector3(0,0,0);

      this.cube.transform.BaseTransform=this.torus.transform;
      this.cube.transform.Position=new Vector3(1,0,0);
      this.cube.transform.Scale=new Vector3(0.5,0.5,0.5);
      this.projectionPlane.transform.Position=new Vector3(0,0,-1);
        
    }
    OnUpdate(){
        // カウンタを元にラジアンを算出
      var rad = (this.sceneManger.GetGameTime().AbsoluteFrame % 360) * Math.PI / 180;
        
      var time = 1.5;
      
      if(this.sceneManger.GetGameTime().AbsoluteFrame>=360){
        this.sceneManger.GetResourceContainer().GetSound("sample").Play();
    
      }

      // 回転クォータニオンの生成
      this.aQuaternion.Rotate(rad,new Vector3 (1.0, 0.0, 0.0));
      this.bQuaternion.Rotate(-rad,new Vector3 (0,1,0));
      this.sQuaternion=this.aQuaternion.SphereLerp( this.bQuaternion, time );
  
      
      this.zoomData.data[0]+=0.1*this.zoomDirection;
      if(this.zoomData.data[0]>50){
        this.zoomData.data[0]=50;
        this.zoomDirection=-1;
      }else if(this.zoomData.data[0]<0){
        this.zoomData.data[0]=0;
        this.zoomDirection=1;
      }

      this.torus.transform.Rotation=this.sQuaternion.ToMatrix4x4();
      
      

    }
}