
import Quaternion from "./Quat";
import Vector3 from"./Vector3";

export default class Matrix4x4{
	data:Float32Array;
	constructor(){
		this.data=new Float32Array(16);
	}

	Identity() :Matrix4x4{

		this.data[0]  = 1; this.data[1]  = 0; this.data[2]  = 0; this.data[3]  = 0;
		this.data[4]  = 0; this.data[5]  = 1; this.data[6]  = 0; this.data[7]  = 0;
		this.data[8]  = 0; this.data[9]  = 0; this.data[10] = 1; this.data[11] = 0;
		this.data[12] = 0; this.data[13] = 0; this.data[14] = 0; this.data[15] = 1;

		return this;
	}
	Clone() :Matrix4x4{
		var output=new Matrix4x4();

		for(var i=0;i<16;i++){
			output.data[i]=this.data[i];
		}

		return output;
	}
	Multiply(other:Matrix4x4) :Matrix4x4{
		var   output=new Matrix4x4();
		var a = this.data[0],  b = this.data[1],  c = this.data[2],  d = this.data[3],
			e = this.data[4],  f = this.data[5],  g = this.data[6],  h = this.data[7],
			i = this.data[8],  j = this.data[9],  k = this.data[10], l = this.data[11],
			m = this.data[12], n = this.data[13], o = this.data[14], p = this.data[15],
			A = other.data[0],  B = other.data[1],  C = other.data[2],  D = other.data[3],
			E = other.data[4],  F = other.data[5],  G = other.data[6],  H = other.data[7],
			I = other.data[8],  J = other.data[9],  K = other.data[10], L = other.data[11],
			M = other.data[12], N = other.data[13], O = other.data[14], P = other.data[15];
		output.data[0] = A * a + B * e + C * i + D * m;
		output.data[1] = A * b + B * f + C * j + D * n;
		output.data[2] = A * c + B * g + C * k + D * o;
		output.data[3] = A * d + B * h + C * l + D * p;
		output.data[4] = E * a + F * e + G * i + H * m;
		output.data[5] = E * b + F * f + G * j + H * n;
		output.data[6] = E * c + F * g + G * k + H * o;
		output.data[7] = E * d + F * h + G * l + H * p;
		output.data[8] = I * a + J * e + K * i + L * m;
		output.data[9] = I * b + J * f + K * j + L * n;
		output.data[10] = I * c + J * g + K * k + L * o;
		output.data[11] = I * d + J * h + K * l + L * p;
		output.data[12] = M * a + N * e + O * i + P * m;
		output.data[13] = M * b + N * f + O * j + P * n;
		output.data[14] = M * c + N * g + O * k + P * o;
		output.data[15] = M * d + N * h + O * l + P * p;
		return output;
	}
	Multiply_b(other:Matrix4x4) :Matrix4x4{
		var a = this.data[0],  b = this.data[1],  c = this.data[2],  d = this.data[3],
			e = this.data[4],  f = this.data[5],  g = this.data[6],  h = this.data[7],
			i = this.data[8],  j = this.data[9],  k = this.data[10], l = this.data[11],
			m = this.data[12], n = this.data[13], o = this.data[14], p = this.data[15],
			A = other.data[0],  B = other.data[1],  C = other.data[2],  D = other.data[3],
			E = other.data[4],  F = other.data[5],  G = other.data[6],  H = other.data[7],
			I = other.data[8],  J = other.data[9],  K = other.data[10], L = other.data[11],
			M = other.data[12], N = other.data[13], O = other.data[14], P = other.data[15];
		this.data[0] = A * a + B * e + C * i + D * m;
		this.data[1] = A * b + B * f + C * j + D * n;
		this.data[2] = A * c + B * g + C * k + D * o;
		this.data[3] = A * d + B * h + C * l + D * p;
		this.data[4] = E * a + F * e + G * i + H * m;
		this.data[5] = E * b + F * f + G * j + H * n;
		this.data[6] = E * c + F * g + G * k + H * o;
		this.data[7] = E * d + F * h + G * l + H * p;
		this.data[8] = I * a + J * e + K * i + L * m;
		this.data[9] = I * b + J * f + K * j + L * n;
		this.data[10] = I * c + J * g + K * k + L * o;
		this.data[11] = I * d + J * h + K * l + L * p;
		this.data[12] = M * a + N * e + O * i + P * m;
		this.data[13] = M * b + N * f + O * j + P * n;
		this.data[14] = M * c + N * g + O * k + P * o;
		this.data[15] = M * d + N * h + O * l + P * p;
		return this;
	}

