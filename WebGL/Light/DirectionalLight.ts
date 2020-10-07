import Light from "./Light"
import GraphicDevice from "../Graphic/GraphicDevice"
import Vector3 from "..//Math/Vector3";


export default class PointLight implements Light{
    graphicDevice:GraphicDevice;
    private direction:Vector3
    constructor(arg_device:GraphicDevice){
        this.graphicDevice=arg_device;
        this.direction=new Vector3(0,1,0);
    }
    set Direction(arg_other:Vector3){
        this.direction=arg_other;
        this.direction.Normalize_b();
    }
    Atach():void{
        
        this.graphicDevice.context.uniform3fv(this.graphicDevice.shader.uniformLocations[5], this.direction.xyz);
        
    }
} 