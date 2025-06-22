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
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-900 tracking-tight animate-fade-in">What Our Customers Say</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Review 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start border-t-4 border-yellow-400 animate-fade-in">
            <a href="https://maps.app.goo.gl/v22KrKEKKJhyaxc76" target="_blank" rel="noopener noreferrer" className="font-bold text-green-800 mb-2 hover:underline hover:no-underline">Amen Abebe</a>
            <a href="https://maps.app.goo.gl/v22KrKEKKJhyaxc76" target="_blank" rel="noopener noreferrer" className="block text-green-700 mb-2 hover:underline hover:no-underline">
              Truly very impressed with this restaurant. I've been here multiple times and each time I'm not disappointed. The service was excellent. Our server Rozina greeted us the minute we got there and continued to deliver excellent service. The food was of quality with great price. Overall very satisfied with their service. The owner/ manager was very humble and made sure we had a great experience. Thank you!
            </a>
          </div>
          {/* Review 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start border-t-4 border-yellow-400 animate-fade-in">
            <a href="https://maps.app.goo.gl/nDqFm1iG28qVsayCA" target="_blank" rel="noopener noreferrer" className="font-bold text-green-800 mb-2 hover:underline hover:no-underline">Mo Lee</a>
            <a href="https://maps.app.goo.gl/nDqFm1iG28qVsayCA" target="_blank" rel="noopener noreferrer" className="block text-green-700 mb-2 hover:underline hover:no-underline">
              Vegetables combo with special gored gored and Yetashe Kift together for big meal, the seasoning of the food is great, variety veggie option with different seasoning and make sure try with original Ethiopia Enjer which little more sour and tangy flavor to accommodate food together well.
            </a>
          </div>
          {/* Review 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start border-t-4 border-yellow-400 animate-fade-in">
            <a href="https://maps.app.goo.gl/uQUnqcHLHq8AnFbn9" target="_blank" rel="noopener noreferrer" className="font-bold text-green-800 mb-2 hover:underline hover:no-underline">Jessica S</a>
            <a href="https://maps.app.goo.gl/uQUnqcHLHq8AnFbn9" target="_blank" rel="noopener noreferrer" className="block text-green-700 mb-2 hover:underline hover:no-underline">
              Came here with a girlfriend for some late night eats. The food and service was amazing, I only have feedback on the music. It's just far too loud for the space size itself and it's coming at you from all angles which makes for a very uncomfortable dining experience. However the food was amazing and I'll be back maybe for takeout or before the band gets there. We had the awaze tibs and can't remember the other one but ask the bartender for the popular tibs dish and she'll tell you.
            </a>
          </div>
          {/* Review 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start border-t-4 border-yellow-400 animate-fade-in">
            <a href="https://maps.app.goo.gl/5PWfwpXdGC4xqoZFA" target="_blank" rel="noopener noreferrer" className="font-bold text-green-800 mb-2 hover:underline hover:no-underline">Henok Garedw (Henny breezy)</a>
            <a href="https://maps.app.goo.gl/5PWfwpXdGC4xqoZFA" target="_blank" rel="noopener noreferrer" className="block text-green-700 mb-2 hover:underline hover:no-underline">
              It's a perfect place/ restaurant for authentic Ethiopian food especially for the Yetash-kitfo/ all in one kitfo. I usually ordered the kitfo and loved since. The food and service worth the price. The staff were friendly all the time I visited the restaurant.it's Perfect family kids friendly restaurant. If you into a quiet place to dine this is your best spot. I highly recommended it.
            </a>
          </div>
          {/* Review 5 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start border-t-4 border-yellow-400 animate-fade-in">
            <a href="https://maps.app.goo.gl/EmkJXtss5jjAMk4f6" target="_blank" rel="noopener noreferrer" className="font-bold text-green-800 mb-2 hover:underline hover:no-underline">Kyla Jones</a>
            <a href="https://maps.app.goo.gl/EmkJXtss5jjAMk4f6" target="_blank" rel="noopener noreferrer" className="block text-green-700 mb-2 hover:underline hover:no-underline">
              Fantastic Ethiopian food at a great price. I got the house special which was all absolutely delicious, and the waitress is very sweet and provides excellent service. Wonderful meal!
            </a>
          </div>
          {/* Review 6 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start border-t-4 border-yellow-400 animate-fade-in">
            <a href="https://maps.app.goo.gl/K2KzTv6vn2rSgTg39" target="_blank" rel="noopener noreferrer" className="font-bold text-green-800 mb-2 hover:underline hover:no-underline">Yohannes</a>
            <a href="https://maps.app.goo.gl/K2KzTv6vn2rSgTg39" target="_blank" rel="noopener noreferrer" className="block text-green-700 mb-2 hover:underline hover:no-underline">
              This restaurant truly stands out as a remarkable dining experience, with service that is nothing short of exceptional. I've had the pleasure of visiting several times, and each occasion has been consistently impressive. The owner takes a personal interest in ensuring that every table receives exactly what they ordered, often checking in to guarantee their expectations are not only met but exceeded. The food is absolutely delectable, bursting with flavor and crafted with care.
            </a>
          </div>
        </div>
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
