import ID from "../Parts/ID";
import CollisionObject from "../Parts/Collision/CollisionObject";
import CollisionObjectCreater from "../Tool/CollisionObjectCreater";
import Vector3 from "../Math/Vector3";
import Component from "../Component/Component";
import ModelDrawComponent from "../Component/ModelDrawComponent";
import CollisionComponent from "../Component/CollisionComponent";

enum PrimitiveType{
    sphere=0,box_AABB=1,box_OBB=2,point=3,
}


export default class ObstacleComponent extends Component{
    type:PrimitiveType;
    size:Vector3;
    materialName:string="green";
    constructor(arg_type:PrimitiveType,arg_size:Vector3,arg_materialName?:string){
        super();
        this.type=arg_type;
        this.size=arg_size;
        this.materialName=arg_materialName;
    }
    OnSet(){
        switch(this.type){
            case PrimitiveType.sphere:
                this.gameObject.SetComponent(new ModelDrawComponent(true, "sphere",this.materialName,"pointLight",1,false));
                this.gameObject.SetComponent(new CollisionComponent(PrimitiveType.sphere,this.size,0));
               break;
            case PrimitiveType.point:
                
            break;
            case PrimitiveType.box_AABB:
                this.gameObject.SetComponent(new ModelDrawComponent(true, "cube","blue","pointLight",1,false));
                this.gameObject.SetComponent(new CollisionComponent(PrimitiveType.box_AABB,this.size,0));
              break;
            case PrimitiveType.box_OBB:
                this.gameObject.SetComponent(new ModelDrawComponent(true, "cube","blue","pointLight",1,false));
                this.gameObject.SetComponent(new CollisionComponent(PrimitiveType.box_OBB,this.size,0));
            break;
        }
        
        
    }
    OnRemove(){
        
    }

    Update(){
        
    }
}