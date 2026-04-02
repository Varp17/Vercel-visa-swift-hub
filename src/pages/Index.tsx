import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import VisaCategories from "@/components/home/VisaCategories";
import CountryGrid from "@/components/home/CountryGrid";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import AppDownload from "@/components/home/AppDownload";
import { Helmet } from "react-helmet";
import FloatingWhatsappButton from "@/components/home/FloatingWhatsappButton";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>RIA Consultants - Your Trusted Visa Consultant for Every Destination</title>
        <meta 
          name="description" 
          content="Expert visa consultancy services for tourist, business, and corporate visas. Get professional guidance for USA, UK, Canada, Schengen, and more destinations worldwide." 
        />
        <meta name="keywords" content="visa consultancy, tourist visa, business visa, corporate visa, USA visa, UK visa, Canada visa, Schengen visa, visa services India" />
        <meta property="og:title" content="RIA Consultants - Your Trusted Visa Consultant" />
        <meta property="og:description" content="Expert visa consultancy services for all your travel needs" />
        <link rel="canonical" href="https://riaconsultants.in/" />
      </Helmet>

      <Navbar />
      
      <main>
        <HeroSection />
        <FloatingWhatsappButton/>
        <AboutPreview />
        <VisaCategories />
        <CountryGrid />
        <HowItWorks />
        <Testimonials />
        <AppDownload />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
