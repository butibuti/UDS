export default class Vector3{
    data: Float32Array;
    constructor(x:number,y:number,z:number){
        this.data = new Float32Array(3);
        this.data[0]=x;
        this.data[1]=y;
        this.data[2]=z;
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
    set x(arg_other:number){
        this.data[0]=arg_other;
    }
    set y(arg_other:number){
        this.data[1]=arg_other;
    }
    set z(arg_other:number){
        this.data[2]=arg_other;
    }
    get xyz(){
        return this.data;
    }
    Add(arg_other:Vector3):Vector3{
        var output=new Vector3(0,0,0);
        
        output.data[0]=this.data[0]+arg_other.data[0];
        output.data[1]=this.data[1]+arg_other.data[1];
        output.data[2]=this.data[2]+arg_other.data[2];
        return output;
    }
    Add_b(arg_other:Vector3):Vector3{
        
        this.data[0]=this.data[0]+arg_other.data[0];
        this.data[1]=this.data[1]+arg_other.data[1];
        this.data[2]=this.data[2]+arg_other.data[2];
        return this;
    }
    Sub(arg_other:Vector3):Vector3{
        var output=new Vector3(0,0,0);
        
        output.data[0]=this.data[0]-arg_other.data[0];
        output.data[1]=this.data[1]-arg_other.data[1];
        output.data[2]=this.data[2]-arg_other.data[2];
        return output;
    }
    Sub_b(arg_other:Vector3):Vector3{
        
        this.data[0]=this.data[0]-arg_other.data[0];
        this.data[1]=this.data[1]-arg_other.data[1];
        this.data[2]=this.data[2]-arg_other.data[2];
        return this;
    }

    Multiply(arg_scalar:number):Vector3{
        var output=new Vector3(0,0,0);
        output.data[0]=this.data[0]*arg_scalar;
        output.data[1]=this.data[1]*arg_scalar;
        output.data[2]=this.data[2]*arg_scalar;
        return output;
    }
    Multiply_b(arg_scalar:number):Vector3{
        this.data[0]*=arg_scalar;
        this.data[1]*=arg_scalar;
        this.data[2]*=arg_scalar;
        return this;
    }

    Div(arg_scalar:number):Vector3{
        var output=new Vector3(0,0,0);
        output.data[0]=this.data[0]/arg_scalar;
        output.data[1]=this.data[1]/arg_scalar;
        output.data[2]=this.data[2]/arg_scalar;
        return output;
    }
    Div_b(arg_scalar:number):Vector3{
        this.data[0]/=arg_scalar;
        this.data[1]/=arg_scalar;
        this.data[2]/=arg_scalar;
        return this;
    }

    Length():number{
        return Math.sqrt(this.data[0]*this.data[0]+this.data[1]*this.data[1]+this.data[2]*this.data[2]);
    }
    LengthSqr():number{

        return this.data[0]*this.data[0]+this.data[1]*this.data[1]+this.data[2]*this.data[2];
    
    }

    Dot(arg_other:Vector3):number{
        return this.data[0]*arg_other.data[0]+this.data[1]*arg_other.data[1]+this.data[2]*arg_other.data[2];
    }

    Cross(arg_other:Vector3):Vector3{
        var output=new Vector3(0,0,0);

        output.data[0]=this.data[1]*arg_other.data[2]-this.data[2]*arg_other.data[1];
        output.data[1]=this.data[2]*arg_other.data[0]-this.data[0]*arg_other.data[2];
        output.data[2]=this.data[0]*arg_other.data[1]-this.data[1]*arg_other.data[0];
        return output;
    }

    Normalize():Vector3{
        var output=new Vector3(0,0,0);
        output.data[0]=this.data[0];
        output.data[1]=this.data[1];
        output.data[2]=this.data[2];
        var length=this.Length();
        output.Div_b(length);
        return output;
    }
    Normalize_b():Vector3{
        var length=this.Length();
        this.Div_b(length);
        return this;
    }
}