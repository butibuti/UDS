import Texture from "../Resource/Texture"
import Material from "../Resource/Material"
import Shader from "../Resource/Shader"
import Geometry from "../Resource/Geometry"
import IGeometry from "../Resource/IGeometry"
import GraphicDevice from "../GraphicDevice"
import Vector4 from "../Math/Vector4"
import IMaterial from "../Resource/IMaterial"
import IShader from "../Resource/IShader"
import ITexture from "../Resource/ITexture"
import FrameBufferTexture from "../FrameBufferTexture"
import IMesh from "../Resource/IMesh"
import Mesh from "../Resource/Mesh"
import ResourceContainer from "../Parts/ResourceContainer"
import FileLoader from "./FileLoader"
import BinaryReader from "../Tool/BinaryReader"
import Sound from "../Resource/Sound"
import ISound from "../Resource/ISound"

enum VertexType {
    Vertex_UV = 0,
	Vertex_Normal = 1,
	Vertex_UV_Normal = 2,
	Vertex_UV_Normal_Color = 3,
	Vertex_Model_SingleBone = 4,
	Vertex_Model_DoubleBone = 5,
	Vertex_Model_QuadBone = 6,
	Vertex_Model_SDEFBone = 7,
	Vertex_Model_Mix = 8,
}


function GetDirectory(arg_path:string ):string{
    var splited= arg_path.split ("/");

    var output="";
    for(var i=0;i<splited.length-1;i++){
        output+=splited[i]+"/";
    }
    return output;
}

