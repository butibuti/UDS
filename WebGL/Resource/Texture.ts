import ResourceContainer from "../Parts/ResourceContainer";
import ResourceCreater from "../Tool/ResourceCreater";
import GraphicDevice from "../Graphic/GraphicDevice"
import ITexture from "./ITexture"

export default class Texture implements ITexture{
    graphicDevice:GraphicDevice;
    data:WebGLTexture;
    path:string;
    resourceContainer:ResourceContainer;
    private isLoaded:boolean=false;
    constructor(arg_path:string,arg_device:GraphicDevice){
        this.graphicDevice=arg_device;
        this.path=arg_path;
    }
    Loaded() {
        this.isLoaded=true;
        if(this.resourceContainer)
        this.resourceContainer.LoadEnd();
    }
    IsLoaded():boolean {
        return this.isLoaded;
    }
    Initialize(){
        this.graphicDevice.CreateTexture(this.path,this);
    }
    Attach(slot:number){
        
        this.graphicDevice.context.activeTexture(this.graphicDevice.context.TEXTURE0);
        this.graphicDevice.context.bindTexture(this.graphicDevice.context.TEXTURE_2D,this.data);
        this.graphicDevice.context.uniform1i(this.graphicDevice.shader.GetTextureSlot(slot),slot);
        
        this.graphicDevice.context.texParameteri(this.graphicDevice.context.TEXTURE_2D, this.graphicDevice.context.TEXTURE_MIN_FILTER, this.graphicDevice.context.NEAREST);
        this.graphicDevice.context.texParameteri(this.graphicDevice.context.TEXTURE_2D, this.graphicDevice.context.TEXTURE_MAG_FILTER, this.graphicDevice.context.NEAREST);
    
    }
    SetContainer(resourceContainer:ResourceContainer){
        this.resourceContainer= resourceContainer;
        this.resourceContainer.LoadStart();
    }
}