"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import * as motion from "framer-motion/client";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "crystalline" : "bg-abyss/50"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-light text-axon glow-axon transition-all group-hover:text-shadow-lg">
              BWC
            </span>
            <span className="text-2xl text-tungsten animate-pulse">.</span>
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            <Link 
              href="#services" 
              className="relative text-veil-400 hover:text-axon transition-colors duration-300 group"
            >
              <span className="relative z-10">Services</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-axon transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="#industries" 
              className="relative text-veil-400 hover:text-axon transition-colors duration-300 group"
            >
              <span className="relative z-10">Industries</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-axon transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="#partners" 
              className="relative text-veil-400 hover:text-axon transition-colors duration-300 group"
            >
              <span className="relative z-10">Partners</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-axon transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link 
              href="#about" 
              className="relative text-veil-400 hover:text-axon transition-colors duration-300 group"
            >
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-axon transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#contact"
              className="btn-axon rounded-lg"
            >
              INITIATE CONTACT
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-veil-400 hover:text-axon transition-colors"
          >
            <div className="space-y-1.5">
              <motion.span 
                className="block w-6 h-[1px] bg-current"
                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="block w-6 h-[1px] bg-current"
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="block w-6 h-[1px] bg-current"
                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="crystalline border-t border-veil-700/50">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="#services" 
              className="block text-veil-400 hover:text-axon transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#industries" 
              className="block text-veil-400 hover:text-axon transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
            </Link>
            <Link 
              href="#partners" 
              className="block text-veil-400 hover:text-axon transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </Link>
            <Link 
              href="#about" 
              className="block text-veil-400 hover:text-axon transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="block text-axon font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Initiate Contact
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
}