export default class FileLoader{
    static LoadText(arg_filePath:string,isAsynch?:boolean):string{


        var xmlHttp = new XMLHttpRequest();
        if(isAsynch)
        xmlHttp.open("GET",arg_filePath,isAsynch);
        else{
            xmlHttp.open("GET",arg_filePath,false);            
        }
        xmlHttp.send(null);
        
        var data = xmlHttp.responseText;

        return data;
    }
    static LoadBin(arg_filePath:string,arg_out){

        
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET",arg_filePath,true);
        xmlHttp.responseType = "arraybuffer";
        xmlHttp.onload=function () {
            OnBinLoad(arg_out,xmlHttp.response);
        }
        xmlHttp.send(null);
    }

}

function OnBinLoad(arg_out,arg_aryBuffer:ArrayBuffer) {
    arg_out.buffer= arg_aryBuffer;
    arg_out.Initialize();
}