attribute vec3 position;
uniform   mat4 mvpMatrix;
uniform   mat4 mMatrix;

void main(void){
    gl_Position   = mvpMatrix * vec4(position, 1.0);
 }