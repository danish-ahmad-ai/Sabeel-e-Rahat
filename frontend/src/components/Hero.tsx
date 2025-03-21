'use client';

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] pt-16 sm:pt-20">
      {/* Hero Image with Fixed Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80"
          alt="Helping hands reaching out"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ADD8E6]/80 via-[#D6E6E1]/60 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative w-full h-full">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)] flex items-center">
          <div className="w-full">
            <div className="max-w-3xl space-y-4 sm:space-y-6 md:space-y-8">
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-white tracking-wide drop-shadow-md font-arial">
                Welcome to Sabeel-e-Rahat
              </h2>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg font-arial-black">
                  Lifting{' '}
                  <span className="relative inline-block">
                    <span className="text-[#C9C4B5] relative z-10">Each Other</span>
                    <span className="absolute bottom-0 left-0 w-full h-1.5 sm:h-2 bg-[#C9C4B5]/30 transform -skew-x-12" />
                  </span>
                </h1>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed font-light max-w-2xl drop-shadow-md font-arial">
                Join our mission to create lasting change through compassion and community support. 
                Together, we can build a future where every individual has the opportunity to thrive.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-6">
                <Link
                  href="/donate"
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 bg-[#C9C4B5] text-gray-800 rounded-md text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden backdrop-blur-sm w-full sm:w-auto font-arial"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Support Our Cause
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
                <Link
                  href="/volunteer"
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white text-white rounded-md text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 overflow-hidden backdrop-blur-sm bg-white/10 hover:bg-[#ADD8E6] hover:border-[#ADD8E6] hover:text-gray-800 w-full sm:w-auto font-arial"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Join Our Movement
                    <span className="relative ml-2 w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 group-hover:rotate-45">
                      <span className="absolute inset-0 border-2 border-current rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                      <span className="absolute inset-0 border-2 border-current rounded-full animate-ping opacity-75" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 