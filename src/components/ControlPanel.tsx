
import { useState } from "react";
import { ChevronUp, ChevronDown, Sun, Lamp, 
  RotateCcw, Square, Box, Info, Settings, ImagePlus } from "lucide-react";
import useModelStore, { LightType } from "@/stores/modelStore";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ControlPanel = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { 
    lightType, setLightType,
    lightIntensity, setLightIntensity,
    wireframe, setWireframe,
    rotation, setRotation,
    color, setColor,
    metalness, setMetalness,
    roughness, setRoughness,
    zoom, setZoom
  } = useModelStore();

  if (isCollapsed) {
    return (
      <div className="bg-gray-800 p-2 border-t border-gray-700 flex justify-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(false)}
        >
          <ChevronUp size={16} />
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 border-t border-gray-700 text-gray-400">
      <div className="flex justify-center p-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(true)}
        >
          <ChevronDown size={16} />
        </Button>
      </div>

      <Tabs defaultValue="lighting" className="px-4 pb-4">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="lighting"><Sun size={16} className="mr-2" />Lighting</TabsTrigger>
          <TabsTrigger value="material"><Box size={16} className="mr-2" />Material</TabsTrigger>
          <TabsTrigger value="camera"><ImagePlus size={16} className="mr-2" />Camera</TabsTrigger>
          <TabsTrigger value="info"><Info size={16} className="mr-2" />Info</TabsTrigger>
        </TabsList>

        <TabsContent value="lighting" className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Light Type</h3>
            <div className="flex gap-2">
              <Button 
                variant={lightType === 'ambient' ? "default" : "outline"}
                size="sm"
                onClick={() => setLightType('ambient')}
              >
                <Sun size={16} className="mr-2" />
                Ambient
              </Button>
              <Button 
                variant={lightType === 'directional' ? "default" : "outline"}
                size="sm"
                onClick={() => setLightType('directional')}
              >
                <Sun size={16} className="mr-2" />
                Directional
              </Button>
              <Button 
                variant={lightType === 'point' ? "default" : "outline"}
                size="sm"
                onClick={() => setLightType('point')}
              >
                <Lamp size={16} className="mr-2" />
                Point
              </Button>
              <Button 
                variant={lightType === 'spot' ? "default" : "outline"}
                size="sm"
                onClick={() => setLightType('spot')}
              >
                <Lamp size={16} className="mr-2" />
                Spot
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">Light Intensity</h3>
              <span className="text-xs text-gray-400">{lightIntensity.toFixed(1)}</span>
            </div>
            <Slider 
              min={0} 
              max={2} 
              step={0.1} 
              value={[lightIntensity]} 
              onValueChange={(value) => setLightIntensity(value[0])} 
            />
          </div>
        </TabsContent>

        <TabsContent value="material" className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Material Color</h3>
            <div className="flex items-center gap-2">
              <input 
                type="color" 
                value={color} 
                onChange={(e) => setColor(e.target.value)} 
                className="w-10 h-10 border-none rounded cursor-pointer" 
              />
              <span className="text-sm">{color}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">Metalness</h3>
                <span className="text-xs text-gray-400">{metalness.toFixed(2)}</span>
              </div>
              <Slider 
                min={0} 
                max={1} 
                step={0.01} 
                value={[metalness]} 
                onValueChange={(value) => setMetalness(value[0])} 
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">Roughness</h3>
                <span className="text-xs text-gray-400">{roughness.toFixed(2)}</span>
              </div>
              <Slider 
                min={0} 
                max={1} 
                step={0.01} 
                value={[roughness]} 
                onValueChange={(value) => setRoughness(value[0])} 
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Square size={16} />
              <h3 className="text-sm font-medium">Wireframe</h3>
            </div>
            <Switch 
              checked={wireframe} 
              onCheckedChange={setWireframe} 
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <RotateCcw size={16} />
              <h3 className="text-sm font-medium">Auto Rotation</h3>
            </div>
            <Switch 
              checked={rotation} 
              onCheckedChange={setRotation} 
            />
          </div>
        </TabsContent>

        <TabsContent value="camera" className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">Camera Zoom</h3>
              <span className="text-xs text-gray-400">{zoom.toFixed(1)}</span>
            </div>
            <Slider 
              min={2} 
              max={20} 
              step={0.1} 
              value={[zoom]} 
              onValueChange={(value) => setZoom(value[0])} 
            />
          </div>
          <p className="text-sm text-gray-400">
            You can rotate the model by dragging and zoom with the mouse wheel.
          </p>
        </TabsContent>

        <TabsContent value="info" className="space-y-4">
          <div className="p-4 bg-gray-700 rounded-md">
            <h3 className="font-medium mb-2">About This Project</h3>
            <p className="text-sm text-gray-300">
              This is a 3D model viewer built with React Three Fiber. It supports different 
              primitive shapes and lighting options, with customizable materials.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" size="sm">
              <Settings size={16} className="mr-2" />
              Advanced Settings
            </Button>
            <Button variant="outline" size="sm">
              <Info size={16} className="mr-2" />
              Documentation
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ControlPanel;
