import Vector3 from "../Vector3";

export default class Box_AABB {
    position:Vector3;
    halfLengthes:Vector3 ;
    initLengthes:Vector3 ;
    
    constructor(arg_lengthes:Vector3,arg_position?:Vector3)  {
        this.halfLengthes=arg_lengthes.Multiply_b(0.5);
        if(arg_position)
        this.position=arg_position;
    }
    

    Length( index:number):number 
    { 
        return this.halfLengthes.data[index]; 
    }
    GetMin(index:number) { return this.position.data[index] -  this.halfLengthes.data[index]; }
    GetMax(index:number){ return this.position.data[index]+  this.halfLengthes.data[index]; }
};