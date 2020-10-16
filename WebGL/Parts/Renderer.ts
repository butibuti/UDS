import IRenderer from "./IRenderer"
import IModel from "../Graphic/IModel";
import ID from "./ID";
import Camera from "../Graphic/Camera"
import Light from "../Light/Light";

class Layer{

    ary_IModels:Array<IModel>;
    ary_IDs:Array<ID>;
    ary_lights:Array<Light>;
    SetLight(arg_light: Light): Light {
        this.ary_lights.push(arg_light);

        return arg_light;
    }
    constructor(){
        this.ary_IDs=new Array();
        this.ary_IModels=new Array();
        this.ary_lights=new Array();
    }

    Regist(arg_registObj: IModel): ID {
        if(this.ary_lights.length>0){
            arg_registObj.SetLight(this.ary_lights[0]);
        }
        var id=new ID(this.ary_IModels.length);
        this.ary_IModels.push(arg_registObj);
        this.ary_IDs.push(id);
        return id;
    }
    UnRegist(arg_ID: ID) {
        var index=arg_ID.num;
        if (index > this.ary_IDs.length) {
            return;
        }
        this.ary_IModels.splice(arg_ID.num,1);
        this.ary_IDs.splice(arg_ID.num,1);
        for(var i=arg_ID.num;i<this.ary_IDs.length;i++){
            this.ary_IDs[i].num--;
        }
    }
    Draw(){
        
        this.ary_IModels.forEach(imodel=>imodel.Draw());
    }
    Release(){
        this.ary_IDs.length=0;
        this.ary_IModels.length=0;
        this.ary_lights.length=0;
    }
}

export default class Renderer implements IRenderer{

    layers:Array< Layer>;
    constructor(){
        this.layers=new Array();
        this.layers.push(new Layer());
    }

    Regist(arg_registObj: IModel, layer: number): ID {
        if(this.layers.length<= layer){
            layer=0;
        }
        return this.layers[layer].Regist(arg_registObj);
    }
    UnRegist(arg_ID: ID, layer: number) {
        
        if(this.layers.length<= layer){
            layer=0;
        }
        this.layers[layer].UnRegist(arg_ID);
    }
    SetLight(arg_light: Light, layer: number): Light {
        if(this.layers.length<= layer){
            layer=0;
        }
        return this.layers[layer].SetLight(arg_light);
    }

    AddLayer(){
        this.layers.push(new Layer());
    }
    Draw(camera:Camera): void {
        if(this.layers.length<= camera.layer){
            return;
        }
        camera.Attach();
        this.layers[camera.layer].Draw();
    }

    Release(){
        this.layers.forEach(layer=>layer.Release());
    }
}