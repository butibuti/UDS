import Vector3 from "../Vector3";

export default class Sphere {
    position:Vector3;
    radius:number;// 半径
    constructor(arg_r:number,arg_p:Vector3)  {
        this.radius=arg_r;
        
            this.position=arg_p;
        
    }
};