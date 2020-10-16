
import IModel from "../Graphic/IModel"
import Model from "../Graphic/Model"
import ResourceContainer from "./ResourceContainer"
import GraphicDevice from "../Graphic/GraphicDevice";
import Transform from "../Transform";
import Vector4 from "../Math/Vector4";
import ResourceCreater from "../Tool/ResourceCreater";
import GeometryGenerater from "../Tool/GeometryGenerator";
import Vector2 from "../Math/Vector2";
import TextModel from "../Graphic/TextModel";


const CharMap=new Map([
    [" ", 0], ["!", 1], ['"', 2], ["#", 3], ["$", 4], ["%", 5], ["&", 6], ["'", 7], ["(", 8], [")", 9]
    ,["*", 10], ["+", 11], [',', 12], ["-", 13], [".", 14], ["/", 15], ["0", 16], ["1", 17], ["2", 18], ["3", 19]
    ,["4", 20], ["5", 21], ['6', 22], ["7", 23], ["8", 24], ["9", 25], [":", 26], [";", 27], ["<", 28], ["=", 29]
    ,[">", 30], ["?", 31], ['@', 32], ["A", 33], ["B", 34], ["C", 35], ["D", 36], ["E", 37], ["F", 38], ["G", 39]
    ,["H", 40], ["I", 41], ['J', 42], ["K", 43], ["L", 44], ["M", 45], ["N", 46], ["O", 47], ["P", 48], ["Q", 49]
    ,["R", 50], ["S", 51], ['T', 52], ["U", 53], ["V", 54], ["W", 55], ["X", 56], ["Y", 57], ["Z", 58], ["[", 59]
    ,["\\", 60], ["]", 61], ['^', 62], ["_", 63], ["`", 64], ["a", 65], ["b", 66], ["c", 67], ["d", 68], ["e", 69]
    ,["f", 70], ["g", 71], ['h', 72], ["i", 73], ["j", 74], ["k", 75], ["l", 76], ["m", 77], ["n", 78], ["o", 79]
    ,["p", 80], ["q", 81], ['r', 82], ["s", 83], ["t", 84], ["u", 85], ["v", 86], ["w", 87], ["x", 88], ["y", 89]
    ,["z", 90], ["{", 99], ['|', 92], ["}", 93], ["~", 94], 
]);

function CharChange(arg_name:string){

    
    return CharMap.get( arg_name);

}

export default class ModelCreater{
    resourceContainer:ResourceContainer;
    fontUVContainer:Map<string,WebGLBuffer>;
    graphicDevice:GraphicDevice

    constructor(arg_garaphicDevice:GraphicDevice,arg_resourceContainer:ResourceContainer){
        this.resourceContainer=arg_resourceContainer;
        this.graphicDevice=arg_garaphicDevice;
        this.fontUVContainer=new Map<string,WebGLBuffer>();
    }
    CreateModel(isLighting:boolean,isBillBoard:boolean, geometryPath:string,materialPath:string,shaderPath:string,arg_transform:Transform):IModel{

        var model=new Model(isLighting,isBillBoard);
        model.Initialize_geom(this.graphicDevice,this.resourceContainer.GetGeometry(geometryPath),this.resourceContainer.GetMaterial(materialPath),this.resourceContainer.GetShader(shaderPath),arg_transform);
        return model;
    }
    CreateModelFromMesh(isLighting:boolean,isBillBoard:boolean,meshPath:string,shaderPath:string,arg_transform:Transform):IModel{
        var model=new Model(isLighting,isBillBoard);
        model.Initialize_mesh(this.graphicDevice,this.resourceContainer.GetMesh(meshPath),this.resourceContainer.GetShader(shaderPath),arg_transform);
        return model;
    }
    CreateModelFromText(isBillBoard:boolean,arg_color:Vector4,text:string,fontTexturePath:string,shaderPath:string,arg_transform:Transform){
        
        var model=new TextModel(isBillBoard);


        var materialName:string=arg_color.data[0]+""+arg_color.data[1]+""+arg_color.data[2]+""+arg_color.data[3]+""+fontTexturePath;

        var material=this.resourceContainer.GetMaterial(materialName);

        if(material==null){
            material= this.resourceContainer.AddMaterial(ResourceCreater.CreateMaterial(arg_color,this.graphicDevice,[this.resourceContainer.GetTexture(fontTexturePath)]),materialName);
        }

        var geometryPath="Text:"+text.length;


        var geometry=this.resourceContainer.GetGeometry(geometryPath);

        if(geometry==null){
            geometry= this.resourceContainer.AddGeometry(ResourceCreater.CreateGeometry(GeometryGenerater.CreateTextGeometry(text.length),true,false,false,this.graphicDevice),geometryPath);
        }


        model.Initialize_geom(this.graphicDevice,geometry,material,this.resourceContainer.GetShader(shaderPath),arg_transform);
        

        var uv:WebGLBuffer=this.fontUVContainer[text];

        if(!uv){
            
            var data=new Array<number>();
    
            
            
    
            var xUnit=(1.0/128.0)*7;
            var yUnit=1.0/14.0;
            for(var i=0;i<text.length;i++){
                var num=CharChange(text[i]);
                var x=num%18;
                var y=Math.floor (num/18);
                
                data.push(x*xUnit,(y+1)*yUnit,(x+1)*xUnit,(y+1)*yUnit,x*xUnit,y*yUnit,(x+1)*xUnit,y*yUnit);
            }
            uv =this.graphicDevice.CreateVBO(data);
            this.fontUVContainer[text]=uv;
        }

        model.SetUVData(uv);

        return model;
    }
}