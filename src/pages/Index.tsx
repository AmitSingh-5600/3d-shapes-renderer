
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import ModelViewer from "@/components/ModelViewer";
import Sidebar from "@/components/Sidebar";
import ControlPanel from "@/components/ControlPanel";
import LoadingScreen from "@/components/LoadingScreen";
import useModelStore from "@/stores/modelStore";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setCurrentModel } = useModelStore();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Set default model
      setCurrentModel('cube');
    }, 2000);

    return () => clearTimeout(timer);
  }, [setCurrentModel]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 relative min-h-[60vh] md:min-h-0">
          <ModelViewer />
        </div>
        <div className="min-h-[40vh] md:min-h-0">
          <ControlPanel />
        </div>
      </main>
      <Toaster />
    </div>
  );
};

export default Index;
