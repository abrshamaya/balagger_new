
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export const Info = () => {
  return (
    <section id="contact-section" className="py-24 px-4">
      <h2 className="text-4xl font-light text-center text-green-900 mb-16">Contact</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Clock className="h-8 w-8 text-green-600" />
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
            <MapPin className="h-8 w-8 text-green-600" />
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
            <Phone className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-medium text-green-900">Phone</h3>
          <p className="text-green-600">(703) 555-0123</p>
        </div>
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Mail className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-medium text-green-900">Email</h3>
          <p className="text-green-600">info@balagger.com</p>
        </div>
      </div>
    </section>
  );
};
