import Line from "../Line";
import Segment from "../Segment";
import Vector3 from "../Vector3";
import Box_AABB from "./Box_AABB";
import Box_OBB from "./Box_OBB";
import Sphere from "./Sphere";

function abs(arg:number){
    if(arg<0){
        return arg*-1;
    }else{
        return arg;
    }
}
export default class GeometryHelper{
    
    static GetDistance( arg_point:Vector3, arg_surfacePoint:Vector3,  arg_surfaceNormal:Vector3):number {
        return abs(arg_surfaceNormal.Dot(arg_point .Sub( arg_surfacePoint))) / arg_surfaceNormal.Length();
    }
    
    static GetDistanceLineLine( arg_line:Line,  arg_otherLine:Line):number {
        var normal = arg_line.velocity.Cross(arg_otherLine.velocity).Normalize();
        return normal.Dot(arg_otherLine.point .Sub( arg_line.point));
    }

    static  IsHitPointLine( arg_point: Vector3,  arg_line:Line) :boolean{
        var length= (arg_point.Sub( arg_line.point).Cross(arg_line.velocity)).Length();
        if (length)
        {
            return true;
        }
        else {
            return false;
        }
    }
    static  IsHitPointSegment(arg_point:Vector3,  arg_segment:Segment):boolean {
        var v = arg_point.Sub( arg_segment.point);
        if (v.Cross(arg_segment.velocity).Length() && v.LengthSqr() <= arg_segment.velocity.LengthSqr())
        {
            return true;
        }
        else {
            return false;
        }
    }
    static  GetDistancePointSegment( arg_point:Vector3, arg_segment:Segment):Vector3 {
        var v = arg_segment.GetEndPoint().Sub( arg_segment.point);
        var vp = arg_point .Sub( arg_segment.point);
        var t = v.Normalize().Dot(vp) / v.Length();

        if (t > 1) {

            return arg_segment.GetEndPoint().Sub( arg_point);
        }
        else if (t < 0) {
            return arg_segment.point .Sub( arg_point);
        }

        return v.Multiply_b( t).Sub_b( vp);
    }

    static  GetPolygonY(arg_pointA:Vector3,  arg_pointB:Vector3, arg_pointC:Vector3,  objX:number,objZ:number) :number{
        var normal = arg_pointA .Sub( arg_pointB ).Cross(arg_pointA.Sub( arg_pointC));
        if (normal.y < 0) {
            normal .Multiply( -1);
        }
        return arg_pointA.y - (normal.x * (objX - arg_pointA.x) + normal.z * (objZ - arg_pointA.z)) / normal.y;
    }


    static IsHitLineLine( arg_linev1:Line, arg_linev2:Line) :boolean{
        var v3 = arg_linev2.point .Sub( arg_linev1.point);
        var normal1 = arg_linev1.velocity.Cross(arg_linev2.velocity);
        var normal2 = arg_linev1.velocity.Cross(v3);

        if (!normal2.LengthSqr()) {
            return true;
        }
        if (normal1.LengthSqr() != 0 && normal1.Cross(normal2).LengthSqr() == 0) {
            return true;
        }
    return false;
}

    static  IsHitLineSurface( arg_line:Line,  arg_surfacePoint:Vector3, arg_surfaceNormal:Vector3) :boolean{
        var v1 = arg_line.point .Sub( arg_surfacePoint);
        if (v1.Dot(arg_surfaceNormal) == 0) {
            return true;
        }
        if (arg_line.velocity.Dot(arg_surfaceNormal)) {
            return true;
        }
        return false;
    }
    static  IsHitSegmentSurface( arg_segment:Segment, arg_surfacePoint:Vector3, arg_surfaceNormal:Vector3) :boolean{
        var v1 = arg_segment.point .Sub( arg_surfacePoint);
        var v2 = arg_segment.GetEndPoint()  .Sub( arg_surfacePoint);

        if (arg_surfaceNormal.Dot(v1) * arg_surfaceNormal.Dot(v2) <= 0) {
            return true;
        }
        return false;
    }


    static   GetDitancePointBox_AABBSqrt(arg_point:Vector3,  arg_box:Box_AABB) :number{

        var SqLen = 0;

        for (var i = 0; i < 3; i++)
        {
            if (arg_point.data[i] < arg_box.GetMin(i))  
                SqLen += (arg_point.data[i] - arg_box.GetMin(i)) * (arg_point.data[i] - arg_box.GetMin(i));
            if (arg_point.data[i] > arg_box.GetMax(i))
                SqLen += (arg_point.data[i] - arg_box.GetMax(i)) * (arg_point.data[i] - arg_box.GetMax(i));
        }
        return SqLen;
    }

