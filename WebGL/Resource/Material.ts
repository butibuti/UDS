import Vector4 from "../Math/Vector4"
import GraphicDevice from "../GraphicDevice"
import ITexture from "./ITexture"
import IMaterial from "./IMaterial"
import Texture from "./Texture";

class ExParameter{
    slot:number;
    param;
    size:number;
    atachFunc:Function;
    constructor(arg_slot:number,arg_size:number,arg_param){
        this.slot=arg_slot;
        this.param=arg_param;
        this.size=arg_size;
        
        switch(arg_size){
            case 1:
            this.atachFunc=this.Atach1f;
            break;
            case 2:
            this.atachFunc=this.Atach2f;
            break;
            case 3:
            this.atachFunc=this.Atach3f;
            break;
            case 4:
            this.atachFunc=this.Atach4f;
            break;
            case 16:
            this.atachFunc=this.AtachMat;
            break;
        }
    }


    Atach1f(device:GraphicDevice){
        device.context.uniform1fv(device.shader.uniformLocations[this.slot], this.param.data);
    }
    Atach2f(device:GraphicDevice){
        device.context.uniform2fv(device.shader.uniformLocations[this.slot], this.param.data);
    }
    Atach3f(device:GraphicDevice){
        device.context.uniform3fv(device.shader.uniformLocations[this.slot], this.param.data);
    }
    Atach4f(device:GraphicDevice){
        device.context.uniform4fv(device.shader.uniformLocations[this.slot], this.param.data);
    }
    AtachMat(device:GraphicDevice){
        device.context.uniformMatrix4fv(device.shader.uniformLocations[this.slot],false, this.param.data);
    }
}
export default class Material implements IMaterial{
   
    ambientColor: Vector4;
    device:GraphicDevice;
    exParams:Array<ExParameter>;
    textures:Array<ITexture>;

    SetParameter(arg_ambient:Vector4,arg_device:GraphicDevice,arg_ary_texture?:Array< ITexture>,arg_ary_exParms?){
        this.ambientColor=arg_ambient;
        this.device=arg_device;
        if(arg_ary_texture)
        this.textures=arg_ary_texture;
        else
        this.textures=new Array();

        this.exParams=new Array();

        if(arg_ary_exParms){
            arg_ary_exParms.foreach(param=>this.AddExParam(param.n,param.s,param.p));
        }
    }
    constructor(){

    }
    SetTexture(arg_texture:ITexture,slot:number){
        this.textures[slot]=arg_texture;
    }
    AddExParam(arg_slot:number,arg_size:number,arg_param){
        this.exParams.push(new ExParameter(arg_slot,arg_size,arg_param));
    }
    Attach(){
        if(this.device.shader.ambientSlot){
            this.device.context.uniform4fv(this.device.shader.uniformLocations[this.device.shader.ambientSlot], this.ambientColor.xyzw);
        }
        for(var i=0;i<this.textures.length;i++){
            if(this.textures[i]!=null)
            this.textures[i].Attach(i);
        }
        for(var i=0;i< this.exParams.length;i++){
            this.exParams[i].atachFunc(this.device);
        }
    }
}