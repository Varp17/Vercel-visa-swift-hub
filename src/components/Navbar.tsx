import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { Menu, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent font-bold">
              Home
            </Link>
            <div className="relative group">
              <button className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent font-bold">
                Visa Services
              </button>
              <div className="absolute hidden group-hover:block pt-2 w-48">
                <div className="bg-card rounded-lg shadow-lg border border-border p-2">
                  <Link to="/visa/tourist" className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent block px-4 py-2 hover:bg-muted rounded-md transition-colors">
                    Tourist Visa
                  </Link>
                  <Link to="/visa/business" className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent block px-4 py-2 hover:bg-muted rounded-md transition-colors">
                    Business Visa
                  </Link>
                  <Link to="/visa/corporate" className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent block px-4 py-2 hover:bg-muted rounded-md transition-colors">
                    Corporate Visa
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/certification-courses" className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent font-bold">
              Courses
            </Link>
            <Link to="/about" className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent font-bold">
              About Us
            </Link>
            <Link to="/resources" className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent font-bold">
              Resources
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent font-bold">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+911234567890" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4 mr-1" />
              <span className="font-medium">+91 76985 83225</span>
            </a>
            <Link to="/contact#contactFrom">
              <Button variant="cta" size="default">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium">
                Home
              </Link>
              <Link to="/visa/tourist" className="px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                Tourist Visa
              </Link>
              <Link to="/visa/business" className="px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                Business Visa
              </Link>
              <Link to="/visa/corporate" className="px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                Corporate Visa
              </Link>
              <Link to="/about" className="px-4 py-2 hover:bg-muted rounded-lg transition-colors">
                About Us
              </Link>
              <Link to="/resources" className="px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium">
                Resources
              </Link>
              <Link to="/certification-courses" className="px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium">
                Certification Courses
              </Link>
              <Link to="/contact" className="px-4 py-2 hover:bg-muted rounded-lg transition-colors font-medium">
                Contact
              </Link>
              <div className="px-4 pt-2 space-y-2">
                <a href="tel:+911234567890" className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 76985 83225
                </a>
                <Button variant="cta" className="w-full">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
