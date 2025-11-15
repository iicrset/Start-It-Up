import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../Assets/LOGO.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative shadow-lg px-4 sm:px-6" style={{ backgroundColor: "#D43434" }}>
      <div className="mx-auto max-w-6xl">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold flex items-center">
            <img src={logo} alt="Start It Up Logo" className="px-5 h-[80px] filter brightness-0 invert" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="#features"
              className="text-white/90 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-white/90 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
            <a
              href="#faq"
              className="text-white/90 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              FAQ
            </a>
            {/* Profile Book link */}
            <a
              href="https://online.fliphtml5.com/xgblu/oupo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-yellow-400 font-semibold px-4 py-2 rounded-md"
            >
              Profile Book
            </a>
            <a
              href="#apply"
              className="rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-red-900 hover:bg-yellow-300 hover:text-red-900 shadow-md transition-colors duration-300"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 absolute top-20 left-0 right-0 bg-[#D43434] shadow-lg z-50">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#features" className="text-white/90 hover:text-yellow-400 py-1">Features</a>
              <a href="#contact" className="text-white/90 hover:text-yellow-400 py-1">Contact</a>
              <a href="#faq" className="text-white/90 hover:text-yellow-400 py-1">FAQ</a>
              <a
                href="https://online.fliphtml5.com/xgblu/oupo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-yellow-400 py-1 font-semibold"
              >
                Profile Book
              </a>
              <a
                href="#apply"
                className="inline-block rounded-lg bg-yellow-400 px-4 py-2 text-center font-semibold text-red-900 hover:bg-yellow-300 hover:text-red-900 transition-colors duration-300"
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
