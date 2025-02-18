import { ArrowRight } from 'lucide-react';
import Particles from './Particles.jsx';
export function Hero() {
  return (
    <section className="pb-40 relative ">
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
            6-week accelerator providing mentorship, ₹2 Lakh funding, and workspace to ambitious founders
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold  text-white transition hover:bg-primary/90"
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="text-sm font-medium text-gray-600">
              Applications close March 31, 2024
            </p>
          </div>
        </div>
    </section>
  );
} 