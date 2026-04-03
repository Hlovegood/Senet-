import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react"; // Added Globe icon for visual flair
import { useLanguage } from "../LanguageContext"; // Import your context hook
import "./Nav.css";
import Profile from "../assets/Icons/Profile-Icon.png";
import Senet from "../assets/Icons/Senet-Icon.png";

const Nav = () => {
  const { lang, toggleLanguage } = useLanguage(); // Access global language state
  const [isArOpen, setIsArOpen] = useState(false);
  const [isCommOpen, setIsCommOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const arDropdownRef = useRef(null);
  const commDropdownRef = useRef(null);
  const location = useLocation();

  // Simple translation object for the Nav labels
  const navT = {
    en: {
      ar: "AR",
      arCal: "AR Calibration",
      arTech: "Future of Cooking",
      acc: "Accessibility",
      contact: "Contact",
      comm: "Community",
      feed: "Community Feed",
      pantry: "Pantry",
      partner: "Partner with Us",
      mainFeed: "Feed",
      careers: "Careers"
    },
    ar: {
      ar: "الواقع المعزز",
      arCal: "معايرة الواقع المعزز",
      arTech: "مستقبل الطبخ",
      acc: "سهولة الوصول",
      contact: "اتصل بنا",
      comm: "المجتمع",
      feed: "آخر الأخبار",
      pantry: "المخزن",
      partner: "شريك معنا",
      mainFeed: "الخلاصة",
      careers: "وظائف"
    }
  };

  const t = navT[lang];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (arDropdownRef.current && !arDropdownRef.current.contains(event.target))
        setIsArOpen(false);
      if (commDropdownRef.current && !commDropdownRef.current.contains(event.target))
        setIsCommOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsArOpen(false);
    setIsCommOpen(false);
    setMenuOpen(false);
  };

  const isActive = (paths) => paths.includes(location.pathname) ? "active" : "";

  return (
    <nav className="Nav-Wrapper">
      <div className="Nav-Cont">
        {/* LEFT SIDE: Logo */}
        <NavLink to="/" className="Nav-Logo" onClick={handleLinkClick}>
          <img src={Senet} alt="Logo" />
        </NavLink>

        {/* MOBILE ONLY: Burger Button */}
        <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </button>

        {/* RIGHT SIDE (Desktop) / OVERLAY (Mobile) */}
        <ul className={`Nav-Menu-List ${menuOpen ? "mobile-open" : ""}`}>
          
          {/* LANGUAGE TOGGLE BUTTON */}
          <li className="Nav-link lang-switcher">
            <button onClick={toggleLanguage} className="lang-toggle-btn">
              <Globe size={18} />
              <span>{lang === "en" ? "AR" : "EN"}</span>
            </button>
          </li>

          <li className="Nav-link dropdown" ref={arDropdownRef}>
            <button
              className={`dropdown-trigger ${isActive(["/ar-calibration", "/ar-tech", "/accessibility"])}`}
              onClick={() => {
                setIsArOpen(!isArOpen);
                setIsCommOpen(false);
              }}
            >
              {t.ar} <span className="arrow"></span>
            </button>
            {isArOpen && (
              <ul className="dropdown-menu">
                <li><NavLink to="/ar-calibration" onClick={handleLinkClick}>{t.arCal}</NavLink></li>
                <li><NavLink to="/ar-tech" onClick={handleLinkClick}>{t.arTech}</NavLink></li>
                <li><NavLink to="/accessibility" onClick={handleLinkClick}>{t.acc}</NavLink></li>
              </ul>
            )}
          </li>

          <li className="Nav-link">
            <NavLink to="/contact-us" onClick={handleLinkClick}>{t.contact}</NavLink>
          </li>

          <li className="Nav-link dropdown" ref={commDropdownRef}>
            <button
              className={`dropdown-trigger ${isActive(["/community", "/pantry", "/partner-with-us"])}`}
              onClick={() => {
                setIsCommOpen(!isCommOpen);
                setIsArOpen(false);
              }}
            >
              {t.comm} <span className="arrow"></span>
            </button>
            {isCommOpen && (
              <ul className="dropdown-menu">
                <li><NavLink to="/community" onClick={handleLinkClick}>{t.feed}</NavLink></li>
                <li><NavLink to="/pantry" onClick={handleLinkClick}>{t.pantry}</NavLink></li>
                <li><NavLink to="/partner-with-us" onClick={handleLinkClick}>{t.partner}</NavLink></li>
              </ul>
            )}
          </li>

          <li className="Nav-link">
            <NavLink to="/feed" onClick={handleLinkClick}>{t.mainFeed}</NavLink>
          </li>
          
          <li className="Nav-link">
            <NavLink to="/careers" onClick={handleLinkClick}>{t.careers}</NavLink>
          </li>
          
          <li className="Nav-link profile-icon-link">
            <NavLink to="/profile" onClick={handleLinkClick}>
              <img src={Profile} alt="Profile" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;