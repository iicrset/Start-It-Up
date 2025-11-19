import { Users, Briefcase, Rocket } from 'lucide-react';

export function Features() {
  return (
    <section
      id="features"
      className="px-4 py-20 bg-gradient-to-b from-white via-[#fff9e6] to-white"
    >
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Expert Mentorship */}
          <div className="rounded-xl bg-white p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-[#f7eab9]">
            <Users className="mb-4 h-10 w-10 text-[#b60a0a]" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Expert Mentorship
            </h3>
            <p className="text-gray-600">
              Learn from experienced entrepreneurs and mentors who have built and scaled startups successfully.
            </p>
          </div>

          {/* Investor Connect */}
          <div className="rounded-xl bg-white p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-[#f7eab9]">
            <Briefcase className="mb-4 h-10 w-10 text-[#b60a0a]" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Investor Connect</h3>
            <p className="text-gray-600">
              Connect with leading investors and funding networks.
            </p>
          </div>

          {/* Scale Your MVP */}
          <div className="rounded-xl bg-white p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-[#f7eab9]">
            <Rocket className="mb-4 h-10 w-10 text-[#b60a0a]" />
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
