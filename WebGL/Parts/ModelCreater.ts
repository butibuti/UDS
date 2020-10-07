
import IModel from "../Graphic/IModel"
import Model from "../Graphic/Model"
import ResourceContainer from "./ResourceContainer"
import GraphicDevice from "../Graphic/GraphicDevice";
import Transform from "../Transform";

export default class ModelCreater{
    resourceContainer:ResourceContainer;

    graphicDevice:GraphicDevice

    constructor(arg_garaphicDevice:GraphicDevice,arg_resourceContainer:ResourceContainer){
        this.resourceContainer=arg_resourceContainer;
        this.graphicDevice=arg_garaphicDevice;
    }
    CreateModel(isLighting:boolean, geometryPath:string,materialPath:string,shaderPath:string,arg_transform:Transform):IModel{

        var model=new Model(isLighting);
        model.Initialize_geom(this.graphicDevice,this.resourceContainer.GetGeometry(geometryPath),this.resourceContainer.GetMaterial(materialPath),this.resourceContainer.GetShader(shaderPath),arg_transform);
        return model;
    }
    CreateModelFromMesh(isLighting:boolean,meshPath:string,shaderPath:string,arg_transform:Transform):IModel{
        var model=new Model(isLighting);
        model.Initialize_mesh(this.graphicDevice,this.resourceContainer.GetMesh(meshPath),this.resourceContainer.GetShader(shaderPath),arg_transform);
        return model;
    }
}