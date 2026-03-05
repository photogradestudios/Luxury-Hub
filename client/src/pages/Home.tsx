import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChefHat, Building2, Users, UtensilsCrossed } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.png";

// Service cards for the homepage
const services = [
  {
    title: "Hotel Consultancy",
    icon: Building2,
    desc: "End-to-end consulting from room amenities to complete hotel operations.",
    link: "/services#hotel",
    image: "https://images.unsplash.com/photo-1542314831-c6a4d14d8857?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Restaurant Consultancy",
    icon: ChefHat,
    desc: "Menu planning, kitchen layout, and operational SOP development.",
    link: "/services#restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Manpower Supply",
    icon: Users,
    desc: "Premium staff selection and training for hospitality excellence.",
    link: "/services#manpower",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Food Gallery",
    icon: UtensilsCrossed,
    desc: "Explore our curated culinary creations and menu designs.",
    link: "/gallery",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background z-10" />
          <img 
            src={heroBg} 
            alt="Luxury Hospitality Consulting" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-6 block">
              Visitor Care Consultancy
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-tight mb-8">
              Transforming <br />
              <span className="text-gradient-gold italic">Hospitality</span> Businesses
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              Premium international consulting for hotels, restaurants, and food & beverage operations globally.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold tracking-wide hover:bg-yellow-500 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                Get Consultancy
              </Link>
              <Link href="/services" className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-full font-semibold tracking-wide hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
                Explore Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid (Clickable Cover Sections) */}
      <section className="py-32 relative z-20 -mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link href={service.link} className="group relative block h-[400px] rounded-2xl overflow-hidden glass-card">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center mb-6 text-primary border-primary/20">
                        <service.icon size={24} />
                      </div>
                      <h3 className="text-3xl font-serif text-white mb-3">{service.title}</h3>
                      <p className="text-white/70 text-sm max-w-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {service.desc}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
                        Explore <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Teaser Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop" 
                alt="Luxury Hotel Lobby" 
                className="w-full h-[600px] object-cover rounded-2xl glass-panel relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 glass-panel p-8 rounded-xl z-20 hidden md:block">
                <div className="text-4xl font-serif text-gradient-gold font-bold mb-2">10+</div>
                <div className="text-sm text-white/70 uppercase tracking-wider">Years of<br/>Excellence</div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <span className="text-primary font-semibold tracking-[0.2em] uppercase text-sm">About VCC</span>
              <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
                Partners in Every <span className="text-gradient-gold italic">Success</span>
              </h2>
              <p className="text-white/60 leading-relaxed text-lg">
                We are a premium consultancy firm specializing in end-to-end hospitality solutions. From conceptualizing a new restaurant to standardizing hotel operations, our expertise ensures your business thrives in a competitive market.
              </p>
              <ul className="space-y-4">
                {[
                  "Expertise in Food & Beverage consultancy",
                  "Experience launching hospitality businesses",
                  "End-to-end consulting from concept to operations",
                  "Support for national and international projects"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center gap-2 text-white border-b border-primary pb-1 hover:text-primary transition-colors">
                  Read our full story <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif text-white mb-6">Why Choose Us</h2>
            <p className="text-white/60">Comprehensive solutions tailored for high-end hospitality brands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "End-to-end Consultancy", icon: Building2 },
              { title: "Menu Planning & Trials", icon: UtensilsCrossed },
              { title: "Kitchen Layout Design", icon: ChefHat },
              { title: "Operational SOPs", icon: Users },
            ].map((feature, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <feature.icon size={28} />
                </div>
                <h4 className="text-lg font-serif text-white mb-3">{feature.title}</h4>
                <div className="w-8 h-1 bg-primary/30 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}