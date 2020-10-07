export default 
class BinaryReader{
    bufferView:DataView;
    point:number;
    constructor(arg_buffer:ArrayBuffer){
        this.bufferView=new DataView(arg_buffer);
        this.point=0;
    }
    GetString(size):string{
        var output="";
        for(var i=0;i<size;i++) 
        {
            var read=this.bufferView.getInt8(this.point);
            if(read>9)
            output+=String.fromCharCode(read);
            else{
                switch(read){
                    case 0:
                        output+="0";
                    break;
                    case 1:
                    output+="1";
                    break;
                    case 2:
                    output+="2";
                    break;
                    case 3:
                    output+="3";
                    break;
                    case 4:
                    output+="4";
                    break;
                    case 5:
                    output+="5";
                    break;
                    case 6:
                    output+="6";
                    break;
                    case 7:
                    output+="7";
                    break;
                    case 8:
                    output+="8";
                    break;
                    case 9:
                    output+="9";
                    break;
                }
            }
            this.point++;
        }
        return output;
    }
    GetWString(size):string{
        var output="";
        for(var i=0;i<size*2;i++) 
        {
            output+=String.fromCharCode(this.bufferView.getInt8(this.point));
            this.point++;
        }
        return output;
    }
    GetChar():number{
        
        var output=this.bufferView.getInt8(this.point);
        this.point+=1;
        return output;
    } 
    GetFloat():number{
        var output=this.bufferView.getFloat32(this.point,true);
        this.point+=4;
        return output;
    }
    GetDouble():number{
        var output=this.bufferView.getFloat64(this.point,true);
        this.point+=5;
        return output;
    }
    GetInt(size?:number){
        if(!size){
        var output=this.bufferView.getInt32(this.point,true);
        this.point+=4;
        return output;
        }
        if(size==1){
            
        var output=this.bufferView.getInt8(this.point);
        this.point+=1;
        return output;
        }else if(size==2){

            var output=this.bufferView.getInt16(this.point,true);
            this.point+=2;
            return output;
        }else if(size==4){

            var output=this.bufferView.getInt32(this.point,true);
            this.point+=4;
            return output;
        }
    }
    GetUInt(size?:number):number{
        if(!size){
        var output=this.bufferView.getUint32(this.point,true);
        this.point+=4;
        return output;
        }
        if(size==1){
            
        var output=this.bufferView.getUint8(this.point);
        this.point+=1;
        return output;
        }else if(size==2){

            var output=this.bufferView.getUint16(this.point,true);
            this.point+=2;
            return output;
        }else if(size==4){

            var output=this.bufferView.getUint32(this.point,true);
            this.point+=4;
            return output;
        }
    }
}