import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Visa Consultancy" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
            Your Trusted Visa Consultant for{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent">
              Every Destination
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Apply for Tourist, Business, or Corporate Visas with expert guidance. 
            Simplified processes, faster approvals, and trusted service for all your travel needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/contact#contactFrom">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <a 
              href="https://wa.me/911234567890?text=Hi, I need help with visa consultation" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start on WhatsApp
              </Button>
            </a>

            
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 md:gap-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center space-x-2">
              <div className="bg-primary/10 rounded-full p-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">10,000+</p>
                <p className="text-xs text-muted-foreground">Visas Processed</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="bg-accent/10 rounded-full p-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">15+ Years</p>
                <p className="text-xs text-muted-foreground">Experience</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="bg-primary/10 rounded-full p-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">98%</p>
                <p className="text-xs text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