class B3MHolder{
    buffer:ArrayBuffer;
    container:ResourceContainer;
    graphicDevice:GraphicDevice;
    bufferReader: BinaryReader ;
    filePath:string;
    mesh:IMesh;
    Initialize():void{
        var geometry:IGeometry;
        var ary_material:Array<IMaterial>=new Array();
        
        

        this.bufferReader=new BinaryReader(this.buffer);

        {
            //hederTest
            var headStr:string=this.bufferReader.GetString(15);
            
            if(headStr!="Buti3DModelData")
            return;
        }

        //modelの名前など  
        {

            var version = this.bufferReader.GetFloat();

            //0でstd::wstring ,1でstd::string
            var encodeType= this.bufferReader.GetChar();
        
            var textCount = this.bufferReader.GetInt();
            
            //制作者の名前の読み込み
            {
        
                var nameStr:string;
                if (encodeType) {
                    nameStr= this.bufferReader.GetString(textCount);
        
                }
                else {
        
                    nameStr = this.bufferReader.GetWString(textCount);
                }
                
            }
        
            //制作者の名前の読み込み(eng)
            {
                textCount = this.bufferReader.GetInt();
                var nameStr:string;
                if (encodeType) {
                    nameStr= this.bufferReader.GetString(textCount);
        
                }
                else {
        
                    nameStr = this.bufferReader.GetWString(textCount);
                }
            }
            //モデル名
            {
                textCount = this.bufferReader.GetInt();
                var nameWStr:string;
                if (encodeType) {
                    nameWStr= this.bufferReader.GetString(textCount);
        
                }
                else {
        
                    nameWStr = this.bufferReader.GetWString(textCount);
                }
                
            }
            //モデル名英
            {
                textCount = this.bufferReader.GetInt();
                var nameWStr:string;
                if (encodeType) {
                    nameWStr= this.bufferReader.GetString(textCount);
        
                }
                else {
        
                    nameWStr = this.bufferReader.GetWString(textCount);
                }
            }
            //コメント
            {
                textCount = this.bufferReader.GetInt(); 
                var nameWStr:string;
                if (encodeType) {
                    nameWStr=(this.bufferReader.GetString(textCount));
        
                }
                else {
        
                    nameWStr = this.bufferReader.GetWString(textCount);
                }
                
            }
            //コメント英
            {
                textCount = this.bufferReader.GetInt(); 
                var nameWStr:string;
                if (encodeType) {
                    nameWStr= this.bufferReader.GetString(textCount);
        
                }
                else {
        
                    nameWStr = this.bufferReader.GetWString(textCount);
                }
                
            }
        }

        //頂点インデックスのバイト数
	    var vertexIndexByteSize = this.bufferReader.GetChar();
	//マテリアルインデックスのバイト数
	    var materialIndexByteSize = this.bufferReader.GetChar();
	//ボーンインデックスのバイト数
	    var boneIndexByteCount = this.bufferReader.GetChar();
	//モーフインデックスのバイト数
        var morphIndexByteSize = this.bufferReader.GetChar();
        //頂点構造体の列挙型
	    var type:VertexType = this.bufferReader.GetChar() ;

	    var uvExCount = this.bufferReader.GetChar();



	    var vertexCount = this.bufferReader.GetUInt(vertexIndexByteSize);

        

        switch (type)
	    {
	        case VertexType.Vertex_UV_Normal:
	    {
		    switch (uvExCount)
		        {
		        case 0: {
                    var pos = new Array<number>(3*vertexCount as number);
                    var uv = new Array<number>(2*vertexCount);
                    var normal = new Array<number>(3*vertexCount);
			        for(var i=0;i<vertexCount;i++){
                        var vertexType :VertexType = this.bufferReader.GetChar();
                        
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                        uv[i*2+0]=this.bufferReader.GetFloat();
                        uv[i*2+1]=this.bufferReader.GetFloat();
                        normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                    }   
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
                    geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
                    }
			    break;
		        case 1: {
                    var pos = new Array<number>(3*vertexCount as number);
                    var uv = new Array<number>(2*vertexCount);
                    var exuv_1 = new Array<number>(4*vertexCount);
                    var normal = new Array<number>(3*vertexCount);
			        for(var i=0;i<vertexCount;i++){
                        var vertexType :VertexType = this.bufferReader.GetChar();
                        
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                        uv[i*2+0]=this.bufferReader.GetFloat();
                        uv[i*2+1]=this.bufferReader.GetFloat();
                        exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                        normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                    }
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
                    geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
                    }
			  break;
		    case 2: {
            
                var pos = new Array<number>(3*vertexCount as number);
                var uv = new Array<number>(2*vertexCount);
                var exuv_1 = new Array<number>(4*vertexCount);
                var exuv_2 = new Array<number>(4*vertexCount);
                var normal = new Array<number>(3*vertexCount);
			    for(var i=0;i<vertexCount;i++){
                    var vertexType :VertexType = this.bufferReader.GetChar();
                    
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                        uv[i*2+0]=this.bufferReader.GetFloat();
                        uv[i*2+1]=this.bufferReader.GetFloat();
                        exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                        exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                        normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                }
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
                geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
            }
			  break;
		case 3: {
            
            var pos = new Array<number>(3*vertexCount as number);
            var uv = new Array<number>(2*vertexCount);
            var exuv_1 = new Array<number>(4*vertexCount);
            var exuv_2 = new Array<number>(4*vertexCount);
            var exuv_3 = new Array<number>(4*vertexCount);
            var normal = new Array<number>(3*vertexCount);
			for(var i=0;i<vertexCount;i++){
                var vertexType :VertexType = this.bufferReader.GetChar();
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                        uv[i*2+0]=this.bufferReader.GetFloat();
                        uv[i*2+1]=this.bufferReader.GetFloat();
                        exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                        exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                        exuv_3.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                        normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
            }
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
            geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
		}
			  break;
		case 4: {
            
            var pos = new Array<number>(3*vertexCount as number);
            var uv = new Array<number>(2*vertexCount);
            var exuv_1 = new Array<number>(4*vertexCount);
            var exuv_2 = new Array<number>(4*vertexCount);
            var exuv_3 = new Array<number>(4*vertexCount);
            var exuv_4 = new Array<number>(4*vertexCount);
            var normal = new Array<number>(3*vertexCount);
			for(var i=0;i<vertexCount;i++){
                var vertexType :VertexType = this.bufferReader.GetChar();
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_3.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_4.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
            }
            
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
            geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
        }
			  break;
		default:
			break;
		}
	}
	break;
	        case VertexType.Vertex_Model_SingleBone:
        {
		    switch (uvExCount)
		        {
		        case 0: {
                    var pos = new Array<number>(3*vertexCount as number);
                    var uv = new Array<number>(2*vertexCount);
                    var normal = new Array<number>(3*vertexCount);
                    var boneIndex=new Array<number>(vertexCount);
			        for(var i=0;i<vertexCount;i++){
                        var vertexType :VertexType = this.bufferReader.GetChar();
                        
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                        uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                        normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                        boneIndex[i]=this.bufferReader.GetInt(2);;
                    }   
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
                    geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
                    }
			    break;
		        case 1: {
                    var pos = new Array<number>(3*vertexCount as number);
                    var uv = new Array<number>(2*vertexCount);
                    var exuv_1 = new Array<number>(4*vertexCount);
                    var normal = new Array<number>(3*vertexCount);
                    var boneIndex=new Array<number>(vertexCount);
			        for(var i=0;i<vertexCount;i++){
                        var vertexType :VertexType = this.bufferReader.GetChar();
                        
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                        uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                        exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                        normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                        boneIndex[i]=this.bufferReader.GetInt(2);;
                    }
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);     
                    geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
                    }
			  break;
		    case 2: {
            
                var pos = new Array<number>(3*vertexCount as number);
                var uv = new Array<number>(2*vertexCount);
                var exuv_1 = new Array<number>(4*vertexCount);
                var exuv_2 = new Array<number>(4*vertexCount);
                var normal = new Array<number>(3*vertexCount);
                var boneIndex=new Array<number>(vertexCount);
			    for(var i=0;i<vertexCount;i++){
                    var vertexType :VertexType = this.bufferReader.GetChar();
                    
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                    uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                    exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                    exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                    normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                    boneIndex[i]=this.bufferReader.GetInt(2);;
                }
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
                geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
            }
			  break;
		case 3: {
            
            var pos = new Array<number>(3*vertexCount as number);
            var uv = new Array<number>(2*vertexCount);
            var exuv_1 = new Array<number>(4*vertexCount);
            var exuv_2 = new Array<number>(4*vertexCount);
            var exuv_3 = new Array<number>(4*vertexCount);
            var normal = new Array<number>(3*vertexCount);
            var boneIndex=new Array<number>(vertexCount);
			for(var i=0;i<vertexCount;i++){
                var vertexType :VertexType = this.bufferReader.GetChar();
                
                pos[i*3+0]=this.bufferReader.GetFloat();
                pos[i*3+1]=this.bufferReader.GetFloat();
                pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_3.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
            }
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
            geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
		}
			  break;
		case 4: {
            
            var pos = new Array<number>(3*vertexCount as number);
            var uv = new Array<number>(2*vertexCount);
            var exuv_1 = new Array<number>(4*vertexCount);
            var exuv_2 = new Array<number>(4*vertexCount);
            var exuv_3 = new Array<number>(4*vertexCount);
            var exuv_4 = new Array<number>(4*vertexCount);
            var normal = new Array<number>(3*vertexCount);
            var boneIndex=new Array<number>(vertexCount);
			for(var i=0;i<vertexCount;i++){
                var vertexType :VertexType = this.bufferReader.GetChar();
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_3.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_4.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                normal[i*3+1]=this.bufferReader.GetFloat();            
                normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
            }
            
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
            geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
        }
			  break;
		default:
			break;
		}
	}
	break;
	        case VertexType.Vertex_Model_DoubleBone:
        {
		    switch (uvExCount)
		        {
		        case 0: {
                    var pos = new Array<number>(3*vertexCount as number);
                    var uv = new Array<number>(2*vertexCount);
                    var normal = new Array<number>(3*vertexCount);
                    var boneIndex=new Array<number>(vertexCount);
                    var boneIndex2=new Array<number>(vertexCount);
                    var boneWeight=new Array<number>(vertexCount);
                    
			        for(var i=0;i<vertexCount;i++){
                        var vertexType :VertexType = this.bufferReader.GetChar();
                        
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                        uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                        normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                        boneIndex[i]=this.bufferReader.GetInt(2);;
                        boneIndex2[i]=this.bufferReader.GetInt(2);;
                        boneWeight[i]=this.bufferReader.GetFloat();;
                    }   
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
                    geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
                    }
			    break;
		        case 1: {
                    var pos = new Array<number>(3*vertexCount as number);
                    var uv = new Array<number>(2*vertexCount);
                    var exuv_1 = new Array<number>(4*vertexCount);
                    var normal = new Array<number>(3*vertexCount);
                    var boneIndex=new Array<number>(vertexCount);
                    var boneIndex2=new Array<number>(vertexCount);
                    var boneWeight=new Array<number>(vertexCount);
			        for(var i=0;i<vertexCount;i++){
                        var vertexType :VertexType = this.bufferReader.GetChar();
                        
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                        uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                        exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                        normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                        boneIndex[i]=this.bufferReader.GetInt(2);;
                        boneIndex2[i]=this.bufferReader.GetInt(2);;
                        boneWeight[i]=this.bufferReader.GetFloat();;
                    }
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);    
                    geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
                    }
			  break;
		    case 2: {
            
                var pos = new Array<number>(3*vertexCount as number);
                var uv = new Array<number>(2*vertexCount);
                var exuv_1 = new Array<number>(4*vertexCount);
                var exuv_2 = new Array<number>(4*vertexCount);
                var normal = new Array<number>(3*vertexCount);
                var boneIndex=new Array<number>(vertexCount);
                var boneIndex2=new Array<number>(vertexCount);
                var boneWeight=new Array<number>(vertexCount);
			    for(var i=0;i<vertexCount;i++){
                    var vertexType :VertexType = this.bufferReader.GetChar();
                    
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                    uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                    exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                    exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                    normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                    boneIndex[i]=this.bufferReader.GetInt(2);;
                    boneIndex2[i]=this.bufferReader.GetInt(2);;
                    boneWeight[i]=this.bufferReader.GetFloat();;
                }
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
                geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
            }
			  break;
		case 3: {
            
            var pos = new Array<number>(3*vertexCount as number);
            var uv = new Array<number>(2*vertexCount);
            var exuv_1 = new Array<number>(4*vertexCount);
            var exuv_2 = new Array<number>(4*vertexCount);
            var exuv_3 = new Array<number>(4*vertexCount);
            var normal = new Array<number>(3*vertexCount);
            var boneIndex=new Array<number>(vertexCount);
            var boneIndex2=new Array<number>(vertexCount);
            var boneWeight=new Array<number>(vertexCount);
			for(var i=0;i<vertexCount;i++){
                var vertexType :VertexType = this.bufferReader.GetChar();
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_3.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                boneIndex2[i]=this.bufferReader.GetInt(2);;
                boneWeight[i]=this.bufferReader.GetFloat();;
            }
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
            geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
		}
			  break;
		case 4: {
            
            var pos = new Array<number>(3*vertexCount as number);
            var uv = new Array<number>(2*vertexCount);
            var exuv_1 = new Array<number>(4*vertexCount);
            var exuv_2 = new Array<number>(4*vertexCount);
            var exuv_3 = new Array<number>(4*vertexCount);
            var exuv_4 = new Array<number>(4*vertexCount);
            var normal = new Array<number>(3*vertexCount);
            var boneIndex=new Array<number>(vertexCount);
            var boneIndex2=new Array<number>(vertexCount);
            var boneWeight=new Array<number>(vertexCount);
			for(var i=0;i<vertexCount;i++){
                var vertexType :VertexType = this.bufferReader.GetChar();
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_3.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_4.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                boneIndex2[i]=this.bufferReader.GetInt(2);;
                boneWeight[i]=this.bufferReader.GetFloat();;
            }
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
            geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
        }
			  break;
		default:
			break;
		}
	}
	break;
	        case VertexType.Vertex_Model_QuadBone:
        {
		    switch (uvExCount)
		        {
		        case 0: {
                    var pos = new Array<number>(3*vertexCount as number);
                    var uv = new Array<number>(2*vertexCount);
                    var normal = new Array<number>(3*vertexCount);
                    var boneIndex=new Array<number>(vertexCount);
                    var boneIndex2=new Array<number>(vertexCount);
                    var boneIndex3=new Array<number>(vertexCount);
                    var boneIndex4=new Array<number>(vertexCount);
                    var boneWeight=new Array<number>(vertexCount);
                    var boneWeight2=new Array<number>(vertexCount);
                    var boneWeight3=new Array<number>(vertexCount);
                    var boneWeight4=new Array<number>(vertexCount);
                    
                    
			        for(var i=0;i<vertexCount;i++){
                        var vertexType :VertexType = this.bufferReader.GetChar();
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=-this.bufferReader.GetFloat();
                        pos[i*3+2]=-this.bufferReader.GetFloat();
                        uv[i*2+0]=this.bufferReader.GetFloat();
                        uv[i*2+1]=this.bufferReader.GetFloat();
                        normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();            
                        boneIndex[i]=this.bufferReader.GetInt(2);
                        boneIndex2[i]=this.bufferReader.GetInt(2);
                        boneIndex3[i]=this.bufferReader.GetInt(2);
                        boneIndex4[i]=this.bufferReader.GetInt(2);
                        boneWeight[i]=this.bufferReader.GetFloat();
                        boneWeight2[i]=this.bufferReader.GetFloat();
                        boneWeight3[i]=this.bufferReader.GetFloat();
                        boneWeight4[i]=this.bufferReader.GetFloat();
                    }   
            
                    console.log(pos);
                    console.log(vertexIndexByteSize);
                    var idx =this.ReadIndex(vertexIndexByteSize);  
                    geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
                    
                }
			    break;
		        case 1: {
                    var pos = new Array<number>(3*vertexCount as number);
                    var uv = new Array<number>(2*vertexCount);
                    var exuv_1 = new Array<number>(4*vertexCount);
                    var normal = new Array<number>(3*vertexCount);
                    var boneIndex=new Array<number>(vertexCount);
                    var boneIndex2=new Array<number>(vertexCount);
                    var boneIndex3=new Array<number>(vertexCount);
                    var boneIndex4=new Array<number>(vertexCount);
                    var boneWeight=new Array<number>(vertexCount);
                    var boneWeight2=new Array<number>(vertexCount);
                    var boneWeight3=new Array<number>(vertexCount);
                    var boneWeight4=new Array<number>(vertexCount);
			        for(var i=0;i<vertexCount;i++){
                        var vertexType :VertexType = this.bufferReader.GetChar();
                        
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                        uv[i*2+0]=this.bufferReader.GetFloat();
                        uv[i*2+1]=this.bufferReader.GetFloat();
                        exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                        normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                        boneIndex[i]=this.bufferReader.GetInt(2);;
                        boneIndex2[i]=this.bufferReader.GetInt(2);;
                        boneIndex3[i]=this.bufferReader.GetInt(2);;
                        boneIndex4[i]=this.bufferReader.GetInt(2);;
                        boneWeight[i]=this.bufferReader.GetFloat();;
                        boneWeight2[i]=this.bufferReader.GetFloat();;
                        boneWeight3[i]=this.bufferReader.GetFloat();;
                        boneWeight4[i]=this.bufferReader.GetFloat();;
                    }
            
            
                    var idx =this.ReadIndex(vertexIndexByteSize);   
                    geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
                }
			  break;
		    case 2: {
            
                var pos = new Array<number>(3*vertexCount as number);
                var uv = new Array<number>(2*vertexCount);
                var exuv_1 = new Array<number>(4*vertexCount);
                var exuv_2 = new Array<number>(4*vertexCount);
                var normal = new Array<number>(3*vertexCount);
                var boneIndex=new Array<number>(vertexCount);
                var boneIndex2=new Array<number>(vertexCount);
                var boneIndex3=new Array<number>(vertexCount);
                var boneIndex4=new Array<number>(vertexCount);
                var boneWeight=new Array<number>(vertexCount);
                var boneWeight2=new Array<number>(vertexCount);
                var boneWeight3=new Array<number>(vertexCount);
                var boneWeight4=new Array<number>(vertexCount);
			    for(var i=0;i<vertexCount;i++){
                    var vertexType :VertexType = this.bufferReader.GetChar();
                    
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                    uv[i*2+0]=this.bufferReader.GetFloat();
                    uv[i*2+1]=this.bufferReader.GetFloat();
                    exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                    exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                    normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                    boneIndex[i]=this.bufferReader.GetInt(2);;
                    boneIndex2[i]=this.bufferReader.GetInt(2);;
                    boneIndex3[i]=this.bufferReader.GetInt(2);;
                    boneIndex4[i]=this.bufferReader.GetInt(2);;
                    boneWeight[i]=this.bufferReader.GetFloat();;
                    boneWeight2[i]=this.bufferReader.GetFloat();;
                    boneWeight3[i]=this.bufferReader.GetFloat();;
                    boneWeight4[i]=this.bufferReader.GetFloat();;
                }
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
                geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
        }
			  break;
		case 3: {
            
            var pos = new Array<number>(3*vertexCount as number);
            var uv = new Array<number>(2*vertexCount);
            var exuv_1 = new Array<number>(4*vertexCount);
            var exuv_2 = new Array<number>(4*vertexCount);
            var exuv_3 = new Array<number>(4*vertexCount);
            var normal = new Array<number>(3*vertexCount);
            var boneIndex=new Array<number>(vertexCount);
            var boneIndex2=new Array<number>(vertexCount);
            var boneIndex3=new Array<number>(vertexCount);
            var boneIndex4=new Array<number>(vertexCount);
            var boneWeight=new Array<number>(vertexCount);
            var boneWeight2=new Array<number>(vertexCount);
            var boneWeight3=new Array<number>(vertexCount);
            var boneWeight4=new Array<number>(vertexCount);
			for(var i=0;i<vertexCount;i++){
                var vertexType :VertexType = this.bufferReader.GetChar();
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_3.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                boneIndex2[i]=this.bufferReader.GetInt(2);;
                boneIndex3[i]=this.bufferReader.GetInt(2);;
                boneIndex4[i]=this.bufferReader.GetInt(2);;
                boneWeight[i]=this.bufferReader.GetFloat();;
                boneWeight2[i]=this.bufferReader.GetFloat();;
                boneWeight3[i]=this.bufferReader.GetFloat();;
                boneWeight4[i]=this.bufferReader.GetFloat();;
            }
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
            geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
		}
			  break;
		case 4: {
            
            var pos = new Array<number>(3*vertexCount as number);
            var uv = new Array<number>(2*vertexCount);
            var exuv_1 = new Array<number>(4*vertexCount);
            var exuv_2 = new Array<number>(4*vertexCount);
            var exuv_3 = new Array<number>(4*vertexCount);
            var exuv_4 = new Array<number>(4*vertexCount);
            var normal = new Array<number>(3*vertexCount);
            var boneIndex=new Array<number>(vertexCount);
            var boneIndex2=new Array<number>(vertexCount);
            var boneIndex3=new Array<number>(vertexCount);
            var boneIndex4=new Array<number>(vertexCount);
            var boneWeight=new Array<number>(vertexCount);
            var boneWeight2=new Array<number>(vertexCount);
            var boneWeight3=new Array<number>(vertexCount);
            var boneWeight4=new Array<number>(vertexCount);
			for(var i=0;i<vertexCount;i++){
                var vertexType :VertexType = this.bufferReader.GetChar();
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_3.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_4.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                boneIndex2[i]=this.bufferReader.GetInt(2);;
                boneIndex3[i]=this.bufferReader.GetInt(2);;
                boneIndex4[i]=this.bufferReader.GetInt(2);;
                boneWeight[i]=this.bufferReader.GetFloat();;
                boneWeight2[i]=this.bufferReader.GetFloat();;
                boneWeight3[i]=this.bufferReader.GetFloat();;
                boneWeight4[i]=this.bufferReader.GetFloat();;
            }
            
            
        var idx =this.ReadIndex(vertexIndexByteSize);  
            geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
        }
			  break;
		default:
			break;
		}
	}
	break;

