import React from 'react';
import { ArrowRight, Shield, CheckCircle, AlertCircle, Mail, MapPin, Trash2, Smartphone, Clock, AlertTriangle, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer';

const DeleteAccountPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Helmet>
                <title>Delete Account – RIA Consultant</title>
                <meta
                    name="description"
                    content="Learn how to delete your RIA Consultant account and what happens to your personal data after deletion."
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
                                alt="Delete Account"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
                        </div>

                        <div className="container mx-auto px-4 relative z-10">
                            <div className="max-w-3xl">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                                    Delete{" "}
                                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                        Account
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-gray-300 mb-8">
                                    We respect your privacy and give you complete control over your personal information. You may request account deletion at any time.
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
                                        <Trash2 className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-900">Delete Account – RIA Consultant</h2>
                                        <p className="text-sm text-gray-600">Your privacy and control matter to us</p>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-8 leading-relaxed">
                                    At RIA Consultant, we respect your privacy and give you complete control over your personal information. If you wish to delete your account, you may request deletion at any time.
                                </p>

                                {/* Section 1 – How to Delete */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                                        <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">1</span>
                                        How to Delete Your Account
                                    </h3>

                                    <div className="ml-10 space-y-6">
                                        {/* Option 1 */}
                                        <div className="border border-blue-100 rounded-xl p-6 bg-blue-50/40">
                                            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-gray-900">
                                                <Smartphone className="w-5 h-5 text-blue-600" />
                                                Option 1 – From the Mobile App{" "}
                                                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full ml-1">Recommended</span>
                                            </h4>
                                            <ol className="space-y-2">
                                                {[
                                                    "Open the RIA Consultant app",
                                                    "Go to Profile / Settings",
                                                    "Tap Delete Account",
                                                    "Confirm your request",
                                                ].map((step, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                                            {index + 1}
                                                        </span>
                                                        <span className="text-gray-700">{step}</span>
                                                    </li>
                                                ))}
                                            </ol>
                                            <div className="bg-blue-100 border border-blue-200 rounded-lg p-3 mt-4">
                                                <p className="text-sm text-blue-900 font-medium">
                                                    Your deletion request will be submitted instantly.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Option 2 */}
                                        <div className="border border-cyan-100 rounded-xl p-6 bg-cyan-50/40">
                                            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-gray-900">
                                                <Mail className="w-5 h-5 text-cyan-600" />
                                                Option 2 – Request via Email
                                            </h4>
                                            <p className="text-gray-700 mb-3">
                                                You can also request account deletion by contacting us:
                                            </p>
                                            <a
                                                href="mailto:info@riaconsultants.in"
                                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-4"
                                            >
                                                <Mail className="w-4 h-4" />
                                                info@riaconsultants.in
                                            </a>
                                            <p className="text-gray-700 mb-2 font-medium">Please include:</p>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">Your registered email address or phone number</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-700">(Optional) Reason for deletion</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2 – What Happens After */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                                        <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">2</span>
                                        What Happens After Your Request
                                    </h3>
                                    <p className="text-gray-700 mb-4 ml-10">Once we receive your request:</p>
                                    <ul className="space-y-2 ml-10">
                                        {[
                                            "Your account will be permanently deleted",
                                            "Personal information will be removed",
                                            "Associated data will be erased",
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="ml-10 mt-4 flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-blue-900">Deletion Timeframe</p>
                                            <p className="text-sm text-blue-800">All deletion requests are processed within 48 hours.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3 – Data That Will Be Deleted */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                                        <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">3</span>
                                        Data That Will Be Deleted
                                    </h3>
                                    <p className="text-gray-700 mb-3 ml-10">Upon successful deletion:</p>
                                    <ul className="space-y-2 ml-10">
                                        {[
                                            "Profile details",
                                            "Login credentials",
                                            "App activity linked to your account",
                                            "Stored preferences",
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Section 4 – Data Retention */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                                        <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">4</span>
                                        Data Retention (If Applicable)
                                    </h3>
                                    <p className="text-gray-700 mb-3 ml-10">
                                        Certain minimal data may be retained only when required for:
                                    </p>
                                    <ul className="space-y-2 ml-10">
                                        {[
                                            "Legal obligations",
                                            "Regulatory compliance",
                                            "Fraud prevention",
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-gray-700 mt-3 ml-10">
                                        Such data is securely protected and never used for promotional purposes.
                                    </p>
                                </div>

                                {/* Section 5 – Important Notice */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                                        <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">5</span>
                                        Important Notice
                                    </h3>
                                    <div className="ml-10 bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3">
                                        {[
                                            "Account deletion is permanent",
                                            "Deleted accounts cannot be recovered",
                                            "You will lose access to all services associated with your account",
                                        ].map((notice, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-amber-900 font-medium">{notice}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Section 6 – Need Assistance / Contact */}
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 mt-12">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                                        <span className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 text-sm">6</span>
                                        Need Assistance?
                                    </h3>
                                    <p className="text-gray-700 mb-6 ml-10">
                                        If you face any issues with account deletion, please reach out to us:
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 ml-10">
                                        <div className="flex flex-col items-start gap-3">
                                            <div className="bg-blue-100 rounded-full p-3">
                                                <Mail className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600 mb-1">Email</p>
                                                <a
                                                    href="mailto:info@riaconsultants.in"
                                                    className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
                                                >
                                                    info@riaconsultants.in
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-start gap-3">
                                            <div className="bg-cyan-100 rounded-full p-3">
                                                <MapPin className="w-6 h-6 text-cyan-600" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-600 mb-1">Website</p>
                                                <a
                                                    href="https://www.riaconsultants.in"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
                                                >
                                                    www.riaconsultants.in
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Section */}
                            <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-gray-200 shadow-sm">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                                    Need Help With Deletion?
                                </h2>
                                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                    We're here to help you manage your data. If you have any concerns or questions about deleting your account, please don't hesitate to reach out.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="mailto:info@riaconsultants.in">
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

export default DeleteAccountPage;