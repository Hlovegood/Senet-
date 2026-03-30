import React, { useEffect, useState, useRef } from "react"; // Added useRef
import Nav from "../components/Nav";
import "./Home.css";
import Carousel from "../components/Carousel";
import { motion } from "framer-motion";
import { supabase } from "../supabase"; 
import Logo from "../assets/Imgs/Senet Logo.png"

// ICONS AND IMAGES AND VIDEOS
import UserIcon from "../assets/Icons/Profile-Icon.png";
import EditIcon from "../assets/Icons/Edit-Icon.png";
import LayersIcon from "../assets/Icons/Layers-Icon.png";
import Seneya from "../assets/Imgs/Seneya.png";
import video from "../assets/Videos/Marketing Video.mp4"

const Home = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [isNear, setIsNear] = useState(true);
  const [isDiscoverNear, setIsDiscoverNear] = useState(false);
  const discoverRef = useRef(null); // Ref to track the Discover section

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
      // Logic for Hero Text
      const threshold = 600; 
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );
      setIsNear(distance < threshold);

      // Logic for Discover Section (using Ref bounds)
      if (discoverRef.current) {
        const rect = discoverRef.current.getBoundingClientRect();
        // Trigger if mouse enters the Discover section area
        const isInDiscover = 
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
        
        setIsDiscoverNear(isInDiscover);
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  // Animation variants
  const trayVariants = {
    hidden: { y: 150, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

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
            <motion.button whileHover={{ scale: 1.05 }} className="hero-btn">Download For Android</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="hero-btn">Download For IOS</motion.button>
          </article>
        </motion.div>
      </div>
      
      {carouselImages.length > 0 && (
        <Carousel items={carouselImages} gradientColor="#F0660C" />
      )}

      {/* INTEGRATED DISCOVER SECTION */}
      <section className="Dicover" ref={discoverRef}>
        <h2 className="Discover-hero-txt">
          Discover the features of Senet
        </h2>

        <motion.div 
          className="features-tray-wrapper"
          variants={trayVariants}
          initial="hidden"
          animate={isDiscoverNear ? "visible" : "hidden"}
        >
          <img src={Seneya} className="tray-bg-img" alt="tray" />
          
          <div className="tray-content">
            <h2 className="tray-title">Top Features</h2>
            <div className="features-grid">
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={UserIcon} alt="user" className="card-icon"/>
                <h3>Personalized</h3>
                <p>Tailored culinary journey just for you.</p>
              </motion.div>

              <motion.div className="feature-card" variants={itemVariants}>
                <img src={EditIcon} alt="edit" className="card-icon"/>
                <h3>Your choice of Flavor</h3>
                <p>Adapt any recipe to your specific taste.</p>
              </motion.div>

              <motion.div className="feature-card" variants={itemVariants}>
                <img src={LayersIcon} alt="layers" className="card-icon"/>
                <h3>Many Options</h3>
                <p>Unlock AR guidance and diverse dishes.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      
{/* VIDEO SECTION */}
<section className="video-section">
  <motion.video 
    src={video} 
    controls 
    autoPlay 
    loop 
    muted 
    className="promo-video"
    initial={{ width: "80%", height: "auto", borderRadius: "20px" }}
    whileHover={{ 
      width: "100%", 
      height: "100vh", 
      borderRadius: "0px",
      scale: 1, // Reset scale if you were using it before
      transition: { duration: 0.5, ease: "easeInOut" } 
    }}
    style={{ zIndex: 999 }} // Ensures it goes over the Nav/Overlay
  />
</section>

    </div>
  );
};

export default Home;