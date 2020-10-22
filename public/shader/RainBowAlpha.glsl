precision mediump float;
uniform mat4 invMatrix;
uniform vec4 ambientColor;
uniform vec3 eyePosition;
uniform vec3 lightPosition;
uniform sampler2D texture0;
varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vNormal;
    
vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
void main(void){



    gl_FragColor  =  vec4(hsv2rgb(vec3(mix(0.0,1.0,vPosition.x),1.0,1.0))*hsv2rgb(vec3(mix(0.0,1.0,vPosition.y),1.0,1.0)) ,0.5);
}