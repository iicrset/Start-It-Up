import { mentors } from '../Data/mentors.js';
import SpotlightCard from './SpotlightCard';

export function Mentors() {
  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.querySelector('.mentors-container');
    if (container) {
      // Calculate total width of one card including gap
      const cardWidth = 300; // Width of one card on desktop
      const gap = 24; // 6 * 4px (md:gap-6)
      const scrollAmount = (cardWidth + gap) * (direction === 'left' ? -1 : 1);
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-50 px-4 py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Learn from the Best
        </h2>
        <div className="relative px-12 md:px-16">
          {/* Previous Button */}
          <button
            onClick={() => scrollContainer('left')}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 bg-[#ffe2c9]/80 p-2 md:p-4 rounded-full shadow-lg hover:bg-[#ffca9c] transition-all"
            aria-label="Previous mentor"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="black" className="w-6 h-6 md:w-8 md:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Fade Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-50 md:from-gray-50/50 to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray-50 md:from-gray-50/50 to-transparent"></div>

          {/* Mentors Container */}
          <div className="mentors-container overflow-auto flex gap-4 md:gap-6 scroll-smooth px-8 md:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            {mentors.map((mentor) => (
              <SpotlightCard 
                spotlightColor="rgba(240, 114, 12, 0.2)" 
                key={`first-${mentor.name}`} 
                className="flex-none w-[250px] md:w-[300px] my-6 md:my-10 overflow-hidden rounded-xl bg-white p-4 md:p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-center">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="mx-auto mb-3 md:mb-4 h-24 w-24 md:h-32 md:w-32 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <h3 className="mb-2 text-lg md:text-xl font-bold text-gray-800">{mentor.name}</h3>
                  {mentor.designation && (
                    <p className="mb-1 text-sm font-medium text-gray-600">
                      {mentor.designation}
                    </p>
                  )}
                  {mentor.organization && (
                    <p className="mb-3 text-sm font-semibold text-primary">
                      {mentor.organization}
                    </p>
                  )}
                  <div className="mt-4 pt-4 border-t border-gray-100">
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
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 bg-[#ffe2c9]/80 p-2 md:p-4 rounded-full shadow-lg hover:bg-[#ffca9c] transition-all"
            aria-label="Next mentor"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 