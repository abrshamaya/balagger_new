import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Globe, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/balaggerva/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/balaggerRVA/?profile_tab_item_selected=mentions&_rdr" },
  { 
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
    label: "TikTok",
    href: "https://www.tiktok.com/@balaggerva"
  }
];

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <TooltipProvider>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-50 to-white shadow-lg border-b border-green-100 dark:border-green-900 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/lovable-uploads/7ac6a401-9189-4869-8885-7636e91a52c0.png"
              alt="Balagger Logo"
              className="w-12 h-12 rounded-full border-2 border-green-200 shadow-md transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl font-bold text-green-900 tracking-widest drop-shadow-sm group-hover:text-green-600 transition-colors">BALAGGER</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-2 py-1 text-green-900 font-medium transition-colors duration-200 hover:text-green-600 ${location.pathname === link.href ? 'text-green-600' : ''}`}
              >
                <span>{link.name}</span>
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            ))}
            {/* Language Dropdown */}
            
            {/* Social Icons */}
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="ml-2 text-green-900 hover:text-green-600 transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </Button>
        </div>
        {/* Mobile Nav Slide-in */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-green-50 via-white to-green-100 shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full p-6 gap-8">
            <div className="flex items-center justify-between">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img
                  src="/lovable-uploads/7ac6a401-9189-4869-8885-7636e91a52c0.png"
                  alt="Balagger Logo"
                  className="w-10 h-10 rounded-full border-2 border-green-200 shadow-md"
                />
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                <X className="w-6 h-6" />
              </Button>
            </div>
            <nav className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-lg font-medium px-4 py-3 rounded-lg transition-all ${
                    location.pathname === link.href 
                      ? 'text-green-600 bg-green-50 shadow-sm' 
                      : 'text-green-900 hover:text-green-600 hover:bg-green-50/50'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex gap-4 mt-auto">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a 
                  key={label} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-green-900 hover:text-green-600 transition-colors p-2 rounded-full hover:bg-green-50"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full flex items-center gap-2 bg-white/50 hover:bg-white/80 transition-colors">
                    <Globe className="w-5 h-5" /> Language
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Amharic</DropdownMenuItem>
                  <DropdownMenuItem>French</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        {/* Overlay for mobile menu */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 md:hidden animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </nav>
    </TooltipProvider>
  );
};
