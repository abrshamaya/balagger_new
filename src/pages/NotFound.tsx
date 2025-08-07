import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-600 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400 rounded-full"></div>
      </div>

      <div className="text-center z-10 max-w-md mx-auto px-6">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-black text-green-700 mb-4 animate-bounce">
            404
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-green-700 mb-6 leading-relaxed">
            Looks like this page has wandered off to explore new flavors! 
            Don't worry, we'll help you find your way back to our delicious menu.
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 animate-pulse">
        <div className="w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-10 left-10 animate-pulse delay-1000">
        <div className="w-6 h-6 bg-green-400 rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default NotFound;
