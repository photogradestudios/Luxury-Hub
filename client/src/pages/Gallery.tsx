import { motion } from "framer-motion";
import { useState } from "react";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"food" | "hotel" | "beverages">("food");

  const foodImages = [
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.09 PM.jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.16 PM.jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.28 PM (1).jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.29 PM (2).jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.30 PM.jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.31 PM (2).jpeg",
  ];

  const hotelImages = [
    "/images/hotel/hotel/Screenshot 2026-03-05 163536.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163547.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163554.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163600.png",
  ];

  const beverageMenu = [
    { name: "Signature Masala Chai", price: "Premium", img: "/images/beverages/chai.png", desc: "Aromatic blend of hand-picked spices and heritage tea leaves." },
    { name: "Royal Mango Lassi", price: "Luxury", img: "/images/beverages/lassi.png", desc: "Velvety Alphonso mangoes whisked with artisan yogurt." },
    { name: "Filter Coffee Gold", price: "Classic", img: "/images/beverages/coffee.png", desc: "Pure Arabica beans slow-brewed in traditional brass filters." },
  ];

  return (
    <div className="w-full pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">Visual Excellence</span>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">Our <span className="text-gradient-gold italic">Gallery</span></h1>
            
            <div className="inline-flex glass-panel p-1 rounded-full mt-8">
              {["food", "hotel", "beverages"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                    activeTab === tab ? "bg-primary text-primary-foreground shadow-lg" : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {activeTab !== "beverages" ? (
          <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {(activeTab === "food" ? foodImages : hotelImages).map((src, idx) => (
              <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-2xl glass-panel border border-white/5">
                <img src={src} className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beverageMenu.map((bev, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} className="glass-card overflow-hidden rounded-3xl border border-white/10 group">
                <div className="h-64 overflow-hidden">
                  <img src={bev.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-serif text-white">{bev.name}</h3>
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">{bev.price}</span>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{bev.desc}</p>
                  <div className="w-full h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}