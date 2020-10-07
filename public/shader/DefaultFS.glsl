precision mediump float;
uniform mat4 invMatrix;
uniform vec4 ambientColor;
uniform vec3 eyePosition;
uniform vec3 lightPosition;
uniform sampler2D texture0;
varying vec3 vPosition;
varying vec4 vColor;
varying vec2 vUv;
varying vec3 vNormal;

void main(void){
    vec4 smpColor0 = texture2D(texture0, vUv);



    gl_FragColor  =  smpColor0;
}