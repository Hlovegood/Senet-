import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Footer.css";
import { Link} from "react-router-dom";

// ASSETS
import SenetLogo from "../assets/Imgs/Senet Logo.png";
import InstaIcon from "../assets/Icons/Profile-Icon.png"; // Replace with your actual icons
import FbIcon from "../assets/Icons/Edit-Icon.png";
import TkIcon from "../assets/Icons/Layers-Icon.png";
import { AboutPage } from "../pages/About";

const Footer = () => {
  const footerRef = useRef(null);
  
  // Trigger when 30% of the footer area is visible
  const isVisible = useInView(footerRef, { once: false, amount: 0.3 });

  const panelVariants = {
    hidden: { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
    visible: { 
      opacity: 1, 
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="footer-wrapper" ref={footerRef}>
      {/* The animated panel */}
      <motion.div 
        className="footer-panel"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={panelVariants}
      >
        <div className="footer-inner">
          
          {/* Top Row: Links */}
          <div className="footer-row-top">
            <div className="footer-column contact">
              <h4>Need help? Get in touch</h4>
              <p className="highlight">senet_ar@email.com</p>
              <p>+2 012 3456789</p>
            </div>

            <div className="footer-nav-links">
              <div className="footer-column">
                <h4>Mexican</h4>
                <ul><li>Tacos</li><li>Fajitas</li><li>Guacamole</li></ul>
              </div>
              <div className="footer-column">
                <h4>Spanish</h4>
                <ul><li>Paella</li><li>Gazpacho</li><li>Tapas</li></ul>
              </div>
              <div className="footer-column">
                <h4>Italian</h4>
                <ul><li>Pizza</li><li>Lasagna</li><li>Gelato</li></ul>
              </div>
              <div className="footer-column">
                <h4>Egyptian</h4>
                <ul><li>Koshary</li><li>Fattah</li><li>Molokhia</li></ul>
              </div>
              <div className="footer-column">
                <h4>Japanese</h4>
                <ul><li>Sushi</li><li>Ramen</li><li>Miso</li></ul>
              </div>
            </div>
          </div>

          {/* Middle Row: The Logo (Replaced text with your Logo.png) */}
          <motion.div className="footer-row-mid" variants={itemVariants}>
            <img src={SenetLogo} alt="Senet Logo" className="footer-big-logo" />
          </motion.div>

          {/* Bottom Row: Socials and Legal */}
          <div className="footer-row-bottom">
            <div className="social-icons">
              <img src={InstaIcon} alt="Instagram" />
              <img src={FbIcon} alt="Facebook" />
              <img src={TkIcon} alt="TikTok" />
            </div>
            
            <div className="legal-info">
              <span>© 2026 Senet. All rights reserved.</span>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <Link to= "/about">About</Link>
            </div>
          </div>

        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;