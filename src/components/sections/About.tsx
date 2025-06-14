import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="about-section" className="relative py-24 px-4 max-w-6xl mx-auto overflow-hidden">
      {/* Decorative SVG wave divider */}
      <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
          <path d="M0,40 C480,120 960,0 1440,80 L1440,120 L0,120 Z" fill="#bbf7d0" />
        </svg>
      </div>
      <div className="space-y-8 text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-900 tracking-tight animate-slide-down">Story</h2>
        <img
          src="/assets/story.JPG"
          alt="Balagger Story"
          className="mx-auto my-6 rounded-2xl shadow-2xl border-4 border-green-200 w-full max-w-md h-64 object-cover animate-fade-in"
        />
        <div className="space-y-6 text-lg text-green-700 max-w-3xl mx-auto leading-relaxed animate-slide-up">
          <p>
            At Balagger (pronounced Ballə'gar), situated in the bustling enclave of Falls Church within the Washington, DC Metropolitan sphere, we have proudly welcomed discerning guests since 2013. Our unwavering commitment is to bring you an authentic Ethiopian dining experience, meticulously crafted to reflect the rich tapestry of our cultural heritage. Nestled inside Build America Plaza—colloquially known as 'Skyline'—we enjoy seamless accessibility from Interstate 395 and lie a mere 10 miles from Ronald Reagan Washington National Airport and Pentagon City.
          </p>
          <p>
            In addition to our signature Ethiopian dishes, we offer an eclectic array of hot beverages, featuring both local and Ethiopian teas, coffees, and distinctive specialty drinks. For those seeking more than a traditional culinary outing, our venue boasts a full-service bar and a vibrant weekend entertainment lineup every Friday and Saturday. Stay connected with us on social media to remain in the loop about our latest events and entertainment schedule.
          </p>
        </div>
        <Button className="mt-6 bg-green-600 text-white hover:bg-green-700 transition-all shadow-lg" size="lg" onClick={() => setOpen(true)}>
          Meet the Owner
        </Button>
      </div>
      {/* Chef Modal */}
      {/* <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Meet the Owner</DialogTitle>
          </DialogHeader>
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=facearea&w=400&h=400" alt="Chef" className="w-40 h-40 object-cover rounded-full mx-auto my-4 shadow-lg border-4 border-green-200" />
          <p className="text-green-900 text-center mb-2">My name is Eshetu, and Balagger is more than just a restaurant—it's the heart of a dream I carried from Ethiopia to USA. I opened Balagger to share the rich culture, warmth, and flavors of home with our community. Every dish, every detail is a reflection of my passion for hospitality and my deep love for our heritage. This isn't just a business—it's a place where stories, laughter, and tradition come together. Welcome to Balagger, where you're not just a guest—you're family. </p>
        </DialogContent>
      </Dialog> */}
      {/* Animations */}
      <style>{`
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
      `}</style>
    </section>
  );
};
