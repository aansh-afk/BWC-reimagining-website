"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredLink({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <footer 
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #000a18 0%, #000000 100%)'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredLink(null)}
    >
      {/* Background subtle grid effect */}
      <div className="absolute inset-0 blueprint-bg opacity-5" />

      {/* Hover Spotlight Effect */}
      {hoveredLink && (
        <div
          className="absolute pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: hoveredLink.x - 150,
            top: hoveredLink.y - 150,
            width: 300,
            height: 300,
            background: `radial-gradient(circle, rgba(125, 249, 255, 0.08) 0%, transparent 60%)`,
            filter: 'blur(40px)',
          }}
        />
      )}

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-light text-axon glow-axon">BWC</span>
              <span className="text-2xl text-tungsten animate-pulse">.</span>
            </div>
            <p className="text-veil-400 text-sm leading-relaxed">
              Engineering Tomorrow's Digital Future through precision-engineered solutions and strategic innovation.
            </p>
            <div className="mt-6 space-y-1">
              <p className="label text-veil-700 text-xs">BRAINWAVE CONSULTING</p>
              <p className="label text-veil-700 text-xs">EST. 2012</p>
            </div>
          </div>

          <div>
            <h4 className="label text-veil-400 mb-6">SOLUTIONS</h4>
            <div className="space-y-3">
              <Link 
                href="#" 
                className="block text-veil-400 hover:text-axon transition-all duration-300 text-sm group relative"
              >
                <span className="relative z-10">3DEXPERIENCE Platform</span>
              </Link>
              <Link 
                href="#" 
                className="block text-veil-400 hover:text-axon transition-all duration-300 text-sm"
              >
                Software Engineering
              </Link>
              <Link 
                href="#" 
                className="block text-veil-400 hover:text-axon transition-all duration-300 text-sm"
              >
                Technology Consulting
              </Link>
              <Link 
                href="#" 
                className="block text-veil-400 hover:text-axon transition-all duration-300 text-sm"
              >
                Digital Transformation
              </Link>
            </div>
          </div>

          <div>
            <h4 className="label text-veil-400 mb-6">NETWORK</h4>
            <div className="space-y-3">
              <Link href="#" className="block text-veil-400 hover:text-axon transition-all duration-300 text-sm">
                About BWC
              </Link>
              <Link href="#" className="block text-veil-400 hover:text-axon transition-all duration-300 text-sm">
                Partner Alliance
              </Link>
              <Link href="#" className="block text-veil-400 hover:text-axon transition-all duration-300 text-sm">
                Career Portal
              </Link>
              <Link href="#" className="block text-veil-400 hover:text-axon transition-all duration-300 text-sm">
                Resource Center
              </Link>
            </div>
          </div>

          <div>
            <h4 className="label text-veil-400 mb-6">INTERFACE</h4>
            <div className="space-y-3">
              <Link href="#" className="block text-veil-400 hover:text-axon transition-all duration-300 text-sm">
                Contact Gateway
              </Link>
              <Link href="#" className="block text-veil-400 hover:text-axon transition-all duration-300 text-sm">
                Support Channel
              </Link>
              <Link href="#" className="block text-veil-400 hover:text-axon transition-all duration-300 text-sm">
                System Status
              </Link>
              <Link href="#" className="block text-veil-400 hover:text-tungsten transition-all duration-300 text-sm">
                LinkedIn Profile
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-veil-700/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-veil-700 text-xs">
              © 2024 BrainWave Consulting. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link 
                href="#" 
                className="text-veil-700 hover:text-veil-400 text-xs transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="#" 
                className="text-veil-700 hover:text-veil-400 text-xs transition-all duration-300"
              >
                Terms of Service
              </Link>
              <Link 
                href="#" 
                className="text-veil-700 hover:text-veil-400 text-xs transition-all duration-300"
              >
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}