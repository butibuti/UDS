

export default interface IGeometry{
    Draw();
    GetIndexSize():number;
    SetSubset(arg_subset:Array<number>);
    GetSubSet():Array<number>;
}