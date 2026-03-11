import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/jobsterra-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Jobsterra" className="h-14 brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              The bridge between top-tier talent and world-class opportunities. Empowering the workforce of tomorrow.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#how-it-works" className="hover:text-primary-foreground transition-colors">How it Works</a></li>
              <li><a href="#waitlist" className="hover:text-primary-foreground transition-colors">Early Access</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-4">Reach Out</h4>
            <div className="space-y-4">
              <a
                href="mailto:jobsterra.app@gmail.com"
                className="flex items-center gap-4 hover:text-primary-foreground transition-colors group"
              >
                <div className="brand-blue-bg p-3 rounded-xl group-hover:bg-brand-blue transition-all">
                  <Mail size={18} className="brand-blue-text group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-sm">jobsterra.app@gmail.com</span>
              </a>
              <a
                href="tel:+917666210348"
                className="flex items-center gap-4 hover:text-primary-foreground transition-colors group"
              >
                <div className="brand-blue-bg p-3 rounded-xl group-hover:bg-brand-blue transition-all">
                  <Phone size={18} className="brand-blue-text group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-sm">+91 7666210348</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="brand-blue-bg p-3 rounded-xl">
                  <MapPin size={18} className="brand-blue-text" />
                </div>
                <span className="text-sm">Pune, MH, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} Jobsterra. All Rights Reserved.</p>
          <p className="text-xs flex items-center gap-1.5">
            Built for <span className="gradient-text font-semibold">Global Success</span> 🌍
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
