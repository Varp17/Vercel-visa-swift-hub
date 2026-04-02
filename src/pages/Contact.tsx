import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Helmet } from "react-helmet";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    visaType: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const leadData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        source: "Website",
        status: "New",
        follow_up_date: null,
        tags: ["Contact Form"]
      };

      const response = await fetch(
        "https://vcrm-backend.vasifytech.com/api/website-leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "g9Mbl4Mr5iWC8eNsgibbG6zYz6qjXb"
          },
          body: JSON.stringify(leadData)
        }
      );

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Consultation Request Received!",
          description: "Our team will contact you within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          visaType: "",
          message: ""
        });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to submit form.",
        });
      }
    } catch (error) {
      console.error("Lead submit error:", error);

      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Us - RIA Consultants</title>
        <meta
          name="description"
          content="Get in touch with RIA Consultants for expert visa consultancy services. Book your consultation today."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Get Your Visa Sorted!
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Reach out to us for expert visa consultation and guidance
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-2">Mon-Sat: 9 AM - 6 PM</p>
                <a href="tel:+911234567890" className="text-primary font-semibold hover:underline">
                  +91 76985 83225
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-accent/10 mb-4">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-2">We'll respond within 24 hrs</p>
                <a href="mailto:info@riaconsultants.in" className="text-accent font-semibold hover:underline">
                  info@riaconsultants.in
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-2">Quick responses</p>
                <a
                  href="https://wa.me/911234567890?text=Hi, I need visa consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Chat Now
                </a>
              </Card>
            </div>

            {/* Form and Map Section */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <section id="contactFrom" >
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Book a Consultation
                  </h2>
                  <Card className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <Input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Country of Travel *</label>
                        <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="schengen">Schengen Countries</SelectItem>
                            <SelectItem value="uae">UAE</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Visa Type *</label>
                        <Select value={formData.visaType} onValueChange={(value) => setFormData({ ...formData, visaType: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select visa type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tourist">Tourist Visa</SelectItem>
                            <SelectItem value="business">Business Visa</SelectItem>
                            <SelectItem value="corporate">Corporate Visa</SelectItem>
                            <SelectItem value="student">Student Visa</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your travel plans and any specific requirements..."
                          rows={4}
                        />
                      </div>

                      <Button type="submit" variant="cta" size="lg" className="w-full">
                        Submit Consultation Request
                      </Button>
                    </form>
                  </Card>
                </div>
              </section>

              {/* Office Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Visit Our Office
                </h2>
                <Card className="p-8 mb-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-lg p-3">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          Office:- 40 <br />
                          4th floor sidheshwar paradise <br />
                          B/s bright school <br />
                          Harni-sama link road <br />
                          Harni <br />
                          Vadodara
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 rounded-lg p-3">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Map Placeholder */}
                <Card className="overflow-hidden h-80">
                  <iframe
                    src="https://maps.google.com/maps?q=22.342715935521888,73.21707115315343&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="RIA Consultants Office Location"
                  ></iframe>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
