'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Preload } from '@react-three/drei';
import { Object3D } from 'three';

useGLTF.preload('/assets/dog.gltf');
useGLTF.preload('/assets/table.gltf');
useGLTF.preload('/assets/chair.gltf');
useGLTF.preload('/assets/bed.gltf');
useGLTF.preload('/assets/cactus.gltf');
useGLTF.preload('/assets/cellphone.gltf');
useGLTF.preload('/assets/coffee.gltf');

interface GLTFResult {
  scene: Object3D;
  nodes: Record<string, Object3D>;
  materials: Record<string, unknown>;
}

const DogModel: React.FC = () => {
  const { scene } = useGLTF('/assets/dog.gltf', true) as GLTFResult;

  return <primitive object={scene} position={[0, 1.3, 2]} scale={1.5} rotation={[0, Math.PI, 0]} />;
};

const Table: React.FC = () => {
  const { scene } = useGLTF('/assets/table.gltf', true) as GLTFResult;

  return <primitive object={scene} position={[-0.4, -0.4, -0.4]} scale={1.5} />;
};

const Chair: React.FC = () => {
  const { scene } = useGLTF('/assets/chair.gltf', true) as GLTFResult;

  return <primitive object={scene} position={[0, 0, 2]} scale={3} rotation={[0, Math.PI, 0]} />;
};

// const MacBook: React.FC = () => {
//   const { scene } = useGLTF('/assets/mac-book.gltf', true) as GLTFResult;

//   return <primitive object={scene} position={[0, 1.8, -0.2]} scale={0.7} />;
// };

const Bed: React.FC = () => {
  const { scene } = useGLTF('/assets/bed.gltf', true) as GLTFResult;

  return <primitive object={scene} position={[-4.0, 1.2, 5.2]} scale={3.1} rotation={[0, Math.PI, 0]} />;
};

const Cactus: React.FC = () => {
  const { scene } = useGLTF('/assets/cactus.gltf', true) as GLTFResult;

  return <primitive object={scene} position={[-2.0, 2.07, -0.1]} scale={0.7} rotation={[0, Math.PI, 0]} />;
};

const Cellphone: React.FC = () => {
  const { scene } = useGLTF('/assets/cellphone.gltf', true) as GLTFResult;

  return <primitive object={scene} position={[1.8, 2.13, -0.1]} scale={0.2} rotation={[-Math.PI/2, 0, 0]} />;
};

const Coffee: React.FC = () => {
  const { scene } = useGLTF('/assets/coffee.gltf', true) as GLTFResult;

  return <primitive object={scene} position={[1.4, 2.12, -0.1]} scale={2} rotation={[0, -Math.PI/3, 0]} />;
};


const Experiment: React.FC = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [15, 10, 15], fov: 75 }}>
      <OrbitControls makeDefault />
        <mesh position={[1.0, 0, -8.0]} scale={1}>
          <Suspense fallback={null}>
            <DogModel />
          </Suspense>
          {/* <Suspense fallback={null}> */}
            {/* <MacBook /> */}
          {/* </Suspense> */}
          <Suspense fallback={null}>
            <Table />
          </Suspense>
          <Suspense fallback={null}>
            <Cactus />
          </Suspense>
          <Suspense fallback={null}>
            <Chair />
          </Suspense>
          <Suspense fallback={null}>
            <Cellphone />
          </Suspense>
          <Suspense fallback={null}>
            <Coffee />
          </Suspense>
        </mesh>
        <Bed />
      <mesh>
      <boxGeometry args={[20, 0.2, 20]} />
      <meshStandardMaterial roughness={1} metalness={0.5} />
      </mesh>

      <Environment preset="sunset" />
      <color attach="background" args={['#333333']} />

      <Preload all />
    </Canvas>
  );
};

export default Experiment;
