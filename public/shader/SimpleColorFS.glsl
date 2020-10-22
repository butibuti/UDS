precision mediump float;
uniform mat4 invMatrix;
uniform vec4 ambientColor;
uniform vec4 exColor;
            
    void main(void){
        gl_FragColor    = exColor;
    }