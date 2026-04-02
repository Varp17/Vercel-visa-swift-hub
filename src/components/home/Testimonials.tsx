import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    visa: "USA Tourist Visa",
    rating: 5,
    text: "Excellent service! The team at RIA Consultants made my USA visa application process incredibly smooth. They guided me through every step and I got my visa approved in just 3 weeks.",
    image: "👩"
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi, India",
    visa: "UK Business Visa",
    rating: 5,
    text: "Professional and efficient! I needed a UK business visa urgently, and they handled everything perfectly. The consultation was thorough and the documentation support was exceptional.",
    image: "👨"
  },
  {
    name: "Anita Patel",
    location: "Ahmedabad, India",
    visa: "Canada Tourist Visa",
    rating: 5,
    text: "Highly recommended! RIA Consultants helped my entire family get Canada tourist visas. Their expertise and attention to detail made the complex process seem effortless.",
    image: "👩"
  },
  {
    name: "Vikram Singh",
    location: "Bangalore, India",
    visa: "Schengen Business Visa",
    rating: 5,
    text: "Outstanding experience! The team's knowledge of visa requirements is impressive. They ensured all my documents were perfect, and I received my Schengen visa without any issues.",
    image: "👨"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl p-6 relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-16 w-16 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-3 pt-4 border-t border-border">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-accent font-medium mt-1">{testimonial.visa}</p>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
