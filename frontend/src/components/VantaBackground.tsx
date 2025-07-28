import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface VantaBackgroundProps {
  color?: number;
  backgroundColor?: number;
  points?: number;
  maxDistance?: number;
  spacing?: number;
  showDots?: boolean;
  mouseCoeffX?: number;
  mouseCoeffY?: number;
  backgroundAlpha?: number;
  isDarkMode?: boolean;
}

export default function VantaBackground({
  color = 0xff3f81,
  backgroundColor = 0x23153c,
  points = 10,
  maxDistance = 20,
  spacing = 15,
  showDots = true,
  mouseCoeffX = 1,
  mouseCoeffY = 1,
  backgroundAlpha = 0.1,
  isDarkMode = true
}: VantaBackgroundProps): React.ReactElement {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let effect: any;
    
    // Define colors based on theme
    const currentColor = isDarkMode ? color : 0x00b3b3; // more vibrant teal for light mode 
    //what if we want lime green? or purple? or red?
    const currentBackgroundColor = isDarkMode ? backgroundColor : 0xffffff; // pure white background
    const currentBackgroundAlpha = isDarkMode ? backgroundAlpha : 0.9; // higher alpha for white background visibility
    
    const loadVanta = async () => {
      try {
        // @ts-ignore - Vanta.js doesn't have TypeScript declarations
        const NET = (await import("vanta/dist/vanta.net.min")).default;
        
        // Always destroy existing effect before creating new one
        if (vantaEffect) {
          vantaEffect.destroy();
          setVantaEffect(null);
        }
        
        if (vantaRef.current) {
          effect = NET({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: window.innerHeight,
            minWidth: window.innerWidth,
            scale: 1.0,
            scaleMobile: 1.0,
            color: currentColor,
            backgroundColor: currentBackgroundColor,
            backgroundAlpha: currentBackgroundAlpha,
            points,
            maxDistance,
            spacing,
            showDots,
            mouseCoeffX,
            mouseCoeffY
          });
          setVantaEffect(effect);
        }
      } catch (error) {
        console.error('Failed to load Vanta NET effect:', error);
      }
    };

    const handleResize = () => {
      if (effect && effect.resize) {
        effect.resize();
      }
    };

    loadVanta();
    window.addEventListener('resize', handleResize);

    return () => {
      if (effect) {
        effect.destroy();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode, color, backgroundColor, backgroundAlpha, points, maxDistance, spacing, showDots, mouseCoeffX, mouseCoeffY]); // Added isDarkMode to dependencies

  return (
    <div 
      ref={vantaRef} 
      className="fixed inset-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
}
