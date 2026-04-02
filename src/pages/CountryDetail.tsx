import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { Clock, DollarSign, FileText, CheckCircle2, MessageCircle, Smartphone, Plane } from "lucide-react";

const countryData: Record<string, any> = {
  usa: {
    name: "United States",
    flag: "🇺🇸",
    description: "The United States offers various visa categories for tourists, business travelers, and students. The US visa process is thorough but streamlined with proper guidance.",
    visaTypes: [
      {
        type: "Tourist Visa (B-2)",
        processingTime: "15-30 days",
        validity: "Up to 10 years",
        fees: "₹12,800+",
        requirements: ["Valid passport", "DS-160 form", "Interview appointment", "Financial proof", "Travel itinerary"]
      },
      {
        type: "Business Visa (B-1)",
        processingTime: "15-30 days",
        validity: "Up to 10 years",
        fees: "₹12,800+",
        requirements: ["Valid passport", "DS-160 form", "Interview appointment", "Invitation letter", "Company documents"]
      }
    ]
  },
  uk: {
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "UK visas are available for various purposes including tourism, business, and work. The UK immigration system is points-based for many categories.",
    visaTypes: [
      {
        type: "Standard Visitor Visa",
        processingTime: "15-21 days",
        validity: "6 months to 10 years",
        fees: "₹11,000+",
        requirements: ["Valid passport", "Online application", "Biometric appointment", "Financial proof", "Accommodation proof"]
      },
      {
        type: "Business Visitor Visa",
        processingTime: "15-21 days",
        validity: "6 months",
        fees: "₹11,000+",
        requirements: ["Valid passport", "Invitation letter", "Business documents", "Financial proof", "Travel plan"]
      }
    ]
  },
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    description: "Canada offers straightforward visa processes for tourists and business travelers, with options for both temporary and long-term stays.",
    visaTypes: [
      {
        type: "Visitor Visa (TRV)",
        processingTime: "20-40 days",
        validity: "Up to 10 years",
        fees: "₹8,500+",
        requirements: ["Valid passport", "Online application", "Biometrics", "Financial proof", "Travel history"]
      },
      {
        type: "Business Visitor Visa",
        processingTime: "20-40 days",
        validity: "Up to 10 years",
        fees: "₹8,500+",
        requirements: ["Valid passport", "Invitation letter", "Business ties proof", "Financial proof"]
      }
    ]
  },
  schengen: {
    name: "Schengen",
    flag: "🇪🇺",
    description: "The Schengen visa allows travel to 26 European countries with a single visa, making it ideal for multi-country European trips.",
    visaTypes: [
      {
        type: "Tourist Schengen Visa",
        processingTime: "15-20 days",
        validity: "90 days in 180 days",
        fees: "₹7,500+",
        requirements: ["Valid passport", "Application form", "Travel insurance", "Itinerary", "Hotel bookings", "Financial proof"]
      },
      {
        type: "Business Schengen Visa",
        processingTime: "15-20 days",
        validity: "90 days in 180 days",
        fees: "₹7,500+",
        requirements: ["Valid passport", "Invitation letter", "Business documents", "Travel insurance"]
      }
    ]
  }
};

const CountryDetail = () => {
  const { country } = useParams<{ country: string }>();
  const data = countryData[country || ""] || countryData.usa;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{data.name} Visa Services - RIA Consultants</title>
        <meta 
          name="description" 
          content={`Expert ${data.name} visa services for tourists and business travelers. Get professional guidance for your ${data.name} visa application.`} 
        />
      </Helmet>

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-accent text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="text-6xl mb-4">{data.flag}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {data.name} Visa Services
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {data.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact#contactFrom">
                  <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                    Book Consultation
                  </Button>
                </Link>
                <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Types Tabs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Available Visa Types
            </h2>

            <Tabs defaultValue="0" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                {data.visaTypes.map((visa: any, index: number) => (
                  <TabsTrigger key={index} value={index.toString()}>
                    {visa.type}
                  </TabsTrigger>
                ))}
              </TabsList>

              {data.visaTypes.map((visa: any, index: number) => (
                <TabsContent key={index} value={index.toString()}>
                  <Card className="p-8">
                    <h3 className="text-2xl font-bold mb-6">{visa.type}</h3>

                    {/* Quick Info */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 rounded-lg p-3">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Processing Time</p>
                          <p className="font-semibold">{visa.processingTime}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="bg-accent/10 rounded-lg p-3">
                          <Plane className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Validity</p>
                          <p className="font-semibold">{visa.validity}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 rounded-lg p-3">
                          <DollarSign className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Fees (Indicative)</p>
                          <p className="font-semibold">{visa.fees}</p>
                        </div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="font-bold text-lg mb-4 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-primary" />
                        Key Requirements
                      </h4>
                      <ul className="space-y-3">
                        {visa.requirements.map((req: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Note about document upload */}
                    <div className="mt-8 bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
                      <p className="text-sm font-semibold text-accent mb-2">
                        📱 Document Upload Available in Mobile App
                      </p>
                      <p className="text-sm text-muted-foreground">
                        For secure document uploads and application tracking, download our mobile app. 
                        All document management happens through the app for your convenience and security.
                      </p>
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Quick Enquiry Sidebar CTA */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 bg-gradient-to-br from-primary to-accent text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Apply for Your {data.name} Visa?
                </h3>
                <p className="text-white/90 mb-6">
                  Our expert consultants are ready to guide you through the entire visa application process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact#contactFrom" className="flex-1">
                    <Button variant="hero" size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                      Book Consultation
                    </Button>
                  </Link>
                  <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full border-2 border-white text-white hover:bg-white/10">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp Now
                    </Button>
                  </a>
                  <Button variant="outline" size="lg" className="flex-1 border-2 border-white text-white hover:bg-white/10">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Get App
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CountryDetail;
