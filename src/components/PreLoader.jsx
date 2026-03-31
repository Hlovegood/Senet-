import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom'; // Add this import
import './PreLoader.css';
import SenetIcon from '../assets/Imgs/Senet icon.png';

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // Hook to listen for URL changes

  // 1. Handle the VERY FIRST load (Initial site entry)
  useEffect(() => {
    const handleInitialLoad = () => {
      setTimeout(() => setIsLoading(false), 2000);
    };

    if (document.readyState === 'complete') {
      handleInitialLoad();
    } else {
      window.addEventListener('load', handleInitialLoad);
      return () => window.removeEventListener('load', handleInitialLoad);
    }
  }, []);

  // 2. Handle NAVIGATION loads (When clicking a Link)
  useEffect(() => {
    // We don't want it to trigger on the very first render (handled above)
    // but we want it for every subsequent route change
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Shorter duration for internal navigation

    return () => clearTimeout(timer);
  }, [location.pathname]); // Triggered every time the URL changes

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="preloader-storage"
          key="preloader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 0.8, ease: [0.45, 0, 0.55, 1] } 
          }}
        >
          <div className="loader-content">
            <motion.img
              src={SenetIcon}
              alt="Senet Loading..."
              className="loader-logo"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="loader-track">
              <motion.div 
                className="loader-bar"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;