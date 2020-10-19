
precision mediump float;
uniform mat4 invMatrix;
uniform vec4 ambientColor;
            
    void main(void){
        gl_FragColor    = ambientColor;
    }
            