    static   GetDitancePointBox_AABB(arg_point:Vector3, arg_box:Box_AABB) :number{
        return (GeometryHelper. GetDitancePointBox_AABBSqrt(arg_point, arg_box));
    }


    static  GetDitancePointBox_OBB_Static( arg_point:Vector3,  arg_box:Box_OBB) :number{

        var output=new Vector3(0,0,0);
        for (var i = 0; i < 3; i++)
        {
            var L = arg_box.Length(i);
            if (L <= 0) continue;
            var s = (arg_point .Sub( arg_box.GetPos())).Dot(arg_box.GetDirect(i)) / L;

            // sの値から、はみ出した部分があればそのベクトルを加算
            s = abs(s);
            if (s > 1)
                output .Add_b(arg_box.GetDirect(i).Multiply( (1 - s)).Multiply( L)  );
        }
        var outputLen = output.Length();
        //console.log(outputLen);
        return outputLen;
    }

    static   IsHitPointBox_OBB( arg_point:Vector3,  arg_box:Box_OBB) :boolean{
        return !GeometryHelper. GetDitancePointBox_OBB_Static(arg_point, arg_box);
    }
    static  IsHitSphereBox_OBB( arg_sphere:Sphere,  arg_box:Box_OBB) :boolean{
        return (arg_sphere.radius) >=GeometryHelper. GetDitancePointBox_OBB_Static(arg_sphere.position, arg_box);
    }
    static  IsHitPointBox_AABB( arg_point:Vector3, arg_box:Box_AABB) :boolean{
        return !GeometryHelper.GetDitancePointBox_AABB(arg_point, arg_box);
    }
    static  IsHitSphereBox_AABB( arg_sphere:Sphere,  arg_box:Box_AABB) :boolean{
        return (arg_sphere.radius) >=GeometryHelper. GetDitancePointBox_AABB(arg_sphere.position, arg_box);
    }

    static  LengthSeparatedAxis( arg_sep:Vector3,  arg_e1:Vector3,  arg_e2:Vector3,  arg_e3:Vector3 = null) :number{
        var r1 = abs(arg_sep.Dot(arg_e1));
        var r2 = abs(arg_sep.Dot(arg_e2));
        var r3 = arg_e3 ? (abs(arg_sep.Dot(arg_e3))) : 0;
        return r1 + r2 + r3;
    }

    static   IsHitBox_AABB( arg_box:Box_AABB,   arg_otherBox:Box_AABB):boolean {
        var xAxis =new Vector3(1, 0, 0), Ae1 = xAxis .Multiply( arg_box.Length(0));
        var yAxis =new Vector3(0, 1, 0), Ae2 = yAxis .Multiply( arg_box.Length(1));
        var zAxis =new Vector3(0, 0, 1), Ae3 = zAxis .Multiply( arg_box.Length(2));
        var Be1 = xAxis .Multiply( arg_otherBox.Length(0));
        var Be2 = yAxis .Multiply( arg_otherBox.Length(1));
        var Be3 = zAxis .Multiply( arg_otherBox.Length(2));
        var Interval = arg_box.position.Sub( arg_otherBox.position);

        // 分離軸 : Ae1
        var rA = Ae1.Length();
        var rB = GeometryHelper.LengthSeparatedAxis(xAxis, Be1, Be2, Be3);
        var L = abs(Interval.Dot(xAxis));
        if (L > rA + rB)
            return false; // 衝突していない

         // 分離軸 : Ae2
        rA = Ae2.Length();
        rB = GeometryHelper.LengthSeparatedAxis(yAxis, Be1, Be2, Be3);
        L = abs(Interval.Dot(yAxis));
        if (L > rA + rB)
            return false;

        // 分離軸 : Ae3
        rA = Ae3.Length();
        rB = GeometryHelper.LengthSeparatedAxis(zAxis, Be1, Be2, Be3);
        L = abs(Interval.Dot(zAxis));
        if (L > rA + rB)
            return false;

        // 分離軸 : Be1
        rA = GeometryHelper.LengthSeparatedAxis(xAxis, Ae1, Ae2, Ae3);
        rB = Be1.Length();
        L = abs(Interval.Dot(xAxis));
        if (L > rA + rB)
            return false;

        // 分離軸 : Be2
        rA = GeometryHelper.LengthSeparatedAxis(yAxis, Ae1, Ae2, Ae3);
        rB = Be2.Length();
        L = abs(Interval.Dot(yAxis));
        if (L > rA + rB)
            return false;

        // 分離軸 : Be3
        rA = GeometryHelper.LengthSeparatedAxis(zAxis, Ae1, Ae2, Ae3);
        rB = Be3.Length();
        L = abs(Interval.Dot(zAxis));
        if (L > rA + rB)
            return false;

        return true;
    }

