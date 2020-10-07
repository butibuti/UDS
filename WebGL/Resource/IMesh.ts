import IGeometry from "./IGeometry";
import IMaterial from "./IMaterial";

export default interface IMesh{
    geometry:IGeometry;
    ary_materials:Array<IMaterial>;
    SetParameter(arg_geometry:IGeometry,arg_ary_materials:Array<IMaterial>):void;
}