import CameraChaser from "../Component/CameraChaser";
import CollisionComponent from "../Component/CollisionComponent";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import SinWaveMover from "../Component/SinWaveMover";
import GameObject from "../GameObject/GameObject";
import Vector2 from "../Math/Vector2";
import Vector3 from "../Math/Vector3";
import IScene from "../Scene/IScene";
import Transform from "../Transform";
import CheckPoint from "./CheckPoint";
import CoinComponent from "./CoinComponent";
import IkaRing from "./IkaRing";
import ObstacleComponent from "./ObstacleComponent";

enum PrimitiveType{
    sphere=0,box_AABB=1,box_OBB=2,point=3,
  }
export default class Stage{

    ary_obstacle:Array< ObstacleComponent>;
    ary_checkPont:Array<CheckPoint>;
    ary_coin:Array<CoinComponent>;
    ary_ring:Array<IkaRing>;

    playScene:IScene;

    startPos:Vector3;
    player:GameObject;

    constructor(arg_scene:IScene){
        this.ary_obstacle=new Array();
        this.ary_checkPont=new Array();
        this.ary_ring=new Array();
        this.ary_coin=new Array();
        this.playScene=arg_scene;
        this.startPos=new Vector3(-15,0,-1);

        
      this.player=this.playScene.GetGameManager().AddGameObject("cube",new Transform(this.startPos.Clone(),new Vector3(10,10,10),new Vector3(1,1,1)),"player",[new SinWaveMover(3,3)]);
      
      this.player.SetComponent(new ModelDrawComponent(false, "cube","caloryMaterial","texShader",1,false)) as ModelDrawComponent;
      
      this.player.SetComponent(new CollisionComponent(PrimitiveType.box_OBB,new Vector3(1.0,1.0,1.0),0));
      
      var obj=this.playScene.GetGameManager().AddGameObject("sphere",new Transform(new Vector3(14,0,-1),new Vector3(0,0,0),new Vector3(2.5,2.5,2.5)));
      
      obj.SetComponent(new ObstacleComponent(PrimitiveType.sphere,new Vector3(0.5,0.5,0.5),this,"red"));
     

     
      obj=this.playScene.GetGameManager().AddGameObject("sphere",new Transform(new Vector3(20,-5,-1),new Vector3(0,0,0),new Vector3(6,6,6)));
     
      obj.SetComponent(new ObstacleComponent(PrimitiveType.sphere,new Vector3(0.5,0.5,0.5),this,"red"));
      
     
      this.ary_checkPont.push(new CheckPoint(new Transform(new Vector3(30,0,-1))));
      this.ary_checkPont.push(new CheckPoint(new Transform(new Vector3(-15,0,-1))));
      this.ary_checkPont.push(new CheckPoint(new Transform(new Vector3(0,0,-1))));
      this.ary_checkPont.push(new CheckPoint(new Transform(new Vector3(50,0,-1))));


      obj=this.playScene.GetGameManager().AddGameObject("sphere",new Transform(new Vector3(40,-13,-1),new Vector3(0,0,0),new Vector3(6,6,6)));
     
      obj.SetComponent(new ObstacleComponent(PrimitiveType.sphere,new Vector3(0.5,0.5,0.5),this,"green"));
      
     
     
      obj=this.playScene.GetGameManager().AddGameObject("sphere",new Transform(new Vector3(40,-1,-1),new Vector3(0,0,0),new Vector3(6,6,6)));
     
      obj.SetComponent(new ObstacleComponent(PrimitiveType.sphere,new Vector3(0.5,0.5,0.5),this,"red"));
      
      obj=this.playScene.GetGameManager().AddGameObject("coin",new Transform(new Vector3(16,-3,-1),new Vector3(0,0,0),new Vector3(1.5,1.5,1.5)));
     
      var coin=new CoinComponent(this);
      obj.SetComponent(coin);
      this.ary_coin.push(coin);
      
      obj=this.playScene.GetGameManager().AddGameObject("ring",new Transform(new Vector3(40,-7,-1),new Vector3(0,0,0),new Vector3(2.5,2.5,2.5)));
     
      var ika=new IkaRing(this);
        
      obj.SetComponent(ika);
      this.ary_ring.push(ika);
      

      
      var camera=this.playScene.GetGameManager().AddGameObject("cameraman",this.playScene.GetCamera("main").transform);
      camera.SetComponent(new CameraChaser(0.03,this.player.transform));
      
      this.ary_checkPont= this.ary_checkPont.sort((a,b)=>b.GetX()-a.GetX());
      this.ary_checkPont.forEach(cp=> console.log(cp.GetX()));
    }

    Release(){
        this.playScene=null;
        this.ary_obstacle.length=0;
    }


    AddObstacle(obstacle:ObstacleComponent){
        this.ary_obstacle.push(obstacle);
        obstacle.stage=this;
    }

    GetRing(){


    }

    GetCoin(){

    }

    Failed(){
        var throughed= this.ary_checkPont.filter(cpoint=>cpoint.GetX()<=this.player.transform.Position.x);
        
        (this.player.GetComponent("SinWaveMover" ,0)  as SinWaveMover).ToStart(throughed[0].transform.Position);
    }

    Reset(){

        (this.player.GetComponent("SinWaveMover" ,0)  as SinWaveMover).ToStart(this.startPos);
        this.ary_coin.forEach(coin=>coin.ReSet());
        this.ary_ring.forEach(ring=>ring.ReSet());
    }


}