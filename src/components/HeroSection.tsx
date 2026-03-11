import { Search, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-pattern pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold mb-8 animate-fade-up">
          <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
          The Future of Job Search is Here
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Discover Your Next{" "}
          <br />
          <span className="gradient-text">Great Career</span>
        </h1>

        {/* Subtext */}
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Aggregating millions of verified job listings from LinkedIn, Indeed, and Google Jobs into one seamless, high-speed experience.
        </p>

        {/* Search bar */}
        <div
          className="max-w-3xl mx-auto glass-card rounded-2xl p-2.5 flex flex-col md:flex-row gap-2.5 shadow-elevated animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex items-center gap-3 flex-1 bg-muted rounded-xl px-4 py-3.5">
            <Search size={20} className="text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Job title, skills, or keyword"
              className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-muted-foreground"
              readOnly
            />
          </div>
          <div className="flex items-center gap-3 flex-1 bg-muted rounded-xl px-4 py-3.5">
            <MapPin size={20} className="text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="City, state, or remote"
              className="bg-transparent outline-none w-full text-sm text-foreground placeholder:text-muted-foreground"
              readOnly
            />
          </div>
          <button className="gradient-bg gradient-bg-hover text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shrink-0 flex items-center gap-2">
            <Search size={18} />
            Search Jobs
          </button>
        </div>

        {/* Social proof */}
        <p
          className="text-muted-foreground text-sm mt-8 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Join <span className="font-bold text-foreground">5,000+</span> professionals waiting for the launch
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
