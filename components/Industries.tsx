"use client";

import * as motion from "framer-motion/client";

const industries = [
  { icon: "⬡", name: "Automotive", code: "AUT" },
  { icon: "⬢", name: "Manufacturing", code: "MFG" },
  { icon: "⬣", name: "Energy", code: "ENR" },
  { icon: "◉", name: "Life Sciences", code: "LSC" },
  { icon: "◈", name: "Construction", code: "CON" },
  { icon: "◇", name: "High Tech", code: "HTC" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-32 bg-veil-800/20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "url('/images/technology-grid.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="label text-tungsten mb-4">SECTORS</div>
          <h2 className="text-h2 text-veil-100">Diverse Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.code}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.4, 0, 0.2, 1]
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="crystalline rounded-lg p-6 text-center hover:border-tungsten/30 transition-all duration-300">
                <div className="text-4xl text-tungsten/60 group-hover:text-tungsten mb-3 transition-colors">
                  {industry.icon}
                </div>
                <p className="text-veil-100 text-sm mb-1">{industry.name}</p>
                <p className="label text-veil-700 text-xs">{industry.code}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}