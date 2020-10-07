export default interface IShader{
    programObject:WebGLProgram;
    attributeLocations:Array<number>;
    attributeStrides:Array<number>;
    uniformLocations:Array<WebGLUniformLocation>;
    ambientSlot:number;
    lightPosSlot:number;
    lightDirSlot:number;
    textureSlots:Array<number>;
    GetTextureSlot(arg_slot:number):WebGLUniformLocation;
    Attach();
}