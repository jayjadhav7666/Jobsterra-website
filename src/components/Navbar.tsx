import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/jobsterra-logo.png";

const navLinks = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Our Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Jobsterra logo" className="h-14" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#waitlist"
          className="hidden md:inline-flex gradient-bg gradient-bg-hover text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-soft"
        >
          Early Access
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-card border-t border-border/50 px-6 py-4 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="block mt-3 gradient-bg text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold text-center"
            onClick={() => setMobileOpen(false)}
          >
            Early Access
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
