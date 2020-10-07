precision mediump float;
uniform mat4 invMatrix;
uniform sampler2D texture;
varying vec3 vPosition;
varying vec2 vUv;
const float tFrag = 1.0 / 800.0;
const float nFrag = 1.0 / (8.0*8.0);

void main(void){
    vec4  destColor = vec4(0.0);
    vec2  fc = vec2( gl_FragCoord.s, 625.0 - gl_FragCoord.t);
    float offsetX = mod(fc.s, 8.0);
    float offsetY = mod(fc.t, 8.0);
    
    for(float x = 0.0; x < 8.0; x += 1.0){
        for(float y = 0.0; y < 8.0; y += 1.0){
            destColor += texture2D(texture, (fc + vec2(x - offsetX, y - offsetY)) *tFrag);
        }
    }
    gl_FragColor = destColor * nFrag;
}