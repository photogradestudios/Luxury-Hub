import { motion } from "framer-motion";
import { Award, Globe, Building, Target } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: "F&B Expertise",
      desc: "Unmatched expertise in Food & Beverage consultancy."
    },
    {
      icon: Building,
      title: "Proven Experience",
      desc: "Extensive experience launching successful hospitality businesses."
    },
    {
      icon: Target,
      title: "End-to-end Solutions",
      desc: "Complete consulting from concept inception to daily operations."
    },
    {
      icon: Globe,
      title: "Global Reach",
      desc: "Support for both national and international hospitality projects."
    }
  ];

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
              Discover VCC
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              About <span className="text-gradient-gold italic">Us</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              We are architects of hospitality excellence. Visitor Care Consultancy transforms visionary concepts into world-class dining and lodging experiences.
            </p>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif text-white">
              Crafting Premium Experiences
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              At Visitor Care Consultancy, we don't just advise; we partner in your success. With a profound understanding of the global hospitality landscape, our team brings a wealth of knowledge to every project.
            </p>
            <p className="text-white/70 leading-relaxed text-lg">
              From the initial blueprint of a kitchen layout to the meticulous planning of room amenities, our end-to-end solutions are designed to elevate your brand. We ensure operational efficiency, financial viability, and a luxury guest experience that stands the test of time.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1551882547-ff40c0d5e9af?q=80&w=1200&auto=format&fit=crop" 
              alt="Consulting Meeting" 
              className="w-full h-[500px] object-cover rounded-2xl glass-panel relative z-10"
            />
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1) }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}