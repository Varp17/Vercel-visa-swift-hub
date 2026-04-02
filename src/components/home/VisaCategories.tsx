import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Briefcase, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Plane,
    title: "Tourist Visa",
    description: "Explore the world with ease. Get expert assistance for your leisure and vacation travel visas to popular destinations worldwide.",
    features: ["Leisure Travel", "Family Visits", "Tourism", "Holiday Trips"],
    link: "/visa/tourist",
    color: "primary"
  },
  {
    icon: Briefcase,
    title: "Business Visa",
    description: "Expand your business globally. Professional support for business meetings, conferences, and trade visits across borders.",
    features: ["Meetings", "Conferences", "Trade Visits", "Short-term Work"],
    link: "/visa/business",
    color: "accent"
  },
  {
    icon: Building2,
    title: "Corporate Visa",
    description: "Streamlined corporate travel solutions. Dedicated services for companies with regular international travel requirements.",
    features: ["Corporate Groups", "Employee Transfers", "Training Programs", "Project Assignments"],
    link: "/visa/corporate",
    color: "primary"
  }
];

const VisaCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visa Categories We{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent">
              Specialize In
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the visa category that matches your travel needs and let our experts guide you through the process
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-${category.color}/10 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 text-${category.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link to={category.link}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisaCategories;