    static IsHitBox_OBBBox_AABB( arg_box:Box_AABB, arg_otherBox :Box_OBB) :boolean{
        var xAxis =new Vector3(1, 0, 0), Ae1 = xAxis .Multiply( arg_box.Length(0));
        var yAxis =new Vector3(0, 1, 0), Ae2 = yAxis .Multiply( arg_box.Length(1));
        var zAxis =new Vector3(0, 0, 1), Ae3 = zAxis .Multiply( arg_box.Length(2));
        var NBe1 = arg_otherBox.GetDirect(0), Be1 = NBe1 .Multiply( arg_otherBox.Length(0));
        var NBe2 = arg_otherBox.GetDirect(1), Be2 = NBe2 .Multiply( arg_otherBox.Length(1));
        var NBe3 = arg_otherBox.GetDirect(2), Be3 = NBe3 .Multiply( arg_otherBox.Length(2));
        var Interval = arg_box.position .Sub( arg_otherBox.GetPos());

        // 分離軸 : Ae1
        var rA = Ae1.Length();
        var rB = GeometryHelper. LengthSeparatedAxis(xAxis, Be1, Be2, Be3);
        var L = abs(Interval.Dot(xAxis));
        if (L > rA + rB)
            return false; // 衝突していない

         // 分離軸 : Ae2
        rA = Ae2.Length();
        rB = GeometryHelper.LengthSeparatedAxis(yAxis, Be1, Be2,Be3);
        L = abs(Interval.Dot(yAxis));
        if (L > rA + rB)
            return false;

        // 分離軸 : Ae3
        rA = Ae3.Length();
        rB =GeometryHelper. LengthSeparatedAxis(zAxis, Be1, Be2, Be3);
        L = abs(Interval.Dot(zAxis));
        if (L > rA + rB)
            return false;

        // 分離軸 : Be1
        rA = GeometryHelper.LengthSeparatedAxis(NBe1, Ae1, Ae2, Ae3);
        rB = Be1.Length();
        L = abs(Interval.Dot(NBe1));
        if (L > rA + rB)
            return false;

        // 分離軸 : Be2
        rA = GeometryHelper.LengthSeparatedAxis(NBe2, Ae1, Ae2, Ae3);
        rB = Be2.Length();
        L = abs(Interval.Dot(NBe2));
        if (L > rA + rB)
            return false;

        // 分離軸 : Be3
        rA = GeometryHelper.LengthSeparatedAxis(NBe3, Ae1, Ae2, Ae3);
        rB = Be3.Length();
        L = abs(Interval.Dot(NBe3));
        if (L > rA + rB)
            return false;


        return true;
    }
    static   GetBox_OBBContainAABBLength(arg_box:Box_OBB) :Vector3{
        var xAxis =new  Vector3(1, 0, 0);
        var yAxis =new Vector3(0, 1, 0);
        var zAxis =new Vector3(0, 0, 1);
        var Be1 = arg_box.GetDirect(0) .Multiply( arg_box.Length(0));
        var Be2 = arg_box.GetDirect(1) .Multiply( arg_box.Length(1));
        var Be3 = arg_box.GetDirect(2) .Multiply( arg_box.Length(2));

        return new Vector3(GeometryHelper.LengthSeparatedAxis(xAxis, Be1, Be2, Be3), GeometryHelper.LengthSeparatedAxis(yAxis, Be1, Be2, Be3), GeometryHelper.LengthSeparatedAxis(zAxis, Be1, Be2, Be3));
    }

