import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CuisineCarousel.css";

const CuisineCarousel = ({ slides }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const ingredientVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (j) => ({
      scale: 1,
      opacity: 1,
      y: j % 2 === 0 ? -140 : 140,
      x: j < 2 ? -170 : 170,
      transition: { delay: 0.8, type: "spring", stiffness: 100 }
    })
  };

  return (
    <section className="cuisine-section">
      <div className="cuisine-window-centered">
        {slides.map((slide, i) => {
          // Determine if slide is Previous, Active, or Next
          const isActive = i === index;
          const isPrev = i === (index - 1 + slides.length) % slides.length;
          const isNext = i === (index + 1) % slides.length;

          // If it's none of those, don't render it (keeps DOM clean)
          if (!isActive && !isPrev && !isNext) return null;

          let xPos = 0;
          if (isPrev) xPos = -450;
          if (isNext) xPos = 450;

          return (
            <motion.div
              key={i}
              className="plate-card"
              style={{ 
                background: `linear-gradient(135deg, ${slide.lightColor}, ${slide.darkColor})`,
                zIndex: isActive ? 10 : 5 
              }}
              animate={{ 
                x: xPos, 
                opacity: isActive ? 1 : 0.3, 
                scale: isActive ? 1 : 0.7 
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="plate-wrapper">
                <img src={slide.plateImg} alt={slide.name} className="main-plate" />

                <AnimatePresence>
                  {isActive && slide.ingredients.map((ing, j) => (
                    <motion.img
                      key={j}
                      src={ing}
                      custom={j}
                      variants={ingredientVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ scale: 0, opacity: 0 }}
                      className="floating-ingredient"
                    />
                  ))}
                </AnimatePresence>
              </div>

              {isActive && (
                <motion.div 
                  className="cuisine-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <h3 className="cuisine-label">{slide.label}</h3>
                  <h2 className="cuisine-name">{slide.name}</h2>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CuisineCarousel;