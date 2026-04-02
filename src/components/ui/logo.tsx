// src/components/Logo.tsx
import { Link } from "react-router-dom";
import Logoimg from "@/assets/company-logo.png";
const Logo = () => {
  return (
    <Link to="/" className="flex  space-x-2">
      <img
        src={Logoimg}
        alt="RIA Consultants Logo"
        className="h-6 w-auto md:h-12 object-fill"
      />
      <span className="hidden md:block text-2xl font-bold bg-gradient-to-r from-primary to-[hsl(var(--primary-variant))] bg-clip-text text-transparent">
      
      </span>
    </Link>
  );
};

export default Logo;
