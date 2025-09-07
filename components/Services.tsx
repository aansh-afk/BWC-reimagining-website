"use client";

import * as motion from "framer-motion/client";

const services = [
  {
    id: "01",
    icon: "⟐",
    title: "3DEXPERIENCE Platform",
    description: "End-to-end platform solutions for innovation, collaboration, and accelerated product development with seamless integration.",
    color: "axon",
  },
  {
    id: "02",
    icon: "◈",
    title: "Software Engineering",
    description: "Robust, scalable solutions tailored to your business needs with seamless integration and performance optimization.",
    color: "tungsten",
  },
  {
    id: "03",
    icon: "◇",
    title: "Technology Consulting",
    description: "Strategic technology adoption to maximize ROI through process optimization and digital transformation strategies.",
    color: "axon",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/images/engineering-bg.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 blueprint-bg opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="label text-axon mb-4">CAPABILITIES</div>
          <h2 className="text-h2 text-veil-100 mb-6">Comprehensive Solutions</h2>
          <p className="text-veil-400 max-w-2xl mx-auto text-lg">
            Empowering businesses with end-to-end digital transformation and precision-engineered excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="crystalline rounded-xl p-8 h-full hover:border-axon/30 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <span className={`text-5xl ${service.color === 'axon' ? 'text-axon' : 'text-tungsten'} opacity-80`}>
                    {service.icon}
                  </span>
                  <span className="label text-veil-700">{service.id}</span>
                </div>
                
                <h3 className={`text-xl font-light mb-4 ${service.color === 'axon' ? 'text-axon' : 'text-tungsten'}`}>
                  {service.title}
                </h3>
                
                <p className="text-veil-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <button className="text-veil-400 hover:text-axon transition-colors flex items-center gap-2 group/btn">
                  <span className="label">ACCESS MODULE</span>
                  <span className="transform transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}