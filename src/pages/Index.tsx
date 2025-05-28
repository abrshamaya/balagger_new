import { useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/sections/Navigation";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

// Featured dishes (updated from Menu section)
const featured = [
  { name: "KINCHE(ጭንጨ)", src: "/assets/food_images/Breakfast/KINCHE(ጭንጨ).jpg", badge: "New", description: "Cracked wheat cooked with spiced butter." },
  { name: "FULL(ፉል)", src: "/assets/food_images/Breakfast/FULL(ፉል).png", description: "Fava beans stewed with spices, served with bread." },
  { name: "ENKULAL WITH MEAT(እንቁላል በስጋ)", src: "/assets/food_images/Breakfast/ENKULAL WITH MEAT(እንቁላል በስጋ).jpg", description: "Scrambled eggs with tender beef cubes and spices." },
  { name: "Scrambled Egg", src: "/assets/food_images/Breakfast/Scrambled Egg.jpg", description: "Classic scrambled eggs with Ethiopian spices." },
  { name: "CHECHEBSA(ጨጨብሳ)", src: "/assets/food_images/Breakfast/CHECHEBSA(ጨጨብሳ).jpg", description: "Shredded flatbread sautéed with spiced butter and berbere." },
  { name: "combo", src: "/assets/food_images/Vegetarians/combo.jpg", description: "A combination of vegetarian stews and vegetables." },
  { name: "Firfir", src: "/assets/food_images/Vegetarians/Firfir.jpg", description: "Injera pieces mixed with spicy vegetarian sauce." },
  { name: "Special Vegi Combo", src: "/assets/food_images/Vegetarians/Special Vegi Combo.jpg", description: "Chef's selection of vegetarian specialties." },
  { name: "Special Combo", src: "/assets/food_images/House Special/Special Combo.jpg", description: "A special combination of house favorites." },
  { name: "Balagger Salad", src: "/assets/food_images/FISH/Balagger Salad.jpg", description: "Fresh salad with grilled fish fillet." },
  { name: "assa gulash", src: "/assets/food_images/FISH/assa gulash.jpg", description: "Fish stew cooked with Ethiopian spices." },
  { name: "Assa-Dulet", src: "/assets/food_images/FISH/Assa-Dulet.jpg", description: "Minced fish sautéed with onions, peppers, and spices." },
  { name: "Misir", src: "/assets/food_images/Sides/Misir.jpg", description: "Red lentil stew with berbere sauce." },
  { name: "Kik Alcha", src: "/assets/food_images/Sides/Kik Alcha.jpg", description: "Yellow split peas cooked with turmeric and mild spices." },
  { name: "Shiro", src: "/assets/food_images/Sides/Shiro.jpg", description: "Chickpea flour stew with garlic and spices." },
  { name: "Chicken Wings", src: "/assets/food_images/Late Snacks/Chicken Wings.jpg", description: "Spicy Ethiopian-style chicken wings." },
  { name: "Tibs_sandwich", src: "/assets/food_images/Late Snacks/Tibs_sandwich.jpg", description: "Sandwich filled with sautéed beef tibs." },
  { name: "Kitfo Sandwitch", src: "/assets/food_images/Late Snacks/Kitfo Sandwitch.jpg", description: "Sandwich with seasoned minced beef (kitfo)." },
  { name: "French Fries", src: "/assets/food_images/KIDS MENU/French Fries.jpg", description: "Crispy golden fries, perfect for kids." },
  { name: "Chicken Naget", src: "/assets/food_images/KIDS MENU/Chicken Naget.jpg", description: "Breaded chicken nuggets for kids." },
];

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero onMenuClick={() => navigate("/menu")} />
      {/* Scroll Down Button */}
      <Button
        size="icon"
        className="fixed bottom-8 left-8 z-40 bg-green-600 text-white shadow-lg hover:bg-green-700 animate-bounce"
        onClick={() => document.getElementById('featured-dishes')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to Featured Dishes"
      >
        <ArrowDown className="w-6 h-6" />
      </Button>
      {/* Featured Dishes Carousel */}
      <section id="featured-dishes" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-green-900 tracking-tight animate-fade-in">Featured Dishes</h2>
        {/* Swipe to explore text - Mobile only */}
        <div className="flex items-center justify-center space-x-2 mb-8 md:hidden">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="animate-bounce-x text-green-600">
            <path d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
          <span className="text-sm font-light text-green-600">Swipe to explore</span>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="animate-bounce-x text-green-600">
            <path d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </div>
        <Carousel>
          <CarouselContent>
            {featured.map((item) => (
              <CarouselItem key={item.name} className="flex justify-center">
                <Card className="w-80 p-6 flex flex-col items-center bg-white/90 shadow-xl rounded-2xl border-2 border-green-100 hover:scale-105 hover:shadow-2xl transition-transform duration-300 relative group">
                  <img src={item.src} alt={item.name} className="w-48 h-48 object-cover rounded-xl mb-4 shadow-lg group-hover:rotate-2 transition-transform duration-300" />
                  <h4 className="text-xl font-bold text-green-900 text-center mb-2">{item.name}</h4>
                  {item.badge && <Badge className="absolute top-4 right-4 animate-bounce bg-green-600 text-white">{item.badge}</Badge>}
                  <Button size="sm" className="mt-4 bg-green-600 hover:bg-green-700 text-white shadow" onClick={() => navigate('/menu')}>View Menu</Button>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
          </div>
          <div className="hidden md:block">
            <CarouselNext />
          </div>
        </Carousel>
      </section>
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-green-900 tracking-tight animate-fade-in">Find Us</h2>
        <div className="my-4 rounded-lg overflow-hidden shadow-lg relative">
          <iframe
            src="https://www.google.com/maps?q=38.84137,-77.11907&z=17&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map - Balagger Location"
          ></iframe>
          <div className="absolute inset-0 bg-green-200 opacity-30 pointer-events-none" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
