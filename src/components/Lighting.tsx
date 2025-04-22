
import { useRef } from "react";
import { DirectionalLight, PointLight, SpotLight } from "three";
import useModelStore from "@/stores/modelStore";

const Lighting = () => {
  const directionalLightRef = useRef<DirectionalLight>(null);
  const pointLightRef = useRef<PointLight>(null);
  const spotLightRef = useRef<SpotLight>(null);
  
  const { lightType, lightIntensity } = useModelStore();

  return (
    <>
      {/* Always-on ambient light */}
      <ambientLight intensity={0.4} />
      
      {/* Conditional lighting based on user selection */}
      {lightType === 'directional' && (
        <directionalLight
          ref={directionalLightRef}
          position={[5, 5, 5]}
          intensity={lightIntensity}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      )}
      
      {lightType === 'point' && (
        <pointLight
          ref={pointLightRef}
          position={[5, 5, 5]}
          intensity={lightIntensity}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      )}
      
      {lightType === 'spot' && (
        <spotLight
          ref={spotLightRef}
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={0.5}
          intensity={lightIntensity}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      )}
    </>
  );
};

export default Lighting;
