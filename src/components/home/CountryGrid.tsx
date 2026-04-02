import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const countries = [
  {
    name: "United States",
    flag: "🇺🇸",
    visaTypes: ["Tourist", "Business", "Student"],
    link: "/country/usa",
    popular: true
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    visaTypes: ["Tourist", "Business", "Work"],
    link: "/country/uk",
    popular: true
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    visaTypes: ["Tourist", "Business", "Study"],
    link: "/country/canada",
    popular: true
  },
  {
    name: "Schengen",
    flag: "🇪🇺",
    visaTypes: ["Tourist", "Business"],
    link: "/country/schengen",
    popular: true
  },
  {
    name: "UAE",
    flag: "🇦🇪",
    visaTypes: ["Tourist", "Business"],
    link: "/country/uae"
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    visaTypes: ["Tourist", "Business", "Work"],
    link: "/country/australia"
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    visaTypes: ["Tourist", "Business"],
    link: "/country/singapore"
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    visaTypes: ["Tourist", "Business"],
    link: "/country/japan"
  }
];

const CountryGrid = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">Popular Destinations</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Country-wise{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent">
              Visa Services
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide visa services for travelers heading to destinations worldwide
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {countries.map((country, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Link to={country.link} className="block p-6">
                {/* Popular Badge */}
                {country.popular && (
                  <div className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full">
                    Popular
                  </div>
                )}

                {/* Flag */}
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {country.flag}
                </div>

                {/* Country Name */}
                <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                  {country.name}
                </h3>

                {/* Visa Types */}
                <div className="space-y-1 mb-4">
                  {country.visaTypes.map((type, idx) => (
                    <div key={idx} className="flex items-center text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-accent mr-2" />
                      {type} Visa
                    </div>
                  ))}
                </div>

                {/* Know More Link */}
                <div className="flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
                  Know More
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center animate-fade-in">
          <Link to="/contact">
            <Button variant="cta" size="lg">
              View All Countries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CountryGrid;
