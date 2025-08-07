import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft, ChefHat } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            onClick={() => navigate("/")}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5 mr-2" />
            Return to Home
          </Button>
          
          <Button
            onClick={() => navigate("/menu")}
            variant="outline"
            className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <ChefHat className="w-5 h-5 mr-2" />
            View Our Menu
          </Button>

          <Button
            onClick={() => navigate(-1)}
            variant="ghost"
            className="w-full text-green-600 hover:text-green-700 font-medium py-2 px-4 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t border-green-200">
          <p className="text-sm text-green-600">
            If you believe this is an error, please contact us at{" "}
            <a 
              href="mailto:info@balagger.com" 
              className="text-yellow-600 hover:text-yellow-700 underline font-medium"
            >
              info@balagger.com
            </a>
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
