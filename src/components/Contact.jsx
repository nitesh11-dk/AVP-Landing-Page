import React, { useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState({ show: false, text: "", type: "" });

  const showAlert = (alertInfo) => {
    setAlert(alertInfo);
  };

  const hideAlert = () => {
    setAlert({ show: false, text: "", type: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Komal Thambe",
          from_email: form.email,
          to_email: "Komaltambe152005@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message! We will get back to you shortly 😊",
            type: "success",
          });

          setTimeout(() => {
            hideAlert();
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({
            show: true,
            text: "Message could not be sent. Please try again later 😢",
            type: "error",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our dance classes? Ready to start your dance
            journey? Drop us a message!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                Visit Us
              </h3>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Aher Sports Complex</p>
                  <p>Opposite to Aher Garden</p>
                  <p>Maharashtra 411033</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <Clock className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <p className="text-gray-400">Mon-Sat: 4:00 PM - 9:00 PM</p>
              </div>

              <a
                href="https://maps.app.goo.gl/YOUR_MAP_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                View on Google Maps
              </a>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <p className="text-gray-400">+91 123 456 7890</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <p className="text-gray-400">info@avpdance.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <p className="text-gray-400">
                    Classes: Mon-Sat 4:00 PM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 bg-white/10 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 bg-white/10 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 bg-white/10 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors h-32"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {alert.show && (
            <div
              className={`mt-6 p-4 rounded-lg ${
                alert.type === "success"
                  ? "bg-green-500/20 text-green-200"
                  : "bg-red-500/20 text-red-200"
              }`}
            >
              {alert.text}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
