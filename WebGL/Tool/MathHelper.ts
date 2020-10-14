
const rad=Math.PI/180;

const sinRets:Float32Array=new Float32Array(360);


export default class MathHelper{

    private static isInitSin=false;
    get Rad(){
        return rad;
    }
    static InitSinRets(){
        if(this.isInitSin){
            return;
        }
        for(var i=0;i<360;i++){
            sinRets[i]=Math.sin(this.ToRadian(i));
        }
        this.isInitSin=true;
    }

 static ToRadian(degree:number) :number{
    return degree*rad;
}

    static GetSinPos(arg_t:number):number{

        return sinRets[arg_t%360];
    }


}