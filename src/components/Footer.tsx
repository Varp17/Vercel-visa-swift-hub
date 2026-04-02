import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/ui/logo";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo />
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted partner for visa consultancy services worldwide. Expert guidance for Tourist, Business, and Corporate visas.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/visa/tourist" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Tourist Visa
                </Link>
              </li>
              <li>
                <Link to="/visa/business" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Business Visa
                </Link>
              </li>
              <li>
                <Link to="/visa/corporate" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Corporate Visa
                </Link>
              </li>

              <li>
                <Link to="/certification-courses" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Certification Courses
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Countries */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Popular Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/country/usa" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  USA Visa
                </Link>
              </li>
              <li>
                <Link to="/country/uk" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  UK Visa
                </Link>
              </li>
              <li>
                <Link to="/country/canada" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Canada Visa
                </Link>
              </li>
              <li>
                <Link to="/country/schengen" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Schengen Visa
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  View All Countries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-primary" />
                <span>Office:- 40
                  4th floor sidheshwar paradise
                  B/s bright school
                  Harni-sama link road
                  Harni
                  Vadodara</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                  +91 76985 83225
                </a>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
                <a href="mailto:info@riaconsultants.in" className="hover:text-primary transition-colors">
                  info@riaconsultants.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} RIA Consultants. All rights reserved.

            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-and-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/terms-and-conditions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Disclaimer
              </Link>
              <Link to="/delete-account" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Delete Account
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Disclaimer: RIA Consultants is a visa consultancy service. We do not guarantee visa approval. All visa applications are subject to the respective embassy's discretion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
