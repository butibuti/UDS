import Vector3 from "./Vector3";

export default class Line {
    point:Vector3;
    velocity:Vector3;
    Line( p:Vector3,  v:Vector3)  {
        this.point=p;
        this.velocity=v;
    }

    // 線上の座標を取得
    //  t: ベクトルに掛け算する係数
    GetPoint( t:number):Vector3 {
        return this.point.Add( this.velocity.Multiply(t) );
    }
};