import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, GraduationCap } from "lucide-react";

const CTASection = () => {
  const scrollToEnquiry = () => {
    const element = document.getElementById("enquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 py-6 md:py-10">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl animate-gradient-shift" />
        <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl animate-gradient-shift-reverse" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Icon — hidden on mobile */}
          <div className="mb-4 hidden sm:inline-flex rounded-2xl bg-primary-foreground/20 p-3">
            <GraduationCap className="h-10 w-10 text-primary-foreground" />
          </div>

          <h2 className="mb-3 font-heading text-2xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Ready to Start Your Journey?
          </h2>

          <p className="mb-6 text-primary-foreground/90 md:text-lg">
            Get in touch with our experts for personalized guidance on the right certification course.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button 
              size="lg" 
              className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl sm:w-auto"
              onClick={scrollToEnquiry}
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Get Started Today
            </Button>
            <a
              href="https://wa.me/917698583225?text=Hi, I'm interested in your certification courses. Please share more details."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="rounded-lg bg-primary-foreground/10 px-3 py-1.5 text-sm text-primary-foreground">
              📞 +91 76985 83225
            </div>
            <div className="rounded-lg bg-primary-foreground/10 px-3 py-1.5 text-sm text-primary-foreground">
              ✉️ info@riaconsultants.in
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
