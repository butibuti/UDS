
import Vector3 from "../Math/Vector3";
import Input from "../Tool/Input";
import Component from "./Component";

export default class SampleComponent extends Component{
    constructor(){
        super();
    }
    OnSet(){
    }

    Update(){
        
        this.gameObject.transform.RollX_Local_Degrees(2);
    }
}