import { Layers, ShieldCheck, ClipboardList } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "One Unified Feed",
    description:
      "Stop switching between tabs. Jobsterra aggregates listings from across the web into a single, clean interface.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Opportunities Only",
    description:
      "Our smart filtering system eliminates scams and duplicate listings, ensuring you only see genuine career-defining roles.",
  },
  {
    icon: ClipboardList,
    title: "Application Tracking",
    description:
      "Keep track of every application you send. See your progress and get reminders to follow up directly in-app.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text + cards */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Designed for the{" "}
              <br />
              <span className="gradient-text">Modern Job Seeker</span>
            </h2>
            <div className="w-20 h-1 gradient-bg rounded-full mb-10" />

            <div className="space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-5 p-5 rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-elevated transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl brand-blue-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon size={22} className="brand-blue-text" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: App mockup */}
          <div className="flex justify-center">
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

const AppMockup = () => {
  const sources = [
    { letter: "G", name: "Google Jobs", count: "2.4M jobs", color: "bg-brand-blue" },
    { letter: "L", name: "LinkedIn", count: "1.8M jobs", color: "gradient-bg" },
    { letter: "M", name: "Monster", count: "900K jobs", color: "bg-brand-green" },
  ];

  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-8 rounded-[3rem] bg-brand-blue/5 blur-2xl" />

      {/* Phone frame */}
      <div className="relative bg-foreground rounded-[2.5rem] p-3 app-mockup-glow">
        <div className="bg-card rounded-[2rem] overflow-hidden w-72">
          {/* Header */}
          <div className="gradient-bg px-5 py-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-foreground text-sm font-bold">Jobsterra</p>
                <p className="text-primary-foreground/60 text-xs mt-0.5">Job Aggregator</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">JT</span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="px-4 -mt-3">
            <div className="bg-card rounded-xl shadow-card px-4 py-3 flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-brand-blue" />
              <span className="text-xs text-muted-foreground">Search jobs...</span>
            </div>
          </div>

          {/* Sources */}
          <div className="px-4 pt-4 pb-3">
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Sources Connected
            </p>
            <div className="space-y-2.5">
              {sources.map((source) => (
                <div key={source.letter} className="flex items-center gap-3 p-2.5 rounded-xl bg-muted/50 border border-border/40">
                  <div className={`w-8 h-8 ${source.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-primary-foreground text-xs font-bold">{source.letter}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold">{source.name}</p>
                    <p className="text-[10px] text-muted-foreground">{source.count}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-brand-green" />
                </div>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div className="mx-4 mb-4 gradient-bg rounded-xl p-3 flex items-center justify-between">
            <div className="text-center">
              <p className="text-primary-foreground text-sm font-bold">5.1M</p>
              <p className="text-primary-foreground/60 text-[9px]">Total Jobs</p>
            </div>
            <div className="w-px h-6 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-primary-foreground text-sm font-bold">40+</p>
              <p className="text-primary-foreground/60 text-[9px]">Countries</p>
            </div>
            <div className="w-px h-6 bg-primary-foreground/20" />
            <div className="text-center">
              <p className="text-primary-foreground text-sm font-bold">Live</p>
              <p className="text-primary-foreground/60 text-[9px]">Updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
