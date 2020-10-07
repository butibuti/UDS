export default class Vector2{
    data: Float32Array;
    constructor(x:number,y:number){
        this.data = new Float32Array(2);
        this.data[0]=x;
        this.data[1]=y;
    }
    get x(){
        return this.data[0];
    }
    get y(){
        return this.data[1];
    }
    set x(arg_v:number){
        this.data[0]=arg_v;
    }
    set y(arg_v:number){
        this.data[1]=arg_v;
    }
    get xy(){
        return this.data;
    }
    Add(arg_other:Vector2):Vector2{
        var output=new Vector2(0,0);
        
        output.data[0]=this.data[0]+arg_other.data[0];
        output.data[1]=this.data[1]+arg_other.data[1];
        return output;
    }
    Add_b(arg_other:Vector2):Vector2{
        
        this.data[0]=this.data[0]+arg_other.data[0];
        this.data[1]=this.data[1]+arg_other.data[1];
        return this;
    }
    Sub(arg_other:Vector2):Vector2{
        var output=new Vector2(0,0);
        
        output.data[0]=this.data[0]-arg_other.data[0];
        output.data[1]=this.data[1]-arg_other.data[1];
        return output;
    }
    Sub_b(arg_other:Vector2):Vector2{
        
        this.data[0]=this.data[0]-arg_other.data[0];
        this.data[1]=this.data[1]-arg_other.data[1];
        return this;
    }

    Multiply(arg_scalar:number):Vector2{
        var output=new Vector2(0,0);
        output.data[0]=this.data[0]*arg_scalar;
        output.data[1]=this.data[1]*arg_scalar;
        return output;
    }
    Multiply_b(arg_scalar:number):Vector2{
        this.data[0]*=arg_scalar;
        this.data[1]*=arg_scalar;
        return this;
    }

    Div(arg_scalar:number):Vector2{
        var output=new Vector2(0,0);
        output.data[0]=this.data[0]/arg_scalar;
        output.data[1]=this.data[1]/arg_scalar;
        return output;
    }
    Div_b(arg_scalar:number):Vector2{
        this.data[0]/=arg_scalar;
        this.data[1]/=arg_scalar;
        return this;
    }

    Length():number{
        return Math.sqrt(this.data[0]*this.data[0]+this.data[1]*this.data[1]);
    }
    LengthSqr():number{

        return this.data[0]*this.data[0]+this.data[1]*this.data[1];
    
    }

    Dot(arg_other:Vector2):number{
        return this.data[0]*arg_other.data[0]+this.data[1]*arg_other.data[1];
    }

    Cross(arg_other:Vector2):number{

        return this.x*arg_other.y-this.y*arg_other.x;
    }

    Normalize():Vector2{
        var output=new Vector2(this.data[0],this.data[1]);
        var length=this.Length();
        output.Div_b(length);
        return output;
    }
    Normalize_b():Vector2{
        var length=this.Length();
        this.Div_b(length);
        return this;
    }
}