import Light from "../Light/Light";

export default interface IModel{
    Draw():void;
    SetLight(arg_light:Light):void
}