	        case VertexType.Vertex_Model_SDEFBone:
        {
            alert("sdef is not support.")
	}
	break;
	        case VertexType.Vertex_Model_Mix:
	{switch (uvExCount)
	{
	case 0: {
        
        var pos = new Array<number>(3*vertexCount as number);
        var uv = new Array<number>(2*vertexCount);
        var normal = new Array<number>(3*vertexCount);
        var boneIndex=new Array<number>(vertexCount);
        var boneIndex2=new Array<number>(vertexCount);
        var boneIndex3=new Array<number>(vertexCount);
        var boneIndex4=new Array<number>(vertexCount);
        var boneWeight=new Array<number>(vertexCount);
        var boneWeight2=new Array<number>(vertexCount);
        var boneWeight3=new Array<number>(vertexCount);
        var boneWeight4=new Array<number>(vertexCount);
		for (var i = 0; i < vertexCount; i++) {


			var vertexType :VertexType = this.bufferReader.GetChar();

			switch (vertexType)
			{
			case VertexType.Vertex_Model_SingleBone: {
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                
                boneIndex2.push(-1);
                boneIndex3.push(-1);
                boneIndex4.push(-1);
                boneWeight.push(1.0);
                boneWeight2.push(0);
                boneWeight3.push(0);
                boneWeight4.push(0);
                
			}
															break;
			case VertexType.Vertex_Model_DoubleBone: {
                
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                boneIndex2[i]=this.bufferReader.GetInt(2);;
                var weight= this.bufferReader.GetFloat();
                boneWeight.push(weight);
                
                
                
                boneIndex3.push(-1);
                boneIndex4.push(-1);
                boneWeight2.push(1.0-weight);
                boneWeight3.push(0);
                boneWeight4.push(0);
			}
															break;
			case VertexType.Vertex_Model_QuadBone: {
                
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                boneIndex2[i]=this.bufferReader.GetInt(2);;
                boneIndex3[i]=this.bufferReader.GetInt(2);;
                boneIndex4[i]=this.bufferReader.GetInt(2);;
                boneWeight[i]=this.bufferReader.GetFloat();;
                boneWeight2[i]=this.bufferReader.GetFloat();;
                boneWeight3[i]=this.bufferReader.GetFloat();;
                boneWeight4[i]=this.bufferReader.GetFloat();;
			}
														  break;
			case VertexType.Vertex_Model_SDEFBone: {
                alert("sdef is not supported.")
			}
														  break;
			default:
				break;
			}

        }
        var idx =this.ReadIndex(vertexIndexByteSize);  
        geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
    
	}
		  break;
	case 1: {
        
        var pos = new Array<number>(3*vertexCount as number);
        var uv = new Array<number>(2*vertexCount);
        var exuv_1 = new Array<number>(4*vertexCount);
        var normal = new Array<number>(3*vertexCount);
        var boneIndex=new Array<number>(vertexCount);
        var boneIndex2=new Array<number>(vertexCount);
        var boneIndex3=new Array<number>(vertexCount);
        var boneIndex4=new Array<number>(vertexCount);
        var boneWeight=new Array<number>(vertexCount);
        var boneWeight2=new Array<number>(vertexCount);
        var boneWeight3=new Array<number>(vertexCount);
        var boneWeight4=new Array<number>(vertexCount);
		for (var i = 0; i < vertexCount; i++) {


			var vertexType :VertexType = this.bufferReader.GetChar();

			switch (vertexType)
			{
			case VertexType.Vertex_Model_SingleBone: {
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                
                boneIndex2.push(-1);
                boneIndex3.push(-1);
                boneIndex4.push(-1);
                boneWeight.push(1.0);
                boneWeight2.push(0);
                boneWeight3.push(0);
                boneWeight4.push(0);
                
			}
															break;
			case VertexType.Vertex_Model_DoubleBone: {
                
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                boneIndex2[i]=this.bufferReader.GetInt(2);;
                var weight= this.bufferReader.GetFloat();
                boneWeight.push(weight);
                
                
                
                boneIndex3.push(-1);
                boneIndex4.push(-1);
                boneWeight2.push(1.0-weight);
                boneWeight3.push(0);
                boneWeight4.push(0);
			}
															break;
			case VertexType.Vertex_Model_QuadBone: {
                
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                boneIndex2[i]=this.bufferReader.GetInt(2);;
                boneIndex3[i]=this.bufferReader.GetInt(2);;
                boneIndex4[i]=this.bufferReader.GetInt(2);;
                boneWeight[i]=this.bufferReader.GetFloat();;
                boneWeight2[i]=this.bufferReader.GetFloat();;
                boneWeight3[i]=this.bufferReader.GetFloat();;
                boneWeight4[i]=this.bufferReader.GetFloat();;
			}
														  break;
			case VertexType.Vertex_Model_SDEFBone: {
                alert("sdef is not supported.")
			}
														  break;
			default:
				break;
			}

        }
        var idx =this.ReadIndex(vertexIndexByteSize);  
        geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
    
	}
		  break;
	case 2:{
        
        var pos = new Array<number>(3*vertexCount as number);
        var uv = new Array<number>(2*vertexCount);
        var exuv_1 = new Array<number>(4*vertexCount);
        var exuv_2 = new Array<number>(4*vertexCount);
        var normal = new Array<number>(3*vertexCount);
        var boneIndex=new Array<number>(vertexCount);
        var boneIndex2=new Array<number>(vertexCount);
        var boneIndex3=new Array<number>(vertexCount);
        var boneIndex4=new Array<number>(vertexCount);
        var boneWeight=new Array<number>(vertexCount);
        var boneWeight2=new Array<number>(vertexCount);
        var boneWeight3=new Array<number>(vertexCount);
        var boneWeight4=new Array<number>(vertexCount);
		for (var i = 0; i < vertexCount; i++) {


			var vertexType :VertexType = this.bufferReader.GetChar();

			switch (vertexType)
			{
			case VertexType.Vertex_Model_SingleBone: {
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                
                boneIndex2.push(-1);
                boneIndex3.push(-1);
                boneIndex4.push(-1);
                boneWeight.push(1.0);
                boneWeight2.push(0);
                boneWeight3.push(0);
                boneWeight4.push(0);
                
			}
															break;
			case VertexType.Vertex_Model_DoubleBone: {
                
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                boneIndex2[i]=this.bufferReader.GetInt(2);;
                var weight= this.bufferReader.GetFloat();
                boneWeight.push(weight);
                
                
                
                boneIndex3.push(-1);
                boneIndex4.push(-1);
                boneWeight2.push(1.0-weight);
                boneWeight3.push(0);
                boneWeight4.push(0);
			}
															break;
			case VertexType.Vertex_Model_QuadBone: {
                
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                boneIndex2[i]=this.bufferReader.GetInt(2);;
                boneIndex3[i]=this.bufferReader.GetInt(2);;
                boneIndex4[i]=this.bufferReader.GetInt(2);;
                boneWeight[i]=this.bufferReader.GetFloat();;
                boneWeight2[i]=this.bufferReader.GetFloat();;
                boneWeight3[i]=this.bufferReader.GetFloat();;
                boneWeight4[i]=this.bufferReader.GetFloat();;
			}
														  break;
			case VertexType.Vertex_Model_SDEFBone: {
                alert("sdef is not supported.")
			}
														  break;
			default:
				break;
			}

        }
        var idx =this.ReadIndex(vertexIndexByteSize);  
        geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
    
	}
		  break;
	case 3: {
        
        var pos = new Array<number>(3*vertexCount as number);
        var uv = new Array<number>(2*vertexCount);
        var exuv_1 = new Array<number>(4*vertexCount);
        var exuv_2 = new Array<number>(4*vertexCount);
        var exuv_3 = new Array<number>(4*vertexCount);
        var normal = new Array<number>(3*vertexCount);
        var boneIndex=new Array<number>(vertexCount);
        var boneIndex2=new Array<number>(vertexCount);
        var boneIndex3=new Array<number>(vertexCount);
        var boneIndex4=new Array<number>(vertexCount);
        var boneWeight=new Array<number>(vertexCount);
        var boneWeight2=new Array<number>(vertexCount);
        var boneWeight3=new Array<number>(vertexCount);
        var boneWeight4=new Array<number>(vertexCount);
		for (var i = 0; i < vertexCount; i++) {


			var vertexType :VertexType = this.bufferReader.GetChar();

			switch (vertexType)
			{
			case VertexType.Vertex_Model_SingleBone: {
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_3.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                
                boneIndex2.push(-1);
                boneIndex3.push(-1);
                boneIndex4.push(-1);
                boneWeight.push(1.0);
                boneWeight2.push(0);
                boneWeight3.push(0);
                boneWeight4.push(0);
                
			}
															break;
			case VertexType.Vertex_Model_DoubleBone: {
                
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_3.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                boneIndex2[i]=this.bufferReader.GetInt(2);;
                var weight= this.bufferReader.GetFloat();
                boneWeight.push(weight);
                
                
                
                boneIndex3.push(-1);
                boneIndex4.push(-1);
                boneWeight2.push(1.0-weight);
                boneWeight3.push(0);
                boneWeight4.push(0);
			}
															break;
			case VertexType.Vertex_Model_QuadBone: {
                
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_3.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                boneIndex2[i]=this.bufferReader.GetInt(2);;
                boneIndex3[i]=this.bufferReader.GetInt(2);;
                boneIndex4[i]=this.bufferReader.GetInt(2);;
                boneWeight[i]=this.bufferReader.GetFloat();;
                boneWeight2[i]=this.bufferReader.GetFloat();;
                boneWeight3[i]=this.bufferReader.GetFloat();;
                boneWeight4[i]=this.bufferReader.GetFloat();;
			}
														  break;
			case VertexType.Vertex_Model_SDEFBone: {
                alert("sdef is not supported.")
			}
														  break;
			default:
				break;
			}

        }
        var idx =this.ReadIndex(vertexIndexByteSize);  
        geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
    
	}
		  break;
	case 4: {
        
        var pos = new Array<number>(3*vertexCount as number);
        var uv = new Array<number>(2*vertexCount);
        var exuv_1 = new Array<number>(4*vertexCount);
        var exuv_2 = new Array<number>(4*vertexCount);
        var exuv_3 = new Array<number>(4*vertexCount);
        var exuv_4 = new Array<number>(4*vertexCount);
        var normal = new Array<number>(3*vertexCount);
        var boneIndex=new Array<number>(vertexCount);
        var boneIndex2=new Array<number>(vertexCount);
        var boneIndex3=new Array<number>(vertexCount);
        var boneIndex4=new Array<number>(vertexCount);
        var boneWeight=new Array<number>(vertexCount);
        var boneWeight2=new Array<number>(vertexCount);
        var boneWeight3=new Array<number>(vertexCount);
        var boneWeight4=new Array<number>(vertexCount);
		for (var i = 0; i < vertexCount; i++) {


			var vertexType :VertexType = this.bufferReader.GetChar();

			switch (vertexType)
			{
			case VertexType.Vertex_Model_SingleBone: {
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_3.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_4.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                
                boneIndex2.push(-1);
                boneIndex3.push(-1);
                boneIndex4.push(-1);
                boneWeight.push(1.0);
                boneWeight2.push(0);
                boneWeight3.push(0);
                boneWeight4.push(0);
                
			}
															break;
			case VertexType.Vertex_Model_DoubleBone: {
                
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_3.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_4.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                boneIndex2[i]=this.bufferReader.GetInt(2);;
                var weight= this.bufferReader.GetFloat();
                boneWeight.push(weight);
                
                
                
                boneIndex3.push(-1);
                boneIndex4.push(-1);
                boneWeight2.push(1.0-weight);
                boneWeight3.push(0);
                boneWeight4.push(0);
			}
															break;
			case VertexType.Vertex_Model_QuadBone: {
                
                
                        pos[i*3+0]=this.bufferReader.GetFloat();
                        pos[i*3+1]=this.bufferReader.GetFloat();
                        pos[i*3+2]=this.bufferReader.GetFloat();
                uv[i*2+0]=this.bufferReader.GetFloat();
uv[i*2+1]=this.bufferReader.GetFloat();
                exuv_1.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_2.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_3.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                exuv_4.push(this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat(),this.bufferReader.GetFloat());
                normal[i*3+0]=this.bufferReader.GetFloat();            
                        normal[i*3+1]=this.bufferReader.GetFloat();            
                        normal[i*3+2]=this.bufferReader.GetFloat();                 
                boneIndex[i]=this.bufferReader.GetInt(2);;
                boneIndex2[i]=this.bufferReader.GetInt(2);;
                boneIndex3[i]=this.bufferReader.GetInt(2);;
                boneIndex4[i]=this.bufferReader.GetInt(2);;
                boneWeight[i]=this.bufferReader.GetFloat();;
                boneWeight2[i]=this.bufferReader.GetFloat();;
                boneWeight3[i]=this.bufferReader.GetFloat();;
                boneWeight4[i]=this.bufferReader.GetFloat();;
			}
														  break;
			case VertexType.Vertex_Model_SDEFBone: {
                alert("sdef is not supported.")
			}
														  break;
			default:
				break;
			}

        }
        var idx =this.ReadIndex(vertexIndexByteSize);  
        geometry=ResourceCreater.CreateGeometry({p : pos, n : normal,  uv : uv, i : idx},true,true,false,this.graphicDevice);
    
	}
		  break;
	default:
		break;
	}


	}

