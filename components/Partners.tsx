"use client";

import * as motion from "framer-motion/client";

const partners = [
  {
    id: "CIM",
    name: "CIMdata",
    description: "Leading global strategic management consulting focused on PLM and digital transformation",
    status: "ACTIVE",
  },
  {
    id: "DAS",
    name: "Dassault Systèmes",
    description: "Global leader in sustainable innovation and virtual experience platform solutions",
    status: "PREMIER",
  },
  {
    id: "V3D",
    name: "Vias 3D",
    description: "Trusted engineering solutions provider specializing in simulation-driven design",
    status: "ACTIVE",
  },
  {
    id: "XLM",
    name: "XLM Solutions",
    description: "Recognized leader in PLM consulting, implementation, and integration services",
    status: "ACTIVE",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-32 relative">
      <div className="absolute inset-0 blueprint-bg opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="label text-axon mb-4">ALLIANCES</div>
          <h2 className="text-h2 text-veil-100 mb-6">World-Class Collaborations</h2>
          <p className="text-veil-400 max-w-2xl mx-auto text-lg">
            Partnering with global leaders in PLM innovation and engineering solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="crystalline rounded-lg p-6 h-full hover:border-axon/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="label text-veil-700">{partner.id}</span>
                  <span className={`label text-xs ${
                    partner.status === 'PREMIER' ? 'text-tungsten' : 'text-axon'
                  }`}>
                    {partner.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-light text-veil-100 mb-3">
                  {partner.name}
                </h3>
                
                <p className="text-veil-400 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}