'use client';

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20">
      {/* Hero Image with Fixed Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/hero/hero.jpg"
          alt="Helping hands reaching out"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a1b]/60 via-[#002f30]/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative w-full h-full">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-5rem)] flex items-center">
          <div className="w-full">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-[#c99645] tracking-wide drop-shadow-md">
                Welcome to Sabeel-e-Rahat
              </h2>
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                  Lifting{' '}
                  <span className="relative inline-block">
                    <span className="text-[#c99645] relative z-10">Each Other</span>
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-[#c99645]/20 transform -skew-x-12" />
                  </span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed font-light max-w-2xl drop-shadow-md">
                Join our mission to create lasting change through compassion and community support. 
                Together, we can build a future where every individual has the opportunity to thrive.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <Link
                  href="/donate"
                  className="group relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#b3873e] to-[#c99645] text-white rounded-md text-lg font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden backdrop-blur-sm"
                >
                  <span className="relative z-10 flex items-center">
                    Support Our Cause
                    <svg 
                      className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c99645] to-[#daa455] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
                <Link
                  href="/volunteer"
                  className="group relative inline-flex items-center px-8 py-3 border-2 border-[#c99645] text-[#c99645] rounded-md text-lg font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 overflow-hidden backdrop-blur-sm bg-black/10 hover:text-white"
                >
                  <span className="relative z-10 flex items-center">
                    Join Our Movement
                    <span className="relative ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:rotate-45">
                      <span className="absolute inset-0 border-2 border-current rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                      <span className="absolute inset-0 border-2 border-current rounded-full animate-ping opacity-75" />
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-[#c99645] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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