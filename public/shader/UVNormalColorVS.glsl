attribute vec3 position;
attribute vec2 uv;
attribute vec3 normal;
attribute vec4 color;
uniform   mat4 mvpMatrix;
uniform   mat4 mMatrix;
varying   vec4 vColor;
varying   vec2 vUv;
varying   vec3 vNormal;
varying   vec3 vPosition;

void main(void){
    vPosition   = (mMatrix * vec4(position, 1.0)).xyz;
    vColor        = color;
    vUv = uv;
    vNormal=normal;
    gl_Position   = mvpMatrix * vec4(position, 1.0);
 }