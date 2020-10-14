import Transform from "../Transform";

export default class CheckPoint{
    transform:Transform;

    constructor(arg_transform:Transform){
        this.transform=arg_transform;
    }

    GetX():number{
        return this.transform.Position.x;
    }
}