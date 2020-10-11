import { CompletionsTriggerCharacter } from "typescript";
import Scene from "../Scene/Scene";
import Component from "./Component";

export default class SceneChanger extends Component{
    sceneName:string;
    sceneChangeValue:any;
    waitFrame:number;

    constructor (arg_sceneName:string,arg_waitFrame:number,arg_sceneChangeValue:any){
        super();
        this.sceneName=arg_sceneName;
        this.sceneChangeValue=arg_sceneChangeValue;
        this.waitFrame=arg_waitFrame;
    }
    Update(){
        this.waitFrame--;

        if(this.waitFrame>0){
            return;
        }

        this.gameObject.Manager.Scene.GetSceneManager().ChangeScene(this.sceneName,this.sceneChangeValue);
        this.Dead();;
    }
}