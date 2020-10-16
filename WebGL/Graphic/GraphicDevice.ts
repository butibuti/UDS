import Vector4 from "../Math/Vector4"
import Shader from "../Resource/Shader"
import Matrix4x4 from "../Math/Matrix"
import Texture from "../Resource/Texture"
import Vector2 from "../Math/Vector2";
import Vector3 from "../Math/Vector3";

export default class GraphicDevice{
    canvas:HTMLCanvasElement;
    context:WebGLRenderingContext;
    clearColor:Vector4;
    size:Vector2;
    clearFunc:Function;
    private viewMatrix :Matrix4x4;
    private projectionMatrix :Matrix4x4;
    private tempMatrix:Matrix4x4;
    private camPosition:Vector3;
    private camRotationInv:Matrix4x4;
    get TempMatrix():Matrix4x4{
        return this.tempMatrix;

    }
    get ViewMatrix():Matrix4x4{
        return this.viewMatrix;

    }
    get ProjectionMatrix():Matrix4x4{
        return this.projectionMatrix;

    }
    get CameraPosition():Vector3{
        return this.camPosition;
    }

    get CameraRotationInv():Matrix4x4{
        return this.camRotationInv;
    }

    shader:Shader;
    constructor(arg_canvas:HTMLCanvasElement){
        this.canvas=arg_canvas;
        this.context=this.canvas.getContext('webgl');
        this.context.enable(this.context.CULL_FACE);
        this.context.enable(this.context.DEPTH_TEST);
        this.context.depthFunc(this.context.LEQUAL);
        this.clearColor=new Vector4(0,0,0,0);
        this.size=new Vector2(arg_canvas.width,arg_canvas.height);
        this.clearFunc=this.Clear;
        this.context.clearColor(this.clearColor.x, this.clearColor.y, this.clearColor.z, this.clearColor.w);
        this.context.clearDepth(1.0);
        this.context .blendFunc(this.context.SRC_ALPHA,this.context.ONE_MINUS_SRC_ALPHA);
        this.context.enable(this.context.BLEND);}
    SetClearColor(arg_color:Vector4):Vector4{
        this.clearColor=arg_color;
        this.context.clearColor(this.clearColor.x, this.clearColor.y, this.clearColor.z, this.clearColor.w);
        
        return arg_color;
    }
    EnableStencil():void{
        this.context.enable(this.context.STENCIL_TEST);
        this.context.clearStencil(0);
    }
    Clear():void{
        
        this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);
      
    }
    ClearDepth():void{
        this.context.clear(this.context.DEPTH_BUFFER_BIT);
    }
    ClearStencil(){
        this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT|this.context.STENCIL_BUFFER_BIT);
      

    }
    GetSize():Vector2{
        return this.size;
    }
    Present():void{
        this.context.flush();
    }
    SetShader(arg_shader:Shader){
        
        this.shader=arg_shader;
        this.context.useProgram(this.shader.programObject);
    }
    CreateProgram(arg_vs:WebGLShader,arg_fs:WebGLShader):WebGLProgram{
        // プログラムオブジェクトの生成
        var program = this.context.createProgram();
        
        // プログラムオブジェクトにシェーダを割り当てる
        this.context.attachShader(program, arg_vs);
        this.context.attachShader(program, arg_fs);
        
        // シェーダをリンク
        this.context.linkProgram(program);
        
        // シェーダのリンクが正しく行なわれたかチェック
        if(this.context.getProgramParameter(program, this.context.LINK_STATUS)){
        
            // 成功していたらプログラムオブジェクトを有効にする
            this.context.useProgram(program);
            
            // プログラムオブジェクトを返して終了
            return program;
        }else{
            
            // 失敗していたらエラーログをアラートする
            alert(this.context.getProgramInfoLog(program));
        }

    }
    CreateVBO(arg_data:Array<number>):WebGLBuffer{

      // バッファオブジェクトの生成
      var vbo = this.context.createBuffer();
      
      // バッファをバインドする
      this.context.bindBuffer(this.context.ARRAY_BUFFER, vbo);
      
      // バッファにデータをセット
      this.context.bufferData(this.context.ARRAY_BUFFER, new Float32Array(arg_data), this.context.STATIC_DRAW);
      
      // バッファのバインドを無効化
      this.context.bindBuffer(this.context.ARRAY_BUFFER, null);
      
      // 生成したVBOを返して終了
      return vbo;
    }
    CreateIBO(arg_data:Array<number>):WebGLBuffer{

      // バッファオブジェクトの生成
      var ibo:WebGLBuffer = this.context.createBuffer();
      
      // バッファをバインドする
      this.context.bindBuffer(this.context.ELEMENT_ARRAY_BUFFER, ibo);
      
      // バッファにデータをセット
      this.context.bufferData(this.context.ELEMENT_ARRAY_BUFFER, new Int16Array(arg_data), this.context.STATIC_DRAW);
      
      // バッファのバインドを無効化
      this.context.bindBuffer(this.context.ELEMENT_ARRAY_BUFFER, null);
      
      // 生成したIBOを返して終了
      return ibo;
    }
    CreateVertexShader(arg_source:string):WebGLShader{
        var shader:WebGLShader;
        shader = this.context.createShader(this.context.VERTEX_SHADER);
        // 生成されたシェーダにソースを割り当てる
        this.context.shaderSource(shader, arg_source);
        
    
        
        // シェーダをコンパイルする
        this.context.compileShader(shader);
        // シェーダが正しくコンパイルされたかチェック
        if(this.context.getShaderParameter(shader, this.context.COMPILE_STATUS)){
            
            // 成功していたらシェーダを返して終了
            return shader;
        }else{
            
            console.log("vertex shader failed");
            // 失敗していたらエラーログをアラートする
            alert(this.context.getShaderInfoLog(shader));
            return;
        }
    }
    CreateFragmentShader(arg_source:string):WebGLShader{
        var shader:WebGLShader;
        shader = this.context.createShader(this.context.FRAGMENT_SHADER);
        
        
        
        // 生成されたシェーダにソースを割り当てる
        this.context.shaderSource(shader, arg_source);
        
        // シェーダをコンパイルする
        this.context.compileShader(shader);
        // シェーダが正しくコンパイルされたかチェック
        if(this.context.getShaderParameter(shader, this.context.COMPILE_STATUS)){
            
            // 成功していたらシェーダを返して終了
            return shader;
        }else{
            
            console.log("fragment shader failed");
            // 失敗していたらエラーログをアラートする
            alert(this.context.getShaderInfoLog(shader));
            return;
        }
    }
    CreateTexture(arg_source:string,arg_texture:Texture){

    // イメージオブジェクトの生成
    var img = new Image();
        
    // データのオンロードをトリガーにする
    img.onload = OnTexLoad(img,arg_texture,arg_source,this);
    // イメージオブジェクトのソースを指定
    img.src = arg_source;
    
    }
    SetVBO(arg_vboList:Array<WebGLBuffer>){

      // 引数として受け取った配列を処理する
      for(var i in arg_vboList){
        // バッファをバインドする
        this.context.bindBuffer(this.context.ARRAY_BUFFER, arg_vboList[i]);
        
        // attributeLocationを有効にする
        this.context.enableVertexAttribArray(this.shader.attributeLocations[i]);
        
        // attributeLocationを通知し登録する
        this.context.vertexAttribPointer(this.shader.attributeLocations[i], this.shader.attributeStrides[i], this.context.FLOAT, false, 0, 0);
    }
    }
    OnLoadTexture(img:HTMLImageElement,arg_texture:Texture,arg_source:string){
        // テクスチャオブジェクトの生成
        var tex = this.context.createTexture();
        
        // テクスチャをバインドする
        this.context.bindTexture(this.context.TEXTURE_2D, tex);
        
        // テクスチャへイメージを適用
        this.context.texImage2D(this.context.TEXTURE_2D, 0, this.context.RGBA, this.context.RGBA, this.context.UNSIGNED_BYTE, img);
        
        // ミップマップを生成
        this.context.generateMipmap(this.context.TEXTURE_2D);
        
        // テクスチャのバインドを無効化
        this.context.bindTexture(this.context.TEXTURE_2D, null);
        
        arg_texture.data= tex;
        arg_texture.Loaded();
        console.log(arg_source+" loaded");
    };
    OnLoadShader(arg_source:XMLHttpRequest,arg_shader){

        var data = arg_source.responseText;
        console.log(data);
        arg_shader = this.context.createShader(this.context.VERTEX_SHADER);
        
        
        // 生成されたシェーダにソースを割り当てる
        this.context.shaderSource(arg_shader, data);
        
        // シェーダをコンパイルする
        this.context.compileShader(arg_shader);
        
    }

    SetCameraStatus(arg_viewMatrix:Matrix4x4,arg_projectionMatrix:Matrix4x4,arg_cameraMatrix:Matrix4x4, arg_cameraPosition:Vector3){
        this.viewMatrix=arg_viewMatrix;
        this.projectionMatrix=arg_projectionMatrix;
        this.tempMatrix=this.projectionMatrix.Multiply(this.viewMatrix);
        this.camPosition=arg_cameraPosition;
        this.camRotationInv=(arg_cameraMatrix);
    }
}
function OnTexLoad(img:HTMLImageElement,arg_texture:Texture,arg_source:string,device: GraphicDevice){
    return function(){
        device.OnLoadTexture(img,arg_texture,arg_source);
    }
}

function OnShaderLoad(arg_source:XMLHttpRequest,arg_shader,device: GraphicDevice){
    return function(){
        device.OnLoadShader(arg_source,arg_shader);
    }
}