import React, { useState, useEffect } from 'react';
import { Smartphone, Download, CheckCircle2 } from 'lucide-react';
import IMG1 from "@/assets/img1.jpeg"
import IMG2 from "@/assets/img2.jpeg"
import IMG3 from "@/assets/img3.jpeg"
import IMG4 from "@/assets/img4.jpeg"
import IMG5 from "@/assets/img5.jpeg"
import IMG6 from "@/assets/img6.jpeg"
import IMG7 from "@/assets/img7.jpeg"
import IMG8 from "@/assets/img8.jpeg"
import IMG9 from "@/assets/img9.jpeg"

const AppDownload = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add your real app screenshot URLs here
  const appScreenshots = [
    IMG1,IMG2,IMG3,IMG4,IMG5,IMG6,IMG7,IMG8,IMG9
    
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % appScreenshots.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [appScreenshots.length]);

  return (
    <section id="app-download" className="py-20 bg-gradient-to-br from-primary via-[hsl(var(--primary-variant))] to-accent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold uppercase tracking-wide bg-white/20 px-3 py-1 rounded-full">
                Mobile App Coming Soon
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Manage Your Visa Applications On-the-Go
            </h2>

            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Our mobile app offers you a seamless visa application experience. Easily track your application status, upload documents, and receive real-time updates — all from your smartphone.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {[
                "Track application status in real-time",
                "Upload and manage documents securely",
                "Get instant notifications on updates",
                "Chat with our experts directly"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup with Image Carousel */}
          <div className="relative">
            {/* Coming Soon Badge */}
            <div className="space-y-4 mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Coming Soon
              </h1>
            </div>

            <div className="relative mx-auto w-64 md:w-80">
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Screen Content - Image Carousel */}
                  <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                    {appScreenshots.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                          index === currentSlide
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-95'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`App Screenshot ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}

                    {/* Carousel Indicators - Positioned at bottom of screen */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                      {appScreenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`h-2 rounded-full transition-all ${
                            index === currentSlide
                              ? 'w-8 bg-white'
                              : 'w-2 bg-white/50'
                          }`}
                          aria-label={`Go to screenshot ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full z-20" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-xl animate-pulse">
                <CheckCircle2 className="h-6 w-6 text-cyan-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;