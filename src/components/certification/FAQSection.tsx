import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is included in the IELTS course fee of ₹9,999?",
      answer:
        "The IELTS course fee includes comprehensive study materials, mock tests, personalized feedback, expert-led training sessions, and complete enrollment support. No hidden charges.",
    },
    {
      question: "What does the OET course at ₹14,999 cover?",
      answer:
        "The OET course covers all four modules — Listening, Reading, Writing, and Speaking — tailored for healthcare professionals. Includes specialized medical vocabulary training and practice tests.",
    },
    {
      question: "Do I need any prior qualifications for IELTS?",
      answer:
        "No specific educational qualifications are required. You need to be at least 16 years of age with a basic understanding of English and a valid ID proof.",
    },
    {
      question: "Who is eligible for the OET course?",
      answer:
        "OET is designed for healthcare professionals including nurses, doctors, and allied health workers planning to work abroad. Basic English communication skills are required.",
    },
    {
      question: "Are the certifications internationally recognized?",
      answer:
        "Yes, IELTS is accepted by 11,000+ organizations in 140+ countries. OET is recognized by healthcare regulators in the UK, Australia, New Zealand, Ireland, Singapore, Dubai, and more.",
    },
    {
      question: "How does the enrollment process work?",
      answer:
        "Fill out the enquiry form or contact us directly. Our team will guide you through course selection, handle documentation, coordinate with training centers, and support you until certification.",
    },
  ];

  return (
    <section id="faq" className="bg-background py-6 md:py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Common questions about our certification courses.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-card px-4 md:px-6 transition-all duration-300 hover:border-primary/30 data-[state=open]:border-primary/50 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="py-4 text-left text-sm md:text-base font-semibold text-foreground hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
                  <div className="flex items-center gap-2 md:gap-3">
                    <HelpCircle className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-primary" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 pl-6 md:pl-8 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
