
import GraphicDevice from "./GraphicDevice"
import Transform from "../Transform"
import Light from "../Light/Light"
import IModel from "./IModel"
import IShader from "../Resource/IShader"
import IMaterial from "../Resource/IMaterial"
import IGeometry from "../Resource/IGeometry"
import IMesh from "../Resource/IMesh"
import Matrix4x4 from "../Math/Matrix"
import Vector3 from "../Math/Vector3"

export default class TextModel implements IModel{
    graphicDevice:GraphicDevice;
    geometry:IGeometry;
    materials:IMaterial;
    shader:IShader;
    transform:Transform;
    
    uvData:WebGLBuffer;
    indexSize:number;


    SetUVData(arg_uvVBO: WebGLBuffer){
       this.uvData=arg_uvVBO;
    }
    
    Draw:Function;
    constructor (isBillBoard?:boolean){
        if(isBillBoard==true){
        
        
        this.Draw=this.Draw_BillBoard_NonLight;
        }else{

            
            this.Draw=this.Draw_NonLight;
        }
    }
    Initialize_geom(arg_graphicDevice:GraphicDevice,arg_geometry:IGeometry,arg_material:IMaterial,arg_Shader:IShader,arg_transform:Transform){
        this.graphicDevice=arg_graphicDevice;
        this.geometry=arg_geometry;
        this.materials =arg_material;
        
        this.indexSize=(this.geometry.GetIndexSize());
        this.shader=arg_Shader;
        this.transform=arg_transform;
        
    }
    SetLight(arg_light:Light):void{
        
    }

    Draw_NonLight():void{

        this.shader.Attach();
        var mvpMatrix=this.graphicDevice.TempMatrix.Multiply( this.transform.Matrix );
        var invMatrix=this.transform.Matrix.Inverse();
        
        // uniform変数の登録と描画
        
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[0], false, mvpMatrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[1], false, this.transform.Matrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[2], false, invMatrix.data);

        
        
        
        this.geometry.ChangeVBO(this.uvData,1);
        this.geometry.Draw();
        
        
        this.materials.Attach();
        this.graphicDevice.context.drawElements(this.graphicDevice.context.TRIANGLES,this.indexSize , this.graphicDevice.context.UNSIGNED_SHORT,0);
            
    }
    Draw_BillBoard_NonLight():void{
        
        this.shader.Attach();
        //this.transform.LookAt(this.graphicDevice.CameraPosition,new Vector3(0,1,0));
        var mMatrix=this.transform.Matrix.Multiply( this.graphicDevice.CameraRotationInv);

        
        var mvpMatrix=this.graphicDevice.TempMatrix.Multiply(  mMatrix);
        var invMatrix=this.transform.Matrix.Inverse();
        
        // uniform変数の登録と描画
        
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[0], false, mvpMatrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[1], false, this.transform.Matrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[2], false, invMatrix.data);

        
        
        
        this.geometry.ChangeVBO(this.uvData,1);
        this.geometry.Draw();
        this.materials.Attach();
        this.graphicDevice.context.drawElements(this.graphicDevice.context.TRIANGLES,this.indexSize , this.graphicDevice.context.UNSIGNED_SHORT, 0);
          
    }

    
}