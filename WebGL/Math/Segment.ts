import Line from "./Line";
import Vector3 from "./Vector3";

export default class Segment extends Line {
    
    endPos:Vector3;
    constructor (startPoint:Vector3, endPoint:Vector3)  {
        //super(startPoint,endPoint.Sub_b(startPoint));
        super();
        this.point=startPoint;
        this.velocity=endPoint.Sub_b(startPoint);
        this.endPos=endPoint;
    }

    // 終点を取得
    GetEndPoint():Vector3 {
        return this.endPos;
    }
    GetPoint( t:number) :Vector3 {
        return(this.endPos.Sub( this.point)).Multiply(t) ;
    }
};