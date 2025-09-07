"use client";

import type React from "react";
import { useEffect, useRef } from "react";

const IsometricBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    let animationFrameId: number;

    const resize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    const draw = () => {
      if (!canvas || !ctx) return;
      const scale = Math.min(canvas.width, canvas.height) / 20; // Slightly smaller scale
      const gridWidth = Math.ceil(canvas.width / scale) * 2;
      const gridHeight = Math.ceil(canvas.height / (scale * 0.5)) * 2;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let y = -gridHeight; y < gridHeight; y++) {
        for (let x = -gridWidth; x < gridWidth; x++) {
          const posX = centerX + ((x - y) * scale) / 2;
          const posY = centerY + ((x + y) * scale) / 4;
          const distance = Math.sqrt(x * x + y * y);
          const maxDistance = Math.sqrt(gridWidth * gridWidth + gridHeight * gridHeight);
          const normalizedDistance = distance / maxDistance;
          const height = scale * (1 - normalizedDistance) * Math.abs(Math.sin(distance * 0.3 + time));

          // Draw the isometric cube face
          ctx.beginPath();
          ctx.moveTo(posX, posY - height);
          ctx.lineTo(posX + scale / 2, posY - scale / 2 - height);
          ctx.lineTo(posX + scale, posY - height);
          ctx.lineTo(posX + scale, posY);
          ctx.lineTo(posX + scale / 2, posY + scale / 2);
          ctx.lineTo(posX, posY);
          ctx.closePath();

          // Create gradient using Meridian colors with very low opacity
          const gradient = ctx.createLinearGradient(posX, posY - height, posX + scale, posY);
          const intensity = (1 - normalizedDistance) * 0.1; // Very low base opacity
          
          // Use Meridian abyss and axon colors
          gradient.addColorStop(0, `rgba(125, 249, 255, ${intensity * 0.3})`); // Axon color
          gradient.addColorStop(0.5, `rgba(0, 10, 24, ${intensity * 0.2})`); // Abyss color  
          gradient.addColorStop(1, `rgba(125, 249, 255, ${intensity * 0.1})`); // Axon color

          ctx.fillStyle = gradient;
          ctx.fill();

          // Optional: Add subtle stroke
          ctx.strokeStyle = `rgba(125, 249, 255, ${intensity * 0.05})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      
      // Clear canvas with very transparent overlay for fade effect
      ctx.fillStyle = "rgba(0, 10, 24, 0.05)"; // Very subtle fade using abyss color
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      draw();
      time += 0.03; // Slower animation
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }} // Additional opacity reduction
    />
  );
};

export default IsometricBackground;