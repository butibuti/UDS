import Vector3 from "../Math/Vector3";
import Input from "../Tool/Input";
import Component from "./Component";

export default class SampleComponent extends Component{
    OnSet(){
        Input.AddKeyDownEvent(this,true);
    }
    OnKeyDown(e:KeyboardEvent){
        if(e.key=="ArrowLeft"){
            
            this.gameObject.transform.Position=this.gameObject.transform.Position.Add_b(new  Vector3( -1.0,0,0));
        }
        if(e.key=="ArrowRight"){
            this.gameObject.transform.Position=this.gameObject.transform.Position.Add_b(new  Vector3( 1.00,0,0));
        }
        if(e.key=="ArrowUp"){
            this.gameObject.transform.Position=this.gameObject.transform.Position.Add_b(new  Vector3( 0,-1.00,0));
        }
        if(e.key=="ArrowDown"){
            
            this.gameObject.transform.Position=this.gameObject.transform.Position.Add_b(new  Vector3(0, 1.00,0));
        }
    }
}