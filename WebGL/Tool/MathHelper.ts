
const rad=Math.PI/180;
export default class MathHelper{

    get Rad(){
        return rad;
    }
    

 static ToRadian(degree:number) :number{
    return degree*rad;
}


}