import React from 'react';
import { ArrowRight, FileText, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsConditionsPage = () => {
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
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[350px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop"
            alt="Legal Documents"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Terms &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Please read these terms carefully before using our services. Your use of our platform constitutes acceptance of these terms.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Main Content Section */}
      <section className="py-2 md:py-2 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Terms & Conditions – RIA Consultant Services</h2>
                <p className="text-sm text-gray-600">Effective Date: 20 January 2026</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              These Terms govern your use of the RIA Consultant Services mobile application and website.
            </p>

            {/* Section 1 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">1</span>
                Acceptance
              </h3>
              <p className="text-gray-700 leading-relaxed ml-10">
                By using our Services, you agree to these Terms and our Privacy Policy.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">2</span>
                Eligibility
              </h3>
              <p className="text-gray-700 mb-3 ml-10">You must:</p>
              <ul className="space-y-2 ml-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Be at least 18 years old</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Provide accurate information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Use the Services lawfully</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">3</span>
                Service Description
              </h3>
              <p className="text-gray-700 mb-3 ml-10">RIA Consultant Services provides:</p>
              <ul className="space-y-2 ml-10 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Visa application assistance tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Document upload and tracking features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Informational guidance</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed ml-10">
                We are a private consultancy and are not affiliated with any government, embassy, or immigration authority.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">4</span>
                User Responsibilities
              </h3>
              <p className="text-gray-700 mb-3 ml-10">You agree to:</p>
              <ul className="space-y-2 ml-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Provide truthful information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Upload valid documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Not misuse or disrupt the Services</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">5</span>
                No Guarantee Disclaimer
              </h3>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 ml-10">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-amber-900">
                    Visa approvals are determined solely by government authorities. We do not guarantee approval, processing time, or outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">6</span>
                Intellectual Property
              </h3>
              <p className="text-gray-700 leading-relaxed ml-10">
                All app content, logos, and materials are owned by RIA Consultant Services and may not be reused without permission.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">7</span>
                Limitation of Liability
              </h3>
              <p className="text-gray-700 mb-3 ml-10">We are not liable for:</p>
              <ul className="space-y-2 ml-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Visa rejections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Delays by authorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Data loss beyond reasonable control</span>
                </li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">8</span>
                Termination
              </h3>
              <p className="text-gray-700 leading-relaxed ml-10">
                We may suspend or terminate access if Terms are violated.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">9</span>
                Governing Law
              </h3>
              <p className="text-gray-700 leading-relaxed ml-10">
                These Terms are governed by the laws of India.
              </p>
            </div>

            {/* Section 10 - Contact */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">10</span>
                Contact
              </h3>
              
              <div className="flex flex-col items-start gap-4 ml-10">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <a href="mailto:support@riaconsultantservices.com" className="font-medium text-blue-600 hover:text-blue-700 transition-colors">
                      support@riaconsultantservices.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-gray-200 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Have Questions About Our Terms?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help clarify any questions you may have about our terms and conditions. Feel free to reach out to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@riaconsultantservices.com">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
      </main>
      <Footer />
    </div>

  );
};

export default TermsConditionsPage;