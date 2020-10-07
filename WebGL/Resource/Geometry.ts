import GraphicDevice from "../Graphic/GraphicDevice"
import IGeometry from "./IGeometry"

export default class Geometry implements IGeometry{


    vboList:Array< WebGLBuffer>;
    ibo:WebGLBuffer;
    indexSize:number;
    device: GraphicDevice;
    subset:Array<number>;
    constructor(data,isUV:boolean,isNormal:boolean,isColor:boolean,arg_device: GraphicDevice){
        this.device=arg_device;
        this.vboList=new Array();
        this.vboList.push(arg_device.CreateVBO(data.p));
        if(isUV){
            this.vboList.push(arg_device.CreateVBO(data.uv));
            
        }
        if(isNormal){
            this.vboList.push(arg_device.CreateVBO(data.n));
        }
        if(isColor){
            this.vboList.push(arg_device.CreateVBO(data.c));
        }

        this.ibo=arg_device.CreateIBO( data.i);

        this.indexSize=data.i.length;
        this.subset=new Array();
        this.subset.push(data.i.length);
    }
    GetIndexSize(): number {
        return this.indexSize;
    }
    Draw(){
        this.device.SetVBO(this.vboList);
        
        this.device.context.bindBuffer(this.device.context.ELEMENT_ARRAY_BUFFER,this.ibo);
    }
    
    SetSubset(arg_subset:Array<number>){
        this.subset=arg_subset;
    }
    GetSubSet():Array<number>{
        return this.subset;
    }
}