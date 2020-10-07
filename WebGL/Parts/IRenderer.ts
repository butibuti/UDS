import IModel from "../Graphic/IModel"
import ID from "./ID"
import Camera from "../Graphic/Camera"
import Light from "../Light/Light"
export default interface IRenderer{
    Draw(camera:Camera):void;
    AddLayer():void;
    Regist(arg_registObj: IModel,layer:number):ID;
    UnRegist(arg_ID: ID,layer:number);
    SetLight(arg_light:Light,layer:number):Light;
}