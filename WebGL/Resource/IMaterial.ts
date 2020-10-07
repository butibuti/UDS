import ITexture from "./ITexture"

export default interface IMaterial {
    SetTexture(arg_texture:ITexture,slot:number):void;
    AddExParam(arg_slot:number,arg_size:number,arg_param):void;
    Attach():void;
}