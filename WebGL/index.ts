import GraphicDevice from "./GraphicDevice"

import ResourceContainer from "./Parts/ResourceContainer"
import ModelCreater from "./Parts/ModelCreater";
import SceneManager from "./Scene/SceneManager";
import SampleScene from "./SampleScene";
import Input from "./Tool/Input";

onload = function(){

  console.log("this js is webGL/index.ts")
  //canvasエレメントを取得
  var canvas :HTMLCanvasElement= document.getElementById('myCanvas') as HTMLCanvasElement;
  
  var audioElement = document.createElement('audio');
  audioElement.src = '/public/audio/Ending.mp3';
audioElement.volume=0.0;

  canvas.width = 800;
  canvas.height = 500;
  canvas.setAttribute('tabindex', "");
  Input.canvas=canvas;  

  var resourceContainer=new ResourceContainer();

  canvas.addEventListener("click", OnClick,false);
  const graphicDevice:GraphicDevice=new GraphicDevice(canvas);

  var modelCreater:ModelCreater=new ModelCreater(graphicDevice,resourceContainer);

  const sceneManager=new SceneManager(modelCreater,resourceContainer,graphicDevice);


  sceneManager.AddScene(new SampleScene(sceneManager),"sample");
  sceneManager.ChangeScene("sample");
  tick();
  // 恒常ループ
  function tick(){

    
    sceneManager.Update();
    //console.log(Input.mousePosition.x+","+Input.mousePosition.x);

    

    requestAnimationFrame(tick);
  };
 
  function OnClick(){
    
  audioElement.play();
  }

};