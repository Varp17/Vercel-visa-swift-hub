import { Shield, Clock, HeadphonesIcon, Users, Smartphone, Award } from "lucide-react";

const WhyUsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Single Point of Contact",
      description: "We handle everything from enrollment to certification.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Personalized guidance throughout your journey.",
    },
    {
      icon: Clock,
      title: "Time-Saving Process",
      description: "Streamlined processes that save you time.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Updates",
      description: "Track your status with real-time updates.",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "24/7 support for all your queries.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "5,000+ enrollments with 98% success rate.",
    },
  ];

  return (
    <section id="why-us" className="bg-background py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </span>
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              The Simplest Way to Start Your Global Career
            </h2>
            <p className="mb-6 text-muted-foreground md:text-lg">
              We've created a platform that handles everything for you, so you can focus on 
              what matters most – your preparation and success.
            </p>

            {/* Stats — white text on purple bg */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-primary p-4 text-center">
                <div className="text-2xl font-bold text-white md:text-3xl">5K+</div>
                <div className="text-sm text-white/80">Students</div>
              </div>
              <div className="rounded-xl bg-primary p-4 text-center">
                <div className="text-2xl font-bold text-white md:text-3xl">98%</div>
                <div className="text-sm text-white/80">Success</div>
              </div>
              <div className="rounded-xl bg-primary p-4 text-center">
                <div className="text-2xl font-bold text-white md:text-3xl">15+</div>
                <div className="text-sm text-white/80">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid gap-3 grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
