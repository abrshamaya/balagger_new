import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const categories = [
  "Breakfast",
  "Vegetarian Entrees",
  "House Special",
  "Fish",
  "Sides",
  "Late Snacks",
  "Kids Menu",
  "All"
];

const images: Record<string, { name: string; src: string; badge?: string; description?: string; price: string }[]> = {
  Breakfast: [
    { name: "KINCHE(ጭንጨ)", src: "/assets/food_images/Breakfast/KINCHE(ጭንጨ).jpg", description: "Cracked wheat cooked with spiced butter.", price: "$7.99" },
    { name: "FULL(ፉል)", src: "/assets/food_images/Breakfast/FULL(ፉል).png", description: "Fava beans stewed with spices, served with bread.", price: "$7.99" },
    { name: "ENKULAL WITH MEAT(እንቁላል በስጋ)", src: "/assets/food_images/Breakfast/ENKULAL WITH MEAT(እንቁላል በስጋ).jpg", description: "Scrambled eggs with tender beef cubes and spices.", price: "$7.99" },
    { name: "Scrambled Egg", src: "/assets/food_images/Breakfast/Scrambled Egg.jpg", description: "Classic scrambled eggs with Ethiopian spices.", price: "$6.99" },
    { name: "CHECHEBSA(ጨጨብሳ)", src: "/assets/food_images/Breakfast/CHECHEBSA(ጨጨብሳ).jpg", description: "Shredded flatbread sautéed with spiced butter and berbere.", price: "$7.99" },
  ],
  "Vegetarian Entrees": [
    { name: "combo", src: "/assets/food_images/Vegetarians/combo.jpg", description: "A combination of vegetarian stews and vegetables.", price: "$18.99" },
    { name: "Firfir", src: "/assets/food_images/Vegetarians/Firfir.jpg", description: "Injera pieces mixed with spicy vegetarian sauce.", price: "$17.99" },
    { name: "Special Vegi Combo", src: "/assets/food_images/Vegetarians/Special Vegi Combo.jpg", description: "Chef's selection of vegetarian specialties.", price: "$27.99" },
  ],
  "House Special": [
    { name: "Special Combo", src: "/assets/food_images/House Special/Special Combo.jpg", description: "A special combination of house favorites.", price: "$27.99" },
    { name: "Kornis", src: "/assets/food_images/House Special/Special Combo.jpg", description: "Ye tsome firfir topped with thick stripe of ribeye cooked to perfection.", price: "$29.99" },
    { name: "Ya'ager Combo", src: "/assets/food_images/House Special/Special Combo.jpg", description: "Combination of Kitfo, dulet, tibs, scrambled egg, cabbage, collared green and homemade cheese, served with Injera and bread", price: "$53.99" },
  ],
  Fish: [
    { name: "Balagger Salad", src: "/assets/food_images/FISH/Balagger Salad.jpg", description: "Fresh salad with grilled fish fillet.", price: "$9.99" },
    { name: "assa gulash", src: "/assets/food_images/FISH/assa gulash.jpg", description: "Fish stew cooked with Ethiopian spices.", price: "$19.99" },
    { name: "Assa-Dulet", src: "/assets/food_images/FISH/Assa-Dulet.jpg", description: "Minced fish sautéed with onions, peppers, and spices.", price: "$19.99" },
  ],
  Sides: [
    { name: "Misir", src: "/assets/food_images/Sides/Misir.jpg", description: "Red lentil stew with berbere sauce.", price: "$4.99" },
    { name: "Kik Alcha", src: "/assets/food_images/Sides/Kik Alcha.jpg", description: "Yellow split peas cooked with turmeric and mild spices.", price: "$4.99" },
    { name: "Shiro", src: "/assets/food_images/Sides/Shiro.jpg", description: "Chickpea flour stew with garlic and spices.", price: "$4.99" },
  ],
  "Late Snacks": [
    { name: "Chicken Wings", src: "/assets/food_images/Late Snacks/Chicken Wings.jpg", description: "Spicy Ethiopian-style chicken wings. 6pc for $6.99, 10pc for $12.99", price: "$6.99" },
    { name: "Tibs_sandwich", src: "/assets/food_images/Late Snacks/Tibs_sandwich.jpg", description: "Sandwich filled with sautéed beef tibs.", price: "$11.99" },
    { name: "Kitfo Sandwitch", src: "/assets/food_images/Late Snacks/Kitfo Sandwitch.jpg", description: "Sandwich with seasoned minced beef (kitfo).", price: "$11.99" },
  ],
  "Kids Menu": [
    { name: "French Fries", src: "/assets/food_images/KIDS MENU/French Fries.jpg", description: "Crispy golden fries, perfect for kids.", price: "$2.99" },
    { name: "Chicken Naget", src: "/assets/food_images/KIDS MENU/Chicken Naget.jpg", description: "Breaded chicken nuggets with fries. 6pc for $7.99, 10pc for $12.99", price: "$7.99" },
  ]
};

