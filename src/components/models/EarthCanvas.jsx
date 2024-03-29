import React,{Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import './EarthCanvas.css'
import gltf from "./assets/planet/scene.gltf"

const Earth = () => {
  const earth = useGLTF({gltf})
  earth.scene.scale.set(2,2,2)

  return <primitive object={earth.scene} />;
};

export default function EarthCanvas() {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      style={{width:'400px','max-height':'500px'}} 
    >
      <Suspense fallback={<>loading...</>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
}
