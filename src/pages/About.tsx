import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Target, Users, Award, Briefcase, GraduationCap, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <><Navbar /><div className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="relative min-h-[350px] flex items-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                  <img
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop"
                      alt="Global Education and Career Opportunities"
                      className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
              </div>

              <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-3xl">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
                          Welcome to{" "}
                          <span className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent">
                              Ria Consultants
                          </span>
                      </h1>

                      <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                          Your dependable partner in achieving your international objectives. We empower individuals with the knowledge, tools, and support needed to succeed globally.
                      </p>
                  </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
          </section>

          {/* Main Content Section */}
          <section className="py-16 md:py-24">
              <div className="container mx-auto px-4">
                  <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                      <div>
                          <h2 className="text-3xl md:text-4xl font-bold mb-6">
                              Your Dreams Are <span className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent">Our Mission</span>
                          </h2>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                              We are a passionate and committed group of experts with a single goal: to provide people with the information, tools, and support they need to succeed in their international pursuits of education, careers, and personal development.
                          </p>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                              We consider your goals to be our own at Ria Consultants. We are dedicated to assisting you along the sometimes difficult and confusing journey to work and study abroad. Our enthusiasm for what we do encourages us to go above and beyond to ensure your success.
                          </p>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                              Join us on a remarkable path of learning, development, and success. We'll open doors to a world of opportunities by working together.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4">
                              <Link to="/contact">
                                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                                      Start Your Journey
                                      <ArrowRight className="ml-2 h-5 w-5" />
                                  </Button>
                              </Link>
                              <a
                                  href="https://wa.me/911234567890?text=Hi, I need information about Ria Consultants"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-2">
                                      <MessageCircle className="mr-2 h-5 w-5" />
                                      Chat on WhatsApp
                                  </Button>
                              </a>
                          </div>
                      </div>

                      <div className="relative">
                          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                              <img
                                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                                  alt="Team collaboration"
                                  className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                              <p className="text-4xl font-bold">15+</p>
                              <p className="text-sm">Years Experience</p>
                          </div>
                          <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                              <p className="text-4xl font-bold">98%</p>
                              <p className="text-sm">Success Rate</p>
                          </div>
                      </div>
                  </div>

                  {/* Vision & Mission Cards */}
                  <div className="grid md:grid-cols-2 gap-8 mb-20">
                      <div className="bg-card rounded-2xl p-8 border shadow-sm hover:shadow-md transition-shadow">
                          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                              <Target className="w-8 h-8 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                          <p className="text-muted-foreground leading-relaxed">
                              At Ria Consultants, we foresee a world in which education surpasses national boundaries, professional goals are limited only by ambition, and people from many backgrounds work together to create a better future. Our mission acts as a beacon for us, illuminating our path as we work relentlessly to support you on your path to global success.
                          </p>
                      </div>

                      <div className="bg-card rounded-2xl p-8 border shadow-sm hover:shadow-md transition-shadow">
                          <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                              <Globe className="w-8 h-8 text-accent" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                          <p className="text-muted-foreground leading-relaxed">
                              Our mission is to empower students and professionals from all over the world to realize their dreams by offering professional guidance and assistance while they go to study, work, or reside overseas. We work hard to earn your trust by providing specialized solutions made just for your particular objectives.
                          </p>
                      </div>
                  </div>

                  {/* Why Choose Us */}
                  <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                          Why Choose <span className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent">Ria Consultants</span>
                      </h2>
                      <p className="text-muted-foreground max-w-2xl mx-auto">
                          We combine expertise, dedication, and personalized service to make your international dreams a reality.
                      </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                      <div className="text-center p-6">
                          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                              <Users className="w-8 h-8 text-primary" />
                          </div>
                          <h4 className="text-xl font-semibold mb-3">Expert Team</h4>
                          <p className="text-muted-foreground">
                              Passionate professionals dedicated to your success with years of international experience.
                          </p>
                      </div>

                      <div className="text-center p-6">
                          <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                              <Award className="w-8 h-8 text-accent" />
                          </div>
                          <h4 className="text-xl font-semibold mb-3">Proven Track Record</h4>
                          <p className="text-muted-foreground">
                              98% success rate with over 10,000 successful visa applications and placements.
                          </p>
                      </div>

                      <div className="text-center p-6">
                          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                              <Briefcase className="w-8 h-8 text-primary" />
                          </div>
                          <h4 className="text-xl font-semibold mb-3">Personalized Solutions</h4>
                          <p className="text-muted-foreground">
                              Tailored guidance and support designed specifically for your unique goals and circumstances.
                          </p>
                      </div>

                      <div className="text-center p-6">
                          <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                              <GraduationCap className="w-8 h-8 text-accent" />
                          </div>
                          <h4 className="text-xl font-semibold mb-3">Comprehensive Support</h4>
                          <p className="text-muted-foreground">
                              End-to-end assistance from application to arrival, ensuring a smooth journey.
                          </p>
                      </div>

                      <div className="text-center p-6">
                          <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                              <Globe className="w-8 h-8 text-primary" />
                          </div>
                          <h4 className="text-xl font-semibold mb-3">Global Network</h4>
                          <p className="text-muted-foreground">
                              Partnerships with institutions and organizations worldwide to maximize your opportunities.
                          </p>
                      </div>

                      <div className="text-center p-6">
                          <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                              <Target className="w-8 h-8 text-accent" />
                          </div>
                          <h4 className="text-xl font-semibold mb-3">Commitment to Excellence</h4>
                          <p className="text-muted-foreground">
                              Unwavering dedication to achieving the best outcomes for every client we serve.
                          </p>
                      </div>
                  </div>

                  {/* Statistics Section */}
                  <div className="bg-card rounded-2xl p-8 md:p-12 border shadow-sm mb-16">
                      <div className="grid sm:grid-cols-3 gap-8 text-center">
                          <div className="flex flex-col items-center space-y-2">
                              <div className="bg-primary/10 rounded-full p-3 mb-2">
                                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                  </svg>
                              </div>
                              <p className="text-3xl md:text-4xl font-bold text-foreground">10,000+</p>
                              <p className="text-sm text-muted-foreground">Visas Processed</p>
                          </div>

                          <div className="flex flex-col items-center space-y-2">
                              <div className="bg-accent/10 rounded-full p-3 mb-2">
                                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                  </svg>
                              </div>
                              <p className="text-3xl md:text-4xl font-bold text-foreground">15+ Years</p>
                              <p className="text-sm text-muted-foreground">Experience</p>
                          </div>

                          <div className="flex flex-col items-center space-y-2">
                              <div className="bg-primary/10 rounded-full p-3 mb-2">
                                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                              </div>
                              <p className="text-3xl md:text-4xl font-bold text-foreground">98%</p>
                              <p className="text-sm text-muted-foreground">Success Rate</p>
                          </div>
                      </div>
                  </div>

                  {/* CTA Section */}
                  <div className="bg-card rounded-2xl p-8 md:p-12 text-center border shadow-sm">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                          Ready to Start Your Journey?
                      </h2>
                      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                          Let's make your aspirations a reality. Contact us today and discover how we can help you achieve your international goals.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Link to="/contact#contactFrom">
                              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                                  Book Free Consultation
                                  <ArrowRight className="ml-2 h-5 w-5" />
                              </Button>
                          </Link>
                          <Button variant="outline" size="lg" className="w-full sm:w-auto border-2">
                              Contact Us Today
                          </Button>
                      </div>
                  </div>
              </div>
          </section>
      </div>
      <Footer/>
      </>
  );
};

export default AboutPage;