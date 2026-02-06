import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Gradient Orbs - Adjusted for both modes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-indigo-300/30 dark:bg-indigo-900/30 rounded-full blur-[100px]" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-[20%] right-[0%] w-[40vw] h-[40vw] bg-violet-300/30 dark:bg-violet-900/20 rounded-full blur-[120px]" 
      />

      <motion.div 
        animate={{ 
          y: [0, -50, 0],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute bottom-[0%] left-[20%] w-[30vw] h-[30vw] bg-cyan-300/20 dark:bg-cyan-900/10 rounded-full blur-[80px]" 
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 dark:opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};