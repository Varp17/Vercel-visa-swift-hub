import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Building2, Clock, DollarSign, FileText, CheckCircle2, MessageCircle, Smartphone, Users } from "lucide-react";

const VisaCorporate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Corporate Visa Services - RIA Consultants</title>
        <meta 
          name="description" 
          content="Streamlined corporate visa solutions for companies with regular international travel requirements. Dedicated services for corporate groups and employee transfers." 
        />
      </Helmet>

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-[hsl(var(--primary-variant))] to-accent text-white overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0.4,
    }}
  >
    {/* Darker overlay for better text and button readability */}
    {/* <div className="absolute inset-0 bg-black/50 z-0"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-[hsl(var(--primary-variant))]/70 to-accent/70 z-0"></div> */}
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-20">
    <div className="max-w-3xl">
      <div className="inline-block mb-4">
        <span className="bg-white/30 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
          Corporate Visa
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
        Corporate Visa Solutions
      </h1>
      <p className="text-xl text-white mb-8 drop-shadow-md">
        Streamlined corporate travel solutions with dedicated services for companies with regular international travel requirements.
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
                  Corporate Visa Services
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our corporate visa services are designed specifically for organizations with frequent international 
                  travel needs. We understand the complexities of managing multiple visa applications for corporate 
                  teams and provide end-to-end solutions tailored to your business requirements.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  From employee transfers to project assignments and training programs, we streamline the entire visa 
                  process, allowing your team to focus on core business activities.
                </p>
                
                <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                  <p className="text-sm font-semibold text-primary mb-2">Bulk Processing Available</p>
                  <p className="text-sm text-muted-foreground">
                    Special packages for companies processing 10+ visa applications per month
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Services Include</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "👥", label: "Corporate Groups" },
                    { icon: "🔄", label: "Employee Transfers" },
                    { icon: "🎓", label: "Training Programs" },
                    { icon: "📋", label: "Project Assignments" },
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

        {/* Benefits */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why Choose Our Corporate Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Dedicated Account Manager",
                  description: "A single point of contact for all your corporate visa needs"
                },
                {
                  icon: Clock,
                  title: "Priority Processing",
                  description: "Fast-track services for urgent business travel requirements"
                },
                {
                  icon: FileText,
                  title: "Bulk Application Support",
                  description: "Streamlined process for multiple visa applications"
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Corporate Visa Requirements
            </h2>
            <div className="max-w-3xl mx-auto">
              <Card className="p-8">
                <ul className="space-y-4">
                  {[
                    "Company registration and incorporation documents",
                    "Letter of assignment/transfer from employer",
                    "Detailed project/training program information",
                    "Host company invitation and documentation",
                    "Employee contracts and employment proof",
                    "Company financial statements",
                    "Tax compliance certificates",
                    "Insurance coverage for employees"
                  ].map((criterion, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Processing Info */}
        <section className="py-16 bg-secondary">
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
                <p className="text-2xl font-bold text-primary mb-2">5-15 Days</p>
                <p className="text-sm text-muted-foreground">
                  Priority processing available
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-accent/10 mb-4">
                  <DollarSign className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Service Fees</h3>
                <p className="text-2xl font-bold text-accent mb-2">Custom</p>
                <p className="text-sm text-muted-foreground">
                  Volume-based pricing
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Support</h3>
                <p className="text-2xl font-bold text-primary mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">
                  Dedicated account support
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partner with Us for Your Corporate Travel Needs
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Streamline your organization's international travel with our comprehensive corporate visa services
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

export default VisaCorporate;
