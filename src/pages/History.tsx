import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/sections/Navigation";
import { Card } from "@/components/ui/card";

const historySections = [
  {
    year: "2013",
    title: "The Dream Begins",
    text: "Balagger was founded with a vision to bring authentic Ethiopian cuisine and culture to the local community. Our journey started in a small kitchen, fueled by passion and tradition.",
    img: "/assets/history_2.jpg",
  },
  {
    year: "2015",
    title: "Growing Roots",
    text: "Word spread quickly, and Balagger became a beloved spot for both locals and visitors. We expanded our menu and welcomed new faces to our family.",
    img: "/assets/history_3.jpg",
  },
  {
    year: "2018",
    title: "A Hub for Culture",
    text: "Our restaurant became more than just a place to eat—it became a hub for Ethiopian music, art, and community events, celebrating our rich heritage.",
    img: "/assets/history_4.jpg",
  },
  {
    year: "2025",
    title: "Looking Forward",
    text: "Today, Balagger continues to innovate while staying true to its roots. We are grateful for our loyal customers and look forward to many more years of sharing our story.",
    img: "/assets/history_5.jpeg",
  },
];

const History = () => (
  <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-yellow-100 pt-24 pb-12">
    <Navigation />
    <section className="max-w-4xl mx-auto px-4 text-center mt-12 mb-16 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 drop-shadow-lg">Our Story</h1>
      <p className="text-lg md:text-xl text-green-700 mb-8 max-w-2xl mx-auto">
        Discover the journey of Balagger—from humble beginnings to a vibrant center of Ethiopian culture and cuisine.
      </p>
      <div className="space-y-16">
        {historySections.map((section, idx) => (
          <div key={section.year} className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-16`}>
            <div className="md:w-1/2 w-full">
              <img src={section.img} alt={section.title} className="w-full aspect-[9/16] object-cover rounded-3xl shadow-lg border-4 border-green-200" />
            </div>
            <div className="md:w-1/2 w-full text-left md:text-left">
              <Card className="p-6 bg-white/90 shadow-xl rounded-2xl">
                <h2 className="text-2xl font-bold text-green-900 mb-2">{section.title} <span className="text-green-600 text-lg font-normal">({section.year})</span></h2>
                <p className="text-green-700 text-base md:text-lg">{section.text}</p>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    <style>{`
      .animate-fade-in {
        animation: fadeIn 1.2s cubic-bezier(.77,0,.18,1) both;
      }
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </div>
);

export default History; 