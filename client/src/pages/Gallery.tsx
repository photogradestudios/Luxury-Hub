import { motion } from "framer-motion";
import { useState } from "react";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"food" | "hotel">("food");

  // Arrays of actual image paths derived from the zip extraction
  const foodImages = [
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.09 PM.jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.16 PM.jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.28 PM (1).jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.29 PM (2).jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.30 PM.jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.31 PM (2).jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.31 PM.jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.36 PM (2).jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.36 PM.jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.38 PM.jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.39 PM.jpeg",
    "/images/food/food/WhatsApp Image 2026-03-05 at 12.04.40 PM.jpeg",
  ];

  const hotelImages = [
    "/images/hotel/hotel/Screenshot 2026-03-05 163536.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163547.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163554.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163600.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163704.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163714.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163722.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163729.png",
    "/images/hotel/hotel/Screenshot 2026-03-05 163748.png",
  ];

  const displayImages = activeTab === "food" ? foodImages : hotelImages;

  return (
    <div className="w-full pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
              Visual Showcase
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Our <span className="text-gradient-gold italic">Gallery</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              A curated collection of culinary masterpieces and luxury hotel setups designed by our experts.
            </p>

            {/* Tabs */}
            <div className="inline-flex glass-panel p-1 rounded-full">
              <button
                onClick={() => setActiveTab("food")}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                  activeTab === "food" 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                Food Gallery
              </button>
              <button
                onClick={() => setActiveTab("hotel")}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                  activeTab === "hotel" 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                Hotel Showcase
              </button>
            </div>
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <motion.div 
          key={activeTab} // re-animate when tab changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          {displayImages.map((src, idx) => (
            <div key={idx} className="break-inside-avoid relative group overflow-hidden rounded-xl glass-panel">
              <img 
                src={src} 
                alt={`${activeTab} showcase ${idx + 1}`} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}