import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Stethoscope, GraduationCap, CheckCircle } from "lucide-react";
import heroBg from "@/assets/certification-hero.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Professional Certification Preparation" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20" />
      </div>

      {/* Decorative Blobs (Subtle) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl animate-gradient-shift" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            International Career Certification Programs
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 animate-fade-in font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-7xl" style={{ animationDelay: "0.1s" }}>
            Build Your Global Career with{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent">
              Certified Courses
            </span>
          </h1>

          {/* Subtext */}
          <p className="mb-8 animate-fade-in text-lg text-muted-foreground md:text-xl leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Expert IELTS, OET & NEET preparation tailored for professionals and students looking to excel abroad. 
            We manage the complete end-to-end journey from enrollment to your final certification.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 animate-fade-in sm:flex-row mb-12" style={{ animationDelay: "0.3s" }}>
            <Button
              variant="hero"
              size="xl"
              className="w-full sm:w-auto shadow-lg shadow-primary/20"
              onClick={() => scrollToSection("enquiry")}
            >
              Enquire Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="w-full sm:w-auto border-2"
              onClick={() => scrollToSection("courses")}
            >
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators (Professionally aligned left) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Globe, value: "5,000+", label: "Successful Students" },
              { icon: CheckCircle, value: "98%", label: "Success Rate" },
              { icon: Globe, value: "15+", label: "Major Countries" },
              { icon: Stethoscope, value: "24/7", label: "Expert Support" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-start">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs md:text-sm font-medium text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
