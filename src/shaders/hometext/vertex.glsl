varying vec2 vUv;
varying float vDeep;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vUv = vec2(position.x, position.y);
    vDeep = position.z;
}