	Scale(arg_scale:Vector3) :Matrix4x4{
		var output=new Matrix4x4();
		output.data[0]  = this.data[0]  * arg_scale.x;
		output.data[1]  = this.data[1]  * arg_scale.x;
		output.data[2]  = this.data[2]  * arg_scale.x;
		output.data[3]  = this.data[3]  * arg_scale.x;
		output.data[4]  = this.data[4]  * arg_scale.y;
		output.data[5]  = this.data[5]  * arg_scale.y;
		output.data[6]  = this.data[6]  * arg_scale.y;
		output.data[7]  = this.data[7]  * arg_scale.y;
		output.data[8]  = this.data[8]  * arg_scale.z;
		output.data[9]  = this.data[9]  * arg_scale.z;
		output.data[10] = this.data[10] * arg_scale.z;
		output.data[11] = this.data[11] * arg_scale.z;
		output.data[12] = this.data[12];
		output.data[13] = this.data[13];
		output.data[14] = this.data[14];
		output.data[15] = this.data[15];
		return output;
	}
	Scale_b(arg_scale:Vector3) :Matrix4x4{

		this.data[0]  = this.data[0]  * arg_scale.x;
		this.data[1]  = this.data[1]  * arg_scale.x;
		this.data[2]  = this.data[2]  * arg_scale.x;
		this.data[3]  = this.data[3]  * arg_scale.x;
		this.data[4]  = this.data[4]  * arg_scale.y;
		this.data[5]  = this.data[5]  * arg_scale.y;
		this.data[6]  = this.data[6]  * arg_scale.y;
		this.data[7]  = this.data[7]  * arg_scale.y;
		this.data[8]  = this.data[8]  * arg_scale.z;
		this.data[9]  = this.data[9]  * arg_scale.z;
		this.data[10] = this.data[10] * arg_scale.z;
		this.data[11] = this.data[11] * arg_scale.z;
		this.data[12] = this.data[12];
		this.data[13] = this.data[13];
		this.data[14] = this.data[14];
		this.data[15] = this.data[15];
		return this;
	}
	Translate(arg_translate:Vector3) :Matrix4x4{
		var output=new Matrix4x4();
		output.data[0] = this.data[0]; output.data[1] = this.data[1]; output.data[2]  = this.data[2];  output.data[3]  = this.data[3];
		output.data[4] = this.data[4]; output.data[5] = this.data[5]; output.data[6]  = this.data[6];  output.data[7]  = this.data[7];
		output.data[8] = this.data[8]; output.data[9] = this.data[9]; output.data[10] = this.data[10]; output.data[11] = this.data[11];
		output.data[12] = this.data[0] * arg_translate.x + this.data[4] * arg_translate.y + this.data[8]  * arg_translate.z + this.data[12];
		output.data[13] = this.data[1] * arg_translate.x + this.data[5] * arg_translate.y + this.data[9]  * arg_translate.z + this.data[13];
		output.data[14] = this.data[2] * arg_translate.x + this.data[6] * arg_translate.y + this.data[10] * arg_translate.z + this.data[14];
		output.data[15] = this.data[3] * arg_translate.x + this.data[7] * arg_translate.y + this.data[11] * arg_translate.z + this.data[15];
		return output;
	}
	Translate_b(arg_translate:Vector3) :Matrix4x4{
		this.data[12] = this.data[0] * arg_translate.x + this.data[4] * arg_translate.y + this.data[8]  * arg_translate.z + this.data[12];
		this.data[13] = this.data[1] * arg_translate.x + this.data[5] * arg_translate.y + this.data[9]  * arg_translate.z + this.data[13];
		this.data[14] = this.data[2] * arg_translate.x + this.data[6] * arg_translate.y + this.data[10] * arg_translate.z + this.data[14];
		this.data[15] = this.data[3] * arg_translate.x + this.data[7] * arg_translate.y + this.data[11] * arg_translate.z + this.data[15];
		return this;
	}
	Rotate(arg_angle:number,arg_axis:Vector3) :Matrix4x4{
		var output=new Matrix4x4();
		var sq = arg_axis.Length();
		if(!sq){return null;}
		var a = arg_axis.x, b = arg_axis.y, c = arg_axis.z;
		if(sq != 1){sq = 1 / sq; a *= sq; b *= sq; c *= sq;}
		var d = Math.sin(arg_angle), e = Math.cos(arg_angle), f = 1 - e,
			g = this.data[0],  h = this.data[1], i = this.data[2],  j = this.data[3],
			k = this.data[4],  l = this.data[5], m = this.data[6],  n = this.data[7],
			o = this.data[8],  p = this.data[9], q = this.data[10], r = this.data[11],
			s = a * a * f + e,
			t = b * a * f + c * d,
			u = c * a * f - b * d,
			v = a * b * f - c * d,
			w = b * b * f + e,
			x = c * b * f + a * d,
			y = a * c * f + b * d,
			z = b * c * f - a * d,
			A = c * c * f + e;
		if(arg_angle){
			if(this.data != output.data){
				output.data[12] = this.data[12]; output.data[13] = this.data[13];
				output.data[14] = this.data[14]; output.data[15] = this.data[15];
			}
		} else {
			output.data = this.data;
		}
		output.data[0]  = g * s + k * t + o * u;
		output.data[1]  = h * s + l * t + p * u;
		output.data[2]  = i * s + m * t + q * u;
		output.data[3]  = j * s + n * t + r * u;
		output.data[4]  = g * v + k * w + o * x;
		output.data[5]  = h * v + l * w + p * x;
		output.data[6]  = i * v + m * w + q * x;
		output.data[7]  = j * v + n * w + r * x;
		output.data[8]  = g * y + k * z + o * A;
		output.data[9]  = h * y + l * z + p * A;
		output.data[10] = i * y + m * z + q * A;
		output.data[11] = j * y + n * z + r * A;
		return output;
	}
	Rotate_b(arg_angle:number,arg_axis:Vector3) :Matrix4x4{
		var sq = arg_axis.Length();
		if(!sq){return null;}
		var a = arg_axis.x, b = arg_axis.y, c = arg_axis.z;
		if(sq != 1){sq = 1 / sq; a *= sq; b *= sq; c *= sq;}
		var d = Math.sin(arg_angle), e = Math.cos(arg_angle), f = 1 - e,
			g = this.data[0],  h = this.data[1], i = this.data[2],  j = this.data[3],
			k = this.data[4],  l = this.data[5], m = this.data[6],  n = this.data[7],
			o = this.data[8],  p = this.data[9], q = this.data[10], r = this.data[11],
			s = a * a * f + e,
			t = b * a * f + c * d,
			u = c * a * f - b * d,
			v = a * b * f - c * d,
			w = b * b * f + e,
			x = c * b * f + a * d,
			y = a * c * f + b * d,
			z = b * c * f - a * d,
			A = c * c * f + e;
		
		this.data[0]  = g * s + k * t + o * u;
		this.data[1]  = h * s + l * t + p * u;
		this.data[2]  = i * s + m * t + q * u;
		this.data[3]  = j * s + n * t + r * u;
		this.data[4]  = g * v + k * w + o * x;
		this.data[5]  = h * v + l * w + p * x;
		this.data[6]  = i * v + m * w + q * x;
		this.data[7]  = j * v + n * w + r * x;
		this.data[8]  = g * y + k * z + o * A;
		this.data[9]  = h * y + l * z + p * A;
		this.data[10] = i * y + m * z + q * A;
		this.data[11] = j * y + n * z + r * A;
		return this;
	}
	LookAt(arg_eye:Vector3,arg_centerPos:Vector3,arg_upAxis:Vector3) :Matrix4x4{
		var eyeX    = arg_eye.x,    eyeY    = arg_eye.y,    eyeZ    = arg_eye.z,
			upX     = arg_upAxis.x,     upY     = arg_upAxis.y,     upZ     = arg_upAxis.z,
			centerX = arg_centerPos.x, centerY = arg_centerPos.y, centerZ = arg_centerPos.z;
		if(eyeX == centerX && eyeY == centerY && eyeZ == centerZ){return this.Identity();}
		var x0, x1, x2, y0, y1, y2, z0, z1, z2, l;
		z0 = eyeX - arg_centerPos.x; z1 = eyeY - arg_centerPos.y; z2 = eyeZ - arg_centerPos.z;
		l = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
		z0 *= l; z1 *= l; z2 *= l;
		x0 = upY * z2 - upZ * z1;
		x1 = upZ * z0 - upX * z2;
		x2 = upX * z1 - upY * z0;
		l = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
		if(!l){
			x0 = 0; x1 = 0; x2 = 0;
		} else {
			l = 1 / l;
			x0 *= l; x1 *= l; x2 *= l;
		}
		y0 = z1 * x2 - z2 * x1; y1 = z2 * x0 - z0 * x2; y2 = z0 * x1 - z1 * x0;
		l = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
		if(!l){
			y0 = 0; y1 = 0; y2 = 0;
		} else {
			l = 1 / l;
			y0 *= l; y1 *= l; y2 *= l;
		}
		this.data[0] = x0; this.data[1] = y0; this.data[2]  = z0; this.data[3]  = 0;
		this.data[4] = x1; this.data[5] = y1; this.data[6]  = z1; this.data[7]  = 0;
		this.data[8] = x2; this.data[9] = y2; this.data[10] = z2; this.data[11] = 0;
		this.data[12] = -(x0 * eyeX + x1 * eyeY + x2 * eyeZ);
		this.data[13] = -(y0 * eyeX + y1 * eyeY + y2 * eyeZ);
		this.data[14] = -(z0 * eyeX + z1 * eyeY + z2 * eyeZ);
		this.data[15] = 1;
		return this;
	}
	Perspective(fovy:number, aspect:number, near:number, far:number) :Matrix4x4{
		
		var t = near * Math.tan(fovy * Math.PI / 360);
		var r = t * aspect;
		var a = r * 2, b = t * 2, c = far - near;
		this.data[0]  = near * 2 / a;
		this.data[1]  = 0;
		this.data[2]  = 0;
		this.data[3]  = 0;
		this.data[4]  = 0;
		this.data[5]  = near * 2 / b;
		this.data[6]  = 0;
		this.data[7]  = 0;
		this.data[8]  = 0;
		this.data[9]  = 0;
		this.data[10] = -(far + near) / c;
		this.data[11] = -1;
		this.data[12] = 0;
		this.data[13] = 0;
		this.data[14] = -(far * near * 2) / c;
		this.data[15] = 0;
		return this;
	}
	Ortho(left:number, right:number, top:number, bottom:number, near:number, far:number) :Matrix4x4{

		var h = (right - left);
		var v = (top - bottom);
		var d = (far - near);
		this.data[0]  = 2 / h;
		this.data[1]  = 0;
		this.data[2]  = 0;
		this.data[3]  = 0;
		this.data[4]  = 0;
		this.data[5]  = 2 / v;
		this.data[6]  = 0;
		this.data[7]  = 0;
		this.data[8]  = 0;
		this.data[9]  = 0;
		this.data[10] = -2 / d;
		this.data[11] = 0;
		this.data[12] = -(left + right) / h;
		this.data[13] = -(top + bottom) / v;
		this.data[14] = -(far + near) / d;
		this.data[15] = 1;
		return this;
	}
	Transpose() :Matrix4x4{
		var output=new Matrix4x4();
		
		output.data[0]  = this.data[0];  output.data[1]  = this.data[4];
		output.data[2]  = this.data[8];  output.data[3]  = this.data[12];
		output.data[4]  = this.data[1];  output.data[5]  = this.data[5];
		output.data[6]  = this.data[9];  output.data[7]  = this.data[13];
		output.data[8]  = this.data[2];  output.data[9]  = this.data[6];
		output.data[10] = this.data[10]; output.data[11] = this.data[14];
		output.data[12] = this.data[3];  output.data[13] = this.data[7];
		output.data[14] = this.data[11]; output.data[15] = this.data[15];
		return output;
	}
	Transpose_b() :Matrix4x4{
		var temp=new Matrix4x4();
		
		temp.data[0]  = this.data[0];  temp.data[1]  = this.data[4];
		temp.data[2]  = this.data[8];  temp.data[3]  = this.data[12];
		temp.data[4]  = this.data[1];  temp.data[5]  = this.data[5];
		temp.data[6]  = this.data[9];  temp.data[7]  = this.data[13];
		temp.data[8]  = this.data[2];  temp.data[9]  = this.data[6];
		temp.data[10] = this.data[10]; temp.data[11] = this.data[14];
		temp.data[12] = this.data[3];  temp.data[13] = this.data[7];
		temp.data[14] = this.data[11]; temp.data[15] = this.data[15];
		this.data=temp.data;
		return this;
	}
	Inverse() :Matrix4x4{
		
		var output=new Matrix4x4();
		var a = this.data[0],  b = this.data[1],  c = this.data[2],  d = this.data[3],
			e = this.data[4],  f = this.data[5],  g = this.data[6],  h = this.data[7],
			i = this.data[8],  j = this.data[9],  k = this.data[10], l = this.data[11],
			m = this.data[12], n = this.data[13], o = this.data[14], p = this.data[15],
			q = a * f - b * e, r = a * g - c * e,
			s = a * h - d * e, t = b * g - c * f,
			u = b * h - d * f, v = c * h - d * g,
			w = i * n - j * m, x = i * o - k * m,
			y = i * p - l * m, z = j * o - k * n,
			A = j * p - l * n, B = k * p - l * o,
			ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);
		output.data[0]  = ( f * B - g * A + h * z) * ivd;
		output.data[1]  = (-b * B + c * A - d * z) * ivd;
		output.data[2]  = ( n * v - o * u + p * t) * ivd;
		output.data[3]  = (-j * v + k * u - l * t) * ivd;
		output.data[4]  = (-e * B + g * y - h * x) * ivd;
		output.data[5]  = ( a * B - c * y + d * x) * ivd;
		output.data[6]  = (-m * v + o * s - p * r) * ivd;
		output.data[7]  = ( i * v - k * s + l * r) * ivd;
		output.data[8]  = ( e * A - f * y + h * w) * ivd;
		output.data[9]  = (-a * A + b * y - d * w) * ivd;
		output.data[10] = ( m * u - n * s + p * q) * ivd;
		output.data[11] = (-i * u + j * s - l * q) * ivd;
		output.data[12] = (-e * z + f * x - g * w) * ivd;
		output.data[13] = ( a * z - b * x + c * w) * ivd;
		output.data[14] = (-m * t + n * r - o * q) * ivd;
		output.data[15] = ( i * t - j * r + k * q) * ivd;


