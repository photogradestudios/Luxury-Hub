import { motion } from "framer-motion";
import { BedDouble, ChefHat, ClipboardList, Users, Coffee } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      id: "hotel",
      icon: BedDouble,
      title: "Hotel Consultancy",
      description: "Comprehensive planning and management for luxury accommodations.",
      items: [
        "Room amenities planning",
        "Room costing",
        "Room tariff budgeting",
        "Mini bar setup",
        "Hotel software management"
      ],
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "restaurant",
      icon: ChefHat,
      title: "Restaurant Consultancy",
      description: "Elevating culinary experiences through meticulous design and strategy.",
      items: [
        "Menu planning",
        "Kitchen equipment procurement",
        "Food costing systems",
        "Menu trials and presentation",
        "Kitchen operations SOP"
      ],
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "operations",
      icon: ClipboardList,
      title: "Hospitality Operations",
      description: "Streamlining back-of-house processes for maximum efficiency.",
      items: [
        "Food receiving system",
        "Food storage systems",
        "Inventory control",
        "Kitchen workflow optimization"
      ],
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const beverages = [
    { name: "Masala Chai", desc: "Spiced Indian tea brewed with aromatic spices and milk." },
    { name: "Mango Lassi", desc: "Creamy yogurt drink blended with sweet ripe mangoes." },
    { name: "Filter Coffee", desc: "Traditional South Indian strong coffee brewed with chicory." },
    { name: "Rose Milk", desc: "Chilled milk infused with fragrant rose syrup." },
    { name: "Jaljeera", desc: "Refreshing cumin and mint flavored cooling drink." },
    { name: "Sugarcane Juice", desc: "Freshly pressed sweet juice with a hint of ginger and lemon." },
    { name: "Badam Milk", desc: "Rich almond flavored milk garnished with saffron and nuts." }
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
              Our Expertise
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Premium <span className="text-gradient-gold italic">Services</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Tailored consulting solutions spanning across hotel operations, restaurant conceptualization, and comprehensive hospitality management.
            </p>
          </motion.div>
        </div>

        {/* Services List */}
        <div className="space-y-24">
          {serviceCategories.map((service, idx) => (
            <motion.div 
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl glass-panel relative z-10"
                />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-primary border-primary/20">
                  <service.icon size={28} />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif text-white mb-4">{service.title}</h2>
                  <p className="text-white/60 text-lg">{service.description}</p>
                </div>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 glass-card p-4 rounded-xl">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

          {/* Manpower Section */}
          <motion.div 
            id="manpower"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12 lg:flex-row-reverse items-center pt-12"
          >
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop" 
                alt="Manpower Supply" 
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl glass-panel relative z-10"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-primary border-primary/20">
                <Users size={28} />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif text-white mb-4">Manpower Supply</h2>
                <p className="text-white/60 text-lg">Premium staff selection, training, and placement for hospitality excellence. We provide skilled professionals tailored to your brand's standards.</p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Executive Chefs", "F&B Managers", "Service Staff", "Housekeeping"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 glass-card p-4 rounded-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Beverage Menu Section */}
        <div className="mt-40">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-primary border-primary/20 mx-auto mb-6">
              <Coffee size={28} />
            </div>
            <h2 className="text-4xl font-serif text-white mb-4">Signature <span className="text-gradient-gold">Beverages</span></h2>
            <p className="text-white/60 text-lg">Curated drink concepts and menu design trials for your establishments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {beverages.map((bev, i) => (
              <motion.div 
                key={bev.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xl font-serif text-white mb-2">{bev.name}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{bev.desc}</p>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full mt-6" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}