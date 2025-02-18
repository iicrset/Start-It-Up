import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <nav style={{ backgroundColor: "#F4F4EE" }}>
      <div className="mx-auto max-w-6xl px-4 h-20">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-orange-600">
            Start It Up
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className="text-black/90 hover:text-black">
              Features
            </a>
            <a href="#contact" className="text-black/90 hover:text-black">
              Contact
            </a>
            <a href="#faq" className="text-black/90 hover:text-black">
              FAQ
            </a>
            <a
              href="#apply"
              className="rounded-lg bg-white px-4 py-2 font-semibold text-primary hover:bg-white/90 shadow-md"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-orange-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-orange-700/90 hover:text-orange-900">
                Features
              </a>
              <a href="#contact" className="text-orange-700/90 hover:text-orange-900">
                Contact
              </a>
              <a href="#faq" className="text-orange-700/90 hover:text-orange-900">
                FAQ
              </a>
              <a
                href="#apply"
                className="inline-block rounded-lg bg-white px-4 py-2 text-center font-semibold text-orange-700 hover:bg-white/90"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 