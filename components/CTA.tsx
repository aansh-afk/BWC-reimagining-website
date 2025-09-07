"use client";

import * as motion from "framer-motion/client";

export default function CTA() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 blueprint-bg opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="crystalline rounded-2xl p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-axon/10 via-transparent to-tungsten/10" />
            
            <div className="relative z-10">
              <div className="label text-axon mb-6">INITIALIZE TRANSFORMATION</div>
              
              <h2 className="text-5xl font-light text-veil-100 mb-6">
                Ready to Engineer Your
                <br />
                <span className="text-axon glow-axon">Digital Evolution?</span>
              </h2>
              
              <p className="text-veil-400 text-lg mb-12 max-w-2xl mx-auto">
                Take the first step towards enhanced efficiency and precision-engineered excellence
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn-axon rounded-lg text-lg px-8 py-4">
                  SCHEDULE CONSULTATION
                </button>
                <button className="px-8 py-4 text-veil-100 border border-veil-700 rounded-lg hover:border-tungsten hover:text-tungsten transition-all duration-300">
                  REQUEST DEMO
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}