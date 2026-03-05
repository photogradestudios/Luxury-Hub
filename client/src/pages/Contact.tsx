import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="w-full pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Let's <span className="text-gradient-gold italic">Connect</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Ready to elevate your hospitality business? Reach out to our experts and start your journey towards excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-serif text-white mb-6 border-b border-white/10 pb-4">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone Number</h4>
                    <p className="text-white/60 text-sm">More information coming soon</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Address</h4>
                    <p className="text-white/60 text-sm">More information coming soon</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Office Location</h4>
                    <p className="text-white/60 text-sm">More information coming soon</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-6 rounded-xl flex items-center gap-3 text-lg">
                  <MessageCircle size={24} />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="glass-card p-8 md:p-10 rounded-2xl space-y-6">
              <h3 className="text-2xl font-serif text-white mb-2">Send an Inquiry</h3>
              <p className="text-white/60 text-sm mb-8">Fill out the form below and our team will get back to you shortly.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Service of Interest</label>
                  <select className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none">
                    <option value="" className="bg-background text-white">Select a service...</option>
                    <option value="hotel" className="bg-background text-white">Hotel Consultancy</option>
                    <option value="restaurant" className="bg-background text-white">Restaurant Consultancy</option>
                    <option value="operations" className="bg-background text-white">Hospitality Operations</option>
                    <option value="manpower" className="bg-background text-white">Manpower Supply</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>

              <Button type="button" className="w-full bg-primary hover:bg-yellow-500 text-primary-foreground py-6 rounded-xl font-semibold text-lg transition-all mt-4">
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20">
          <div className="w-full h-[400px] glass-panel rounded-2xl overflow-hidden relative group flex items-center justify-center">
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10 backdrop-blur-sm">
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-primary mb-4 opacity-50" />
                <p className="text-white/60 font-serif text-xl">Interactive Map Coming Soon</p>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
              alt="Map Background" 
              className="w-full h-full object-cover opacity-30 grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
}