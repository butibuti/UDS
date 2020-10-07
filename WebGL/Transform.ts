import Matrix4x4 from "./Math/Matrix"
import Vector3 from "./Math/Vector3"
import Vector4 from "./Math/Vector4"

export default class Transform{
    private position:Vector3;
    private scale:Vector3;
    private rotation:Matrix4x4;
    private matrix:Matrix4x4;
    private baseTransform:Transform;
    generateFunc:Function;
    get Position():Vector3{
        if(this.baseTransform!=null)
        {
            return this.position.Add(this.baseTransform.Position);

        }else
        return this.position;
    }
    set Position(value:Vector3){
        this.position=value;
        this.matrix=null;
    } 
    get Rotation():Matrix4x4{
        if(this.baseTransform!=null)
        {
            return this.baseTransform.Rotation.Multiply(this.rotation);

        }else
        return this.rotation;
    }
    set Rotation(value:Matrix4x4){
        this.rotation=value;
        this.matrix=null;
    }
    get Scale():Vector3{
        return this.scale;
    } 
    set Scale(value:Vector3){
        this.scale=value;
        this.matrix=null;
    }
    get Matrix():Matrix4x4{
        if(this.matrix==null)
        this.generateFunc();

        if(this.baseTransform!=null){
            return this.baseTransform.Matrix.Multiply(this.matrix);
        }else{
            return this.matrix;
        }
    }
    get LocalMatrix():Matrix4x4{
        if(this.matrix==null)
        this.generateFunc();
        return this.matrix;
    }
    set BaseTransform(arg_base:Transform){
        this.baseTransform=arg_base;
    }
    get BaseTransform():Transform{
        return this.baseTransform;
    }
    constructor(){
        this.position=new Vector3(0,0,0);
        this.scale=new Vector3(1,1,1);
        this.rotation=new Matrix4x4();
        this.rotation.Identity();
        this.generateFunc=this.ScaleRotationTranslate;
    }

    GetFront():Vector3 {
        return new Vector3(0, 0, 1).Multiply_Matrix ( this.Rotation);
    }

    GetRight():Vector3 {
        return new Vector3(1, 0, 0) .Multiply_Matrix ( this.Rotation);

    }

    GetUp():Vector3 {
        return new Vector3(0, 1, 0) .Multiply_Matrix ( this.Rotation);
    }

    ScaleRotationTranslate(){
        
        this.matrix=new Matrix4x4();
        this.matrix.Identity();
        this.matrix.Translate_b(this.position);
        this.matrix.Multiply_b(this.rotation);
        this.matrix.Scale_b(this.scale);

    }
    LookAt(arg_targetPos:Vector3,arg_upAxis:Vector3){
        var z:Vector3 = (arg_targetPos.Sub(this.Position)).Normalize().Multiply(-1);
        var x:Vector3 = arg_upAxis.Cross(z).Normalize();
        var y:Vector3  = z.Cross(x).Normalize();
        
        this.rotation.data[0] = x.x; this.rotation.data[1] = x.y; this.rotation.data[2] = x.z;
        this.rotation.data[4]= y.x; this.rotation.data[5] = y.y; this.rotation.data[6] = y.z;
        this.rotation.data[8] = z.x; this.rotation.data[9] = z.y; this.rotation.data[10] = z.z;
        
        
        
        this.matrix=null;
    }
    ScaleTranslateRotation(){
        
        this.matrix=new Matrix4x4();
        this.matrix.Identity();
        this.matrix.Multiply_b(this.rotation);
        this.matrix.Translate_b(this.position);
        this.matrix.Scale_b(this.scale);

    }
}