
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import useModelStore from "@/stores/modelStore";

const Model = () => {
  const modelRef = useRef<Mesh>(null);
  const { 
    currentModel, 
    wireframe, 
    rotation, 
    color, 
    metalness, 
    roughness, 
    customModelUrl 
  } = useModelStore();

  // Only load custom model if provided and not using primitives
  let loadedModel;
  if (customModelUrl && currentModel === 'custom') {
    try {
      loadedModel = useGLTF(customModelUrl);
    } catch (error) {
      console.error("Error loading custom model:", error);
      // Will fallback to primitive shapes
    }
  }

  // Animate rotation if enabled
  useFrame((_, delta) => {
    if (rotation && modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  // Render different primitives based on selected model type
  const renderModel = () => {
    if (customModelUrl && currentModel === 'custom' && loadedModel) {
      return <primitive object={loadedModel.scene} scale={1.5} />;
    }

    const material = (
      <meshStandardMaterial 
        color={color} 
        wireframe={wireframe} 
        metalness={metalness} 
        roughness={roughness}
      />
    );

    switch (currentModel) {
      case 'cube':
        return (
          <mesh ref={modelRef} castShadow receiveShadow>
            <boxGeometry args={[2, 2, 2]} />
            {material}
          </mesh>
        );
      case 'sphere':
        return (
          <mesh ref={modelRef} castShadow receiveShadow>
            <sphereGeometry args={[1.5, 32, 32]} />
            {material}
          </mesh>
        );
      case 'torus':
        return (
          <mesh ref={modelRef} castShadow receiveShadow>
            <torusGeometry args={[1, 0.4, 16, 100]} />
            {material}
          </mesh>
        );
      default:
        return null;
    }
  };

  return renderModel();
};

// Prevent unnecessary re-downloads of the same model
useGLTF.preload('/models/placeholder.glb');

export default Model;
