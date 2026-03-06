import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@assets/vcm_1772737347052.jpeg";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Hotel", path: "/hotel" },
    { name: "Restaurant", path: "/restaurant" },
    { name: "Manpower", path: "/manpower" },
    { name: "Gallery", path: "/gallery" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-panel py-3" : "bg-black/20 backdrop-blur-sm py-5"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group shrink-0">
          <img src={logo} alt="VCC Logo" className="h-12 w-auto rounded-md object-contain shadow-lg border border-white/10" />
          <div className="hidden sm:flex flex-col border-l border-white/20 pl-4">
            <span className="text-lg font-serif font-bold text-white tracking-widest leading-none">VCC</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-1">Visitor Care Consultancy</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={cn(
                "text-[11px] xl:text-xs uppercase tracking-widest font-bold transition-all hover:text-primary relative py-1",
                location === link.path ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="bg-primary hover:bg-yellow-500 text-primary-foreground px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-primary/20 shrink-0 ml-4">
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-panel border-t border-white/10 flex flex-col p-8 gap-6 animate-in slide-in-from-top duration-300 bg-background/95">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-xl font-serif transition-colors py-2 border-b border-white/5",
                location === link.path ? "text-primary" : "text-white/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}