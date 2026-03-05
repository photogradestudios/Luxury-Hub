export function Footer() {
  return (
    <footer className="bg-background/90 border-t border-white/10 pt-20 pb-10 mt-auto relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-3xl font-serif font-bold text-white tracking-wider">
              VCC<span className="text-primary">.</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premium modern luxury hospitality consulting. We transform hospitality businesses into successful enterprises globally.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-serif text-white">Services</h4>
            <ul className="space-y-3">
              <li><a href="/services" className="text-sm text-white/60 hover:text-primary transition-colors">Hotel Consultancy</a></li>
              <li><a href="/services" className="text-sm text-white/60 hover:text-primary transition-colors">Restaurant Consultancy</a></li>
              <li><a href="/services" className="text-sm text-white/60 hover:text-primary transition-colors">Hospitality Operations</a></li>
              <li><a href="/services" className="text-sm text-white/60 hover:text-primary transition-colors">Manpower Supply</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-sm text-white/60 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/projects" className="text-sm text-white/60 hover:text-primary transition-colors">Projects Completed</a></li>
              <li><a href="/gallery" className="text-sm text-white/60 hover:text-primary transition-colors">Food Gallery</a></li>
              <li><a href="/contact" className="text-sm text-white/60 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>More information coming soon</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Visitor Care Consultancy. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}