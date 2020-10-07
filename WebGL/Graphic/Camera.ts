import Matrix4x4 from "../Math/Matrix"
import Transform from "../Transform"
import GraphicDevice from "./GraphicDevice"
import FrameBufferTexture from "../Resource/FrameBufferTexture";
import Vector4 from "../Math/Vector4";

export default class Camera{
    device:GraphicDevice;
    transform :Transform;
    layer: number;
    projectionMatrix:Matrix4x4;
    clearColor:Vector4;
    targetFrame:FrameBufferTexture=null;
    constructor(arg_device:GraphicDevice,layer:number,isPararell:boolean,frameBuffer?:FrameBufferTexture){
        this.device=arg_device;
        this.transform=new Transform();
        this.layer=layer;
        this.clearColor=new Vector4(0,0,0,0);
        if(frameBuffer){
            this.targetFrame=frameBuffer;
            if(!isPararell){
                this.projectionMatrix=new Matrix4x4().Perspective(45, this.targetFrame.width / this.targetFrame.height, 0.1, 100);
            }else{
            this.projectionMatrix=new Matrix4x4().Ortho(-this.targetFrame.width/2,this.targetFrame.width/2,this.targetFrame.height/2,-this.targetFrame.height/2,0.1,100);
            
        }
        }else{
            if(!isPararell)
            this.projectionMatrix=new Matrix4x4().Perspective(45, this.device.GetSize().x / this.device.GetSize().y, 0.1, 100);
            else{
            this.projectionMatrix=new Matrix4x4().Ortho(-this.device.GetSize().x/2,this.device.GetSize().x/2,this.device.GetSize().y/2,-this.device.GetSize().y/2,0.1,100);
            
        }
        }
    }
    Attach():void{
        
        this.device.SetClearColor(this.clearColor);
        this.device.SetCameraMatrix(this.transform.Matrix.Inverse(),this.projectionMatrix);
        if(this.targetFrame){
            this.device.context.viewport(0, 0, this.targetFrame.width,  this.targetFrame.height);
		    this.device.context.bindFramebuffer(this.device.context.FRAMEBUFFER,this.targetFrame.frameBuffer);
            this.device.clearFunc();
        }else{
            this.device.context.viewport(0, 0,this.device.GetSize().x ,  this.device.GetSize().y);
		    this.device.context.bindFramebuffer(this.device.context.FRAMEBUFFER,null);
            this.device.clearFunc();
        
        }
    }

}