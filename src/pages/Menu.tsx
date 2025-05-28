import { Menu as MenuSection } from "@/components/sections/Menu";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/sections/Navigation";

const MenuPage = () => (
  <div className="min-h-screen">
    <Navigation />
    <MenuSection />
    <Footer />
  </div>
);

export default MenuPage; 