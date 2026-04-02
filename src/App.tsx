import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VisaTourist from "./pages/VisaTourist";
import VisaBusiness from "./pages/VisaBusiness";
import VisaCorporate from "./pages/VisaCorporate";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import CountryDetail from "./pages/CountryDetail";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import TermsandPrivacyPolicy from "./pages/TermsConditionsPage";
import PrivacyandPolicy from "./pages/PrivacyAndpolicy";
import { Scroll } from "lucide-react";
import ScrolltoTop from "./components/ScrolltoTop";
import DeleteAccount from "./pages/DeleteAccount";
import CertificationCourses from "./pages/CertificationCourses";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrolltoTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/visa/tourist" element={<VisaTourist />} />
          <Route path="/visa/business" element={<VisaBusiness />} />
          <Route path="/visa/corporate" element={<VisaCorporate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/country/:country" element={<CountryDetail />} />
          <Route path="/terms-and-conditions" element={<TermsandPrivacyPolicy />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/privacy-and-policy" element={<PrivacyandPolicy />} />
          <Route path="/certification-courses" element={<CertificationCourses />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
