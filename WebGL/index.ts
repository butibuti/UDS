import GraphicDevice from "./Graphic/GraphicDevice"

import ResourceContainer from "./Parts/ResourceContainer"
import ModelCreater from "./Parts/ModelCreater";
import SceneManager from "./Scene/SceneManager";
import SampleScene from "./SampleScene";
import Input from "./Tool/Input";
import TitleScene from "./TitleScene";
import LoadScene from "./LoadScene";

onload = function(){

  console.log("this js is webGL/index.ts")
  //canvasエレメントを取得
  var canvas :HTMLCanvasElement= document.getElementById('myCanvas') as HTMLCanvasElement;
  
  
//audioElement.volume=0.0;

  canvas.setAttribute('tabindex', "");
  canvas.width=600 ;
  canvas.height=600 ;
  Input.canvas=canvas;  

  var resourceContainer=new ResourceContainer();

  
  const graphicDevice:GraphicDevice=new GraphicDevice(canvas);

  var modelCreater:ModelCreater=new ModelCreater(graphicDevice,resourceContainer);

  const sceneManager=new SceneManager(modelCreater,resourceContainer,graphicDevice);


  sceneManager.AddScene(new TitleScene (sceneManager),"title");
  sceneManager.AddScene(new LoadScene (sceneManager),"load");
  sceneManager.ChangeScene("title");
  tick();
  // 恒常ループ
  function tick(){

    
    sceneManager.Update();
    //console.log(Input.mousePosition.x+","+Input.mousePosition.x);

    

    requestAnimationFrame(tick);
  };
 

};