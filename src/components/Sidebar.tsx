import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Box, Circle, CircleDot, Upload, Github, Info } from "lucide-react";
import useModelStore, { ModelType } from "@/stores/modelStore";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import useIsMobile from "@/hooks/useIsMobile";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { currentModel, setCurrentModel, setCustomModelUrl } = useModelStore();
  const isMobile = useIsMobile();

  const handleModelChange = (model: ModelType) => {
    setCurrentModel(model);
    setCustomModelUrl(null);
    toast({
      title: "Model changed",
      description: `Switched to ${model} model`,
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {

      toast({
        title: "Custom model",
        description: `Custom model "${file.name}" would be uploaded in a real app`,
      });

      setCurrentModel('custom');
    }
  };

  return (
    <div
      className={`bg-gray-800 text-black transition-all duration-300 flex flex-col  ${isCollapsed ? "w-20" : "w-64"
        } ${isMobile ? "fixed bottom-0 left-0 right-0 z-50 w-full h-auto border-t border-gray-700" : "relative"}`}
    >
      <div className={`flex justify-between items-center p-4 border-b border-gray-700 ${isMobile ? "py-2" : ""}`}>
        <h2 className={`font-bold text-xl ${isCollapsed || isMobile ? "hidden" : "block"}`}>
          3D Viewer
        </h2>
        <Button
          variant="ghost"
          size="icon"
          className={isMobile ? "hidden" : ""}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>

      <div className={`${isMobile ? "flex-row justify-around p-2" : "flex-1 overflow-auto p-4"} flex`}>
        <div className={`${isMobile ? "flex gap-2" : "space-y-2"}`}>
          <Button
            variant={currentModel === 'cube' ? "default" : "outline"}
            className={`${isMobile ? "w-auto px-3" : "w-full"} justify-start`}
            onClick={() => handleModelChange('cube')}
          >
            <Box />
            {!isCollapsed && !isMobile && <span className="ml-2">Cube</span>}
          </Button>

          <Button
            variant={currentModel === 'sphere' ? "default" : "outline"}
            className={`${isMobile ? "w-auto px-3" : "w-full"} justify-start`}
            onClick={() => handleModelChange('sphere')}
          >
            <Circle />
            {!isCollapsed && !isMobile && <span className="ml-2">Sphere</span>}
          </Button>

          <Button
            variant={currentModel === 'torus' ? "default" : "outline"}
            className={`${isMobile ? "w-auto px-3" : "w-full"} justify-start`}
            onClick={() => handleModelChange('torus')}
          >
            <CircleDot />
            {!isCollapsed && !isMobile && <span className="ml-2">Torus</span>}
          </Button>
        </div>
      </div>

      <div className={`border-t border-gray-700 p-4 space-y-2 ${isMobile ? "hidden" : ""}`}>
        <Link to="/about">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
          >
            <Info size={16} className={isCollapsed ? "" : "mr-2"} />
            {!isCollapsed && "About Project"}
          </Button>
        </Link>

        <Button
          variant="outline"
          size="sm"
          className="w-full"
        >
          <Github size={16} className={isCollapsed ? "" : "mr-2"} />
          {!isCollapsed && "View Source"}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
