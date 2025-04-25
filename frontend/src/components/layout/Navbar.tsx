'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Events', href: '/events' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#E8F4F8]/95 backdrop-blur-md shadow-lg'
        : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative w-36 sm:w-48 h-12 sm:h-16">
                <Image
                  src="/images/White_logo.png"
                  alt="Sabeel-e-Rahat Logo"
                  fill
                  sizes="(max-width: 640px) 144px, 192px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-300 ${
                  isScrolled
                    ? 'text-[#2C5F7D] hover:text-[#1A3F54] hover:bg-[#E8F4F8]/30'
                    : 'text-white hover:text-white hover:bg-white/20'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className={`group relative inline-flex items-center px-4 lg:px-6 py-2 rounded-md text-sm font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden ${
                isScrolled
                  ? 'bg-[#2C5F7D] text-white hover:bg-[#1A3F54]'
                  : 'bg-white text-[#2C5F7D] hover:bg-[#E8F4F8]'
              }`}
            >
              <span className="relative z-10">Donate Now</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? 'text-[#2C5F7D] hover:text-[#1A3F54] hover:bg-[#E8F4F8]/30'
                  : 'text-white hover:text-white hover:bg-white/20'
              }`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#E8F4F8]/95 backdrop-blur-md shadow-lg">
          <div className="px-3 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#2C5F7D] hover:text-[#1A3F54] block px-3 py-2.5 rounded-md text-base font-medium tracking-wide hover:bg-[#E8F4F8]/30 active:bg-[#E8F4F8]/50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="bg-[#2C5F7D] text-white hover:bg-[#1A3F54] block px-3 py-2.5 rounded-md text-base font-semibold tracking-wide mt-3 transition-all duration-300 active:bg-[#1A3F54]"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 