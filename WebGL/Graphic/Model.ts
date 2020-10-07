
import GraphicDevice from "./GraphicDevice"
import Transform from "../Transform"
import Light from "../Light/Light"
import IModel from "./IModel"
import IShader from "../Resource/IShader"
import IMaterial from "../Resource/IMaterial"
import IGeometry from "../Resource/IGeometry"
import IMesh from "../Resource/IMesh"

export default class Model implements IModel{
    graphicDevice:GraphicDevice;
    geometry:IGeometry;
    materials:Array< IMaterial>;
    shader:IShader;
    transform:Transform;
    lights:Array<Light>;
    subsets:Array<number>;
    isLightUse:boolean=false;
    constructor (isLight?:boolean ){
        if(isLight)
        this.isLightUse=isLight;
    }
    Initialize_geom(arg_graphicDevice:GraphicDevice,arg_geometry:IGeometry,arg_material:IMaterial,arg_Shader:IShader,arg_transform:Transform){
        this.graphicDevice=arg_graphicDevice;
        this.geometry=arg_geometry;
        this.materials=new Array();
        this.materials.push( arg_material);
        this.subsets=new Array();
        this.subsets.push(this.geometry.GetIndexSize());
        this.shader=arg_Shader;
        this.transform=arg_transform;
        this.lights=new Array();
    }
    Initialize_mesh(arg_graphicDevice:GraphicDevice,arg_mesh:IMesh,arg_Shader:IShader,arg_transform:Transform){
        this.graphicDevice=arg_graphicDevice;
        this.geometry=arg_mesh.geometry;
        this.materials=arg_mesh.ary_materials;
        this.subsets=this.geometry.GetSubSet();
        
        this.shader=arg_Shader;
        this.transform=arg_transform;
        this.lights=new Array();
        console.log(this.subsets);
    }
    SetLight(arg_light:Light):void{
        this.lights.push(arg_light);
    }
    Draw():void{
        
        this.shader.Attach();
        var mvpMatrix=this.graphicDevice.TempMatrix.Multiply( this.transform.Matrix );
        var invMatrix=this.transform.Matrix.Inverse();
        
        // uniform変数の登録と描画
        
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[0], false, mvpMatrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[1], false, this.transform.Matrix.data);
        this.graphicDevice.context.uniformMatrix4fv(this.shader.uniformLocations[2], false, invMatrix.data);

        if(this.isLightUse)
        this.lights.forEach(light=>light.Atach());
        
        this.geometry.Draw();
        var offset=0;
        
        for(var i=0;i< this.subsets.length;i++){
            this.materials[i].Attach();
            this.graphicDevice.context.drawElements(this.graphicDevice.context.TRIANGLES,this.subsets[i] , this.graphicDevice.context.UNSIGNED_SHORT, offset*2);
            offset+=this.subsets[i];

        }
}
}