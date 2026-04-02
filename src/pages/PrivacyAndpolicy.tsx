import React from 'react';
import { ArrowRight, Shield, CheckCircle, AlertCircle, Mail, Phone, MapPin, Lock, Eye, Users, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer';

const PrivacyPolicyPage = () => {
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
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=900&fit=crop"
            alt="Privacy and Security"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Privacy{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and safeguard your personal information.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Privacy Policy – RIA Consultant Services</h2>
                <p className="text-sm text-gray-600">Effective Date: 20 January 2026</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              RIA Consultant Services respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application and website.
            </p>

            {/* Section 1 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">1</span>
                Information We Collect
              </h3>
              
              <div className="ml-10 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-gray-900">
                    <Users className="w-5 h-5 text-blue-600" />
                   Personal Information You Provide
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Full name</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Email address</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Contact number</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Date of birth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Nationality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Passport details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Visa application information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Uploaded documents (passport copies, photos, IDs)</span>
                    </li>
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                    <div className="flex items-start gap-2">
                      <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-blue-900">
                        We do not collect payment or financial information.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-gray-900">
                    <Eye className="w-5 h-5 text-cyan-600" />
                    App Usage Information
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Device type and OS version</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">App interaction data (for functionality and support)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">2</span>
                How We Use Information
              </h3>
              <p className="text-gray-700 mb-3 ml-10">We use your information to:</p>
              <ul className="space-y-2 ml-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Create and manage user accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Process visa applications initiated by users</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Enable document uploads and tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Provide support and communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Improve app performance and security</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">3</span>
                Data Sharing
              </h3>
              <p className="text-gray-700 mb-3 ml-10">We do not sell or rent personal data. Information may be shared only when necessary:</p>
              <ul className="space-y-2 ml-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">To comply with legal obligations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">When required for user-requested visa processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">To protect legal rights or prevent misuse</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">4</span>
                Data Security
              </h3>
              <p className="text-gray-700 leading-relaxed ml-10">
                We use reasonable technical and organizational measures to protect user data. All sensitive data is encrypted during transmission.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">5</span>
                Data Retention
              </h3>
              <p className="text-gray-700 leading-relaxed ml-10">
                Data is retained only as long as necessary to provide Services or comply with legal requirements.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">6</span>
                Children's Privacy
              </h3>
              <p className="text-gray-700 leading-relaxed ml-10">
                Our Services are intended for users 18 years and above. We do not knowingly collect data from minors.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">7</span>
                User Rights
              </h3>
              <p className="text-gray-700 mb-3 ml-10">Users may request:</p>
              <ul className="space-y-2 ml-10">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Access to their data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Correction or deletion of personal information</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-3 ml-10">
                Requests can be sent to: <a href="mailto:support@riaconsultantservices.com" className="text-blue-600 hover:text-blue-700 font-medium">support@riaconsultantservices.com</a>
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">8</span>
                Policy Updates
              </h3>
              <p className="text-gray-700 leading-relaxed ml-10">
                We may update this policy. Changes will be reflected with a revised effective date.
              </p>
            </div>

            {/* Section 9 - Contact */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 mt-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">9</span>
                Contact
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 ml-10">
                <div className="flex flex-col items-start gap-3">
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

                <div className="flex flex-col items-start gap-3">
                  <div className="bg-cyan-100 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Location</p>
                    <p className="font-medium text-gray-900">
                      Vadodara, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-gray-200 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Questions About Your Privacy?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're committed to protecting your personal information. If you have any concerns or questions about how we handle your data, please don't hesitate to contact us.
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
    <Footer/>
    </div>
    
  );
};

export default PrivacyPolicyPage;