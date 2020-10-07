import ITexture from "../Resource/ITexture"
import IGeometry from "../Resource/IGeometry"
import IMaterial from "../Resource/IMaterial"
import IShader from "../Resource/IShader"
import IMesh from "../Resource/IMesh";
import ISound from "../Resource/ISound"
import ResourceCreater from "../Tool/ResourceCreater";
import GraphicDevice from "../Graphic/GraphicDevice";

export default class ResourceContainer{
    private iTextures:Map<string,ITexture>;
    private iGeometries:Map<string,IGeometry>;
    private iMaterials:Map<string,IMaterial>;
    private iShaders:Map<string,IShader>;
    private iSounds:Map<string,ISound>;
    private iMeshes:Map<string,IMesh>;
    private loadingObjectCount:number;
    constructor(){
        this.iGeometries=new Map<string,IGeometry>();
        this.iMaterials=new Map<string,IMaterial>();
        this.iShaders=new Map<string,IShader>();
        this.iSounds=new Map<string,ISound>();
        this.iTextures=new Map<string,ITexture>();
        this.iMeshes=new Map<string,IMesh>();
        this.loadingObjectCount=0;
    }

    GetShader(arg_key:string):IShader{
        if(this.iShaders[arg_key])
        return this.iShaders[arg_key];
        else
        console.log("key is not fond.");
        return null;
    }

    AddShader(arg_value:IShader,arg_key:string):IShader{
        this.iShaders[arg_key]=arg_value;
        return arg_value;
    }
    

    RemoveShader(arg_key:string):void{
        delete this.iShaders[arg_key];

    }
    GetTexture(arg_key:string):ITexture{
        if(this.iTextures[arg_key])
        return this.iTextures[arg_key];
        else
        return null;
    }

    AddTexture(arg_value:ITexture,arg_key:string):ITexture{
        this.iTextures[arg_key]=arg_value;
        arg_value.SetContainer(this);
        return arg_value;
    }

    AddTextureFromFile(arg_value:string,arg_device:GraphicDevice):ITexture{
        if(this.iTextures[arg_value]){
            return this.iTextures[arg_value];
        }

        var tex=ResourceCreater.CreateTexture( arg_value,arg_device);
        tex.SetContainer(this);
        
        this.iTextures[arg_value]=tex;
        return this.iTextures[arg_value];
    }

    RemoveTexture(arg_key:string):void{
        delete this.iTextures[arg_key];

    }
    GetMaterial(arg_key:string):IMaterial{
        if(this.iMaterials[arg_key])
        return this.iMaterials[arg_key];
        else
        return null;
    }

    AddMaterial(arg_value:IMaterial,arg_key:string):IMaterial{
        this.iMaterials[arg_key]=arg_value;
        return arg_value;
    }
    AddMaterialFromFile(arg_value:string,arg_device:GraphicDevice):IMaterial{
        if(this.iMaterials[arg_value]){
            return this.iMaterials[arg_value];
        }
        
        this.iMaterials[arg_value]=ResourceCreater.CreateMaterialFromFile( arg_value,this, arg_device);
        
        this.LoadStart();
        return this.iMaterials[arg_value];
    }
    RemoveMaterial(arg_key:string):void{
        delete this.iMaterials[arg_key];

    }
    GetGeometry(arg_key:string):IGeometry{
        if(this.iGeometries[arg_key])
        return this.iGeometries[arg_key];
        else
        return null;
    }

    AddGeometry(arg_value:IGeometry,arg_key:string):IGeometry{
        this.iGeometries[arg_key]=arg_value;
        return arg_value;
    }

    RemoveGeometry(arg_key:string):void{
        delete this.iGeometries[arg_key];

    }
    
    GetMesh(arg_key:string):IMesh{
        if(this.iMeshes[arg_key])
        return this.iMeshes[arg_key];
        else
        return null;
    }

    AddMesh(arg_value:IMesh,arg_key:string):IMesh{
        this.iMeshes[arg_key]=arg_value;
        return arg_value;
    }

    RemoveMesh(arg_key:string):void{
        delete this.iMeshes[arg_key];

    }

    GetSound(arg_key:string):ISound{

        if(this.iSounds[arg_key])
        return this.iSounds[arg_key];
        else
        return null;
    }

    AddSound(arg_value:ISound,arg_key:string):ISound{
        this.iSounds[arg_key]=arg_value;
        return arg_value;
    }
    AddSoundFromFile(arg_value:string,arg_key:string):ISound{
        this.iSounds[arg_key]=ResourceCreater.CreateSound(arg_value);
        return this.iSounds[arg_key];
    }

    RemoveSound(arg_key:string){

        delete this.iSounds[arg_key];
    }

    LoadEnd(){
        this.loadingObjectCount--;
        
    }
    LoadStart(){
        this.loadingObjectCount++;
        
    }
    GetLoadingObjCount():number{
        if(this.loadingObjectCount<=0){
            console.log(0+":loading");
            return 0;
        }
        console.log(this.loadingObjectCount+":loading");
        return this.loadingObjectCount;
    }
}