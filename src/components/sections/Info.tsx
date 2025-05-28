import { useState, useRef } from "react";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_4xyypio";
const TEMPLATE_ID = "template_mn5edsc";
const PUBLIC_KEY = "cImHHNy21N6I0XM9V";

export const Info = () => {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setResult(null);
    if (!formRef.current) return;
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setResult("Message sent successfully!");
          setSending(false);
          formRef.current?.reset();
        },
        (error) => {
          setResult("Failed to send message. Please try again.");
          setSending(false);
        }
      );
  };

  return (
    <section id="contact-section" className="py-24 px-4">
      <h2 className="text-4xl font-extrabold text-center text-green-900 mb-16 animate-fade-in">Contact</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Clock className="h-8 w-8 text-green-600 transition-transform duration-300 hover:scale-125 hover:animate-bounce" />
          </div>
          <h3 className="text-xl font-medium text-green-900">Hours</h3>
          <p className="text-green-600">
            Monday - Friday: 11am - 10pm
            <br />
            Saturday: 11am - 11pm
            <br />
            Sunday: 12pm - 9pm
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <MapPin className="h-8 w-8 text-green-600 transition-transform duration-300 hover:scale-125 hover:animate-bounce" />
          </div>
          <h3 className="text-xl font-medium text-green-900">Location</h3>
          <p className="text-green-600">
            3813 S George Mason Dr
            <br />
            Suite - E & F
            <br />
            Falls Church, VA 22041
          </p>
        </div>
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Phone className="h-8 w-8 text-green-600 transition-transform duration-300 hover:scale-125 hover:animate-bounce" />
          </div>
          <h3 className="text-xl font-medium text-green-900">Phone</h3>
          <p className="text-green-600">(703) 555-0123</p>
        </div>
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Mail className="h-8 w-8 text-green-600 transition-transform duration-300 hover:scale-125 hover:animate-bounce" />
          </div>
          <h3 className="text-xl font-medium text-green-900">Email</h3>
          <p className="text-green-600">info@balagger.com</p>
        </div>
      </div>
      {/* Animated Map Preview */}
      <div className="max-w-2xl mx-auto mt-16 rounded-lg overflow-hidden shadow-lg animate-zoom-in">
        <iframe
          title="Restaurant Location"
          width="100%"
          height="300"
          frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.4771711501947!2d-77.15731678429268!3d38.84045035747291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b3c3c6b3b1d9%3A0x3c4c5c5c5c5c5c5c!2s3813+S+George+Mason+Dr%2C+Falls+Church%2C+VA+22041!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          className="transition-transform duration-700 scale-90 hover:scale-100"
        ></iframe>
      </div>
      <div className="flex justify-center mt-10">
        <Button className="bg-green-600 text-white hover:bg-green-700 shadow-lg" size="lg" onClick={() => setOpen(true)}>
          Send Message
        </Button>
      </div>
      {/* Contact Form Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Send us a Message</DialogTitle>
          </DialogHeader>
          <form ref={formRef} className="space-y-4" onSubmit={handleSend}>
            <input name="user_name" type="text" placeholder="Your Name" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
            <input name="user_email" type="email" placeholder="Your Email" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
            <textarea name="message" placeholder="Your Message" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" rows={4} required />
            <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700" disabled={sending}>
              {sending ? "Sending..." : "Send"}
            </Button>
            {result && <div className={`text-center mt-2 ${result.includes('success') ? 'text-green-600' : 'text-red-600'}`}>{result}</div>}
          </form>
        </DialogContent>
      </Dialog>
      {/* Animations */}
      <style>{`
        .animate-zoom-in {
          animation: zoomIn 1.2s cubic-bezier(.77,0,.18,1) both;
        }
        @keyframes zoomIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};
