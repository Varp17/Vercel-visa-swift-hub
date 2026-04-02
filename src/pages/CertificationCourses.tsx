import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/certification/HeroSection";
import AboutProgram from "@/components/certification/AboutProgram";
import CourseCards from "@/components/certification/CourseCards";
import CareerOutcomes from "@/components/certification/CareerOutcomes";
import ProcessTimeline from "@/components/certification/ProcessTimeline";
import WhyUsSection from "@/components/certification/WhyUsSection";
import CTASection from "@/components/certification/CTASection";
import EnquiryForm from "@/components/certification/EnquiryForm";
import FAQSection from "@/components/certification/FAQSection";
import FloatingWhatsappButton from "@/components/home/FloatingWhatsappButton";
import { Helmet } from "react-helmet";

const CertificationCourses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Certification Courses - IELTS, OET & NEET Training | RIA Consultants</title>
        <meta
          name="description"
          content="Enroll in internationally recognized certification courses - IELTS Training (₹9,999), OET Certification (₹14,999) & NEET Preparation. Expert guidance from enrollment to certification by RIA Consultants."
        />
        <meta
          name="keywords"
          content="IELTS training, OET certification, NEET preparation, English proficiency test, healthcare certification, international career, RIA Consultants, visa consultancy courses"
        />
        <meta property="og:title" content="Certification Courses - IELTS, OET & NEET | RIA Consultants" />
        <meta
          property="og:description"
          content="Build your global career with certified courses. IELTS, OET & NEET preparation with complete end-to-end support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://riaconsultantservices.com/certification-courses" />
        <link rel="canonical" href="https://riaconsultantservices.com/certification-courses" />
      </Helmet>

      <Navbar />

      <main>
        <HeroSection />
        <FloatingWhatsappButton />
        <AboutProgram />
        <CourseCards />
        <CareerOutcomes />
        <ProcessTimeline />
        <WhyUsSection />
        <CTASection />
        <EnquiryForm />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default CertificationCourses;
