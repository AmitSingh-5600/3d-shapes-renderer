
import { Link } from "react-router-dom";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="outline" size="sm" className="mb-8 text-black">
            <ArrowLeft size={16} className="mr-2" />
            Back to Viewer
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About This Project</h1>
          
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">3D Model Viewer</h2>
            <p className="mb-4">
              This application is a capstone project for a Computer Science Engineering degree. 
              It demonstrates advanced concepts in web development, 3D graphics rendering, 
              and interactive user interfaces.
            </p>
            <p className="mb-4">
              Built with React, TypeScript, and Three.js (via React Three Fiber), this project 
              showcases real-time 3D rendering in the browser, with features like:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Real-time 3D rendering of primitive shapes and custom models</li>
              <li>Interactive camera controls with pan, zoom, and rotate</li>
              <li>Dynamic lighting system with multiple light types</li>
              <li>Material customization with properties like color, metalness, and roughness</li>
              <li>Responsive design that works on desktop and mobile devices</li>
              <li>State management with Zustand for a seamless user experience</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
            <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
            <ul className="grid grid-cols-2 gap-2 mb-6">
              <li className="flex items-center">
                <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
                React
              </li>
              <li className="flex items-center">
                <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
                TypeScript
              </li>
              <li className="flex items-center">
                <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
                Three.js
              </li>
              <li className="flex items-center">
                <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
                React Three Fiber
              </li>
              <li className="flex items-center">
                <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
                React Three Drei
              </li>
              <li className="flex items-center">
                <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
                Zustand
              </li>
              <li className="flex items-center">
                <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
                Shadcn UI
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2">Architecture</h3>
            <p className="mb-4">
              The application follows a component-based architecture with a centralized state 
              management approach. The 3D rendering is handled by Three.js through React Three Fiber, 
              which provides a declarative way to create 3D scenes in React.
            </p>
            <p>
              The UI is built with Tailwind CSS and Shadcn UI components, providing a modern and 
              responsive interface that adapts to different screen sizes.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-4">
              Feel free to reach out if you have any questions or comments about this project.
            </p>
            <div className="flex space-x-4 text-black">
              <Button variant="outline" size="sm">
                <Github size={16} className="mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                <Mail size={16} className="mr-2" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
