precision mediump float;
uniform mat4 invMatrix;
uniform sampler2D texture;
uniform float strength;
varying vec3 vPosition;
varying vec2 vUv;

const float nFrag = 1.0 / 30.0;
const vec2  centerOffset = vec2(0.5, 0.5);

float rnd(vec3 scale, float seed){
    return fract(sin(dot(gl_FragCoord.stp + seed, scale)) * 43758.5453 + seed);
}

void main(void){
    vec3  destColor = vec3(0.0);
    float random = rnd(vec3(12.9898, 78.233, 151.7182), 0.0);
    
    vec2  fcc = vUv - centerOffset;
    float totalWeight = 0.0;
    
    for(float i = 0.0; i <= 30.0; i++){
        float percent = (i + random) * nFrag;
        float weight = percent - percent * percent;
        vec2  t = vUv - fcc * percent * strength * nFrag;
        
        destColor += texture2D(texture,t ).rgb * weight;
        totalWeight += weight;
    }
    gl_FragColor = vec4(destColor / totalWeight, 1.0)+vec4(strength*0.01,strength*0.01,strength*0.01,1.0);
}