
import { create } from 'zustand';

export type ModelType = 'cube' | 'sphere' | 'torus' | 'custom';
export type LightType = 'ambient' | 'directional' | 'point' | 'spot';

interface ModelState {
  currentModel: ModelType;
  lightType: LightType;
  lightIntensity: number;
  wireframe: boolean;
  rotation: boolean;
  color: string;
  metalness: number;
  roughness: number;
  zoom: number;
  customModelUrl: string | null;
  setCurrentModel: (model: ModelType) => void;
  setLightType: (type: LightType) => void;
  setLightIntensity: (intensity: number) => void;
  setWireframe: (wireframe: boolean) => void;
  setRotation: (rotation: boolean) => void;
  setColor: (color: string) => void;
  setMetalness: (metalness: number) => void;
  setRoughness: (roughness: number) => void;
  setZoom: (zoom: number) => void;
  setCustomModelUrl: (url: string | null) => void;
}

const useModelStore = create<ModelState>((set) => ({
  currentModel: 'cube',
  lightType: 'directional',
  lightIntensity: 1,
  wireframe: false,
  rotation: true,
  color: '#1E88E5',
  metalness: 0.5,
  roughness: 0.5,
  zoom: 5,
  customModelUrl: null,
  setCurrentModel: (model) => set({ currentModel: model }),
  setLightType: (type) => set({ lightType: type }),
  setLightIntensity: (intensity) => set({ lightIntensity: intensity }),
  setWireframe: (wireframe) => set({ wireframe: wireframe }),
  setRotation: (rotation) => set({ rotation: rotation }),
  setColor: (color) => set({ color: color }),
  setMetalness: (metalness) => set({ metalness: metalness }),
  setRoughness: (roughness) => set({ roughness: roughness }),
  setZoom: (zoom) => set({ zoom: zoom }),
  setCustomModelUrl: (url) => set({ customModelUrl: url })
}));

export default useModelStore;
