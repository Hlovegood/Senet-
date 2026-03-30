import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import "./Home.css";
import Carousel from "../components/Carousel";
import { motion } from "framer-motion";
import { supabase } from "../supabase"; 
import Logo from "../assets/Imgs/Senet Logo.png"

const Home = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [isNear, setIsNear] = useState(true);

  
  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from('Recipes_images')
        .select('image_url');
      
      if (error) {
        console.error("Supabase Error:", error);
      } else if (data) {
        setCarouselImages(data.map(item => item.image_url));
      }
    };
    fetchImages();
  }, []);

  
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      const threshold = 600; 
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );

      setIsNear(distance < threshold);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  return (
    <div className="home-wrapper">
      
      <Nav />
      
      <div className="hero-overlay">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isNear ? 1 : 0, 
            y: isNear ? 0 : 30,
            scale: isNear ? 1 : 0.9 
          }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="hero-text"
          style={{ pointerEvents: isNear ? "auto" : "none" }}
        >
          <div className="hero-title"><img src={Logo} alt="" /></div>
          <p className="hero-subtitle">Bringing Global Flavors to Your Kitchen with AR</p>

          <article className="Buttons">
            <motion.button whileHover={{ scale: 1.05 }} className="hero-btn">
              Download For Android
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="hero-btn">
              Download For IOS
            </motion.button>
          </article>
        </motion.div>
      </div>
      
      
      {carouselImages.length > 0 && (
        <Carousel items={carouselImages} gradientColor="#F0660C" />
      )}

      <section>
      <h2>
        Discover the features of Senet
      </h2>



      </section>
    </div>
    
  );
  
};

export default Home;