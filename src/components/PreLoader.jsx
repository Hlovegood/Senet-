import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PreLoader.css';
import SenetIcon from '../assets/Imgs/Senet icon.png';

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoading = () => {
      // Small timeout to ensure the exit animation feels smooth 
      // even if the site loads instantly
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); 
    };

    if (document.readyState === 'complete') {
      handleLoading();
    } else {
      window.addEventListener('load', handleLoading);
      return () => window.removeEventListener('load', handleLoading);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="preloader-storage"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%', 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] } 
          }}
        >
          <div className="loader-content">
            <motion.img
              src={SenetIcon}
              alt="Senet Loading..."
              className="loader-logo"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Minimal Progress Bar */}
            <div className="loader-track">
              <motion.div 
                className="loader-bar"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;