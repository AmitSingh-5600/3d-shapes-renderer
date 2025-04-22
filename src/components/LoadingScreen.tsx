
import { useEffect, useState } from "react";
import { Box } from "lucide-react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 10;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="animate-spin mb-4 md:mb-8">
        <Box size={32} className="md:w-12 md:h-12" />
      </div>
      <h1 className="text-xl md:text-3xl font-bold mb-4">3D Model Viewer</h1>
      <div className="w-full max-w-xs md:max-w-md bg-gray-700 rounded-full h-2.5 mb-4 overflow-hidden">
        <div 
          className="bg-blue-500 h-2.5 rounded-full transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm md:text-base text-gray-400">Loading assets... {Math.round(progress)}%</p>
    </div>
  );
};

export default LoadingScreen;
