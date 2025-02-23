
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const isMobile = useIsMobile();

  const links = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu-section" },
    { name: "About", href: "#about-section" },
    { name: "Contact", href: "#contact-section" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['menu-section', 'about-section', 'contact-section'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkColor = (href: string) => {
    if (href === "#home") {
      return activeSection === "" ? "text-white" : "text-green-900";
    }
    return activeSection === "" ? "text-white" : "text-green-900";
  };

  const handleLinkClick = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={cn("fixed top-0 right-0 left-0 z-50 py-4 px-6", className)}>
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <img 
          src="/lovable-uploads/7ac6a401-9189-4869-8885-7636e91a52c0.png" 
          alt="Balagger Logo" 
          className="w-12 h-12 rounded-full border-2 border-white/20 drop-shadow-lg"
        />
        {isMobile ? (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={activeSection ? "text-green-900" : "text-white"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <ul className="flex space-x-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`${getLinkColor(link.href)} hover:text-green-700 transition-colors font-light tracking-wide`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 border-t border-green-100">
          <ul className="flex flex-col py-4">
            {links.map((link) => (
              <li key={link.name} className="text-center py-3">
                <Link
                  to={link.href}
                  className={`${getLinkColor(link.href)} hover:text-green-700 transition-colors font-light tracking-wide`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
