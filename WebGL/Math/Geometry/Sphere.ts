import Vector3 from "../Vector3";

export default class Sphere {
    position:Vector3;
    radius:number;// 半径
    initRadius:number;
    constructor(arg_r:number,arg_p:Vector3,arg_s:number)  {
        this.radius=arg_r;
        this.initRadius=arg_r;
        this.position=arg_p;
        this.radius=arg_r*arg_s;
        
    }
};