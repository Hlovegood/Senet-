import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CuisineCarousel.css";

const CuisineCarousel = ({ slides }) => {
  const [index, setIndex] = useState(0);

  // Automatic transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const current = slides[index];

  // Animation Variants
  const containerVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const ingredientVariants = {
    hidden: { scale: 0, opacity: 0, y: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      y: i % 2 === 0 ? -120 : 120, // Alternates floating up/down
      x: i < 2 ? -150 : 150,       // Alternates left/right
      transition: { delay: 0.5 + i * 0.1, type: "spring", stiffness: 100 }
    })
  };

  return (
    <section className="cuisine-section">
      <div className="cuisine-window">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="cuisine-card"
            style={{ background: `linear-gradient(135deg, ${current.lightColor}, ${current.darkColor})` }}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Text Overlay */}
            <div className="cuisine-text">
              <h3 className="cuisine-label">{current.label}</h3>
              <h2 className="cuisine-name">{current.name}</h2>
            </div>

            {/* Central Plate */}
            <div className="plate-wrapper">
              <motion.img 
                src={current.plateImg} 
                alt={current.name} 
                className="main-plate"
                initial={{ scale: 0.8, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: "spring" }}
              />

              {/* Floating Ingredients */}
              {current.ingredients.map((ing, i) => (
                <motion.img
                  key={i}
                  src={ing}
                  custom={i}
                  variants={ingredientVariants}
                  initial="hidden"
                  animate="visible"
                  className="floating-ingredient"
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CuisineCarousel;