    static   IsHitBox_OBB(arg_box:Box_OBB,  arg_otherBox:Box_OBB):boolean {
        // 各方向ベクトルの確保
          // （N***:標準化方向ベクトル）
        var NAe1 = arg_box.GetDirect(0), Ae1 = NAe1 .Multiply( arg_box.Length(0));
        var NAe2 = arg_box.GetDirect(1), Ae2 = NAe2 .Multiply( arg_box.Length(1));
        var NAe3 = arg_box.GetDirect(2), Ae3 = NAe3 .Multiply( arg_box.Length(2));
        var NBe1 = arg_otherBox.GetDirect(0), Be1 = NBe1 .Multiply( arg_otherBox.Length(0));
        var NBe2 = arg_otherBox.GetDirect(1), Be2 = NBe2 .Multiply( arg_otherBox.Length(1));
        var NBe3 = arg_otherBox.GetDirect(2), Be3 = NBe3 .Multiply( arg_otherBox.Length(2));
        var Interval = arg_box.GetPos() .Sub( arg_otherBox.GetPos());

        // 分離軸 : Ae1
        var rA = Ae1.Length();
        var rB = GeometryHelper.LengthSeparatedAxis(NAe1, Be1, Be2, Be3);
        var L = abs(Interval.Dot(NAe1));
        if (L > rA + rB)
            return false; // 衝突していない

         // 分離軸 : Ae2
        rA = Ae2.Length();
        rB = GeometryHelper.LengthSeparatedAxis(NAe2, Be1, Be2, Be3);
        L = abs(Interval.Dot(NAe2));
        if (L > rA + rB)
            return false;

        // 分離軸 : Ae3
        rA = Ae3.Length();
        rB = GeometryHelper.LengthSeparatedAxis(NAe3, Be1, Be2, Be3);
        L = abs(Interval.Dot(NAe3));
        if (L > rA + rB)
            return false;

        // 分離軸 : Be1
        rA =GeometryHelper. LengthSeparatedAxis(NBe1, Ae1, Ae2, Ae3);
        rB = Be1.Length();
        L = abs(Interval.Dot(NBe1));
        if (L > rA + rB)
            return false;

        // 分離軸 : Be2
        rA =GeometryHelper. LengthSeparatedAxis(NBe2, Ae1, Ae2, Ae3);
        rB = Be2.Length();
        L = abs(Interval.Dot(NBe2));
        if (L > rA + rB)
            return false;

        // 分離軸 : Be3
        rA = GeometryHelper.LengthSeparatedAxis(NBe3, Ae1, Ae2, Ae3);
        rB = Be3.Length();
        L = abs(Interval.Dot(NBe3));
        if (L > rA + rB)
            return false;

        // 分離軸 : C11
        var Cross = NAe1.Cross(NBe1);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae2, Ae3);
        rB =GeometryHelper. LengthSeparatedAxis(Cross, Be2, Be3);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;

        // 分離軸 : C12
        Cross = NAe1.Cross(NBe2);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae2, Ae3);
        rB =GeometryHelper. LengthSeparatedAxis(Cross, Be1, Be3);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;

        // 分離軸 : C13
        Cross = NAe1.Cross(NBe3);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae2, Ae3);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be1, Be2);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;

        // 分離軸 : C21
        Cross = NAe2.Cross(NBe1);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae1, Ae3);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be2, Be3);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;

        // 分離軸 : C22
        Cross = NAe2.Cross(NBe2);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae1, Ae3);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be1, Be3);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;

        // 分離軸 : C23
        Cross = NAe2.Cross(NBe3);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae1, Ae3);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be1, Be2);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;

        // 分離軸 : C31
        Cross = NAe3.Cross(NBe1);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae1, Ae2);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be2, Be3);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;

        // 分離軸 : C32
        Cross = NAe3.Cross(NBe2);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae1, Ae2);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be1, Be3);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;

        // 分離軸 : C33
        Cross = NAe3.Cross(NBe3);
        rA = GeometryHelper.LengthSeparatedAxis(Cross, Ae1, Ae2);
        rB = GeometryHelper.LengthSeparatedAxis(Cross, Be1, Be2);
        L = abs(Interval.Dot(Cross));
        if (L > rA + rB)
            return false;


        return true;
    }


    static  IsHitSphereSphere(  arg_sphere:Sphere, arg_otherSphere:Sphere):boolean {
        var distance = (arg_sphere.position .Sub( arg_otherSphere.position)).Length();
        var border = arg_sphere.radius + arg_otherSphere.radius;
        return distance <= border;
    }
    static  IsHitPointSphere( arg_point:Vector3, arg_otherSphere:Sphere):boolean {
        var distance = (arg_point .Sub( arg_otherSphere.position)).Length();
        return distance <=arg_otherSphere.radius;
    }
}