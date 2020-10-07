import Matrix4x4 from "./Matrix";
import Vector3 from "./Vector3";


export default class Quaternion{
	data:Float32Array;
	constructor(){
		this.data=new Float32Array(4);
	}
	Identity():Quaternion{
		this.data[0] = 0; this.data[1] = 0; this.data[2] = 0; this.data[3] = 1;
		return this;
	}
	Inverse():Quaternion{
		var output=new Quaternion();
		output.data[0] = -this.data[0];
		output.data[1] = -this.data[1];
		output.data[2] = -this.data[2];
		output.data[3] =  this.data[3];
		return output;
	}
	Inverse_b():Quaternion{
		this.data[0] = -this.data[0];
		this.data[1] = -this.data[1];
		this.data[2] = -this.data[2];
		this.data[3] =  this.data[3];
		return  this;
	}
	Normalize():Quaternion{
		var output=new Quaternion();
		
		output.data[0]=this.data[0];
		output.data[1]=this.data[1];
		output.data[2]=this.data[2];
		output.data[3]=this.data[3];

		var x = output.data[0], y = output.data[1], z = output.data[2], w = output.data[3];
		var l = Math.sqrt(x * x + y * y + z * z + w * w);
		if(l === 0){
			output.data[0] = 0;
			output.data[1] = 0;
			output.data[2] = 0;
			output.data[3] = 0;
		}else{
			l = 1 / l;
			output.data[0] = x * l;
			output.data[1] = y * l;
			output.data[2] = z * l;
			output.data[3] = w * l;
		}
		return output;
	}
	Normalize_b():Quaternion{

		var l = Math.sqrt(this.data[0] * this.data[0] + this.data[1] * this.data[1] + this.data[2] * this.data[2] + this.data[3] * this.data[3]);
		if(l === 0){
			this.data[0] = 0;
			this.data[1] = 0;
			this.data[2] = 0;
			this.data[3] = 0;
		}else{
			l = 1 / l;
			this.data[0] = this.data[0] * l;
			this.data[1] = this.data[1] * l;
			this.data[2] = this.data[2] * l;
			this.data[3] = this.data[3] * l;
		}
		return this;
	}
	Multiply(arg_quat:Quaternion):Quaternion{
		var output=new Quaternion();
		
		var ax = this.data[0], ay = this.data[1], az = this.data[2], aw = this.data[3];
		var bx = arg_quat.data[0], by = arg_quat.data[1], bz = arg_quat.data[2], bw = arg_quat.data[3];
		output.data[0] = ax * bw + aw * bx + ay * bz - az * by;
		output.data[1] = ay * bw + aw * by + az * bx - ax * bz;
		output.data[2] = az * bw + aw * bz + ax * by - ay * bx;
		output.data[3] = aw * bw - ax * bx - ay * by - az * bz;
		return output;
	}
	Multiply_b(arg_quat:Quaternion):Quaternion{
		
		var ax = this.data[0], ay = this.data[1], az = this.data[2], aw = this.data[3];
		var bx = arg_quat.data[0], by = arg_quat.data[1], bz = arg_quat.data[2], bw = arg_quat.data[3];
		this.data[0] = ax * bw + aw * bx + ay * bz - az * by;
		this.data[1] = ay * bw + aw * by + az * bx - ax * bz;
		this.data[2] = az * bw + aw * bz + ax * by - ay * bx;
		this.data[3] = aw * bw - ax * bx - ay * by - az * bz;
		return this;
	}
	Rotate(arg_angle,arg_axis:Vector3):Quaternion{

		var sq = arg_axis.Length();
		if(!sq){return null;}
		var a = arg_axis.x, b = arg_axis.y, c = arg_axis.z;
		if(sq != 1){sq = 1 / sq; a *= sq; b *= sq; c *= sq;}
		var s = Math.sin(arg_angle * 0.5);
		this.data[0] = a * s;
		this.data[1] = b * s;
		this.data[2] = c * s;
		this.data[3] = Math.cos(arg_angle * 0.5);
		return this;
	}
	ToVector3(arg_vec:Vector3):Vector3{
		var output=new Vector3(0,0,0);
		var qp = new Quaternion();
		var qq = new Quaternion();
		var qr = this.Inverse();
		qp.data[0] = arg_vec.x;
		qp.data[1] = arg_vec.y;
		qp.data[2] = arg_vec.z;
		qq= qr.Multiply(qp);
		qr=qq.Multiply( this);
		output.data[0] = qr.data[0];
		output.data[1]= qr.data[1];
		output.data[2] = qr.data[2];
		return output;
	}
	ToMatrix4x4():Matrix4x4{
		var output= new Matrix4x4();
		var x = this.data[0], y = this.data[1], z = this.data[2], w = this.data[3];
		var x2 = x + x, y2 = y + y, z2 = z + z;
		var xx = x * x2, xy = x * y2, xz = x * z2;
		var yy = y * y2, yz = y * z2, zz = z * z2;
		var wx = w * x2, wy = w * y2, wz = w * z2;
		output.data[0]  = 1 - (yy + zz);
		output.data[1]  = xy - wz;
		output.data[2]  = xz + wy;
		output.data[3]  = 0;
		output.data[4]  = xy + wz;
		output.data[5]  = 1 - (xx + zz);
		output.data[6]  = yz - wx;
		output.data[7]  = 0;
		output.data[8]  = xz - wy;
		output.data[9]  = yz + wx;
		output.data[10] = 1 - (xx + yy);
		output.data[11] = 0;
		output.data[12] = 0;
		output.data[13] = 0;
		output.data[14] = 0;
		output.data[15] = 1;
		return output;
	}
	SphereLerp(arg_quat:Quaternion, time:number):Quaternion{
		var output=new Quaternion();
		var ht = this.data[0] * arg_quat.data[0] + this.data[1] * arg_quat.data[1] + this.data[2] * arg_quat.data[2] + this.data[3] * arg_quat.data[3];
		var hs = 1.0 - ht * ht;
		if(hs <= 0.0){
			output.data[0] = this.data[0];
			output.data[1] = this.data[1];
			output.data[2] = this.data[2];
			output.data[3] = this.data[3];
		}else{
			hs = Math.sqrt(hs);
			if(Math.abs(hs) < 0.0001){
				output.data[0] = (this.data[0] * 0.5 + arg_quat.data[0] * 0.5);
				output.data[1] = (this.data[1] * 0.5 + arg_quat.data[1] * 0.5);
				output.data[2] = (this.data[2] * 0.5 + arg_quat.data[2] * 0.5);
				output.data[3] = (this.data[3] * 0.5 + arg_quat.data[3] * 0.5);
			}else{
				var ph = Math.acos(ht);
				var pt = ph * time;
				var t0 = Math.sin(ph - pt) / hs;
				var t1 = Math.sin(pt) / hs;
				output.data[0] = this.data[0] * t0 + arg_quat.data[0] * t1;
				output.data[1] = this.data[1] * t0 + arg_quat.data[1] * t1;
				output.data[2] = this.data[2] * t0 + arg_quat.data[2] * t1;
				output.data[3] = this.data[3] * t0 + arg_quat.data[3] * t1;
			}
		}
		return output;
	}
	SphereLerp_b(arg_quat:Quaternion, time:number):Quaternion{
		var ht = this.data[0] * arg_quat.data[0] + this.data[1] * arg_quat.data[1] + this.data[2] * arg_quat.data[2] + this.data[3] * arg_quat.data[3];
		var hs = 1.0 - ht * ht;
		if(hs <= 0.0){
			return this;
		}else{
			hs = Math.sqrt(hs);
			if(Math.abs(hs) < 0.0001){
				this.data[0] = (this.data[0] * 0.5 + arg_quat.data[0] * 0.5);
				this.data[1] = (this.data[1] * 0.5 + arg_quat.data[1] * 0.5);
				this.data[2] = (this.data[2] * 0.5 + arg_quat.data[2] * 0.5);
				this.data[3] = (this.data[3] * 0.5 + arg_quat.data[3] * 0.5);
			}else{
				var ph = Math.acos(ht);
				var pt = ph * time;
				var t0 = Math.sin(ph - pt) / hs;
				var t1 = Math.sin(pt) / hs;
				this.data[0] = this.data[0] * t0 + arg_quat.data[0] * t1;
				this.data[1] = this.data[1] * t0 + arg_quat.data[1] * t1;
				this.data[2] = this.data[2] * t0 + arg_quat.data[2] * t1;
				this.data[3] = this.data[3] * t0 + arg_quat.data[3] * t1;
			}
		}
		return this;
	}
}
