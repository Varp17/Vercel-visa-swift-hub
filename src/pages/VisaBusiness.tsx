import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Briefcase, Clock, DollarSign, FileText, CheckCircle2, MessageCircle, Smartphone } from "lucide-react";

const VisaBusiness = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Business Visa Services - RIA Consultants</title>
        <meta 
          name="description" 
          content="Professional business visa services for meetings, conferences, and trade visits. Expert guidance for your international business travel needs." 
        />
      </Helmet>

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-accent to-primary text-white overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.4,
            }}
          >
            {/* Darker overlay for better text and button readability */}
            {/* <div className="absolute inset-0 bg-black/50 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/70 to-primary/70 z-0"></div> */}
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl">
              <div className="inline-block mb-4">
                <span className="bg-white/30 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Business Visa
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
                Business Visa Services
              </h1>
              <p className="text-xl text-white mb-8 drop-shadow-md">
                Expand your business globally with professional support for business meetings, conferences, and trade visits across borders.
              </p>
              <div className="flex flex-wrap gap-4 relative z-30">
                <Link to="/contact#contactFrom">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="bg-white text-white hover:bg-white/90 hover:scale-105 transition-all shadow-xl font-semibold relative z-30"
                  >
                    Book Consultation
                  </Button>
                </Link>
                <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-all shadow-xl font-semibold relative z-30"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  What is a Business Visa?
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A business visa allows professionals to travel internationally for business-related activities such as 
                  attending meetings, conferences, negotiations, or exploring business opportunities. Unlike work visas, 
                  business visas are for short-term stays and do not permit employment in the host country.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our specialized business visa services ensure your application meets all requirements, helping you focus 
                  on your business objectives while we handle the visa complexities.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Ideal For</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🤝", label: "Business Meetings" },
                    { icon: "🎤", label: "Conferences" },
                    { icon: "📊", label: "Trade Visits" },
                    { icon: "💼", label: "Short-term Work" },
                  ].map((item, index) => (
                    <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                      <div className="text-4xl mb-2">{item.icon}</div>
                      <p className="font-semibold">{item.label}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Eligibility Requirements
            </h2>
            <div className="max-w-3xl mx-auto">
              <Card className="p-8">
                <ul className="space-y-4">
                  {[
                    "Valid passport with minimum 6 months validity",
                    "Invitation letter from business partner/host company",
                    "Proof of business relationship or purpose",
                    "Company registration and business documents",
                    "Financial statements showing business viability",
                    "Travel itinerary and accommodation proof",
                    "Previous business travel history (if applicable)",
                    "No intention to seek employment during visit"
                  ].map((criterion, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Processing Info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Processing Information
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-accent/10 mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Processing Time</h3>
                <p className="text-2xl font-bold text-accent mb-2">7-21 Days</p>
                <p className="text-sm text-muted-foreground">
                  Expedited options available
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Service Fees</h3>
                <p className="text-2xl font-bold text-primary mb-2">₹7,500+</p>
                <p className="text-sm text-muted-foreground">
                  Varies by country & urgency
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-accent/10 mb-4">
                  <FileText className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Validity</h3>
                <p className="text-2xl font-bold text-accent mb-2">Up to 5 Years</p>
                <p className="text-sm text-muted-foreground">
                  Multiple entry options
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Required Documents
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                "Valid passport with blank pages",
                "Business visa application form",
                "Passport-size photographs",
                "Invitation letter from host company",
                "Company registration certificate",
                "Business profile/brochure",
                "Bank statements (6 months)",
                "Income tax returns (2-3 years)",
                "Travel insurance",
                "Proof of accommodation",
                "Flight itinerary",
                "Previous visa copies (if any)"
              ].map((doc, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="bg-accent/10 rounded-lg p-2">
                      <FileText className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-medium">{doc}</span>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-sm font-semibold text-accent">
                📱 Securely upload all documents via our mobile app
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-accent to-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Expand Your Business Globally?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get expert assistance for your business visa application today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact#contactFrom">
                <Button variant="hero" size="lg" className="bg-white text-white hover:bg-white/90">
                  Book Consultation
                </Button>
              </Link>
              <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-2 border-white text-black hover:bg-white/10">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start on WhatsApp
                </Button>
              </a>
              <Button variant="outline" size="lg" className="border-2 border-white text-black hover:bg-white/10">
                <Smartphone className="mr-2 h-5 w-5" />
                Download App
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VisaBusiness;
