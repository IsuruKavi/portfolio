
import type React from "react";

export const AnimatedBorderButton = ({ children }:{children:React.ReactNode}) => {
  return (
    <button
      className="relative bg-transparent border-2 border-border  
        text-foreground hover:border-primary hover:border-2 transition-all 
        duration-500  
       
        disabled:opacity-50 disabled:cursor-not-allowed group 
        px-8 py-4 text-lg font-medium rounded-full 
        animated-border glass"
    >
      {/* Animated SVG Border */}
      
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};