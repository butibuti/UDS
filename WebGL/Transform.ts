import Matrix4x4 from "./Math/Matrix"
import Vector3 from "./Math/Vector3"
import Vector4 from "./Math/Vector4"
import MathHelper from "./Tool/MathHelper";


const calcMatrix4x4=new Matrix4x4().Identity();

export default class Transform{
    private position:Vector3;
    private scale:Vector3;
    private rotation:Matrix4x4;
    private matrix:Matrix4x4;
    private baseTransform:Transform;
    generateFunc:Function;
    get Position():Vector3{
        
        var mat=this.Matrix;
        
        return new Vector3(mat.data[12],mat.data[13],mat.data[14]);
    }
    get LocalPosition():Vector3{
        return this.position.Clone();
    }
    set Position(value:Vector3){
        this.position.x =value.x;
        this.position.y =value.y;
        this.position.z =value.z;
        if(this.matrix){
            this.matrix.data[12]=this.position.x;
            this.matrix.data[13]=this.position.y;
            this.matrix.data[14]=this.position.z;
        }
        
    } 
    get Rotation():Matrix4x4{
        if(this.baseTransform!=null)
        {
            return this.baseTransform.Rotation.Multiply(this.rotation);

        }else
        return this.rotation;
    }
    set Rotation(value:Matrix4x4){
        this.rotation=value.Clone();
        this.matrix=null;
    }
    get Scale():Vector3{
        return this.scale.Clone();
    } 
    set Scale(value:Vector3){
        this.scale.x=value.x;
        this.scale.y=value.y;
        this.scale.z=value.z;
        this.matrix=null;
    }
    get Matrix():Matrix4x4{
        if(this.matrix==null)
        this.generateFunc();

        if(this.baseTransform!=null){
            return this.baseTransform.Matrix.Multiply(this.matrix);
        }else{
            return  this.matrix;
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

    get SetPosition():Vector3{
        
        this.matrix=null;
        return this.position;
    }

    get SetScale():Vector3{
        
        this.matrix=null;
        return this.scale;
    }

    constructor(position?:Vector3,rotation?:Vector3,scale?:Vector3){
        if(position){
            this.position=position;
        }else
        this.position=new Vector3(0,0,0);
        if(scale){
            this.scale=scale;
    }else{
        
        this.scale=new Vector3(1,1,1);
    }
        this.rotation=new Matrix4x4().Identity();
        if(rotation){
            this.rotation.Rotate_b(MathHelper.ToRadian( rotation.z),Vector3.zAxis).Multiply_b(new Matrix4x4().Identity().Rotate_b(MathHelper.ToRadian( rotation.y),Vector3.yAxis)).Multiply_b(new Matrix4x4().Identity().Rotate_b(MathHelper.ToRadian( rotation.x),Vector3.xAxis));
        }
        this.generateFunc=this.ScaleRotationTranslate;
    }

    GetFront():Vector3 {
        return Vector3.zAxis.Multiply_Matrix ( this.Rotation).Normalize_b();
    }

    GetRight():Vector3 {
        return Vector3.xAxis .Multiply_Matrix ( this.Rotation).Normalize_b();

    }

    GetUp():Vector3 {
        return Vector3.yAxis .Multiply_Matrix ( this.Rotation).Normalize_b();
    }

    ScaleRotationTranslate(){
        
        this.matrix=new Matrix4x4();
        this.matrix.Identity();
        this.matrix.Translate_b(this.position);
        this.matrix.Multiply_b(this.rotation);
        this.matrix.Scale_b(this.scale);

    }
    LookAt(arg_targetPos:Vector3,arg_upAxis:Vector3){
        this.rotation.Identity();
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
    Translate(arg_velocity:Vector3):void{
        this.position.x=this.position.x+arg_velocity.x;
        this.position.y=this.position.y+arg_velocity.y;
        this.position.z=this.position.z+arg_velocity.z;

        if( this.matrix){
            
            this.matrix.data[12]=this.position.x;
            this.matrix.data[13]=this.position.y;
            this.matrix.data[14]=this.position.z;
        }
    }

    TranslateX(arg_x:number):void{
        this.position.data[0]+=arg_x;

        if( this.matrix){
            
            this.matrix.data[12]=this.position.x;
        }

    }
    TranslateY(arg_y:number):void{
        this.position.data[1]+=arg_y;

        if( this.matrix){
            
            this.matrix.data[13]=this.position.y;
        }

    }
    TranslateZ(arg_z:number):void{
        this.position.data[2]+=arg_z;

        if( this.matrix){
            
            this.matrix.data[14]=this.position.z;
        }

    }

    SetPositionX(arg_x:number):void{
        this.position.data[0]=arg_x;

        if( this.matrix){
            
            this.matrix.data[12]=this.position.x;
        }

    }
    SetPositionY(arg_y:number):void{
        this.position.data[1]=arg_y;
        if( this.matrix){
            
            this.matrix.data[13]=arg_y;
        }

    }
    SetPositionZ(arg_z:number):void{
        this.position.data[2]=arg_z;

        if( this.matrix){
            
            this.matrix.data[14]=this.position.z;
        }

    }

    Roll_Local(arg_rotateMatrix:Matrix4x4){
        this.rotation.Multiply_b(arg_rotateMatrix);
        this.matrix=null;
    }
    Roll_World(arg_rotateMatrix:Matrix4x4){
        this.rotation=arg_rotateMatrix.Multiply(this.rotation);
        this.matrix=null;
    }

    RollX_Local_Degrees(arg_degrees:number){
       this.RollX_Local_Radians(MathHelper.ToRadian(arg_degrees)); 
    }
    RollX_Local_Radians(arg_radians:number){
        calcMatrix4x4.Identity();
        calcMatrix4x4.Rotate_b(arg_radians,Vector3.xAxis);
        this.rotation.Multiply_b(calcMatrix4x4);
        this.matrix=null;
    }
    RollX_World_Degrees(arg_degrees:number){
        this.RollX_World_Radians(MathHelper.ToRadian(arg_degrees)); 
     }
    RollX_World_Radians(arg_radians:number){
        calcMatrix4x4.Identity();
        calcMatrix4x4.Rotate_b(arg_radians,Vector3.xAxis);
        this.rotation=calcMatrix4x4 .Multiply(this.rotation);
        this.matrix=null;
    }


    RollY_Local_Degrees(arg_degrees:number){
        this.RollY_Local_Radians(MathHelper.ToRadian(arg_degrees)); 
     }
     RollY_Local_Radians(arg_radians:number){
         calcMatrix4x4.Identity();
         calcMatrix4x4.Rotate_b(arg_radians,Vector3.yAxis);
         this.rotation.Multiply_b(calcMatrix4x4);
         this.matrix=null;
     }
     RollY_World_Degrees(arg_degrees:number){
         this.RollY_World_Radians(MathHelper.ToRadian(arg_degrees)); 
      }
     RollY_World_Radians(arg_radians:number){
         calcMatrix4x4.Identity();
         calcMatrix4x4.Rotate_b(arg_radians,Vector3.yAxis);
         this.rotation=calcMatrix4x4 .Multiply(this.rotation);
         this.matrix=null;
     }


     RollZ_Local_Degrees(arg_degrees:number){
         this.RollZ_Local_Radians(MathHelper.ToRadian(arg_degrees)); 
      }
      RollZ_Local_Radians(arg_radians:number){
          calcMatrix4x4.Identity();
          calcMatrix4x4.Rotate_b(arg_radians,Vector3.zAxis);
          this.rotation.Multiply_b(calcMatrix4x4);
          this.matrix=null;
      }
      RollZ_World_Degrees(arg_degrees:number){
          this.RollZ_World_Radians(MathHelper.ToRadian(arg_degrees)); 
       }
      RollZ_World_Radians(arg_radians:number){
          calcMatrix4x4.Identity();
          calcMatrix4x4.Rotate_b(arg_radians,Vector3.zAxis);
          this.rotation=calcMatrix4x4 .Multiply(this.rotation);
          this.matrix=null;
      }
      Clone():Transform{
          var out=new Transform(this.LocalPosition);
          out.scale=this.scale;
          out.rotation=this.rotation;
          out.baseTransform=this.baseTransform;
          return out;
      }
}