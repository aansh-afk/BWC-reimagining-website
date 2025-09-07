"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export default function MouseEffect() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const requestAnimationFrameId = useRef<number>();
  const lastMousePosition = useRef<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    // Cancel any pending animation frame
    if (requestAnimationFrameId.current) {
      cancelAnimationFrame(requestAnimationFrameId.current);
    }

    // Use requestAnimationFrame for smooth 60fps updates
    requestAnimationFrameId.current = requestAnimationFrame(() => {
      const newPosition = { x: e.clientX, y: e.clientY };
      
      // Only update if position has changed significantly (reduces unnecessary re-renders)
      const deltaX = Math.abs(newPosition.x - lastMousePosition.current.x);
      const deltaY = Math.abs(newPosition.y - lastMousePosition.current.y);
      
      if (deltaX > 1 || deltaY > 1) {
        setMousePosition(newPosition);
        lastMousePosition.current = newPosition;
      }
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Enhanced hover detection for interactive elements
  const handleMouseOver = useCallback((e: MouseEvent) => {
    try {
      const target = e.target as HTMLElement;
      
      // Check if element is interactive
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.type === 'submit' ||
        target.type === 'button' ||
        target.role === 'button' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'TEXTAREA' ||
        target.hasAttribute('tabindex') ||
        target.hasAttribute('data-clickable') ||
        target.classList.contains('btn-axon') ||
        target.classList.contains('btn-secondary') ||
        target.style.cursor === 'pointer' ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    } catch (error) {
      // Fallback: assume not interactive if there's an error
      setIsHovering(false);
    }
  }, []);

  useEffect(() => {
    // Add event listeners to document for global mouse tracking
    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      
      // Clean up any pending animation frame
      if (requestAnimationFrameId.current) {
        cancelAnimationFrame(requestAnimationFrameId.current);
      }
    };
  }, [updateMousePosition, handleMouseEnter, handleMouseLeave, handleMouseOver]);

  // Don't render on mobile devices to save performance
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }, []);

  if (isMobile) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-50 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: `radial-gradient(${isHovering ? '800px' : '600px'} circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(125, 249, 255, ${isHovering ? '0.08' : '0.05'}) 0%, rgba(125, 249, 255, ${isHovering ? '0.04' : '0.025'}) 40%, transparent 70%)`,
        filter: 'blur(1px)',
        mixBlendMode: 'screen',
        willChange: 'background',
        transform: 'translateZ(0)', // Force hardware acceleration
      }}
      aria-hidden="true"
    />
  );
}