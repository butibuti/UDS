
import ColorController from "./ColorController";
import Vector4 from"../Math/Vector4"
import Vector2 from "../Math/Vector2";
export default class GeometryGenerater{


    static  CreateTorus(row :number, column :number, irad :number, orad :number, color?:Vector4){
        var pos = new Array(), nor = new Array(),
            col = new Array(), st  = new Array(), idx = new Array();
        for(var i = 0; i <= row; i++){
            var r = Math.PI * 2 / row * i;
            var rr = Math.cos(r);
            var ry = Math.sin(r);
            for(var ii = 0; ii <= column; ii++){
                var tr = Math.PI * 2 / column * ii;
                var tx = (rr * irad + orad) * Math.cos(tr);
                var ty = ry * irad;
                var tz = (rr * irad + orad) * Math.sin(tr);
                var rx = rr * Math.cos(tr);
                var rz = rr * Math.sin(tr);
                var tc:Vector4;
                if(color)
                {
                    tc=color;
                }
                else
                {
                    tc = ColorController.hsva(360 / column * ii, 1, 1, 1);
                }
                var rs = 1 / column * ii;
                var rt = 1 / row * i + 0.5;
                if(rt > 1.0){rt -= 1.0;}
                rt = 1.0 - rt;
                pos.push(tx, ty, tz);
                nor.push(rx, ry, rz);
                col.push(tc.x, tc.y, tc.z, tc.w);
                st.push(rs, rt);
            }
        }
        for(i = 0; i < row; i++){
            for(ii = 0; ii < column; ii++){
                r = (column + 1) * i + ii;
                idx.push(r, r + column + 1, r + 1);
                idx.push(r + column + 1, r + column + 2, r + 1);
            }
        }
        var output={p : pos, n : nor, c : col, uv : st, i : idx};
        return output;
    }
    
    static  CreateSphere(row:number, column:number, rad:number, color?:Vector4){
        var pos = new Array(), nor = new Array(),
            col = new Array(), st  = new Array(), idx = new Array();
        for(var i = 0; i <= row; i++){
            var r = Math.PI / row * i;
            var ry = Math.cos(r);
            var rr = Math.sin(r);
            for(var ii = 0; ii <= column; ii++){
                var tr = Math.PI * 2 / column * ii;
                var tx = rr * rad * Math.cos(tr);
                var ty = ry * rad;
                var tz = rr * rad * Math.sin(tr);
                var rx = rr * Math.cos(tr);
                var rz = rr * Math.sin(tr);
                if(color){
                    var tc = color;
                }else{
                    tc = ColorController.hsva(360 / row * i, 1, 1, 1);
                }
                pos.push(tx, ty, tz);
                nor.push(rx, ry, rz);
                col.push(tc[0], tc[1], tc[2], tc[3]);
                st.push(1 - 1 / column * ii, 1 / row * i);
            }
        }
        r = 0;
        for(i = 0; i < row; i++){
            for(ii = 0; ii < column; ii++){
                r = (column + 1) * i + ii;
                idx.push(r, r + 1, r + column + 2);
                idx.push(r, r + column + 2, r + column + 1);
            }
        }
        return {p : pos, n : nor, c : col, uv : st, i : idx};
    }
    
    static  CreateCube(side:number, color?:Vector4){
        var hs = side * 0.5;
        var pos = [
            -hs, -hs,  hs,  hs, -hs,  hs,  hs,  hs,  hs, -hs,  hs,  hs,
            -hs, -hs, -hs, -hs,  hs, -hs,  hs,  hs, -hs,  hs, -hs, -hs,
            -hs,  hs, -hs, -hs,  hs,  hs,  hs,  hs,  hs,  hs,  hs, -hs,
            -hs, -hs, -hs,  hs, -hs, -hs,  hs, -hs,  hs, -hs, -hs,  hs,
             hs, -hs, -hs,  hs,  hs, -hs,  hs,  hs,  hs,  hs, -hs,  hs,
            -hs, -hs, -hs, -hs, -hs,  hs, -hs,  hs,  hs, -hs,  hs, -hs
        ];
        var nor = [
            -1.0, -1.0,  1.0,  1.0, -1.0,  1.0,  1.0,  1.0,  1.0, -1.0,  1.0,  1.0,
            -1.0, -1.0, -1.0, -1.0,  1.0, -1.0,  1.0,  1.0, -1.0,  1.0, -1.0, -1.0,
            -1.0,  1.0, -1.0, -1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0,
            -1.0, -1.0, -1.0,  1.0, -1.0, -1.0,  1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
             1.0, -1.0, -1.0,  1.0,  1.0, -1.0,  1.0,  1.0,  1.0,  1.0, -1.0,  1.0,
            -1.0, -1.0, -1.0, -1.0, -1.0,  1.0, -1.0,  1.0,  1.0, -1.0,  1.0, -1.0
        ];
        var col = new Array();
        for(var i = 0; i < pos.length / 3; i++){
            if(color){
                var tc = color;
            }else{
                tc = ColorController.hsva(360 / pos.length / 3 * i, 1, 1, 1);
            }
            col.push(tc.x, tc.y, tc.z, tc.w);
        }
        var st = [
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
            0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0
        ];
        var idx = [
             0,  1,  2,  0,  2,  3,
             4,  5,  6,  4,  6,  7,
             8,  9, 10,  8, 10, 11,
            12, 13, 14, 12, 14, 15,
            16, 17, 18, 16, 18, 19,
            20, 21, 22, 20, 22, 23
        ];
        return {p : pos, n : nor, c : col, uv : st, i : idx};
    }
    
  static CreatePlane(arg_size:Vector2,arg_color?:Vector4){
    var pos=new Array();
    var nor =new Array();
    var col = new Array();
    var idx = new Array();
    var uv=new Array();
    pos= [
        -arg_size.x,  arg_size.y,  0.0,
        arg_size.x,  arg_size.y,  0.0,
        -arg_size.x, -arg_size.y,  0.0,
        arg_size.x, -arg_size.y,  0.0,
    ];
    nor=[
        0.0,  0.0,  -1.0,
        0.0,  0.0,  -1.0,
        0.0,  0.0,  -1.0,
        0.0,  0.0,  -1.0,
    ];
    col=[
        arg_color.x,arg_color.y,arg_color.z,arg_color.w,
        arg_color.x,arg_color.y,arg_color.z,arg_color.w,
        arg_color.x,arg_color.y,arg_color.z,arg_color.w,
        arg_color.x,arg_color.y,arg_color.z,arg_color.w,
    ]
    idx=[
        2, 3, 1,
        2, 1, 0,
    ]
    uv=[
        0.0, 0.0,
        1.0, 0.0,
        0.0, 1.0,
        1.0, 1.0
    ];
    return {p : pos, n : nor, c : col, i : idx,uv:uv};
  }

}
