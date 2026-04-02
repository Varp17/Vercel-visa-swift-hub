import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Globe, Stethoscope, GraduationCap } from "lucide-react";

const CourseCards = () => {
  const scrollToEnquiry = () => {
    const element = document.getElementById("enquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const courses = [
    {
      id: "ielts",
      icon: Globe,
      title: "IELTS",
      subtitle: "Training, Exam & Certification",
      price: "₹9,999",
      priceLabel: "Complete Package",
      description: "The world's most popular English language proficiency test for higher education and global migration.",
      purpose: "Validates English proficiency for work, study, or migration.",
      eligibility: [
        "Minimum 16 years of age",
        "Basic English understanding",
        "Valid ID proof",
      ],
      opportunities: ["Care workers in UK", "Nurses in Australia/Canada", "Hotel management abroad"],
    },
    {
      id: "oet",
      icon: Stethoscope,
      title: "OET",
      subtitle: "Training, Exam & Certification",
      price: "₹14,999",
      priceLabel: "Complete Package",
      description: "Specifically designed for healthcare professionals seeking to practice in English-speaking countries.",
      purpose: "Specialized English test for healthcare professionals.",
      eligibility: [
        "Healthcare professional qualification",
        "Planning to work in healthcare abroad",
        "Basic English communication skills",
      ],
      opportunities: ["Staff nurses in NHS (UK)", "Registered nurses in Australia", "Medical professionals in UAE"],
    },
    {
      id: "neet",
      icon: GraduationCap,
      title: "NEET",
      subtitle: "Training Only",
      price: "Contact Us",
      priceLabel: "For Pricing",
      description: "India's premier medical entrance examination for admission to MBBS, BDS, and other medical courses.",
      purpose: "Comprehensive preparation to crack NEET and secure medical admission.",
      eligibility: [
        "Class 12 with PCB",
        "Minimum 50% aggregate",
        "Age: 17-25 years",
      ],
      opportunities: ["Government medical colleges", "Private medical universities", "International MBBS programs"],
    },
  ];

  return (
    <section id="courses" className="bg-secondary/30 py-6 md:py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Available Courses
          </span>
          <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Choose Your Path to Success
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Internationally recognized certification courses for global career opportunities.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 p-5 text-primary-foreground">
                <div className="mb-3 inline-flex rounded-xl bg-primary-foreground/20 p-2.5">
                  <course.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{course.title}</h3>
                <p className="text-sm text-primary-foreground/80">{course.subtitle}</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-2xl font-bold">{course.price}</span>
                  <span className="pb-0.5 text-xs text-primary-foreground/70">{course.priceLabel}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-3 text-sm text-muted-foreground">{course.description}</p>
                
                {/* Purpose */}
                <div className="mb-3 rounded-lg bg-accent/10 p-3">
                  <h4 className="mb-1 text-xs font-semibold uppercase text-primary">Purpose</h4>
                  <p className="text-xs text-foreground">{course.purpose}</p>
                </div>

                {/* Eligibility */}
                <div className="mb-3">
                  <h4 className="mb-2 text-xs font-semibold uppercase text-primary">Eligibility</h4>
                  <ul className="space-y-1.5">
                    {course.eligibility.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Opportunities */}
                <div className="mb-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase text-primary">Opportunities</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {course.opportunities.map((opp, i) => (
                      <span key={i} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-foreground">
                        {opp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Button
                    variant="hero"
                    className="w-full"
                    onClick={scrollToEnquiry}
                  >
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCards;
