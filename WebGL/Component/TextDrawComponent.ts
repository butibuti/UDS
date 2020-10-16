import Component from "./Component";
import IModel from "../Graphic/IModel";
import Transform from "../Transform";
import ID from "../Parts/ID";
import Vector4 from "../Math/Vector4";

class ModelInfo{
    fontTextureName: string;
    shaderName: string;
    color:Vector4;
    
    billBoard:boolean;
}

export default class TextDrawComponent extends Component{
    model: IModel;
    private info:ModelInfo=new ModelInfo();
    private layer:number;
    private modelID:ID;
    private text:string;

    transform:Transform=null;
    get Layer():number{
        return this.layer;
    }
    constructor(text:string,fontTexName:string,shaderName:string,arg_color:Vector4 ,layer:number,isBillBoard :boolean, arg_transform?:Transform){
        super();

        this.layer=layer;
        
        this.info.shaderName=shaderName;
        this.info.color=arg_color;
        this.info.fontTextureName=fontTexName;
        this.text=text;
        if(arg_transform)
        this.transform=arg_transform;

        

        this.info.billBoard=isBillBoard;
    }
    OnSet(){
        if(!this.transform){
            this.transform=this.gameObject.transform;
        }
        
        this.model=this.gameObject.Manager.Scene.GetSceneManager().GetModelCreater().CreateModelFromText(this.info.billBoard,this.info.color, this.text,this.info.fontTextureName, this.info.shaderName,this.transform);
       
        this.RegistDraw();
    }
    SetText(arg_text:string){
        this.text=arg_text;

        this.UnRegistDraw();
        this.model=this.gameObject.Manager.Scene.GetSceneManager().GetModelCreater().CreateModelFromText(this.info.billBoard,this.info.color, this.text,this.info.fontTextureName, this.info.shaderName,this.transform);
        this.RegistDraw();
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
    OnRemove(){
        this.UnRegistDraw();
    }
}