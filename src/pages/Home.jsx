import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { supabase } from "../supabase"; 
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import "./Home.css";

// ASSETS - CORE
import Logo from "../assets/Imgs/Senet Logo.png"
import Seneya from "../assets/Imgs/Seneya.png";
import video from "../assets/Videos/Marketing Video.mp4"

// ASSETS - ICONS
import UserIcon from "../assets/Icons/Profile-Icon.png";
import EditIcon from "../assets/Icons/Edit-Icon.png";
import LayersIcon from "../assets/Icons/Layers-Icon.png";
import FlavorsIcon from "../assets/Icons/Flavors-Icon.png";
import VarietyIcon from "../assets/Icons/Variety-Icon.png";
import SaltIcon from "../assets/Icons/Salt-Icon.png";

// ASSETS - COMMUNITY PICS (All PNG as requested)
import P1 from "../assets/Imgs/Pic div 1.png"; 
import P2 from "../assets/Imgs/Pic div 2.png";
import P3 from "../assets/Imgs/Pic div 3.png"; 
import P4 from "../assets/Imgs/Pic div 4.png"; 
import P5 from "../assets/Imgs/Pic div 5.png";

const Home = () => {
  // REFS
  const discoverRef = useRef(null);
  const bottomTrayRef = useRef(null);
  const communityRef = useRef(null);

  // HOOKS
  const isCommunityInView = useInView(communityRef, { once: false, amount: 0.2 });

  // STATE
  const [carouselImages, setCarouselImages] = useState([]);
  const [isNear, setIsNear] = useState(true);
  const [isDiscoverNear, setIsDiscoverNear] = useState(false);
  const [isBottomTrayNear, setIsBottomTrayNear] = useState(false);

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

      if (discoverRef.current) {
        const rect = discoverRef.current.getBoundingClientRect();
        setIsDiscoverNear(e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom);
      }

      if (bottomTrayRef.current) {
        const rect = bottomTrayRef.current.getBoundingClientRect();
        setIsBottomTrayNear(e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom);
      }
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  // ANIMATION VARIANTS
  const trayVariants = {
    hidden: { y: 150, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  // Flowing Single Dot Variant
  const dotVariants = {
    hidden: { strokeDashoffset: 0, opacity: 0 },
    visible: (i) => ({
      strokeDashoffset: -200, 
      opacity: 1,
      transition: { 
        strokeDashoffset: { duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 },
        opacity: { duration: 0.5, delay: i * 0.5 } 
      }
    })
  };

  return (
    <div className="home-wrapper">
      <Nav />
      
      {/* 1. HERO SECTION */}
      <div className="hero-overlay">
        <motion.div 
          animate={{ opacity: isNear ? 1 : 0, y: isNear ? 0 : 30, scale: isNear ? 1 : 0.9 }}
          transition={{ duration: 0.6 }}
          className="hero-text"
        >
          <div className="hero-title"><img src={Logo} alt="Logo" /></div>
          <p className="hero-subtitle">Bringing Global Flavors to Your Kitchen with AR</p>
          <article className="Buttons">
            <button className="hero-btn">Download For Android</button>
            <button className="hero-btn">Download For IOS</button>
          </article>
        </motion.div>
      </div>
      
      {carouselImages.length > 0 && <Carousel items={carouselImages} gradientColor="#F0660C" />}

      {/* 2. TOP DISCOVER TRAY */}
      <section className="Dicover" ref={discoverRef}>
        <h2 className="Discover-hero-txt">Discover the features of Senet</h2>
        <motion.div className="features-tray-wrapper" variants={trayVariants} initial="hidden" animate={isDiscoverNear ? "visible" : "hidden"}>
          <img src={Seneya} className="tray-bg-img" alt="tray" />
          <div className="tray-content">
            <h2 className="tray-title">Top Features</h2>
            <div className="features-grid">
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={UserIcon} alt="" className="card-icon"/>
                <h3>Personalized</h3>
                <p>Tailored culinary journey just for you.</p>
              </motion.div>
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={EditIcon} alt="" className="card-icon"/>
                <h3>Choice of Flavor</h3>
                <p>Adapt any recipe to your specific taste.</p>
              </motion.div>
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={LayersIcon} alt="" className="card-icon"/>
                <h3>Many Options</h3>
                <p>Unlock AR guidance and diverse dishes.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. VIDEO */}
      <section className="video-section">
        <motion.video 
          src={video} controls autoPlay loop muted className="promo-video"
          initial={{ width: "80%", borderRadius: "20px" }}
          whileHover={{ width: "100%", height: "100vh", borderRadius: "0px", zIndex: 100 }}
          transition={{ duration: 0.5 }}
        />
      </section>

      {/* 4. BOTTOM TRAY */}
      <section className="Dicover Bottom-Tray-Section" ref={bottomTrayRef}>
        <motion.div className="features-tray-wrapper" variants={trayVariants} initial="hidden" animate={isBottomTrayNear ? "visible" : "hidden"}>
          <div className="tray-content">
            <div className="features-grid">
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={FlavorsIcon} alt="" className="card-icon"/>
                <h3>Global Palette</h3>
                <p>Explore authentic ingredients worldwide.</p>
              </motion.div>
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={VarietyIcon} alt="" className="card-icon"/>
                <h3>Endless Variety</h3>
                <p>Perfect dishes for any mood or craving.</p>
              </motion.div>
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={SaltIcon} alt="" className="card-icon"/>
                <h3>Perfect Seasoning</h3>
                <p>Master the art of balance with AR guidance.</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. COMMUNITY SECTION */}
      <section className="CommunitySection" ref={communityRef}>
        
        {/* CENTERED TEXT DIV AT TOP */}
        <motion.div 
          className="community-text-container"
          initial={{ opacity: 0, y: 20 }}
          animate={isCommunityInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className="community-main-title">Connect with the Community</h1>
          <p className="community-subtitle-text">Download Senet To Connect now</p>
          <motion.button className="hero-btn" whileHover={{ scale: 1.05 }}>
            Hear the people's voice
          </motion.button>
        </motion.div>

        {/* IMAGE COMPOSITION CONTAINER */}
        <div className="community-composition">
          <svg className="connecting-lines-svg" viewBox="0 0 1000 800">
            {/* Flowing Single Dots */}
            <motion.path d="M150 150 L850 150" stroke="#F0660C" strokeWidth="4" strokeDasharray="1 100" strokeLinecap="round" fill="none" custom={0} variants={dotVariants} animate={isCommunityInView ? "visible" : "hidden"} />
            <motion.path d="M850 150 L850 650" stroke="#F0660C" strokeWidth="4" strokeDasharray="1 100" strokeLinecap="round" fill="none" custom={1} variants={dotVariants} animate={isCommunityInView ? "visible" : "hidden"} />
            <motion.path d="M850 650 L150 650" stroke="#F0660C" strokeWidth="4" strokeDasharray="1 100" strokeLinecap="round" fill="none" custom={2} variants={dotVariants} animate={isCommunityInView ? "visible" : "hidden"} />
            <motion.path d="M150 650 L150 150" stroke="#F0660C" strokeWidth="4" strokeDasharray="1 100" strokeLinecap="round" fill="none" custom={3} variants={dotVariants} animate={isCommunityInView ? "visible" : "hidden"} />
          </svg>

          <div className="polaroid-container">
            {/* Sequenced photo entrance */}
            <motion.img src={P1} className="p p-tl" initial={{ opacity: 0 }} animate={isCommunityInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} />
            <motion.img src={P2} className="p p-tr" initial={{ opacity: 0 }} animate={isCommunityInView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} />
            <motion.img src={P3} className="p p-br" initial={{ opacity: 0 }} animate={isCommunityInView ? { opacity: 1 } : {}} transition={{ delay: 1.2 }} />
            <motion.img src={P4} className="p p-bl" initial={{ opacity: 0 }} animate={isCommunityInView ? { opacity: 1 } : {}} transition={{ delay: 1.7 }} />
            
            {/* Centered Bottom Photo */}
            <motion.img src={P5} className="p p-cb" initial={{ opacity: 0, scale: 0, x: "-50%" }} animate={isCommunityInView ? { opacity: 1, scale: 1, x: "-50%" } : {}} transition={{ delay: 2.2, type: "spring" }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;