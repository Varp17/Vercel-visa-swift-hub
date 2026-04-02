import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-preview.jpg";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="RIA Consultants Team" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-xl p-6 border border-border max-w-[200px]">
              <p className="text-3xl font-bold text-primary mb-1">15+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Your Trusted Partner in{" "}
              <span className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent">
                Visa Solutions
              </span>
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              RIA Consultants has been helping thousands of travelers realize their dreams of exploring the world. 
              With over 15 years of experience, we specialize in providing comprehensive visa consultancy services 
              for tourist, business, and corporate travel needs.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of expert consultants ensures a smooth, hassle-free visa application process, keeping you 
              informed every step of the way.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 rounded-lg p-2">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Trusted Service</p>
                  <p className="text-xs text-muted-foreground">Secure & Reliable</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-accent/10 rounded-lg p-2">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Expert Team</p>
                  <p className="text-xs text-muted-foreground">Professional Guidance</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 rounded-lg p-2">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">98% Success</p>
                  <p className="text-xs text-muted-foreground">Proven Track Record</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link to="/contact">
              <Button variant="cta" size="lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