	break;
	default:
		break;
	    }

        var materialCount:number;

	    materialCount = this.bufferReader.GetInt(materialIndexByteSize);

        var subset=new  Array<number>(materialCount);
        var dir=GetDirectory(this.filePath);
	    for (var i = 0; i < materialCount; i++) {
		    var fileNameCount = this.bufferReader.GetInt();
		    
		    if (encodeType) {
                var materialFilePath = this.bufferReader.GetString(fileNameCount);
                
                ary_material.push( ResourceCreater.CreateMaterialFromFile(dir+ materialFilePath,this.container,this.graphicDevice));
		    }
		else
		{
            var materialFilePath = this.bufferReader.GetWString(fileNameCount);          

            ary_material.push(ResourceCreater.CreateMaterialFromFile(dir+materialFilePath,this.container,this.graphicDevice));
		}
		subset[i] = (this.bufferReader.GetInt());
	    }
        geometry.SetSubset(subset);
        this.mesh.SetParameter(geometry,ary_material);
        this.container.LoadEnd();
    }

    ReadIndex(vertexIndexByteSize:number){
        
//インデックスの読み込み
        var indexCount = this.bufferReader.GetInt() ;

        var idx = new Array<number>(indexCount*3);

        for (var i = 0; i < indexCount * 3; i++) {
            idx[i]=(this.bufferReader.GetUInt(vertexIndexByteSize));
        }
        return idx;
    }
    
}
class MaterialBinLoader{
    buffer:ArrayBuffer;
    container:ResourceContainer;
    graphicDevice:GraphicDevice;
    bufferReader: BinaryReader;
    filePath:string;
    material:Material;
    Initialize():void{
        var mat: IMaterial;
        
        
        var materialReader=new BinaryReader(this.buffer);
        
	    var magic = materialReader.GetString(16);
	    if (magic != "ButiMaterialData") {
            console.log( "ファイルが違います" );
            return;
	    }

	    var version = materialReader.GetFloat();

	//0でstd::wstring ,1でstd::string
	    var encodeType = materialReader.GetChar();

	{
		var materialNameCount = materialReader.GetInt();
		if (encodeType) {
			materialReader.GetString(materialNameCount);

		}
		else
		{
			materialReader.GetWString(materialNameCount);
		}
    }
    
	//マテリアル名英
	{
		var materialNameCount = materialReader.GetInt();
		if (encodeType) {
			materialReader.GetString(materialNameCount);
		}
		else
		{
			materialReader.GetWString(materialNameCount);
		}
	}
	//テクスチャ
	var textureCount = materialReader.GetChar();
    var ary_texture=new Array<ITexture>();
    var dir=GetDirectory(this.filePath);
    
    for (var i = 0; i < textureCount; i++) {
		var texNameCount = materialReader.GetInt();
		if (texNameCount < 0) {
			ary_texture.push(this.container.AddTextureFromFile("",this.graphicDevice));
		}
		else if (encodeType) {
			var textureName = materialReader.GetString(texNameCount);

			ary_texture.push(this.container.AddTextureFromFile(dir+ "../"+textureName,this.graphicDevice));
		}
		else
		{
			var textureName = materialReader.GetWString(texNameCount);

			ary_texture.push(this.container.AddTextureFromFile(dir+ "../"+ textureName,this.graphicDevice));
		}
	}

	//マテリアル
	var diffuse:Vector4 =new Vector4( materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat());
	var specular :Vector4 =new Vector4( materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat());
	var ambient :Vector4 =new Vector4( materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat());
	var emissive :Vector4 =new Vector4( materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat(), materialReader.GetFloat());

	var byteFlag = materialReader.GetChar();
	var sphereFlag = materialReader.GetChar();


    
	{
		var materialNameCount = materialReader.GetInt();
		if (encodeType) {
			materialReader.GetString(materialNameCount);
		}
		else
		{
			materialReader.GetWString(materialNameCount);
		}
    }
        
        this.material.SetParameter(ambient,this.graphicDevice,ary_texture);
        this.container.LoadEnd();
    }
}

