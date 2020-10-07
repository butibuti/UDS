import IGeometry from "./IGeometry";
import IMaterial from "./IMaterial";
import IMesh from "./IMesh";

export default class Mesh implements IMesh{
    geometry:IGeometry;
    ary_materials:Array<IMaterial>;
    constructor(){
    }
    SetParameter(arg_geometry:IGeometry,arg_ary_materials:Array<IMaterial>):void
    {
        this.geometry=arg_geometry;
        this.ary_materials=arg_ary_materials;
    }
}