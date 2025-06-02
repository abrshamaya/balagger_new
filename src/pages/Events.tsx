import { useState } from "react";
import { Footer } from "@/components/sections/Footer";
import { Navigation } from "@/components/sections/Navigation";
import { Music, Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import emailjs from "emailjs-com";

const events = [
  {
    day: "Friday",
    time: "8:00 PM - Late",
    title: "Live Band Performance",
    description: "Experience the vibrant sounds of Ethiopian music with our live band every Friday night! Enjoy great food, drinks, and an unforgettable atmosphere.",
    icon: <Music className="w-8 h-8 text-yellow-500" />,
  },
  {
    day: "Saturday",
    time: "8:00 PM - Late",
    title: "Live Band Performance",
    description: "Join us every Saturday for another night of energetic live music, delicious cuisine, and a lively crowd. Perfect for friends and family!",
    icon: <Music className="w-8 h-8 text-pink-500" />,
  },
];

const Events = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", date: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          message: `<b>TABLE RESERVATION REQUEST</b><br>Name: ${form.name}<br>Email: ${form.email}<br>Date: ${form.date}`,
        },
        "cImHHNy21N6I0XM9V"
      );
      setFeedback("Reservation request sent successfully!");
      setForm({ name: "", email: "", date: "" });
    } catch (error) {
      setFeedback("Failed to send reservation request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-pink-100 pt-24 pb-12">
      <Navigation />
      <section className="max-w-3xl mx-auto px-4 text-center mt-12 mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-900 mb-6 drop-shadow-lg">Events & Live Music</h1>
        <p className="text-lg md:text-xl text-pink-700 mb-8 max-w-2xl mx-auto">
          Join us every Friday and Saturday for live band performances! Enjoy authentic Ethiopian cuisine, great company, and a vibrant atmosphere.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {events.map((event, idx) => (
            <Card key={idx} className="p-8 bg-white/90 shadow-2xl rounded-3xl flex flex-col items-center gap-4 border-t-4 border-yellow-400 hover:border-pink-400 transition-all duration-300">
              <img
                src={idx === 0 ? '/assets/friday.jpg' : '/assets/saturday.jpg'}
                alt={event.day + ' event'}
                className={`w-full h-64 object-cover rounded-2xl shadow-lg mb-4 border-4 border-yellow-200 ${idx === 0 ? 'object-[0_10%]' : ''}`}
              />
              {event.icon}
              <h2 className="text-2xl font-bold text-pink-900 mb-1">{event.title}</h2>
              <div className="flex items-center gap-2 text-pink-700 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">{event.day}</span>
                <Clock className="w-5 h-5 ml-4" />
                <span>{event.time}</span>
              </div>
              <p className="text-pink-700 mb-4 text-base">{event.description}</p>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-6 py-2 rounded-full shadow-lg transition-all duration-300" size="lg" onClick={() => setOpen(true)}>
                Reserve a Table
              </Button>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <p className="text-pink-800 font-semibold">Don't miss out on the best nights of the week—bring your friends and family!</p>
        </div>
      </section>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Reserve a Table</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-pink-900 mb-1">Name</label>
              <Input id="name" type="text" placeholder="Your name" className="bg-white/50" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-pink-900 mb-1">Email</label>
              <Input id="email" type="email" placeholder="Your email" className="bg-white/50" value={form.email} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-pink-900 mb-1">Date</label>
              <Input id="date" type="date" className="bg-white/50" value={form.date} onChange={handleChange} required />
            </div>
            <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white" disabled={loading}>
              {loading ? "Sending..." : "Send Reservation Request"}
            </Button>
            {feedback && (
              <div className={`text-center mt-2 ${feedback.includes("success") ? "text-green-600" : "text-red-600"}`}>{feedback}</div>
            )}
          </form>
        </DialogContent>
      </Dialog>
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

export default Events; 