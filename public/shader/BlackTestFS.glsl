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


    vec3  lightVec  = lightPosition - vPosition;
    vec3  invLight  = normalize(invMatrix * vec4(lightVec, 0.0)).xyz;
    vec3  invEye    = normalize(invMatrix * vec4(eyePosition, 0.0)).xyz;
    vec3  halfLE    = normalize(invLight + invEye);
    float diffuse   = clamp(dot(vNormal, invLight), 0.0, 1.0) + 0.2;
    float specular  = pow(clamp(dot(vNormal, halfLE), 0.0, 1.0), 50.0);
    vec4  destColor = vColor * vec4(vec3(diffuse), 1.0) + vec4(vec3(specular), 1.0) + ambientColor;

    gl_FragColor  =  vec4(0,0,0,1);
}