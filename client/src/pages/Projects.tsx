import { motion } from "framer-motion";
import { Building2, Utensils, Calendar } from "lucide-react";

export default function Projects() {
  const projects = [
    { name: "Raj Darbar Restaurant", location: "West Bengal", year: "2024", type: "restaurant" },
    { name: "Bangla Canvas Restaurant", location: "Delhi / Noida", year: "2023", type: "restaurant" },
    { name: "Narkelkunja Island Resort", location: "Tripura", year: "2022", type: "hotel" },
    { name: "My Chef Cloud Kitchen", location: "Mumbai", year: "2022", type: "restaurant" },
    { name: "Hotel Daltin (3 Star)", location: "New Digha", year: "2021", type: "hotel" },
    { name: "Kaftaan Cloud Kitchen", location: "Garia", year: "2019", type: "restaurant" },
    { name: "Dharuchini Restaurant & Banquet", location: "West Bengal", year: "2018", type: "restaurant" },
    { name: "The Bhoj Company Restaurant", location: "Kolkata", year: "2017", type: "restaurant" },
    { name: "Belini Multi Cuisine Restobar", location: "Guwahati", year: "2016", type: "restaurant" },
    { name: "Master Chefs Restaurant", location: "West Bengal", year: "2014", type: "restaurant" },
    { name: "Venky Residency (3 Star Hotel)", location: "Kakinada", year: "2011", type: "hotel" }
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
              Our Legacy
            </span>
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Completed <span className="text-gradient-gold italic">Projects</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              A timeline of our successful collaborations across the hospitality industry, delivering excellence from coast to coast.
            </p>
          </motion.div>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-primary/20 transform md:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-12 relative z-10">
            {projects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col sm:flex-row items-center gap-6 md:gap-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Box */}
                  <div className="w-full sm:w-[calc(100%-4rem)] md:w-1/2">
                    <div className="glass-card p-6 md:p-8 rounded-2xl relative group">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-serif text-white mb-2 group-hover:text-primary transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-white/60 text-sm">{project.location}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          {project.type === "hotel" ? <Building2 size={18} /> : <Utensils size={18} />}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-primary font-medium text-sm mt-6">
                        <Calendar size={14} />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden sm:flex absolute left-[28px] md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-[7px] md:-translate-x-1/2 shadow-[0_0_15px_rgba(251,191,36,0.6)]" />
                  
                  {/* Empty space for alternate side on desktop */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}