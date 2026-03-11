import { useState } from "react";
import { Mail, Lock, Globe, CheckCircle, X } from "lucide-react";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Send via mailto
    const mailtoLink = `mailto:jobsterra.app@gmail.com?subject=Waitlist Signup&body=New waitlist signup: ${encodeURIComponent(email)}`;
    window.open(mailtoLink, "_blank");

    setShowToast(true);
    setEmail("");

    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <>
      {/* Toast */}
      {showToast && (
        <div className="fixed top-6 right-6 z-[1000] animate-slide-in">
          <div className="glass-card rounded-2xl p-5 shadow-elevated flex items-start gap-4 max-w-sm">
            <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shrink-0">
              <CheckCircle size={20} className="text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm">Successfully Registered!</p>
              <p className="text-muted-foreground text-xs mt-1">
                You have successfully joined the Jobsterra waitlist.
              </p>
            </div>
            <button onClick={() => setShowToast(false)} className="text-muted-foreground hover:text-foreground">
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      <section id="waitlist" className="py-20 md:py-28 hero-pattern relative overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Level Up Your <span className="gradient-text">Career.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
              Be among the first to experience the fastest job discovery tool ever built. No ads, no noise, just your future.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8">
              <div className="flex items-center gap-3 flex-1 bg-card border border-border rounded-xl px-4 py-3.5 shadow-soft focus-within:ring-2 focus-within:ring-primary/30 transition-shadow">
                <Mail size={18} className="text-muted-foreground shrink-0" />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <button
                type="submit"
                className="gradient-bg gradient-bg-hover text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shrink-0 shadow-soft"
              >
                Notify Me
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Lock size={14} className="brand-blue-text" /> Private Beta
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={14} className="brand-green-text" /> Zero Fees
              </span>
              <span className="flex items-center gap-2">
                <Globe size={14} className="brand-blue-text" /> Global Access
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WaitlistSection;
