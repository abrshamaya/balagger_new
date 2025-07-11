import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const categories = [
  "Breakfast",
  "Lunch/Dinner",
  "Vegetarian Entrees",
  "House Special",
  "Fish",
  "Sides",
  "Add on",
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
    { name: "Dulet(3/4 size)", src: "https://platform.dallas.eater.com/wp-content/uploads/sites/21/chorus/uploads/chorus_asset/file/24187905/110322_Waylia_KathyTran_B41A8800.jpg", description: "Lamb tripe, kidney, liver, lean meat, onion, garlic, jalapeno, clarified butter and mitmita (served: raw, medium, well)", price: "$14.99" },
    { name: "Ye-tsome Firfir(Vegan)", src: "https://messyvegancook.com/wp-content/uploads/2015/06/IMG_6899-720x480.jpg", description: "Injera mixed in a stew made from fresh tomato, onion, garlic and red-hot pepper powder", price: "$13.99" },
    { name: "Half-Half", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijeZnaVqvncllg0z1VOUkXG5ZjpFTFqtuyA&s", description: "Scrambled egg + Firfir or boiled egg + firfir", price: "$10.99" },
  ],
  "Lunch/Dinner": [
    { name: "Goden Tibs", src: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/rfyvpewt/905cd11a-6ca5-4f64-8e8a-300314d28ac0.jpeg", description: "Beef ribs fried and cooked to perfection", price: "$23.99" },
    { name: "Special Tibs", src: "https://www.foodandwine.com/thmb/0piUlHYl2IN3w9u0LGe-7J8oIa0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201211-xl-ethiopian-spiced-lamb-stew-4cdc19c90b3f4f96bd9cc238af254ea6.jpg", description: "Juicy pieces of cow rib-eye beef with onion, garlic, tomato and jalapeno cooked to perfection", price: "$22.99" },
    { name: "Zilzil Tibs", src: "https://new.marathonrestaurant.co.uk/wp-content/uploads/2024/12/zilzil2.jpg", description: "Beef strips cooked to perfection", price: "$21.99" },
    { name: "Derek Tibs", src: "https://elfegnedc.com/wp-content/uploads/2019/10/Derke-Tibs.jpg", description: "Beef meat cooked with fresh tomato, onion, green pepper garlic and red pepper tossed with injera", price: "$21.99" },
    { name: "Gored Gored", src: "https://i.ytimg.com/vi/hrX-zQuraVc/sddefault.jpg", description: "Chunks of lean beef mixed with mitmita and homemade butter (served raw, medium, well)", price: "$21.99" },
    { name: "Hagerbet Tibs", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwy77MRS-09zg2Srhcyexlq8xxSach5Iw-sA&s", description: "Tenderloin beef cooked with onion, jalapeno, and aromatic herbs", price: "$21.99" },
    { name: "Balagger Tibs", src: "https://www.awazetours.com/uploads/1/0/4/0/104067226/edited/tibs-medium.jpeg", description: "Beef ribeye, onion, jalapeno cooked to perfection", price: "$19.99" },
    { name: "Lega Tibs", src: "https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photos/ceff3122-f47a-4f4a-ad27-7b020334379b-retina-large-jpeg", description: "With the choice of cubed LAMB meat or BEEF meat tenderloin, onion, green pepper, garlic and jalapeno cooked to perfection", price: "$21.99" },
    { name: "Tibs Firfir", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwDbmvWsJ6M0lM13bb9QZU561V0QFaI5EkQ&s", description: "Beef stew cooked with or without authentic Ethiopian spicy hot sauce, onion, tomato, garlic tossed with Injera (keye firfir or Alicha)", price: "$21.99" },
    { name: "DJ Tibs", src: "/assets/food_images/House Special/Special Combo.jpg", description: "NY stripe meat and Tenderloin, (cooked on Biremitad) with onion, jalapeno cooked to perfection", price: "$21.99" },
    { name: "Awaze Tibs", src: "https://www.foodandwine.com/thmb/0piUlHYl2IN3w9u0LGe-7J8oIa0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201211-xl-ethiopian-spiced-lamb-stew-4cdc19c90b3f4f96bd9cc238af254ea6.jpg", description: "With the choice of chopped LAMB meat or BEEF meat minced with authentic Ethiopian spicy hot sauce, onion, garlic and jalapeno cooked to perfection", price: "$21.99" },
    { name: "Geba Wota", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGvJ1Xcw-7BE62Z6IGel1v5nXtn43DNpWzg&s", description: "Tenderloin beef bites, onion, and jalapeno cooked to perfection cooked medium or well", price: "$21.99" },
    { name: "Kitfo", src: "https://farm8.staticflickr.com/7415/10246497835_d04907092a_o.jpg", description: "Lean beef mixed with mitmita, butter, homemade cheese (Served Raw, Medium, Well)", price: "$20.99" },
    { name: "Yetash Kitfo", src: "https://migrationology.com/wp-content/uploads/2013/10/kitfo1.jpg", description: "Minced lean beef, mitmita, butter, homemade cheese and gomen (Served Raw, Medium, well)", price: "$24.99" },
    { name: "Dulet", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUyH1_cWJsxUlAAgSUhSggWaQ8UdpEGxveFg&s", description: "Lamb tripe, kidney, liver, lean meat, onion, garlic, jalapeno, clarified butter and mitmita (Served: raw, medium, well)", price: "$21.99" },
    { name: "Dinich Besiga", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWanpeKWUKXY-8I9d5VaOMZjNkQMyGTkMkPg&s", description: "Beef, potato with onion, green pepper, garlic and jalapeno cooked to perfection", price: "$23.99" },
    { name: "Kikil", src: "https://img.freepik.com/premium-photo/gulai-tunjang-kikil-gulai-kaki-sapi-is-popular-spicy-cow-s-trotter-curry-padang-indonesia_581937-4068.jpg", description: "Lamb shank cooked with onion, garlic and ginger, tossed with Injera", price: "$21.99" },
    { name: "Quanta firfir", src: "https://www.allrecipes.com/thmb/gfbqCTcO4G6ZBS-Bf9YFhv84KnU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7723714-49c38cbe4eaa45a58febeac802dbb695.jpg", description: "Hydrated beef meat cooked with onion, tomato, garlic tossed with Injera (authentic Ethiopian spicy hot sauce)", price: "$21.99" },
    { name: "Zigni", src: "https://www.endofthefork.com/wp-content/uploads/2021/03/1200x1200-zigni-overhead.jpg", description: "Minced meat, onion, tomato garlic cooked with authentic Ethiopian pepper cooked medium or well done", price: "$19.99" },
    { name: "Gomen Besega", src: "https://farm8.staticflickr.com/7295/10304237836_0822c47d60_o.jpg", description: "Lamb shank cooked with gomen (collard green), onion, garlic and ginger, tossed with Injera", price: "$21.99" },
    { name: "Doro Wot", src: "https://www.diversivore.com/wp-content/uploads/2023/05/Doro-Wat-banner-1-1500x900.jpg", description: "Traditional chicken drumstick, onion, with hard boiled egg cooked to perfection", price: "$19.99" },
    { name: "Pasta with Tomato Sauce", src: "https://www.everyday-delicious.com/wp-content/uploads/2022/09/spaghetti-pomodoro-from-the-bear-everyday-delicious-1.jpg", description: "Pasta served with tomato sauce", price: "$11.99" },
    { name: "Pasta with Meat Sauce", src: "https://www.sandravalvassori.com/wp-content/uploads/2024/01/Spaghetti-Meat-Sauce-100-2.jpg", description: "Pasta served with meat sauce", price: "$13.99" },
    { name: "Pasta with Cutlet Sauce", src: "https://www.julieseatsandtreats.com/wp-content/uploads/2021/09/Baked-Chicken-Parmesan-12-of-12-730x1097.jpg", description: "Pasta served with cutlet sauce", price: "$18.99" },
    { name: "Bozena Shiro", src: "https://i0.wp.com/elfegnedc.com/wp-content/uploads/2022/07/Key-wot-1.jpg", description: "Well done chicken drumstick, onion with hard boiled egg cooked to perfection", price: "$21.99" },
    { name: "Kurt", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjn98PATKaKeFHbN3lGCb3jmRJkaoxATBvJcMrRo4DHShgiUheE6fsf6i_BlBZh-yEMyNJI0fRus_KXZPPQlCBedIbXNWunjOhAMnNBEMF4ORZ-XQan8kdnay5_JtrBFZzqlyu6kIH290TrEy3CDX2lCQxy4fs71NoBlN5FV47o0IpjWRSvGHlYKk8QdI/s554/IMG-20240518-WA0044.jpg", description: "Raw beef served with awaze (authentic Ethiopian spicy hot sauce and mustard) (1lb)", price: "$21.99" },
  ],
  "Vegetarian Entrees": [
    { name: "combo", src: "/assets/food_images/Vegetarians/combo.jpg", description: "A combination of vegetarian stews and vegetables.", price: "$18.99" },
    { name: "Firfir", src: "/assets/food_images/Vegetarians/Firfir.jpg", description: "Injera pieces mixed with spicy vegetarian sauce.", price: "$17.99" },
    { name: "Special Vegi Combo", src: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/1dd15514-b480-48bb-9386-702703570152-retina-large.jpg", description: "Shiro, keek alecha, misir wott, collard green, cabbage and salad (WELL COOKED)", price: "$32.99" },
    { name: "Mitin Shiro", src: "https://static.wixstatic.com/media/fa00aa_ff265a3c4b1f4baf880ea8a5f92d66ca~mv2.jpg/v1/fill/w_740,h_578,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fa00aa_ff265a3c4b1f4baf880ea8a5f92d66ca~mv2.jpg", description: "Milled chickpeas stew cooked with aromatic Ethiopian spices/herbs", price: "$17.99" },
    { name: "Suf Fitfit", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwDsqU_IAza0sM04ktNnvO_1ib9-R4J4S5kA&s", description: "Finely grounded sunflower seeds tossed in shredded injera, olive oil, jalapenos and onion", price: "$11.99" },
    { name: "Timatim Fitfit", src: "https://i.pinimg.com/736x/c5/22/18/c52218622ced88a3377ad417749103bb.jpg", description: "Fresh tomato, onion, green pepper tossed with injera", price: "$12.99" },
    { name: "Dinich Besiga", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWanpeKWUKXY-8I9d5VaOMZjNkQMyGTkMkPg&s", description: "Potato with onion, green pepper, garlic and jalapeno cooked to perfection", price: "$23.99" },
  ],
  "House Special": [
    { name: "Balagger Combo", src: "/assets/food_images/House Special/Special Combo.jpg", description: "A special combination of house favorites.", price: "$27.99" },
    { name: "Kornis", src: "/assets/food_images/House Special/Special Combo.jpg", description: "Ye tsome firfir topped with thick stripe of ribeye cooked to perfection.", price: "$29.99" },
    { name: "Ya'ager Combo", src: "/assets/food_images/House Special/kornis.JPG", description: "Combination of Kitfo, dulet, tibs, scrambled egg, cabbage, collared green and homemade cheese, served with Injera and bread", price: "$53.99" },
    { name: "Yaa'ger Kitfo", src: "/assets/food_images/House Special/Special Combo.jpg", description: "Combination of kitfo, dulet, tibs, scrambled egg, cabbage, collared green and homemade cheese; served with injera and bread", price: "$53.99" },
    { name: "Yetashe Kitfo", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl17rhr_Mk_9_VL_-y0FQl35LWZ5AXQ79Rig&s", description: "Minced lean beef, mitmita, butter, homemade cheese and gomen (served Raw, Medium, well)", price: "$24.99" },
    { name: "Shekal Tibs", src: "https://media.cnn.com/api/v1/images/stellar/prod/190205144959-shekla-tibs.jpg", description: "Pieces of ribeye meat cooked with jalapinho, onion served with injera", price: "$21.99" },
    { name: "Special Gored Gored", src: "https://bluenileethiopian.com/wp-content/uploads/2023/09/gored-gored-blue-nile.jpg", description: "Chunks of lean beef mixed with mitmita, jalopeno, homemade butter and cheese served on top of special shiro (served raw, medium, well)", price: "$24.99" },
  ],
  Fish: [
    { name: "Balagger Salad", src: "/assets/food_images/FISH/Balagger Salad.jpg", description: "Fresh salad with grilled fish fillet.", price: "$9.99" },
    { name: "assa gulash", src: "/assets/food_images/FISH/assa gulash.jpg", description: "Fish stew cooked with Ethiopian spices.", price: "$19.99" },
    { name: "Assa-Dulet", src: "/assets/food_images/FISH/Assa-Dulet.jpg", description: "Minced fish sautéed with onions, peppers, and spices.", price: "$19.99" },
    { name: "Assa Cotlet(two)", src: "https://static.vecteezy.com/system/resources/previews/038/461/591/large_2x/fish-cutlet-fish-fry-served-with-sauce-onion-and-potato-on-a-white-plate-sea-fish-fowl-cutlet-free-photo.jpg", description: "Breaded fish filet served with rice and salad", price: "$11.99" },
    { name: "Whole Fish", src: "https://www.masterfoods.co.nz/cdn-cgi/image/width=1360,height=583,f=auto,quality=90/sites/g/files/fnmzdf2066/files/2022-09/WHOLE%20BAKED%20GLAZED%20FISH%20WITH%20STEAMED%20FRAGRANCES.jpg", description: "Well fried tilapia fish with lemon", price: "$11.99" },
  ],
  Sides: [
    { name: "Misir", src: "/assets/food_images/Sides/Misir.jpg", description: "Red lentil stew with berbere sauce.", price: "$4.99" },
    { name: "Kik Alcha", src: "/assets/food_images/Sides/Kik Alcha.jpg", description: "Yellow split peas cooked with turmeric and mild spices.", price: "$4.99" },
    { name: "Shiro", src: "/assets/food_images/Sides/Shiro.jpg", description: "Chickpea flour stew with garlic and spices.", price: "$4.99" },
    { name: "Gomen(Colardgreen)", src: "https://africanbites.com/wp-content/uploads/2015/10/IMG_60211.jpg", description: "Traditional Ethiopian collard greens", price: "$4.99" },
    { name: "Cabbage", src: "https://www.hungertaskforce.org/wp-content/uploads/2024/01/2024.02-ethiopian-cabbage-9x6-1.jpg", description: "Fresh Ethiopian cabbage", price: "$4.99" },
    { name: "Cheese(Ethiopian Ayib)", src: "https://tarasmulticulturaltable.com/wp-content/uploads/2019/09/Ayib-Ethiopian-Homemade-Fresh-Cheese-4-of-7.jpg", description: "Traditional Ethiopian homemade fresh cheese", price: "$4.99" },
  ],
  "Add on": [
    { name: "Ethiopian Injera", src: "https://www.thespicehouse.com/cdn/shop/articles/Injera_720x.jpg", description: "Traditional Ethiopian sourdough flatbread", price: "$3.95" },
    { name: "Local Injera", src: "https://static.vecteezy.com/system/resources/previews/059/695/219/non_2x/a-stack-of-traditional-ethiopian-injera-bread-on-a-white-plate-showcasing-its-unique-texture-and-holes-png.png", description: "Local style Ethiopian flatbread", price: "$1.50" },
    { name: "Bread", src: "https://panlasangpinoy.com/wp-content/uploads/2009/08/Pandesal-1.jpg", description: "Fresh bread", price: "$1.50" },
    { name: "Kocha", src: "https://ethiopianfood.wordpress.com/wp-content/uploads/2011/06/qocho1.jpg", description: "Traditional Ethiopian bread made from enset", price: "$3.95" },
    { name: "Sinig", src: "https://i.ytimg.com/vi/CAm5bVBjyCg/sddefault.jpg", description: "Traditional Ethiopian spice blend", price: "$0.75" },
    { name: "Hard boiled Egg", src: "https://www.garnishandglaze.com/wp-content/uploads/2022/03/hard-boiled-eggs-9.jpg", description: "Fresh hard boiled egg", price: "$0.75" },
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
        <div className="flex justify-center mb-6 md:mb-6">
          <a
            href="https://www.clover.com/online-ordering/balagger-restaurant-falls-church"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex justify-center"
          >
            <Button
              className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold shadow-lg px-8 py-3 text-lg rounded-full transition-all duration-300 animate-glow"
              size="lg"
              style={{ boxShadow: '0 0 32px 0 #facc15aa, 0 0 8px 0 #facc15cc' }}
            >
              Order Online
            </Button>
          </a>
        </div>
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
