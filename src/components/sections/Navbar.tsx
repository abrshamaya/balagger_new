import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Instagram, Facebook } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/balaggerva/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/balaggerRVA/?profile_tab_item_selected=mentions&_rdr" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-green-600">Balagger</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-green-600 hover:text-green-700">Home</Link>
            <Link to="/menu" className="text-green-600 hover:text-green-700">Menu</Link>
            <Link to="/about" className="text-green-600 hover:text-green-700">About</Link>
            <Link to="/contact" className="text-green-600 hover:text-green-700">Contact</Link>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
              <a
                href="https://www.clover.com/online-ordering/balagger-restaurant-falls-church"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-green-600 hover:text-green-700"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className="block px-3 py-2 text-green-600 hover:text-green-700"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-green-600 hover:text-green-700"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-green-600 hover:text-green-700"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex items-center space-x-4 px-3 py-2">
                <LanguageSwitcher />
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <a
                href="https://www.clover.com/online-ordering/balagger-restaurant-falls-church"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 