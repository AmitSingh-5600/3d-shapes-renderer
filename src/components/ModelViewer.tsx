
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import useModelStore from "@/stores/modelStore";
import Model from "./Model";
import Lighting from "./Lighting";
import { useIsMobile } from "@/hooks/use-mobile";

const ModelViewer = () => {
  const zoom = useModelStore((state) => state.zoom);
  const isMobile = useIsMobile();

  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, isMobile ? zoom * 1.5 : zoom]} />
        <color attach="background" args={["#111827"]} />
        
        <Suspense fallback={null}>
          <Model />
          <Lighting />
          <Environment preset="city" />
          <OrbitControls 
            enablePan={true} 
            enableZoom={true} 
            enableRotate={true}
            minDistance={isMobile ? 3 : 2}
            maxDistance={20}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