		return output;
	}
	Inverse_b() :Matrix4x4{
		
		var a = this.data[0],  b = this.data[1],  c = this.data[2],  d = this.data[3],
			e = this.data[4],  f = this.data[5],  g = this.data[6],  h = this.data[7],
			i = this.data[8],  j = this.data[9],  k = this.data[10], l = this.data[11],
			m = this.data[12], n = this.data[13], o = this.data[14], p = this.data[15],
			q = a * f - b * e, r = a * g - c * e,
			s = a * h - d * e, t = b * g - c * f,
			u = b * h - d * f, v = c * h - d * g,
			w = i * n - j * m, x = i * o - k * m,
			y = i * p - l * m, z = j * o - k * n,
			A = j * p - l * n, B = k * p - l * o,
			ivd = 1 / (q * B - r * A + s * z + t * y - u * x + v * w);
		this.data[0]  = ( f * B - g * A + h * z) * ivd;
		this.data[1]  = (-b * B + c * A - d * z) * ivd;
		this.data[2]  = ( n * v - o * u + p * t) * ivd;
		this.data[3]  = (-j * v + k * u - l * t) * ivd;
		this.data[4]  = (-e * B + g * y - h * x) * ivd;
		this.data[5]  = ( a * B - c * y + d * x) * ivd;
		this.data[6]  = (-m * v + o * s - p * r) * ivd;
		this.data[7]  = ( i * v - k * s + l * r) * ivd;
		this.data[8]  = ( e * A - f * y + h * w) * ivd;
		this.data[9]  = (-a * A + b * y - d * w) * ivd;
		this.data[10] = ( m * u - n * s + p * q) * ivd;
		this.data[11] = (-i * u + j * s - l * q) * ivd;
		this.data[12] = (-e * z + f * x - g * w) * ivd;
		this.data[13] = ( a * z - b * x + c * w) * ivd;
		this.data[14] = (-m * t + n * r - o * q) * ivd;
		this.data[15] = ( i * t - j * r + k * q) * ivd;


		return this;
	}

	ToQuaternion():Quaternion {
		
		var elem=new Array(4); 
		elem[ 0 ] = this.data[0] - this.data[5] - this.data[10] + 1.0;
		elem[ 1 ] = -this.data[0] + this.data[5] - this.data[10] + 1.0;
		elem[ 2 ] = -this.data[0] - this.data[5] + this.data[10] + 1.0;
		elem[ 3 ] = this.data[0] + this.data[5] + this.data[10] + 1.0;
	
		var biggestIndex = 0;
		for ( var i = 1; i < 4; i++ ) {
			if ( elem[i] > elem[biggestIndex] )
				biggestIndex = i;
		}
	
		
		var outQuat=new Quaternion();
		var v = Math.sqrt( elem[biggestIndex] ) * 0.5;
		outQuat.data [biggestIndex] = v;
		var mult = 0.25 / v;
	
		switch ( biggestIndex ) {
		case 0: // x
			outQuat.data[1] = (this.data[1] +this.data[4]) * mult;
			outQuat.data[2] = (this.data[2] +this.data[8]) * mult;
			outQuat.data[3] = (this.data[9] - this.data[6]) * mult;
			break;
		case 1: // y
			outQuat.data[0] = (this.data[1] +this.data[4]) * mult;
			outQuat.data[2] = (this.data[9] + this.data[6]) * mult;
			outQuat.data[3] = (this.data[2] - this.data[8]) * mult;
			break;
		case 2: // z
			outQuat.data[0] = (this.data[2] +this.data[8]) * mult;
			outQuat.data[1] = (this.data[9] + this.data[6]) * mult;
			outQuat.data[3] = (this.data[4] - this.data[1]) * mult;
		break;
		case 3: // w
			outQuat.data[0] = (this.data[9] -this.data[6]) * mult;
			outQuat.data[1] = (this.data[2] - this.data[8]) * mult;
			outQuat.data[2] = (this.data[4] - this.data[1]) * mult;
			break;
		}
	
		return outQuat;
	}
	
	///////////////////////////////////////////////
	// 回転行列→クォータニオン変換
	//
	// qx, qy, qz, qw : クォータニオン成分（出力）
	// m1[3] : 回転行列成分 m11 - m13
	// m2[3] : 回転行列成分 m21 - m23
	// m3[3] : 回転行列成分 m31 - m33
	//
	// ※注意：
	// 行列成分はDirectX形式（行方向が軸の向き）です
	// OpenGL形式（列方向が軸の向き）の場合は
	// 転置した値を入れて下さい。
	
}


