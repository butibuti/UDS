export default class Vector4{
    data: Float32Array;
    constructor(x:number,y:number,z:number,w:number){
        this.data = new Float32Array(4);
        this.data[0]=x;
        this.data[1]=y;
        this.data[2]=z;
        this.data[3]=w;
    }
    get x(){
        return this.data[0];
    }
    get y(){
        return this.data[1];
    }
    get z(){
        return this.data[2];
    }
    get w(){
        return this.data[3];
    }
    get xyzw(){
        return this.data;
    }
    Set(x:number,y:number,z:number,w:number){
        this.data[0]=x;
        this.data[1]=y;
        this.data[2]=z;
        this.data[3]=w;
    }
    Add(arg_other:Vector4):Vector4{
        var output=new Vector4(0,0,0,0);
        
        output.data[0]=this.data[0]+arg_other.data[0];
        output.data[1]=this.data[1]+arg_other.data[1];
        output.data[2]=this.data[2]+arg_other.data[2];
        output.data[3]=this.data[3]+arg_other.data[3];
        return output;
    }
    Add_b(arg_other:Vector4):Vector4{
        
        this.data[0]=this.data[0]+arg_other.data[0];
        this.data[1]=this.data[1]+arg_other.data[1];
        this.data[2]=this.data[2]+arg_other.data[2];
        this.data[3]=this.data[3]+arg_other.data[3];
        return this;
    }
    Sub(arg_other:Vector4):Vector4{
        var output=new Vector4(0,0,0,0);
        
        output.data[0]=this.data[0]-arg_other.data[0];
        output.data[1]=this.data[1]-arg_other.data[1];
        output.data[2]=this.data[2]-arg_other.data[2];
        output.data[3]=this.data[3]-arg_other.data[3];
        return output;
    }
    Sub_b(arg_other:Vector4):Vector4{
        
        this.data[0]=this.data[0]-arg_other.data[0];
        this.data[1]=this.data[1]-arg_other.data[1];
        this.data[2]=this.data[2]-arg_other.data[2];
        this.data[3]=this.data[3]-arg_other.data[3];
        return this;
    }

    Multiply(arg_scalar:number):Vector4{
        var output=new Vector4(0,0,0,0);
        output.data[0]=this.data[0]*arg_scalar;
        output.data[1]=this.data[1]*arg_scalar;
        output.data[2]=this.data[2]*arg_scalar;
        output.data[3]=this.data[3]*arg_scalar;
        return output;
    }
    Multiply_b(arg_scalar:number):Vector4{
        this.data[0]*=arg_scalar;
        this.data[1]*=arg_scalar;
        this.data[2]*=arg_scalar;
        this.data[3]*=arg_scalar;
        return this;
    }

    Div(arg_scalar:number):Vector4{
        var output=new Vector4(0,0,0,0);
        output.data[0]=this.data[0]/arg_scalar;
        output.data[1]=this.data[1]/arg_scalar;
        output.data[2]=this.data[2]/arg_scalar;
        output.data[3]=this.data[3]/arg_scalar;
        return output;
    }
    Div_b(arg_scalar:number):Vector4{
        this.data[0]/=arg_scalar;
        this.data[1]/=arg_scalar;
        this.data[2]/=arg_scalar;
        this.data[3]/=arg_scalar;
        return this;
    }

    Length():number{
        return Math.sqrt(this.data[0]*this.data[0]+this.data[1]*this.data[1]+this.data[2]*this.data[2]+this.data[3]*this.data[3]);
    }
    LengthSqr():number{

        return this.data[0]*this.data[0]+this.data[1]*this.data[1]+this.data[2]*this.data[2]+this.data[3]*this.data[3];
    
    }

    Dot(arg_other:Vector4):number{
        return this.data[0]*arg_other.data[0]+this.data[1]*arg_other.data[1]+this.data[2]*arg_other.data[2]+this.data[3]*arg_other.data[3];
    }

    Normalize():Vector4{
        var output=new Vector4(this.data[0],this.data[1],this.data[2],this.data[3]);
        
        var length=this.Length();
        output.Div_b(length);
        return output;
    }
    Normalize_b():Vector4{
        var length=this.Length();
        this.Div_b(length);
        return this;
    }
}