import { ArrowRight } from 'lucide-react';
import Particles from './Particles.jsx';

export function Hero() {
  return (
    <section className="pb-40 relative">
        <div style={{ width: '100%', height: '600px', position: 'relative'}}>
              <Particles
                  particleColors={['#fe6500', '#fe6500']}
                  particleCount={150}
                  particleSpread={10}
                  speed={0.1}
                  particleBaseSize={200}
                  moveParticlesOnHover={false}
                  alphaParticles={false}
                  disableRotation={false}
              />
        </div>
        <div className="mx-auto max-w-6xl text-center z-10 relative" style={{ marginTop: '-400px' }}>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Turn Your Idea Into a Scalable Startup
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            6-week accelerator providing mentorship and workspace to ambitious founders
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdw0M6NOiE-jg6GmAjozKKg3j16esfsYcYl2NwlNQrphG0eZw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#F5F4EF] transition-colors duration-100 hover:text-primary shadow-lg group"
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-sm font-medium text-gray-600">
            </p>
          </div>
        </div>
    </section>
  );
} 