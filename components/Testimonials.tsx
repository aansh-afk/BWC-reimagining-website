"use client";

import { useState } from "react";
import * as motion from "framer-motion/client";

const testimonials = [
  {
    id: "001",
    text: "BrainWave had a deep business understanding and unmatched expertise in 3DEXPERIENCE solutions. Their commitment to excellence and putting the customer first is truly commendable.",
    author: "Deepak T",
    title: "CEO, Leading Bus Manufacturer",
    sector: "Automotive",
  },
  {
    id: "002",
    text: "The team's technical expertise and innovative approach helped us achieve significant improvements in our product development lifecycle.",
    author: "Sarah Chen",
    title: "CTO, Automotive Solutions",
    sector: "Technology",
  },
  {
    id: "003",
    text: "Working with BWC transformed our digital infrastructure. Their strategic guidance was invaluable in our modernization journey.",
    author: "Michael Roberts",
    title: "VP Engineering, Tech Corp",
    sector: "High Tech",
  },
  {
    id: "004",
    text: "Exceptional service and deep industry knowledge. BWC delivered beyond our expectations on every project milestone.",
    author: "Priya Sharma",
    title: "Director, Manufacturing Inc",
    sector: "Manufacturing",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 bg-veil-800/30 relative overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="label text-tungsten mb-4">VALIDATION</div>
          <h2 className="text-h2 text-veil-100">Client Success Stories</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="crystalline rounded-xl p-12"
          >
            <div className="flex items-start gap-6">
              <div className="text-6xl text-axon/30">"</div>
              <div className="flex-1">
                <p className="text-veil-100 text-lg leading-relaxed mb-8">
                  {testimonials[activeIndex].text}
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-veil-100 font-light text-lg">
                      {testimonials[activeIndex].author}
                    </p>
                    <p className="text-veil-400 text-sm">
                      {testimonials[activeIndex].title}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="label text-tungsten text-xs">
                      {testimonials[activeIndex].sector}
                    </p>
                    <p className="label text-veil-700 text-xs">
                      REF: {testimonials[activeIndex].id}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center items-center gap-4 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? "w-12 h-1 bg-axon"
                    : "w-1 h-1 bg-veil-700 hover:bg-veil-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}