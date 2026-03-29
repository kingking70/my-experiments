'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import Typewriter from 'typewriter-effect';
import { Venus } from './venus';

function LoadingVideo() {
  return (
    <div className="h-[70vh] w-full flex items-center justify-center">
      <video
        src="/loading-thinking.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function Scene() {
  return (
    <>
      <Html center position={[0, 0.5, 0]} occlude="blending">
        <div
          style={{ textAlign: 'center', whiteSpace: 'nowrap', pointerEvents: 'none' }}
          className="text-foreground text-2xl md:text-4xl font-mono font-bold"
        >
          <Typewriter
            options={{
              strings: ['kingston\'s experiments', 'human being', '<s>builder</s>', '<s>writer</s>', '<s>creator</s>', '<s>coder</s>', '<s>tinkerer</s>', '<s>art collector</s>', '<s>artist</s>'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </Html>
      <Venus rotation-y={Math.PI * 0.25} position={[1, 0, 1]} scale={1} />
    </>
  );
}

export function TypewriterCanvas() {
  return (
    <div className="relative flex flex-col items-center">
      <Suspense fallback={<LoadingVideo />}>
        <div className="h-[70vh] w-full">
          <Canvas>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Scene />
          </Canvas>
        </div>
      </Suspense>
    </div>
  );
}
