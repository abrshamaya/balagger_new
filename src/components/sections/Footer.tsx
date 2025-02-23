
import { ChefHat } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <ChefHat className="h-8 w-8" />
        </div>
        <p className="text-green-200">© 2025 Balagger. All rights reserved. By amayatech</p>
      </div>
    </footer>
  );
};
