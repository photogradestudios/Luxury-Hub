import { motion } from "framer-motion";
import { Users, Shield, Star, Globe } from "lucide-react";
import team1 from "@assets/WhatsApp_Image_2026-03-05_at_12.37.55_PM_1772783892065.jpeg";
import team2 from "@assets/WhatsApp_Image_2026-03-05_at_12.37.56_PM_1772783892066.jpeg";

export default function Manpower() {
  const teamImages = [team1, team2];
  
  const benefits = [
    { icon: Shield, title: "Verified Professionals", desc: "Every staff member undergoes rigorous background checks and skill assessments." },
    { icon: Star, title: "Expert Training", desc: "Our manpower is trained in international luxury hospitality standards." },
    { icon: Users, title: "Scaleable Solutions", desc: "From boutique cafes to mega-resorts, we provide staff for every scale." },
    { icon: Globe, title: "Global Placement", desc: "Recruiting and placing talent across India and the Middle East." }
  ];

  return (
    <div className="w-full pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Our Team</span>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Manpower <span className="text-gradient-gold italic">Supply</span></h1>
            <p className="text-white/60 text-lg leading-relaxed">Connecting world-class hospitality talent with premier establishments globally.</p>
          </motion.div>
        </div>

        {/* Team Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {teamImages.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl glass-panel"
            >
              <img src={src} alt={`VCC Team ${idx + 1}`} className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-serif text-2xl">Professional Culinary Team</p>
                <p className="text-primary text-sm uppercase tracking-widest mt-2">Excellence in Service</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-serif text-white mb-3">{benefit.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}