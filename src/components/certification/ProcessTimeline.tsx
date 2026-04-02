import { Search, FileCheck, CheckCircle, BookOpen, PenTool, Award, Rocket, Send } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    { icon: Search, title: "Explore & Select", description: "Browse courses and choose based on your eligibility" },
    { icon: FileCheck, title: "Enroll & Submit Docs", description: "Submit enrollment request and documents" },
    { icon: CheckCircle, title: "Verification", description: "Our team verifies and processes your application" },
    { icon: Send, title: "Application Filing", description: "We submit your application to the training center" },
    { icon: BookOpen, title: "Training & Exam", description: "Complete training and appear for the exam" },
    { icon: Award, title: "Certification", description: "Receive your internationally recognized certification" },
  ];

  return (
    <section id="process" className="bg-secondary/30 py-6 md:py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Complete Lifecycle
          </span>
          <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            From Enrollment to Certification
          </h2>
          <p className="text-muted-foreground md:text-lg">
            We handle every step of your journey, ensuring a smooth and hassle-free experience.
          </p>
        </div>

        {/* Steps Grid — clean card layout */}
        <div className="mx-auto max-w-5xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative flex items-start gap-4 rounded-xl border border-border bg-card p-4 md:p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              {/* Step Number Badge */}
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-md">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <step.icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <h3 className="font-semibold text-foreground text-sm">{step.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
