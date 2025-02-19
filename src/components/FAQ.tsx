import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../Data/faq.js';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="mt-2 text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [showAll, setShowAll] = React.useState(false);
  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="px-4 py-20" id="faq">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          <div>
            {displayedFaqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        {faqs.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-8 w-full rounded-lg bg-gray-100 py-3 text-center font-semibold text-gray-700 hover:bg-gray-200 transition-colors duration-200 shadow-lg"
          >
            {showAll ? (
              "Show Less"
            ) : (
              `Show More FAQs (${faqs.length - 5} more)`
            )}
          </button>
        )}
      </div>
    </section>
  );
} 