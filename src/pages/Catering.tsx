import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/sections/Navigation";
import { Mail } from "lucide-react";

const cateringImages = [
  "/assets/catering/1.JPG",
  "/assets/catering/2.JPG",
  "/assets/catering/3.jpg",
  "/assets/catering/4.jpg",
  "/assets/catering/5.JPG",
  "/assets/catering/6.WEBP",
];

export const Catering = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);
    try {
      await emailjs.send(
        "service_4xyypio",
        "template_mn5edsc",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          request_type: "Catering Request",
        },
        "cImHHNy21N6I0XM9V"
      );
      setFeedback("Catering request sent successfully!");
      setForm({ name: "", email: "", message: "", phone: "" });
    } catch (error) {
      setFeedback("Failed to send catering request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100 pt-24 pb-12">
      <Navigation />
      <section className="w-full max-w-6xl mx-auto px-2 sm:px-4 text-center mt-12 mb-16 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 mb-6 drop-shadow-lg">Catering Services</h1>
        <p className="text-base sm:text-lg md:text-xl text-green-700 mb-8 max-w-2xl mx-auto">
          Make your next event unforgettable with Balagger's authentic Ethiopian catering! Whether it's a corporate gathering, wedding, birthday, or special celebration, we bring the rich flavors and vibrant culture of Ethiopia right to your table. Enjoy a curated menu, professional service, and a unique culinary experience your guests will love.
        </p>
        {/* Image Gallery */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {cateringImages.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-lg group h-48 sm:h-56 flex items-center justify-center bg-white">
              <img
                src={src}
                alt={`Catering dish ${idx + 1}`}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <Card className="p-4 sm:p-8 bg-white/90 shadow-2xl rounded-3xl mx-auto w-full max-w-lg">
          <div className="flex flex-col items-center gap-4">
            <Mail className="w-12 h-12 text-green-600 mb-2 animate-bounce" />
            <h2 className="text-xl sm:text-2xl font-bold text-green-900 mb-2">Catering Request Form</h2>
            <p className="text-green-700 mb-4 text-sm sm:text-base">Fill out the form below and we'll get back to you with a custom quote and menu.</p>
            <form className="w-full space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-green-900 mb-1">Name</label>
                <Input id="name" type="text" placeholder="Your name" className="bg-white/50" value={form.name} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-green-900 mb-1">Email</label>
                <Input id="email" type="email" placeholder="Your email" className="bg-white/50" value={form.email} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-green-900 mb-1">Phone Number (optional)</label>
                <Input id="phone" type="tel" placeholder="Your phone number" className="bg-white/50" value={form.phone || ''} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-green-900 mb-1">Event Details</label>
                <Textarea id="message" placeholder="Tell us about your event, date, number of guests, and any special requests..." className="bg-white/50 min-h-[120px] sm:min-h-[150px]" value={form.message} onChange={handleChange} required />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={loading}>
                {loading ? "Sending..." : "Send Catering Request"}
              </Button>
              {feedback && (
                <div className={`text-center mt-2 ${feedback.includes("success") ? "text-green-600" : "text-red-600"}`}>{feedback}</div>
              )}
            </form>
          </div>
        </Card>
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
};

export default Catering; 