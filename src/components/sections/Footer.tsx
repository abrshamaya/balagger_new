import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="relative bg-green-900 text-white py-12 mt-24 overflow-hidden">
      {/* Decorative SVG wave divider */}
      <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
          <path d="M0,40 C480,120 960,0 1440,80 L1440,120 L0,120 Z" fill="#bbf7d0" />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <img src="/lovable-uploads/7ac6a401-9189-4869-8885-7636e91a52c0.png" alt="Balagger Logo" className="h-12 w-12 rounded-full border-2 border-green-200 shadow-md" />
        </div>
        <h2 className="text-2xl font-bold mb-2 tracking-widest">BALAGGER</h2>
        <p className="mb-6 text-green-100 italic">Taste the Tradition. Experience the Culture.</p>
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-6 mb-6 text-green-100 text-sm">
          <a href="tel:+17033797799" className="flex items-center gap-2 hover:text-green-300 transition-colors"><Phone className="w-4 h-4" /> (703) 379-7799</a>
          <a href="https://www.google.com/maps?q=38.841233,-77.118780&z=17&output=embed" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-300 transition-colors"><MapPin className="w-4 h-4" /> 3813 S George Mason Dr Suite - E & F, Falls Church, VA 22041</a>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Mon-Sat: 11am-2pm, Sun: 12pm-2pm</span>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.instagram.com/balaggerva/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
            <Instagram className="w-7 h-7" />
          </a>
          <a href="https://www.tiktok.com/@balaggerva" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors" aria-label="TikTok">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/balaggerRVA/?profile_tab_item_selected=mentions&_rdr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
            <Facebook className="w-7 h-7" />
          </a>
        </div>
        <Button
          size="sm"
          className="mx-auto block bg-green-600 text-white shadow-lg hover:bg-green-700 mb-6"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          Back to Top
        </Button>
        <p className="text-green-200 text-xs mt-4">&copy; {new Date().getFullYear()} Balagger. All rights reserved. | Designed with <span className="text-pink-400">♥</span> by amayatech</p>
      </div>
      <style>{`
        footer {
          background: linear-gradient(135deg, #166534 0%, #14532d 100%);
        }
      `}</style>
    </footer>
  );
};
