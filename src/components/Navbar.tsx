import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../Assets/LOGO.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <nav style={{ backgroundColor: "#F4F4EE" }} className='shadow-lg relative px-4 sm:px-6'>
      <div className="mx-auto max-w-6xl">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold flex items-center">
            <img src={logo} alt="Start It Up Logo" className="px-5 h-[80px]" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className="text-black/90 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
              Features
            </a>
            <a href="#contact" className="text-black/90 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </a>
            <a href="#faq" className="text-black/90 hover:text-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
              FAQ
            </a>
            <a
              href="#apply"
              className="rounded-lg bg-white px-4 py-2 font-semibold text-primary hover:bg-primary hover:text-white shadow-md transition-colors duration-300"
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
          <div className="md:hidden py-4 absolute top-20 left-0 right-0 bg-[#F4F4EE] shadow-lg z-50">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#features" className="text-orange-700/90 hover:text-orange-900 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
                Features
              </a>
              <a href="#contact" className="text-orange-700/90 hover:text-orange-900 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
                Contact
              </a>
              <a href="#faq" className="text-orange-700/90 hover:text-orange-900 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full">
                FAQ
              </a>
              <a
                href="#apply"
                className="inline-block rounded-lg bg-white px-4 py-2 text-center font-semibold text-orange-700 hover:bg-orange-700 hover:text-white transition-colors duration-300"
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