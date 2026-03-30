import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import "./Home.css";
import Carousel from "../components/Carousel";
import { motion } from "framer-motion";
import { supabase } from "../supabase"; 

const Home = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        // UPDATED TABLE NAME HERE: Recipes_images
        const { data, error } = await supabase
          .from('Recipes_images') 
          .select('image_url');
        
        if (error) throw error;

        if (data) {
          // Map the array of objects to an array of strings for the Carousel
          const imageUrls = data.map(item => item.image_url);
          setCarouselImages(imageUrls);
        }
      } catch (error) {
        console.error("Error fetching from Supabase:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <Nav />
      
      <div className="hero-overlay">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hero-text"
        >
          <h1 className="hero-title">Senet</h1>
          <p className="hero-subtitle">Bringing Global Flavors to Your Kitchen with AR</p>

          <article className="Buttons">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hero-btn">
              Download For Android
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hero-btn">
              Download For IOS
            </motion.button>
          </article>
        </motion.div>
      </div>
      
      {/* Only render Carousel if we have images. 
         This prevents the Carousel from breaking while data is 'null' 
      */}
      {!loading && carouselImages.length > 0 ? (
        <Carousel items={carouselImages} gradientColor="#F0660C" />
      ) : (
        <div className="loading-state">Loading Flavors...</div>
      )}
    </>
  );
};

export default Home;