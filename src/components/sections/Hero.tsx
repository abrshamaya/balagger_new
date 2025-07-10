import { Button } from "../ui/button";
import heroBg from "../../assets/hero.jpg";
import { useEffect, useRef } from "react";

interface HeroProps {
  onMenuClick: () => void;
}

export const Hero = ({ onMenuClick }: HeroProps) => {
  // Parallax effect
  const bgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const offset = window.scrollY * 0.3;
        bgRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 will-change-transform"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-green-950/40" />
      </div>
      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center px-2 md:hidden z-50">

      </div>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 md:hidden z-50">

      </div>
      <div className="relative text-center text-white space-y-6 animate-fade-in px-4">
        <p className="text-xl md:text-2xl font-light tracking-wide animate-slide-up delay-300">
          A culinary journey through modern gastronomy
        </p>

        <a
          href="https://www.clover.com/online-ordering/balagger-restaurant-falls-church"
          target="_blank"
          rel="noopener noreferrer"
          className="block mx-auto mt-4 w-max"
        >
          <Button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold shadow-lg px-8 py-3 text-lg rounded-full transition-all duration-300 animate-glow"
            size="lg"
            style={{ boxShadow: '0 0 32px 0 #facc15aa, 0 0 8px 0 #facc15cc' }}
          >
            Order Online
          </Button>
        </a>
      </div>
      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={() => document.getElementById('featured-dishes')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
          <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14m7-7-7 7-7-7"/></svg>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        .animate-glow {
          box-shadow: 0 0 32px 0 #22c55e66, 0 0 8px 0 #22c55e99;
          animation: glow 2s infinite alternate;
        }
        @keyframes glow {
          0% { box-shadow: 0 0 32px 0 #22c55e66, 0 0 8px 0 #22c55e99; }
          100% { box-shadow: 0 0 64px 8px #22c55e99, 0 0 16px 0 #22c55e99; }
        }
        .animate-slide-down {
          animation: slideDown 1s cubic-bezier(.77,0,.18,1) both;
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 1.2s cubic-bezier(.77,0,.18,1) both;
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 2s infinite alternate;
        }
        @keyframes pulseGlow {
          0% { opacity: 0.2; }
          100% { opacity: 0.5; }
        }
        .animate-bounce-x {
          animation: bounceX 1.5s infinite;
        }
        @keyframes bounceX {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>
    </section>
  );
};
