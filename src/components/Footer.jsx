import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import "./Footer.css";

import SenetLogo from "../assets/Imgs/Senet Logo.png";
import InstaIcon from "../assets/Icons/Profile-Icon.png"; 
import FbIcon from "../assets/Icons/Edit-Icon.png";
import TkIcon from "../assets/Icons/Layers-Icon.png";

const Footer = () => {
  const { lang } = useLanguage();
  const footerRef = useRef(null);
  const isVisible = useInView(footerRef, { once: false, amount: 0.3 });

  const translations = {
    en: {
      help: "Need help? Get in touch",
      mexican: "Mexican",
      spanish: "Spanish",
      italian: "Italian",
      egyptian: "Egyptian",
      japanese: "Japanese",
      rights: "© 2026 Senet. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      about: "About",
      cuisines: {
        mex: ["Tacos", "Fajitas", "Guacamole"],
        spa: ["Paella", "Gazpacho", "Tapas"],
        ita: ["Pizza", "Lasagna", "Gelato"],
        egy: ["Koshary", "Fattah", "Molokhia"],
        jap: ["Sushi", "Ramen", "Miso"]
      }
    },
    ar: {
      help: "تحتاج مساعدة؟ تواصل معنا",
      mexican: "مكسيكي",
      spanish: "إسباني",
      italian: "إيطالي",
      egyptian: "مصري",
      japanese: "ياباني",
      rights: "© 2026 سنيت. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      about: "عن سنيت",
      cuisines: {
        mex: ["تاكو", "فاهيتا", "جواكامولي"],
        spa: ["باييلا", "جاسباتشو", "تاباس"],
        ita: ["بيتزا", "لازانيا", "جيلاتو"],
        egy: ["كشري", "فتة", "ملوخية"],
        jap: ["سوشي", "رامن", "ميسو"]
      }
    }
  };

  const t = translations[lang];

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
      <motion.div 
        className="footer-panel"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={panelVariants}
      >
        <div className="footer-inner">
          
          <div className="footer-row-top">
            <div className="footer-column contact">
              <h4>{t.help}</h4>
              <p className="highlight">senet_ar@email.com</p>
              <p>+2 012 3456789</p>
            </div>

            <div className="footer-nav-links">
              <div className="footer-column">
                <h4>{t.mexican}</h4>
                <ul>{t.cuisines.mex.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="footer-column">
                <h4>{t.spanish}</h4>
                <ul>{t.cuisines.spa.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="footer-column">
                <h4>{t.italian}</h4>
                <ul>{t.cuisines.ita.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="footer-column">
                <h4>{t.egyptian}</h4>
                <ul>{t.cuisines.egy.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="footer-column">
                <h4>{t.japanese}</h4>
                <ul>{t.cuisines.jap.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
          </div>

          <motion.div className="footer-row-mid" variants={itemVariants}>
            <img src={SenetLogo} alt="Senet Logo" className="footer-big-logo" />
          </motion.div>

          <div className="footer-row-bottom">
            <div className="social-icons">
              <img src={InstaIcon} alt="Instagram" />
              <img src={FbIcon} alt="Facebook" />
              <img src={TkIcon} alt="TikTok" />
            </div>
            
            <div className="legal-info">
              <span>{t.rights}</span>
              <Link to="/policy">{t.privacy}</Link>
              <a href="#terms">{t.terms}</a>
              <Link to="/about">{t.about}</Link>
            </div>
          </div>

        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;