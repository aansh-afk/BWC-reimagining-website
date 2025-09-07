"use client";

import { useEffect, useState } from "react";
import * as motion from "framer-motion/client";

const DiffusionText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Character pool for randomization - technical/digital aesthetic
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~";
  
  useEffect(() => {
    // Initialize with random characters
    setDisplayText(text.split('').map(char => 
      char === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]
    ).join(''));
    
    const startTimeout = setTimeout(() => {
      setIsAnimating(true);
      
      // Track which characters have been resolved
      const resolved = new Array(text.length).fill(false);
      let resolvedCount = 0;
      
      const animationInterval = setInterval(() => {
        setDisplayText(current => {
          return current.split('').map((char, index) => {
            // Keep spaces as spaces
            if (text[index] === ' ') return ' ';
            
            // If already resolved, keep the correct character
            if (resolved[index]) return text[index];
            
            // Random chance to resolve each frame (creates staggered effect)
            if (Math.random() < 0.08) {
              resolved[index] = true;
              resolvedCount++;
              return text[index];
            }
            
            // Otherwise show random character
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('');
        });
        
        // Stop when all characters are resolved
        if (resolvedCount >= text.replace(/\s/g, '').length) {
          clearInterval(animationInterval);
          setDisplayText(text);
        }
      }, 50); // Update every 50ms for smooth animation
      
      return () => clearInterval(animationInterval);
    }, delay);
    
    return () => clearTimeout(startTimeout);
  }, [text, delay, chars]);
  
  return (
    <span className="inline-block">
      {displayText.split('').map((char, i) => (
        <span 
          key={i} 
          className={`inline-block transition-all duration-300 ${
            isAnimating && char === text[i] 
              ? 'text-current' 
              : 'text-current opacity-50'
          }`}
          style={{
            textShadow: isAnimating && char !== text[i] 
              ? '0 0 8px currentColor' 
              : undefined,
            // Preserve whitespace for spaces
            whiteSpace: char === ' ' ? 'pre' : 'normal',
            minWidth: char === ' ' ? '0.25em' : undefined
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

const ParticleField = () => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  
  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-30" />
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-axon/20 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const BlueprintGraphic = () => {
  const [stage, setStage] = useState(0);
  
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1000),
      setTimeout(() => setStage(2), 2000),
      setTimeout(() => setStage(3), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);
  
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Point Cloud */}
      {stage >= 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-axon rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: stage === 0 ? 0.5 : 0, scale: 1 }}
              transition={{ delay: i * 0.02 }}
              style={{
                left: `${50 + Math.cos(i * 0.5) * 30}%`,
                top: `${50 + Math.sin(i * 0.5) * 30}%`,
              }}
            />
          ))}
        </div>
      )}
      
      {/* Wireframe */}
      {stage >= 1 && (
        <motion.svg
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: stage === 1 ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <motion.polygon
            points="250,100 400,200 400,400 250,500 100,400 100,200"
            fill="none"
            stroke="#7DF9FF"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.svg>
      )}
      
      {/* Final Form */}
      {stage >= 2 && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <div className="w-64 h-64 crystalline rounded-2xl flex items-center justify-center">
              <span className="text-6xl font-light text-axon glow-axon">BWC</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-axon/20 to-tungsten/20 blur-3xl -z-10" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/images/hero-bg.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <ParticleField />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-8">
              <span className="block whitespace-nowrap">
                <DiffusionText text="Engineering Tomorrow's" delay={500} />
              </span>
              <span className="block whitespace-nowrap text-axon glow-axon">
                <DiffusionText text="Digital Infrastructure" delay={2000} />
              </span>
            </h1>
            
            <motion.p
              className="text-veil-400 text-lg mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              We transform product design and development through precision-engineered 
              technology solutions, driving exponential growth and measurable ROI 
              for forward-thinking enterprises.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
            >
              <button className="btn-axon rounded-lg">
                INITIALIZE SEQUENCE
              </button>
              <button className="btn-secondary text-veil-100">
                View Documentation
              </button>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-light text-axon glow-axon mb-2">75+</div>
                <div className="label text-veil-400">PROJECTS DEPLOYED</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-tungsten glow-tungsten mb-2">20+</div>
                <div className="label text-veil-400">SECTORS ACTIVE</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-veil-100 mb-2">12</div>
                <div className="label text-veil-400">YEARS OPERATIONAL</div>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="hidden lg:block">
            <BlueprintGraphic />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-abyss to-transparent" />
    </section>
  );
}