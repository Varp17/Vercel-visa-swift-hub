import { CheckCircle, FileText, Users, BookOpen, Award, Headphones } from "lucide-react";

const AboutProgram = () => {
  const services = [
    { icon: FileText, title: "Course Selection", description: "Personalized course recommendations based on your eligibility" },
    { icon: Users, title: "Application Support", description: "Complete assistance with application and documentation" },
    { icon: BookOpen, title: "Training Coordination", description: "Direct coordination with certified training centers" },
    { icon: CheckCircle, title: "Enrollment Management", description: "Hassle-free enrollment process handled by our team" },
    { icon: Award, title: "Study Materials", description: "Comprehensive study materials and resources" },
    { icon: Headphones, title: "Certification Support", description: "End-to-end support until you receive your certification" },
  ];

  return (
    <section id="about-program" className="bg-background py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              About the Program
            </span>
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Your Complete Career Enablement Partner
            </h2>
            <p className="mb-4 text-muted-foreground md:text-lg">
              Our certification programs are designed for individuals looking to make a career change 
              and explore overseas opportunities. Whether you're a healthcare professional, nurse, 
              or aspiring medical student, we have the right course for you.
            </p>
            <p className="hidden md:block text-muted-foreground">
              We don't just offer courses – we manage the complete end-to-end process, ensuring 
              you have a smooth journey from enrollment to certification and beyond.
            </p>

            {/* Key Points — white text on purple bg */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["Personalized Guidance", "Expert Trainers", "100% Support"].map((point) => (
                <div key={point} className="flex items-center gap-2 rounded-full bg-primary px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Grid — hidden on mobile, show only 4 on tablet */}
          <div className="hidden sm:grid gap-3 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">{service.title}</h3>
                <p className="text-xs text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProgram;
