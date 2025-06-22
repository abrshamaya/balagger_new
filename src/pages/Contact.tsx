import { useState } from "react";
import emailjs from "emailjs-com";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

export const Contact = () => {
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
        "service_4xyypio", // <-- Your EmailJS service ID
        "template_mn5edsc", // <-- Your EmailJS template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
          phone: form.phone,
        },
        "cImHHNy21N6I0XM9V" // <-- Your EmailJS public key
      );
      setFeedback("Message sent successfully!");
      setForm({ name: "", email: "", message: "", phone: "" });
    } catch (error) {
      setFeedback("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100 pt-24 pb-12">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-900">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/80 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-green-900">Get in Touch</h2>
              <div className="space-y-4">
                <a 
                  href="tel:+17033797799" 
                  className="flex items-center space-x-3 text-green-700 hover:text-green-900 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(703) 379-7799</span>
                </a>
                <a 
                  href="mailto:info@balagger.com" 
                  className="flex items-center space-x-3 text-green-700 hover:text-green-900 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@balagger.com</span>
                </a>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=3813+S+George+Mason+Dr+Suite+-+E+%26+F,+Falls+Church,+VA+22041" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-green-700 hover:text-green-900 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span>3813 S George Mason Dr Suite - E & F, Falls Church, VA 22041</span>
                </a>
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
                </div>
                <div className="flex items-center space-x-3 text-green-700">
                  <Clock className="w-5 h-5" />
                  <div>
                    <p>Mon - Thu: 11:00 AM - 2:00 PM</p>
                    <p>Fri - Sat: 11:00 AM - 2:00 PM</p>
                    <p>Sun: 12:00 PM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-green-900">Follow Us</h2>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/balaggerva/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-900 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.tiktok.com/@balaggerva" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-900 transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/balaggerRVA/?profile_tab_item_selected=mentions&_rdr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-900 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-white/80 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-green-900">Send us a Message</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                <label htmlFor="message" className="block text-sm font-medium text-green-900 mb-1">Message</label>
                <Textarea id="message" placeholder="Your message" className="bg-white/50 min-h-[150px]" value={form.message} onChange={handleChange} required />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
              {feedback && (
                <div className={`text-center mt-2 ${feedback.includes("success") ? "text-green-600" : "text-red-600"}`}>{feedback}</div>
              )}
            </form>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 