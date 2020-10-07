import GraphicDevice from "../Graphic/GraphicDevice";
import ResourceContainer from "../Parts/ResourceContainer";
import ITexture from "./ITexture";

export default class FrameBufferTexture implements ITexture{
    graphicDevice:GraphicDevice;
    frameBuffer:WebGLFramebuffer;
    depthBuffer:WebGLRenderbuffer;
    data:WebGLTexture;
    width:number;
    height:number;

    constructor(arg_graphicDevice:GraphicDevice,width:number, height:number){
        this.width=width;
        this.height=height;
        this.graphicDevice=arg_graphicDevice;
        // フレームバッファの生成
        this.frameBuffer = this.graphicDevice.context.createFramebuffer();
        
        // フレームバッファをWebGLにバインド
        this.graphicDevice.context.bindFramebuffer(this.graphicDevice.context.FRAMEBUFFER, this.frameBuffer);
        
        // 深度バッファ用レンダーバッファの生成とバインド
        this.depthBuffer = this.graphicDevice.context.createRenderbuffer();
        this.graphicDevice.context.bindRenderbuffer(this.graphicDevice.context.RENDERBUFFER,this.depthBuffer);
        
        // レンダーバッファを深度バッファとして設定
        this.graphicDevice.context.renderbufferStorage(this.graphicDevice.context.RENDERBUFFER, this.graphicDevice.context.DEPTH_COMPONENT16, width, height);
        
        // フレームバッファにレンダーバッファを関連付ける
        this.graphicDevice.context.framebufferRenderbuffer(this.graphicDevice.context.FRAMEBUFFER, this.graphicDevice.context.DEPTH_ATTACHMENT, this.graphicDevice.context.RENDERBUFFER,this.depthBuffer);
        
        // フレームバッファ用テクスチャの生成
        this.data = this.graphicDevice.context.createTexture();
        
        // フレームバッファ用のテクスチャをバインド
        this.graphicDevice.context.bindTexture(this.graphicDevice.context.TEXTURE_2D, this.data);
        
        // フレームバッファ用のテクスチャにカラー用のメモリ領域を確保
        this.graphicDevice.context.texImage2D(this.graphicDevice.context.TEXTURE_2D, 0, this.graphicDevice.context.RGBA, width, height, 0, this.graphicDevice.context.RGBA, this.graphicDevice.context.UNSIGNED_BYTE, null);
        
        // テクスチャパラメータ
        this.graphicDevice.context.texParameteri(this.graphicDevice.context.TEXTURE_2D, this.graphicDevice.context.TEXTURE_MAG_FILTER, this.graphicDevice.context.LINEAR);
        this.graphicDevice.context.texParameteri(this.graphicDevice.context.TEXTURE_2D, this.graphicDevice.context.TEXTURE_MIN_FILTER, this.graphicDevice.context.LINEAR);
        
        // フレームバッファにテクスチャを関連付ける
        this.graphicDevice.context.framebufferTexture2D(this.graphicDevice.context.FRAMEBUFFER, this.graphicDevice.context.COLOR_ATTACHMENT0, this.graphicDevice.context.TEXTURE_2D, this.data, 0);
        
        // 各種オブジェクトのバインドを解除
        this.graphicDevice.context.bindTexture(this.graphicDevice.context.TEXTURE_2D, null);
        this.graphicDevice.context.bindRenderbuffer(this.graphicDevice.context.RENDERBUFFER, null);
        this.graphicDevice.context.bindFramebuffer(this.graphicDevice.context.FRAMEBUFFER, null);
        
    }
    SetContainer(resourceContainer: ResourceContainer) {
        
    }
    Loaded() {
        
    }
    IsLoaded(): boolean {
        return true;
    }

    Initialize(): void {
    }
    Attach(slot: number): void {
        this.graphicDevice.context.activeTexture(this.graphicDevice.context.TEXTURE0);
        this.graphicDevice.context.bindTexture(this.graphicDevice.context.TEXTURE_2D,this.data);
        this.graphicDevice.context.uniform1i(this.graphicDevice.shader.GetTextureSlot(slot),slot);
    }

    

}