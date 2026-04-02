import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Send, Phone, Mail, User } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const EnquiryForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const leadData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        source: "Website - Certification Courses",
        status: "New",
        follow_up_date: null,
        tags: ["Certification Course Enquiry", formData.course],
      };

      const response = await fetch(
        "https://vcrm-backend.vasifytech.com/api/website-leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "g9Mbl4Mr5iWC8eNsgibbG6zYz6qjXb",
          },
          body: JSON.stringify(leadData),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Enquiry Submitted Successfully!",
          description: "Our team will contact you within 24 hours.",
        });
        setFormData({ name: "", phone: "", email: "", course: "" });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to submit enquiry.",
        });
      }
    } catch (error) {
      console.error("Enquiry submit error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="bg-secondary/30 py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Get In Touch
            </span>
            <h2 className="mb-4 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              Enquire About Our{" "}
              <span className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent">
                Certification Courses
              </span>
            </h2>
            <p className="mb-6 text-muted-foreground md:text-lg">
              Fill out the form and our expert team will get back to you within 24 hours.
            </p>

            {/* Contact Options — stacked on mobile */}
            <div className="space-y-3">
              <a
                href="tel:+917698583225"
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
              >
                <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Call Us</h4>
                  <p className="text-xs text-muted-foreground">+91 76985 83225</p>
                </div>
              </a>

              <a
                href="https://wa.me/917698583225?text=Hi, I'm interested in your certification courses."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-all duration-300 hover:border-green-500/50 hover:shadow-md"
              >
                <div className="rounded-lg bg-green-500/10 p-2.5 text-green-600">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">WhatsApp</h4>
                  <p className="text-xs text-muted-foreground">Quick responses</p>
                </div>
              </a>

              <a
                href="mailto:info@riaconsultants.in"
                className="hidden md:flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
              >
                <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Email Us</h4>
                  <p className="text-xs text-muted-foreground">info@riaconsultants.in</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <Card className="p-5 md:p-7 shadow-lg">
              <div className="mb-5">
                <h3 className="text-lg font-bold text-foreground">Course Enquiry Form</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  All fields marked with * are required
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Course Selection *
                  </label>
                  <Select
                    required
                    value={formData.course}
                    onValueChange={(value) => setFormData({ ...formData, course: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="IELTS">IELTS Training (₹9,999)</SelectItem>
                      <SelectItem value="OET">OET Certification (₹14,999)</SelectItem>
                      <SelectItem value="NEET">NEET Preparation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Enquiry
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