export default class ResourceCreater{


    static CreateGeometry(data,isUV:boolean,isNormal:boolean,isColor:boolean,arg_device: GraphicDevice):IGeometry{
        return new Geometry(data,isUV,isNormal,isColor,arg_device);
    }

    static CreateMaterial(arg_ambient:Vector4,arg_device:GraphicDevice,arg_ary_texture?:Array< ITexture>,arg_ary_exParms?):IMaterial{
        var mat=new Material();
        mat.SetParameter(arg_ambient, arg_device,arg_ary_texture,arg_ary_exParms);
        return mat;
    }


    static CreateShader(vsSource:string,fsSource:string,arg_graphicDevice:GraphicDevice):IShader{
        return new Shader (vsSource,fsSource,arg_graphicDevice);
    }

    static CreateSound(arg_soundSorce:string):ISound{
        return new Sound(arg_soundSorce);
    }

    static CreateTexture(arg_path:string,arg_device:GraphicDevice):ITexture{
        var tex=new Texture(arg_path,arg_device);
        tex.Initialize();
        return tex;
    }
    static CreateFrameBuffer(width:number,height:number, arg_device:GraphicDevice):FrameBufferTexture{
        return new FrameBufferTexture(arg_device,width,height);
    }
    static CreateMeshResourceFromFile(arg_filePath:string,resourceContainer:ResourceContainer,arg_device:GraphicDevice):IMesh{
        var out= new Mesh ();
        var holder=new  B3MHolder ();
        
        resourceContainer.LoadStart();
        holder.graphicDevice=arg_device;
        holder.container=resourceContainer;
        holder.filePath=arg_filePath;
        holder.mesh=out;
        FileLoader.LoadBin(arg_filePath,holder);
        
        return out;
    }
    static CreateMaterialFromFile(arg_filePath:string,resourceContainer:ResourceContainer,arg_device:GraphicDevice):IMaterial{
        var out= new Material ();
        var holder=new  MaterialBinLoader ();
        resourceContainer.LoadStart();
        holder.graphicDevice=arg_device;
        holder.container=resourceContainer;
        holder.filePath=arg_filePath;
        holder.material=out;
        FileLoader.LoadBin(arg_filePath,holder);
        return out;
    }
}