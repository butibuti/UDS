import Light from "../Light/Light";

export default interface IModel{
    Draw:Function;
    SetLight(arg_light:Light):void
}