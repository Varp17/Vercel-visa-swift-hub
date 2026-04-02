import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Plane, Clock, DollarSign, FileText, CheckCircle2, MessageCircle, Smartphone } from "lucide-react";

const VisaTourist = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Tourist Visa Services - RIA Consultants</title>
        <meta 
          name="description" 
          content="Expert tourist visa services for leisure travel, family visits, and holiday trips worldwide. Get professional guidance for your tourist visa application." 
        />
      </Helmet>

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-[hsl(var(--primary-variant))] text-white overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0.4,
    }}
  >
    {/* Darker overlay for better text and button readability */}
    {/* <div className="absolute inset-0 bg-black/50 z-0"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-[hsl(var(--primary-variant))]/70 z-0"></div> */}
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-20">
    <div className="max-w-3xl">
      <div className="inline-block mb-4">
        <span className="bg-white/30 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
          Tourist Visa
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
        Tourist Visa Services
      </h1>
      <p className="text-xl text-white mb-8 drop-shadow-md">
        Explore the world with ease. Get expert assistance for your leisure and vacation travel visas to popular destinations worldwide.
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

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  What is a Tourist Visa?
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A tourist visa is a temporary travel document that allows you to visit a foreign country for leisure, 
                  vacation, sightseeing, or visiting family and friends. Tourist visas typically allow stays ranging from 
                  a few days to several months, depending on the destination country's regulations.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our expert consultants help you navigate the entire tourist visa application process, ensuring all 
                  documentation is accurate and complete for a successful application.
                </p>
                
                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                  <p className="text-sm font-semibold text-accent mb-2">Need Documents Uploaded?</p>
                  <p className="text-sm text-muted-foreground">
                    Download our mobile app to securely upload and manage your visa documents.
                  </p>
                  <Button variant="ghost" size="sm" className="mt-2 text-accent hover:text-accent">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Get the App
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Perfect For</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🏖️", label: "Leisure Travel" },
                    { icon: "👨‍👩‍👧‍👦", label: "Family Visits" },
                    { icon: "📸", label: "Tourism" },
                    { icon: "🎉", label: "Holiday Trips" },
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

        {/* Eligibility Criteria */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Eligibility Criteria
            </h2>
            <div className="max-w-3xl mx-auto">
              <Card className="p-8">
                <ul className="space-y-4">
                  {[
                    "Valid passport with at least 6 months validity from travel date",
                    "Proof of financial stability and sufficient funds for the trip",
                    "Confirmed travel itinerary (flight bookings, hotel reservations)",
                    "Travel insurance covering the destination country",
                    "Proof of ties to home country (employment, property ownership, family)",
                    "No criminal record or immigration violations",
                    "Clear intent to return after the visit"
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
              Processing Details
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Processing Time</h3>
                <p className="text-2xl font-bold text-primary mb-2">10-30 Days</p>
                <p className="text-sm text-muted-foreground">
                  Varies by destination country
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-accent/10 mb-4">
                  <DollarSign className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Indicative Fees</h3>
                <p className="text-2xl font-bold text-accent mb-2">₹5,000+</p>
                <p className="text-sm text-muted-foreground">
                  Depends on destination & service
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Documentation</h3>
                <p className="text-2xl font-bold text-primary mb-2">Complete</p>
                <p className="text-sm text-muted-foreground">
                  End-to-end document support
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Required Documents (General)
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                "Valid passport (original + copies)",
                "Completed visa application form",
                "Recent passport-size photographs",
                "Proof of travel arrangements",
                "Hotel booking confirmations",
                "Bank statements (last 6 months)",
                "Employment letter / Business proof",
                "Income tax returns",
                "Travel insurance certificate",
                "Cover letter stating purpose of visit"
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
              <p className="text-sm text-muted-foreground mb-4">
                *Document requirements may vary by destination country
              </p>
              <p className="text-sm font-semibold text-accent">
                📱 Upload documents securely via our mobile app
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Travel Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts guide you through the tourist visa application process
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

export default VisaTourist;
