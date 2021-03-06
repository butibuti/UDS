import Component from "./Component";
import IModel from "../Graphic/IModel";
import Transform from "../Transform";
import ID from "../Parts/ID";

class ModelInfo{

    geometryName: string;
    shaderName: string;
    materialName: string;
    meshName:string=null;
    lighting:boolean;
    billBoard:boolean;
}

export default class ModelDrawComponent extends Component{
    model: IModel;
    private info:ModelInfo=new ModelInfo();
    private layer:number;
    private modelID:ID;
    transform:Transform=null;
    get Layer():number{
        return this.layer;
    }
    constructor(isLighting:boolean, geometryName:string,materialName:string,shaderName:string,layer:number,isBillBoard :boolean, meshName?:string,arg_transform?:Transform){
        super();

        this.layer=layer;
        if(meshName)
        this.info.meshName=meshName;
        this.info.geometryName=geometryName;
        this.info.shaderName=shaderName;
        this.info.materialName=materialName;
        if(arg_transform)
        this.transform=arg_transform;

        this.info.lighting=isLighting;

        this.info.billBoard=isBillBoard;
    }
    OnSet(){
        if(!this.transform){
            this.transform=this.gameObject.transform;
        }
        if(this.info.meshName){
            this.model=this.gameObject.Manager.Scene.GetSceneManager().GetModelCreater().CreateModelFromMesh(this.info.lighting,this.info.billBoard, this.info.meshName,this.info.shaderName,this.transform);
        }else{
            
        this.model=this.gameObject.Manager.Scene.GetSceneManager().GetModelCreater().CreateModel(this.info.lighting,this.info.billBoard,this.info.geometryName,this.info.materialName,this.info.shaderName,this.transform);
        
        }
        this.RegistDraw();
    }
    OnRemove(){
        this.UnRegistDraw();
    }
    RegistDraw(){
        if(!this.modelID)
        this.modelID= this.gameObject.GetRenderer().Regist(this.model,this.layer);
    }
    UnRegistDraw(){
        if(this.modelID){

            this.gameObject.GetRenderer().UnRegist(this.modelID,this.layer);
            this.modelID=null;
        }
    }
}