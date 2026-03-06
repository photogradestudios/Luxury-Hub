import { motion } from "framer-motion";
import { Utensils, ChefHat, Star, GlassWater } from "lucide-react";
import teamImg from "@assets/WhatsApp_Image_2026-03-05_at_12.37.55_PM_1772784221927.jpeg";

export default function Restaurant() {
  const foodImages = [
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.09 PM.jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.16 PM.jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.28 PM (1).jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.29 PM (2).jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.30 PM.jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.31 PM (2).jpeg",
  ];

  return (
    <div className="w-full pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <img src={teamImg} className="w-full h-[500px] object-cover rounded-3xl glass-panel relative z-10 shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl z-20 border border-primary/30">
              <ChefHat className="text-primary mb-2" size={32} />
              <p className="text-white font-serif text-xl font-bold">Expert Culinary Team</p>
              <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Mastery in Every Dish</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="order-1 lg:order-2 space-y-8 text-right lg:text-left">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Gastronomy Experts</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">Restaurant <span className="text-gradient-gold italic">Consultancy</span></h1>
            <p className="text-white/70 text-lg leading-relaxed">From concept development to menu engineering and kitchen optimization, we create high-performing restaurant brands.</p>
            <div className="flex flex-wrap gap-4 justify-end lg:justify-start">
              {["Menu Engineering", "Kitchen Layout", "Food Costing", "Cutlery Selection"].map((tag, i) => (
                <span key={i} className="px-5 py-2 glass-panel rounded-full text-xs font-bold uppercase tracking-widest text-white/80 border border-white/10 hover:border-primary/50 transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Food & Cutlery Showcase */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Culinary & <span className="text-gradient-gold">Tableware</span></h2>
          <p className="text-white/50">Meticulous attention to detail in every plate and presentation.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {foodImages.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-2xl glass-panel group border border-white/5"
            >
              <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}