import Light from "../Light/Light";

export default interface IModel{
    Draw:Function;
    SetLight(arg_light:Light):void;
    AddExParam(arg_slot:number,arg_size:number,arg_param):void;
}