import React, { useEffect, useState, useRef } from "react";
import Nav from "../components/Nav";
import "./Home.css";
import Carousel from "../components/Carousel";
import { motion } from "framer-motion";
import { supabase } from "../supabase"; 
import Logo from "../assets/Imgs/Senet Logo.png"

// ASSETS
import UserIcon from "../assets/Icons/Profile-Icon.png";
import EditIcon from "../assets/Icons/Edit-Icon.png";
import LayersIcon from "../assets/Icons/Layers-Icon.png";
import FlavorsIcon from "../assets/Icons/Flavors-Icon.png"; // New
import VarietyIcon from "../assets/Icons/Variety-Icon.png"; // New
import SaltIcon from "../assets/Icons/Salt-Icon.png";       // New
import Seneya from "../assets/Imgs/Seneya.png";
import video from "../assets/Videos/Marketing Video.mp4"

const Home = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [isNear, setIsNear] = useState(true);
  const [isDiscoverNear, setIsDiscoverNear] = useState(false);
  const [isBottomTrayNear, setIsBottomTrayNear] = useState(false); // New State
  
  const discoverRef = useRef(null);
  const bottomTrayRef = useRef(null); // New Ref

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await supabase.from('Recipes_images').select('image_url');
      if (data) setCarouselImages(data.map(item => item.image_url));
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
      setIsNear(distance < 600);

      // Top Discover Detection
      if (discoverRef.current) {
        const rect = discoverRef.current.getBoundingClientRect();
        setIsDiscoverNear(e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom);
      }

      // Bottom Tray Detection
      if (bottomTrayRef.current) {
        const rect = bottomTrayRef.current.getBoundingClientRect();
        setIsBottomTrayNear(e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom);
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  const trayVariants = {
    hidden: { y: 150, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="home-wrapper">
      <Nav />
      
      {/* HERO SECTION */}
      <div className="hero-overlay">
        <motion.div 
          animate={{ opacity: isNear ? 1 : 0, y: isNear ? 0 : 30, scale: isNear ? 1 : 0.9 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="hero-text"
        >
          <div className="hero-title"><img src={Logo} alt="Senet" /></div>
          <p className="hero-subtitle">Bringing Global Flavors to Your Kitchen with AR</p>
          <article className="Buttons">
            <button className="hero-btn">Download For Android</button>
            <button className="hero-btn">Download For IOS</button>
          </article>
        </motion.div>
      </div>
      
      {carouselImages.length > 0 && <Carousel items={carouselImages} gradientColor="#F0660C" />}

      {/* TOP DISCOVER SECTION */}
      <section className="Dicover" ref={discoverRef}>
        <h2 className="Discover-hero-txt">Discover the features of Senet</h2>
        <motion.div className="features-tray-wrapper" variants={trayVariants} initial="hidden" animate={isDiscoverNear ? "visible" : "hidden"}>
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
          src={video} controls autoPlay loop muted className="promo-video"
          initial={{ width: "80%", borderRadius: "20px" }}
          whileHover={{ width: "100%", height: "100vh", borderRadius: "0px", transition: { duration: 0.5 } }}
          style={{ zIndex: 10 }}
        />
      </section>

      {/* BOTTOM TRAY SECTION (Mirroring the top styling) */}
      <section className="Dicover Bottom-Tray-Section" ref={bottomTrayRef}>
        <motion.div 
          className="features-tray-wrapper"
          variants={trayVariants}
          initial="hidden"
          animate={isBottomTrayNear ? "visible" : "hidden"}
        >
          <div className="tray-content">
            <div className="features-grid">
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={FlavorsIcon} alt="flavors" className="card-icon"/>
                <h3>Global Palette</h3>
                <p>Explore authentic ingredients from every corner of the world.</p>
              </motion.div>
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={VarietyIcon} alt="variety" className="card-icon"/>
                <h3>Endless Variety</h3>
                <p>From street food to fine dining, find the perfect dish for any mood.</p>
              </motion.div>
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={SaltIcon} alt="salt" className="card-icon"/>
                <h3>Perfect Seasoning</h3>
                <p>Master the art of balance with guided seasoning techniques.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;