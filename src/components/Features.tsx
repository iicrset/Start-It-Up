import { Users, Briefcase, Rocket } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="bg-[#F4F4EE] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Expert Mentorship */}
          <div className="rounded-lg bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.15)] transition-shadow duration-300">
            <Users className="mb-4 h-8 w-8 text-[#b60a0a]" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Expert Mentorship</h3>
            <p className="text-gray-600">
              Learn from experienced entrepreneurs and mentors who have built and scaled startups successfully.
            </p>
          </div>

          {/* Investor Connect */}
          <div className="rounded-lg bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.15)] transition-shadow duration-300">
            <Briefcase className="mb-4 h-8 w-8 text-[#b60a0a]" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Investor Connect</h3>
            <p className="text-gray-600">
              Connect with leading investors and funding networks.
            </p>
          </div>

          {/* Scale Your MVP */}
          <div className="rounded-lg bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.15)] transition-shadow duration-300">
            <Rocket className="mb-4 h-8 w-8 text-[#b60a0a]" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Scale Your MVP</h3>
            <p className="text-gray-600">
              Refine your prototype, validate your business model, and prepare for your startup’s next growth phase.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
