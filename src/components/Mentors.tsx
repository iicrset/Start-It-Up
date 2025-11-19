import { mentors } from '../Data/mentors.js';
import SpotlightCard from './SpotlightCard';

export function Mentors() {
  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.querySelector('.mentors-container');
    if (container) {
      const cardWidth = 300;
      const gap = 24;
      const scrollAmount = (cardWidth + gap) * (direction === 'left' ? -1 : 1);
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="px-4 py-20 overflow-hidden 
      bg-gradient-to-b from-white via-[#fff9e6] to-white">

      <div className="mx-auto max-w-6xl relative z-10">

       <h2 className="mb-16 text-center text-4xl md:text-5xl font-extrabold tracking-wide text-[#8B0000]">
          Speakers – Phase 1
        </h2>


        <div className="relative px-12 md:px-16">

          {/* Previous Button */}
          <button
            onClick={() => scrollContainer('left')}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 
              bg-white/80 p-2 md:p-4 rounded-full shadow-lg 
              hover:bg-gray-200 transition-all"
            aria-label="Previous mentor"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
              strokeWidth={2} stroke="black" className="w-6 h-6 md:w-8 md:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Yellow Fade Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 
            bg-gradient-to-r from-[#fff9e6] to-transparent"></div>

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 
            bg-gradient-to-l from-[#fff9e6] to-transparent"></div>

          {/* Speaker Cards */}
          <div className="mentors-container overflow-auto flex gap-4 md:gap-6 
            scroll-smooth px-8 md:px-12 
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">

            {mentors.map((mentor: any) => (
              <SpotlightCard
                spotlightColor="rgba(255,255,255,0)"
                key={`mentor-${mentor.name}`}
                className="flex-none w-[250px] md:w-[300px] my-6 md:my-10 
                  overflow-hidden rounded-2xl bg-white p-5 md:p-6 
                  shadow-lg hover:-translate-y-2 hover:shadow-2xl 
                  transition-transform duration-300"
              >
                <div className="text-center">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="mx-auto mb-4 h-24 w-24 md:h-32 md:w-32 
                      rounded-full object-cover shadow-md 
                      ring-2 ring-[#FFD700]/30"
                  />

                  <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>

                  {mentor.designation && (
                    <p className="text-sm font-medium text-gray-600">
                      {mentor.designation}
                    </p>
                  )}

                  {mentor.organization && (
                    <p className="text-sm font-semibold text-[#C49A00]">
                      {mentor.organization}
                    </p>
                  )}

                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-sm text-gray-600 italic">
                      {mentor.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            ))}

          </div>

          {/* Next Button */}
          <button
            onClick={() => scrollContainer('right')}
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 
              bg-white/80 p-2 md:p-4 rounded-full shadow-lg 
              hover:bg-gray-200 transition-all"
            aria-label="Next mentor"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
              strokeWidth={2} stroke="black" className="w-6 h-6 md:w-8 md:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>

        {/* Phase note */}
        <p className="mt-12 text-gray-600 text-sm italic text-center">
          Phase 2 & 3 speaker details will be updated soon.
        </p>

      </div>
    </section>
  );
}
