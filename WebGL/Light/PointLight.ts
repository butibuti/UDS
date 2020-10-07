import Light from "./Light"
import GraphicDevice from "../Graphic/GraphicDevice"
import Transform from "../Transform"


export default class PointLight implements Light{
    graphicDevice:GraphicDevice;
    transform :Transform;
    constructor(arg_device:GraphicDevice){
        this.graphicDevice=arg_device;
        this.transform=new Transform();
    }
    Atach():void{
        this.graphicDevice.context.uniform3fv(this.graphicDevice.shader.uniformLocations[4], this.transform.Position.xyz);
        
    }
} 