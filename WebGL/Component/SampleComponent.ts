
import Vector3 from "../Math/Vector3";
import Input from "../Tool/Input";
import Component from "./Component";

export default class SampleComponent extends Component{
    constructor(){
        super();
        Input.AddKeyDownEvent(this,"samplecomponent",true);
    }
    OnSet(){
    }

    Update(){
        
        this.gameObject.transform.RollX_Local_Degrees(2);
    }
    OnKeyDown(e:KeyboardEvent){
        
        if(e.key=="ArrowLeft"){
            this.gameObject.transform.TranslateX(-0.5);
        }
        if(e.key=="ArrowRight"){
            this.gameObject.transform.TranslateX(0.5);
        }
        if(e.key=="ArrowUp"){
            this.gameObject.transform.TranslateY(-1);
        }
        if(e.key=="ArrowDown"){
            
            this.gameObject.transform.TranslateY(1);
        }
        if(e.key=="8"){
            this.gameObject.transform.TranslateZ(-1);
        }
        if(e.key=="5"){
            
            this.gameObject.transform.TranslateZ(1);
        }
    }
}