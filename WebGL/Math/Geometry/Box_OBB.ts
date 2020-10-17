import Vector3 from "../Vector3";

export default class Box_OBB{

    position:Vector3;
    halfLengthes:Vector3 ;
    directs :Array<Vector3> ;
    initLengthes:Vector3;

    constructor( arg_length:Vector3) {
        this.halfLengthes = arg_length.Multiply(0.5);
        this.directs=new Array(3);
        this.position=new Vector3(0,0,0);
        this.directs[0]=Vector3.xAxis.Clone();
        this.directs[1]=Vector3.yAxis.Clone();
        this.directs[2]=Vector3.zAxis.Clone();
    }
    GetDirect(index:number):Vector3 {
        return this.directs[index];
    }
    Length(index:number):number {
        return this.halfLengthes.data[index]; 
    }
    GetPos():Vector3 {
        return  this.position;
    }
}