import { CheckCircle2, FileText, UserCheck, Plane } from "lucide-react";

const steps = [
  {
    icon: CheckCircle2,
    number: "01",
    title: "Eligibility Check",
    description: "Quick assessment of your visa eligibility based on your travel plans and documentation."
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Expert Consultation",
    description: "Connect with our visa experts who will guide you through requirements and processes."
  },
  {
    icon: FileText,
    number: "03",
    title: "Application Support",
    description: "Complete application assistance with document verification and submission support."
  },
  {
    icon: Plane,
    number: "04",
    title: "Travel Ready",
    description: "Receive your visa and get ready to embark on your journey with confidence."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Four simple steps to get your visa approved and start your journey
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" style={{ top: '4rem' }} />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Card */}
                <div className="relative bg-card rounded-2xl p-6 border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex p-4 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
