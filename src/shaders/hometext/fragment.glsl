uniform float uTime;
uniform vec3 uColorStart;
uniform vec3 uColorEnd;

varying float vDeep;
varying vec2 vUv;

//    Classic Perlin 3D Noise 
//    by Stefan Gustavson
//
vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
vec3 fade(vec3 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }



void main()
{


    if(vDeep < 0.3) {
        gl_FragColor = vec4(0.208,0.639,0.855, 1.0);
        return;
    }

    gl_FragColor = vec4(1.,1.,1., 1.0);
}