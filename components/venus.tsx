'use client';

import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { ThreeElements, useFrame } from '@react-three/fiber';
import { Group, Mesh } from 'three';

export function Venus(props: Omit<ThreeElements['group'], 'ref'>) {
  const groupRef = useRef<Group>(null!);
  const { nodes } = useGLTF('/GLB0.glb');
  const mesh = nodes.tmpuyq04mmhply as Mesh;

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    const radius = 3;
    const angularSpeed = 0.4;
    groupRef.current.position.x = Math.cos(elapsedTime * angularSpeed) * radius;
    groupRef.current.position.z = Math.sin(elapsedTime * angularSpeed) * radius;
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={mesh.geometry}
        material={mesh.material}
      />
    </group>
  );
}

useGLTF.preload('/GLB0.glb');
