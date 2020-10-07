import GraphicDevice from "../GraphicDevice"
import FileLoader from "../Tool/FileLoader"
import IShader from "./IShader"

function GetStride(arg_type:string):number{
    switch(arg_type){
        case "vec2":
            return 2;
        break
        case "vec3":
            return 3;
        break;
        case "vec4":
            return 4;
        break;
        case "int":
            return 1;
        break;
        case "float":
            return 1;
        break;
    }
    console.log("Type undifined.")
    return 0;
}

export default class Shader implements IShader{
    graphicDevice:GraphicDevice;
    programObject:WebGLProgram;
    attributeLocations:Array<number>;
    attributeStrides:Array<number>;
    uniformLocations:Array<WebGLUniformLocation>;
    ambientSlot:number;
    lightPosSlot:number;
    lightDirSlot:number;
    textureSlots:Array<number>;

    constructor(vsSource:string,fsSource:string,arg_graphicDevice:GraphicDevice){
        this.graphicDevice=arg_graphicDevice;

        var vsData=FileLoader.LoadText(vsSource);
        var v_shader = this.graphicDevice.CreateVertexShader(vsData);
        var fsData=FileLoader.LoadText(fsSource);
        var f_shader =this. graphicDevice.CreateFragmentShader(fsData);
        this.ambientSlot=-1;
        this.lightPosSlot=-1;
        this.lightDirSlot=-1;
        this.programObject=this.graphicDevice.CreateProgram(v_shader, f_shader);

        this.attributeLocations=new Array();
        this.attributeStrides=new Array();
        this.uniformLocations=new Array<WebGLUniformLocation>();
        this.textureSlots=new Array();

        var attributeSource= vsData.split(";");
        attributeSource= attributeSource.filter(source=>source.indexOf("attribute")!=-1);

        var attributeSemantics= new Array<Array<string>>();
        
        for(var i=0;i<attributeSource.length;i++){
            attributeSource[i]=attributeSource[i].replace(/\r?\n/g,"");
        }
        attributeSource.forEach(source=> attributeSemantics.push(source.split(" ")));

        for(var i=0;i<attributeSemantics.length;i++){
            attributeSemantics[i]=attributeSemantics[i].filter(s=>s!="")
            this.attributeLocations[i] = this.graphicDevice.context.getAttribLocation(this.programObject, attributeSemantics[i][2]);
            
            this.attributeStrides[i]=GetStride(attributeSemantics[i][1]);
        }
  
        var uniSource= fsData.split(";")

        uniSource=vsData.split(";").concat(uniSource);

        uniSource= uniSource.filter(source=>source.indexOf("uniform")!=-1);

        var uniSemantics= new Array<Array<string>>();
        for(var i=0;i<uniSource.length;i++){
            uniSource[i]=uniSource[i].replace(/\r?\n/g,"");
        }
        
        uniSource.forEach(source=> uniSemantics.push(source.split(" ")));

        for(var i=0;i<uniSemantics.length;i++){
            uniSemantics[i]=uniSemantics[i].filter(s=>s!="")
            this.uniformLocations.push( this.graphicDevice.context.getUniformLocation(this.programObject,uniSemantics[i][2])as WebGLUniformLocation);
            if(uniSemantics[i][2]=="ambientColor"){
                this.ambientSlot=i;
            }else if(uniSemantics[i][2]=="lightPosition"){
                this.lightPosSlot=i;
            }else if(uniSemantics[i][2]=="lightDirection"){
                this.lightDirSlot=i;
            }else if(uniSemantics[i][1]=="sampler2D"){
                this.textureSlots.push(i);
            }
        }
    }
    
    GetTextureSlot(arg_slot:number):WebGLUniformLocation{
        if(this.textureSlots[arg_slot]!=null){
            return this.uniformLocations[this.textureSlots[arg_slot]]
        }
    }
    Attach():void{
        this.graphicDevice.SetShader(this);
    }
}