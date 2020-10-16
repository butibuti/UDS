import Component from "../Component/Component";
import TextDrawComponent from "../Component/TextDrawComponent";
import GameObject from "../GameObject/GameObject";
import Vector3 from "../Math/Vector3";
import Vector4 from "../Math/Vector4";
import Transform from "../Transform";

export default class CrossyUI extends Component{
    coinText:TextDrawComponent;
    arrivalText:TextDrawComponent;
    constructor(){
        super();
    }

    OnSet(){
        var coinTrans=new Transform(new Vector3(300,-200,-1),new Vector3(0,0,0),new Vector3(50,50,50));
        this.coinText=new TextDrawComponent("0","font","fontShader",new Vector4(0.9,0.9,0.25,1),2,false,coinTrans);
        var arrivalTrans=new Transform(new Vector3(-300,-200,-1),new Vector3(0,0,0),new Vector3(50,50,50));
        this.arrivalText=new TextDrawComponent("0","font","fontShader",new Vector4(0.1,0.1,0.1,1),2,false,arrivalTrans);
        this.gameObject.SetComponent(this.coinText);

        this.gameObject.SetComponent(this.arrivalText);
    }
    SetCoinNum(arg_coin:number){
        this.coinText.SetText(arg_coin+"");
    }
    SetArrival(arg_arrival:number){
        this.arrivalText.SetText(arg_arrival+"");

    }
}