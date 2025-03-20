import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Making a Difference in Lives
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-teal-50">
            Join us in our mission to create positive change through sustainable development and humanitarian aid.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/50 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">Our Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-amber-500 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-teal-900">Mission</h3>
                <p className="text-teal-700">
                  To empower communities through sustainable development initiatives and provide immediate relief to those in need.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-amber-500 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-teal-900">Vision</h3>
                <p className="text-teal-700">
                  A world where every individual has access to basic necessities and opportunities for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={`/project-${project}.jpg`}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-teal-900">Project Title</h3>
                  <p className="text-teal-700 mb-4">
                    Brief description of the project and its impact on the community.
                  </p>
                  <Link
                    href={`/projects/${project}`}
                    className="text-amber-500 hover:text-amber-600 font-medium inline-flex items-center group"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-teal-900 mb-8 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((event) => (
              <div key={event} className="bg-teal-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 text-white p-3 rounded-lg text-center min-w-[80px] shadow-md">
                    <div className="text-2xl font-bold">15</div>
                    <div className="text-sm">Mar</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-teal-900">Event Title</h3>
                    <p className="text-teal-700 mb-4">
                      Brief description of the event and its purpose.
                    </p>
                    <div className="flex items-center text-sm text-teal-600">
                      <svg
                        className="h-5 w-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Location Name
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/events"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors shadow-md hover:shadow-lg"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Us in Making a Difference</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="bg-amber-500 hover:bg-amber-400 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Donate Now
            </Link>
            <Link
              href="/volunteer"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/50 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Become a Volunteer
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/50 px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
