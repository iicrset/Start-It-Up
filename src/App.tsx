import { ArrowRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero.tsx';
import { Features } from './components/Features.tsx';
import { Mentors } from './components/Mentors.tsx';
import { FAQ } from './components/FAQ.tsx';
import iic from './Assets/iic.png';
import rset_innovation from './Assets/rset_innovation.png';
import rset from './Assets/rset.png';
import { Sponsers } from './components/Sponsers.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Timeline Section */}
   {/* Timeline Section */}
{/* Program Timeline Section */}
<section className="relative overflow-hidden px-4 py-24 bg-gradient-to-b from-[#7A0000] via-[#8B0000] to-[#B30000] text-white">
  {/* Subtle texture or overlay glow */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"></div>

  <div className="relative mx-auto max-w-6xl text-center">
<h2 className="mb-16 text-4xl md:text-5xl font-extrabold tracking-wide text-[#FFD700] drop-shadow-[0_3px_10px_rgba(255,215,0,0.4)]">
  Program Timeline
</h2>


    {/* Phase Boxes Grid */}
    <div className="grid gap-10 md:grid-cols-3">
      {[
        {
          phase: "Phase 1",
          title: "Idea Validation & Shortlisting",
          desc: "Teams identify problems, brainstorm innovative solutions, and validate ideas through mentor guidance.",
        },
        {
          phase: "Phase 2",
          title: "MVP Development",
          desc: "Build and refine your minimum viable product with technical and business support sessions.",
        },
        {
          phase: "Phase 3",
          title: "Product Validation",
          desc: "Test your MVP with early users and receive mentor feedback to improve product-market fit.",
        },
        {
          phase: "Phase 4",
          title: "Business Model & Strategy",
          desc: "Develop a sustainable business model and refine your strategy for market entry.",
        },
        {
          phase: "Phase 5",
          title: "Pitch Preparation",
          desc: "Craft a compelling pitch deck and presentation with mentorship from industry experts.",
        },
        {
          phase: "Phase 6",
          title: "Demo Day",
          desc: "Showcase your startup to investors and industry leaders at the final demo day event.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-2xl bg-white/95 backdrop-blur-md p-8 shadow-[0_8px_40px_rgba(0,0,0,0.25)] border border-white/20 transform transition-all hover:-translate-y-2 hover:shadow-[0_12px_50px_rgba(255,255,255,0.15)]"
        >
          <h3 className="mb-3 text-2xl font-bold text-[#8B0000]">{item.phase}</h3>
          <h4 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h4>
          <p className="text-gray-700 leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </div> 
</section>  

      <Mentors />
      <Sponsers />
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
            href="https://konfhub.com/start-it-up-edition-ii-the-kickstart"
            target="_blank"
            rel="noopener noreferrer"
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
                © 2025 StartItUp. All rights reserved.
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
