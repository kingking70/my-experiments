'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Mesh } from 'three';

const IMAGES = [
  '/insta1.png',
  '/insta2.jpeg',
  '/insta3.jpeg',
  '/insta4.jpeg',
  '/insta5.jpeg',
  '/insta6.jpeg',
];

function Cube() {
  const mesh = useRef<Mesh>(null!);
  const textures = useLoader(TextureLoader, IMAGES);

  useFrame((_, delta) => {
    mesh.current.rotation.x += delta * 0.3;
    mesh.current.rotation.y += delta * 0.45;
  });

  return (
    <mesh
      ref={mesh}
      onClick={() => window.open('https://www.instagram.com/kingskohdk/', '_blank')}
      onPointerEnter={() => { document.body.style.cursor = 'pointer'; }}
      onPointerLeave={() => { document.body.style.cursor = 'auto'; }}
    >
      <boxGeometry args={[2, 2, 2]} />
      {textures.map((tex, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={tex} />
      ))}
    </mesh>
  );
}

export function PhotoCube() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <Cube />
      </Canvas>
    </div>
  );
}
