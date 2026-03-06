import { motion } from "framer-motion";
import { Trophy, Star, MapPin, Calendar } from "lucide-react";

export default function Achievements() {
  const achievements = [
    { year: "2011", title: "Venky Residency Hotel Setup", location: "Andhra Pradesh", icon: Trophy },
    { year: "2014", title: "Master Chefs Restaurant & Qazi Banquet", location: "West Bengal", icon: Trophy },
    { year: "2016", title: "Belini Multi Cuisine Restobar", location: "Assam", icon: Trophy },
    { year: "2017", title: "Bhoj Company Restaurant", location: "Mumbai", icon: Trophy },
    { year: "2018", title: "Daruchini Restaurant & Banquet", location: "West Bengal", icon: Trophy },
    { year: "2019", title: "Kaftaan Cloud Kitchen", location: "West Bengal", icon: Trophy },
    { year: "2021", title: "Hotel Daltin Premium 3 Star", location: "Tripura", icon: Trophy },
    { year: "2022", title: "My Chef Cloud Kitchen & Narkelkunja Resort", location: "Delhi", icon: Trophy },
    { year: "2023", title: "Bangla Canvas Restaurant & Cafe", location: "Noida", icon: Trophy },
    { year: "2024", title: "Raj Darbar Restaurant & Banquet", location: "West Bengal", icon: Trophy },
  ];

  return (
    <div className="w-full pt-32 pb-24 min-h-screen bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Our Journey</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Achievement <span className="text-gradient-gold italic">Road</span></h1>
            <p className="text-white/60 text-lg">A decade of transforming hospitality dreams into successful realities across the nation.</p>
          </motion.div>
        </div>

        {/* Achievement Road */}
        <div className="relative max-w-5xl mx-auto py-20">
          {/* Animated Road Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-primary via-yellow-500/50 to-primary transform -translate-x-1/2 z-0"
          />

          <div className="space-y-32 relative z-10">
            {achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`flex items-center w-full ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content Card */}
                <div className={`w-1/2 ${idx % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all group">
                    <div className={`flex items-center gap-3 mb-4 ${idx % 2 === 0 ? "justify-end" : "justify-start"}`}>
                      <Calendar className="text-primary" size={18} />
                      <span className="text-2xl font-serif font-bold text-white">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <div className={`flex items-center gap-2 text-white/50 text-sm ${idx % 2 === 0 ? "justify-end" : "justify-start"}`}>
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Trophy Milestone */}
                <div className="relative flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-[0_0_30px_rgba(251,191,36,0.6)] z-20 cursor-pointer"
                  >
                    <Trophy size={28} />
                  </motion.div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-primary/30 animate-ping z-10" />
                </div>

                {/* Empty Side */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>

          {/* End Milestone */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-20"
          >
            <div className="glass-panel px-10 py-6 rounded-full border border-primary/30 text-center">
              <Star className="text-primary mx-auto mb-2 animate-spin-slow" />
              <p className="text-xl font-serif text-white">And many more to come...</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}