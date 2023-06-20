import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Color, Mesh, PlaneGeometry, ShaderMaterial } from 'three';
const glsl = require('glslify');

const vertexShader = glsl`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = glsl`
  varying vec2 vUv;
  uniform float time;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform vec3 color3;
  uniform vec3 color4;
  uniform vec3 color5;

  void main() {
    vec2 uv = vUv;
    uv.y += sin(uv.x * 10.0 + time * 2.0) * 0.05; // Add a wavy effect to the gradient

    // Interpolate between colors based on the x-coordinate
    vec3 finalColor = mix(
      mix(mix(color1, color2, uv.x), mix(color2, color3, uv.x), uv.y),
      mix(mix(color3, color4, uv.x), mix(color4, color5, uv.x), uv.y),
      uv.y
    );

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function LavaLampGradient() {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const mesh = meshRef.current!;
    const material = mesh.material as ShaderMaterial;
    material.uniforms.time.value = clock.elapsedTime;
  });

  const material = new ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color1: { value: new Color('#00FFFF') },
      color2: { value: new Color('#0000FF') },
      color3: { value: new Color('#8000FF') },
      color4: { value: new Color('#FF00FF') },
      color5: { value: new Color('#FF0080') },
    },
    vertexShader,
    fragmentShader,
  });

  const geometry = new PlaneGeometry(10, 10, 64, 64);

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
}

export default LavaLampGradient;
