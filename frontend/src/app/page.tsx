import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';

export default function Home() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: `Winter Relief Campaign`,
      description: `Provided warm clothing and shelter to 500+ families`,
      image: `https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80`,
      category: `Emergency Relief`
    },
    {
      id: 2,
      title: `Education Support`,
      description: `Sponsored education for 200+ underprivileged students`,
      image: `https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80`,
      category: `Education`
    },
    {
      id: 3,
      title: `Food Distribution`,
      description: `Monthly ration distribution to 1000+ families`,
      image: `https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80`,
      category: `Food Security`
    },
    {
      id: 4,
      title: `Medical Camp`,
      description: `Free medical checkups and medicines for 2000+ patients`,
      image: `https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80`,
      category: `Healthcare`
    }
  ];

  // Organization domains
  const domains = [
    {
      title: `Food Security`,
      icon: (
        <svg className="w-12 h-12 text-[#ADD8E6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      ),
      description: `Monthly ration distribution and food support programs for underprivileged families`
    },
    {
      title: `Education`,
      icon: (
        <svg className="w-12 h-12 text-[#ADD8E6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
      ),
      description: `Supporting education through scholarships and school supplies`
    },
    {
      title: `Healthcare`,
      icon: (
        <svg className="w-12 h-12 text-[#ADD8E6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: `Medical camps and healthcare assistance for those in need`
    },
    {
      title: `Employment`,
      icon: (
        <svg className="w-12 h-12 text-[#ADD8E6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: `Job training and employment opportunities for sustainable growth`
    }
  ];

  return (
    <main>
      <Hero />

      {/* Founder's Message Section */}
      <section className="py-12 sm:py-16 bg-[#E8F4F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                  alt="Founder"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 font-arial-black">
                A Message from Our Founder
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-arial">
                &ldquo;At Sabeel-e-Rahat, we believe in the power of community and compassion. Our journey began with a simple vision: to create lasting positive change in the lives of those who need it most. Through dedication and the support of countless individuals, we&apos;ve been able to touch thousands of lives, but our work is far from over.&rdquo;
              </p>
              <div className="pt-2 sm:pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-[#2C5F7D] text-white rounded-md text-sm sm:text-base font-semibold tracking-wide hover:bg-[#1A3F54] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-arial w-full sm:w-auto justify-center sm:justify-start"
                >
                  Learn Our Story
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="py-12 sm:py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 mb-3 sm:mb-4 font-arial-black">
                Our Impact
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg font-arial">
                Explore some of our recent projects and their impact on communities
              </p>
            </div>
            <div className="relative">
              <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 sm:pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="min-w-[280px] sm:min-w-[320px] snap-start bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-40 sm:h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 280px, 320px"
                      />
                      <div className="absolute top-3 right-3 bg-[#2C5F7D] text-white px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-2 font-arial-black">{project.title}</h3>
                      <p className="text-neutral-600 text-sm sm:text-base mb-4 font-arial">{project.description}</p>
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center text-[#2C5F7D] hover:text-[#1A3F54] font-medium transition-colors duration-300 text-sm sm:text-base"
                      >
                        View Case Study
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Domains Section */}
      <section className="py-12 sm:py-16 bg-[#E8F4F8]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-800 mb-3 sm:mb-4 font-arial-black">
                Our Areas of Impact
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg font-arial">
                We work across multiple domains to provide comprehensive support
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {domains.map((domain, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-[#E8F4F8] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Card Content */}
                  <div className="relative p-4 sm:p-6">
                    {/* Icon Container */}
                    <div className="mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-[#E8F4F8] flex items-center justify-center shadow-lg">
                        <div className="transform group-hover:rotate-12 transition-transform duration-300 text-[#2C5F7D]">
                          {domain.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-2 sm:mb-3 font-arial-black group-hover:text-[#2C5F7D] transition-colors duration-300">
                      {domain.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 font-arial leading-relaxed text-sm sm:text-base">
                      {domain.description}
                    </p>

                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2C5F7D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#E8F4F8] transform rotate-45 translate-x-6 -translate-y-6 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
