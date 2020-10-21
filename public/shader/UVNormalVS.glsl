attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;
uniform   mat4 mvpMatrix;
uniform   mat4 mMatrix;
varying   vec2 vUv;
varying   vec3 vNormal;
varying   vec3 vPosition;

void main(void){
    vPosition   = (mMatrix * vec4(position, 1.0)).xyz;
    vUv = uv;
    vNormal=normalize( ( vec4(normal, 1.0)*mMatrix ).xyz);
    gl_Position   = mvpMatrix * vec4(position, 1.0);
 }