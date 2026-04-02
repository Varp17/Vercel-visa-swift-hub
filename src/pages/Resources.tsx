import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { BookOpen, FileText, HelpCircle, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  const blogPosts = [
    {
      category: "Travel Guide",
      title: "Top 10 Tourist Destinations for Indian Travelers in 2025",
      excerpt: "Discover the most popular international destinations and visa requirements for Indian passport holders.",
      date: "Jan 15, 2025",
      readTime: "5 min read"
    },
    {
      category: "Visa Tips",
      title: "Common Visa Application Mistakes and How to Avoid Them",
      excerpt: "Learn about the most frequent errors in visa applications and how to ensure your application is flawless.",
      date: "Jan 12, 2025",
      readTime: "7 min read"
    },
    {
      category: "Policy Update",
      title: "Latest Changes in US Visa Interview Process",
      excerpt: "Stay updated on the recent modifications to the US visa interview procedure and what it means for applicants.",
      date: "Jan 10, 2025",
      readTime: "4 min read"
    },
    {
      category: "Business Travel",
      title: "Business Visa vs Work Visa: Understanding the Difference",
      excerpt: "A comprehensive guide to help you choose the right visa category for your international business travel.",
      date: "Jan 8, 2025",
      readTime: "6 min read"
    },
    {
      category: "Travel Guide",
      title: "Schengen Visa: Everything You Need to Know",
      excerpt: "Complete guide to applying for a Schengen visa, including requirements, processing time, and travel tips.",
      date: "Jan 5, 2025",
      readTime: "8 min read"
    },
    {
      category: "Tips & Tricks",
      title: "How to Prepare for Your Visa Interview",
      excerpt: "Expert tips and strategies to ace your visa interview and increase your chances of approval.",
      date: "Jan 3, 2025",
      readTime: "5 min read"
    }
  ]; 

 const faqs = [
  {
    question: "How do I start my visa application?",
    answer: "Simply select your destination country and visa type from the app’s homepage. The app will guide you step-by-step through the required forms and information."
  },
  {
    question: "Which visa types are available in the app?",
    answer: "You can apply for a variety of visa types, including tourist, business, student, transit, and more. The available options depend on the country you choose."
  },
  {
    question: "What documents do I need to upload?",
    answer: "Required documents vary by visa and country, but typically include a passport, photo, proof of funds, travel itinerary, and supporting documents. The app shows a checklist for your specific application."
  },
  {
    question: "How do I upload my documents?",
    answer: "Tap on the “Upload Documents” section within your application and use your phone’s camera or file browser to attach images or PDFs as required."
  },
  {
    question: "Is my personal information and documents secure?",
    answer: "Yes, your data is protected using strong encryption protocols. We never share or sell your information and use it only for processing your visa."
  },
  {
    question: "How do I pay for my visa application?",
    answer: "Once your documents are uploaded, proceed to the “Payment” section. We accept major credit/debit cards, UPI, and popular digital wallets. All payments are securely processed."
  },
  {
    question: "Can I track the status of my application?",
    answer: "Yes, you can check real-time status in the “Application Status” section of the app. You’ll also receive notifications about any updates or required actions."
  },
  {
    question: "What happens if my visa application is incomplete or has errors?",
    answer: "The app automatically checks for missing information. If anything is incomplete or incorrect, you’ll be prompted to fix it before submission."
  },
  {
    question: "How long does visa processing usually take?",
    answer: "Processing times vary by country and visa type. Estimated timelines are displayed after submission, and you’ll receive notifications of any status changes."
  },
  {
    question: "Can I contact support for help with my application?",
    answer: "Yes, tap “Help & Support” in the app to chat with our team, send an email, or request a callback for assistance with your application."
  },
  {
    question: "Can I edit my application after submitting?",
    answer: "You can edit your application before final submission. After submitting, changes are limited—please contact support if urgent corrections are needed."
  },
  {
    question: "What if my payment fails?",
    answer: "If your payment doesn’t go through, you’ll see a notification with options to retry or use a different payment method. No charges are applied until payment is successful."
  },
  {
    question: "How will I receive my visa decision?",
    answer: "Once your application is processed, you’ll receive a notification in the app and via email. You can also download your e-visa if approved."
  }
];


  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Visa Resources & Guides - RIA Consultants</title>
        <meta 
          name="description" 
          content="Explore our comprehensive visa guides, travel tips, policy updates, and FAQs to stay informed about international travel requirements." 
        />
      </Helmet>

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-primary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex p-3 rounded-full bg-white/20 mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Resources & Guides
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Stay informed with our latest visa guides, travel tips, and policy updates
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">
                Latest Articles
              </h2>
              <div className="text-sm text-muted-foreground">
                Showing 6 of 24 articles
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card 
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <FileText className="h-16 w-16 text-primary/30" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <HelpCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about our visa services
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h3 className="font-bold text-lg mb-2 flex items-start">
                    <span className="text-primary mr-2">Q.</span>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground pl-6">
                    <span className="text-accent font-semibold">A.</span> {faq.answer}
                  </p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Can't find what you're looking for?
              </p>
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Contact Our Experts
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