// Add 'All' section by combining all items
images.All = Object.values(images).flat();

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [modalItem, setModalItem] = useState<null | { name: string; src: string; badge?: string; description?: string; price: string }>(null);

  // Animate tab transitions
  const tabTransition = "transition-all duration-500 ease-in-out";

  // Back to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section id="menu-section" className="relative py-12 md:py-24 bg-gradient-to-b from-green-50 via-white to-green-100">
      {/* Section divider */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-green-200/60 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-6 md:mb-10 text-green-900 tracking-tight animate-fade-in">Menu</h2>
        {/* Tabs for categories */}
        <Tabs defaultValue={categories[0]} className="w-full">
          <div className="md:sticky md:top-0 z-10 bg-gradient-to-b from-green-50 via-white to-green-100 pb-4">
            <TabsList className="grid grid-cols-3 md:flex md:flex-wrap justify-center items-center mb-6 md:mb-8 gap-1 md:gap-2 bg-green-100/60 rounded-xl p-1 md:p-2 shadow">
            {categories.map((cat) => (
                <TabsTrigger 
                  key={cat} 
                  value={cat} 
                  className="mx-0.5 md:mx-2 my-1 px-1 md:px-4 py-1 md:py-2 text-xs md:text-base rounded-lg font-semibold text-green-900 hover:bg-green-200 focus:bg-green-300 transition-colors duration-200 text-center break-words flex items-center justify-center h-full bg-white/80"
                >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
          </div>
          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className={`${tabTransition} mt-8 md:mt-12`}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {(images[cat] || []).map((item) => (
                  <Card
                    key={item.name}
                    className="p-1.5 md:p-3 flex flex-col items-center bg-white/80 shadow-lg rounded-lg border border-green-100 hover:scale-105 hover:shadow-2xl hover:-rotate-1 transition-transform duration-300 relative group"
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-md mb-1.5 md:mb-2 shadow group-hover:rotate-2 transition-transform duration-300"
                    />
                    <h4 className="text-xs md:text-base font-bold text-green-900 text-center mb-0.5 md:mb-1 line-clamp-2">{item.name}</h4>
                    {item.badge && <Badge className="absolute top-1.5 right-1.5 md:top-2 md:right-2 bg-green-600 text-white animate-pulse text-[10px] md:text-xs">{item.badge}</Badge>}
                    <p className="text-green-700 text-center mb-1 md:mb-2 text-[10px] md:text-sm font-semibold">{item.price}</p>
                    <Button size="sm" variant="outline" className="mt-0.5 md:mt-1 text-[10px] md:text-xs h-6 md:h-8 px-2 md:px-3" onClick={() => setModalItem(item)}>
                      View Details
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      {/* Back to Top Button */}
      <Button
        size="icon"
        className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-40 bg-green-600 text-white shadow-lg hover:bg-green-700 animate-bounce"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4 md:w-6 md:h-6" />
      </Button>
      {/* Details Modal */}
      <Dialog open={!!modalItem} onOpenChange={() => setModalItem(null)}>
        <DialogContent className="max-w-[90vw] md:max-w-md">
          {modalItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-lg md:text-xl">{modalItem.name}</DialogTitle>
              </DialogHeader>
              <img src={modalItem.src} alt={modalItem.name} className="w-full h-48 md:h-64 object-cover rounded-xl my-2 md:my-4 shadow-lg" />
              {modalItem.badge && <Badge className="mb-2 bg-green-600 text-white animate-bounce text-xs md:text-sm">{modalItem.badge}</Badge>}
              <p className="text-green-900 text-center mb-2 text-sm md:text-base">{modalItem.description || "Delicious Ethiopian cuisine!"}</p>
              <p className="text-green-700 text-center mb-2 font-semibold text-sm md:text-base">{modalItem.price}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
      {/* Animations */}
      <style>{`
        .animate-pulse {
          animation: pulse 2s infinite alternate;
        }
        @keyframes pulse {
          0% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};
