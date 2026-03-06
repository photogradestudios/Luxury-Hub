import { motion } from "framer-motion";
import { Building2, Bed, Coffee, CheckCircle } from "lucide-react";

export default function Hotel() {
  const hotelImages = [
    "/images/hotel/hotel/Screenshot 2026-03-05 163536.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163547.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163554.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163600.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163704.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163714.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163722.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163729.png",
  ];

  return (
    <div className="w-full pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Premium Hospitality</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">Hotel <span className="text-gradient-gold italic">Consultancy</span></h1>
            <p className="text-white/70 text-lg leading-relaxed">Elevating luxury lodging through strategic planning, operational excellence, and unmatched guest experience design.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {["Luxury Room Planning", "Staff Training", "Operational SOPs", "Inventory Systems"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle className="text-primary" size={18} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
            <div className="relative glass-panel p-4 rounded-3xl border border-white/10">
              <img src={hotelImages[0]} className="w-full h-[500px] object-cover rounded-2xl shadow-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotelImages.slice(1).map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl glass-panel group border border-white/5"
            >
              <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <Bed className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}