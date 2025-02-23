import { Button } from "../ui/button";
import { Navigation } from "./Navigation";
import heroBg from "../../assets/hero.jpg";

interface HeroProps {
  onMenuClick: () => void;
}

export const Hero = ({ onMenuClick }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`
        }}
      >
        <div className="absolute inset-0 bg-green-950/40" />
      </div>
      <Navigation />
      <div className="relative text-center text-white space-y-6 animate-fade-in px-4">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight">
          BALAGGER
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wide">
          A culinary journey through modern gastronomy
        </p>
        <Button
          className="mt-8 bg-green-600 text-white hover:bg-green-700 transition-all"
          size="lg"
          onClick={onMenuClick}
        >
          Menu
        </Button>
      </div>
    </section>
  );
};
