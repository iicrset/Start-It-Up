import { ArrowRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero.tsx';
import { Features } from './components/Features.tsx';
import { Mentors } from './components/Mentors.tsx';
import { FAQ } from './components/FAQ.tsx';
import iic from './Assets/iic.png';
import rset_innovation from './Assets/rset_innovation.png';
import rset from './Assets/rset.png';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Timeline Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Program Timeline
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6 shadow-lg">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Phase 1: Weeks 1-2
              </div>
              <h3 className="mb-2 text-xl font-semibold">Idea Validation & MVP</h3>
              <p className="text-gray-600">
                Validate your idea through customer interviews and build your minimum viable product
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 shadow-lg">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Phase 2: Weeks 3-6
              </div>
              <h3 className="mb-2 text-xl font-semibold">Growth & Pitching</h3>
              <p className="text-gray-600">
                Focus on business development, growth strategies, and pitch deck preparation
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 shadow-lg">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Demo Day
              </div>
              <h3 className="mb-2 text-xl font-semibold">Investor Showcase</h3>
              <p className="text-gray-600">
                Present your startup to our network of investors and industry leaders
              </p>
            </div>
          </div>
        </div>
      </section>

      <Mentors />
      <FAQ />

      {/* CTA Section */}
      <section className="bg-gray-900 px-4 py-20 text-white" id="apply">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Join our next cohort and transform your idea into a successful startup
          </p>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition hover:bg-primary/90"
          >
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id='contact' className="bg-gray-900 px-4 py-8 text-gray-400">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-8">
            {/* Bottom row with centered images */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:justify-evenly">
              <img src={iic} alt="IIC Logo" className="h-16 sm:h-20 object-contain" />
              <img src={rset_innovation} alt="RSET Innovation Logo" className="h-14 sm:h-16 object-contain" />
              <img src={rset} alt="Footer Logo" className="h-14 sm:h-16 object-contain" />
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-sm cursor-pointer text-center">
                © 2024 StartItUp. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4">
                <a className="hover:text-white cursor-pointer">Contact</a>
                <a className="hover:text-white cursor-pointer">Privacy</a>
                <a className="hover:text-white cursor-pointer">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;