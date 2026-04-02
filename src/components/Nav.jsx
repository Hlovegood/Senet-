import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Nav.css";
import Profile from "../assets/Icons/Profile-Icon.png";
import Senet from "../assets/Icons/Senet-Icon.png";

const Nav = () => {
  const [isArOpen, setIsArOpen] = useState(false);
  const [isCommOpen, setIsCommOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const arDropdownRef = useRef(null);
  const commDropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdowns/menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        arDropdownRef.current &&
        !arDropdownRef.current.contains(event.target)
      )
        setIsArOpen(false);
      if (
        commDropdownRef.current &&
        !commDropdownRef.current.contains(event.target)
      )
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

  const isActive = (paths) =>
    paths.includes(location.pathname) ? "active" : "";

  return (
    <nav className="Nav-Wrapper">
      <div className="Nav-Cont">
        {/* LEFT SIDE: Logo */}
        <NavLink to="/" className="Nav-Logo" onClick={handleLinkClick}>
          <img src={Senet} alt="Logo" />
        </NavLink>

        {/* MOBILE ONLY: Burger Button */}
        <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X size={28} color="white" />
          ) : (
            <Menu size={28} color="white" />
          )}
        </button>

        {/* RIGHT SIDE (Desktop) / OVERLAY (Mobile) */}
        <ul className={`Nav-Menu-List ${menuOpen ? "mobile-open" : ""}`}>
          <li className="Nav-link dropdown" ref={arDropdownRef}>
            <button
              className={`dropdown-trigger ${isActive(["/ar-calibration", "/ar-tech", "/accessibility"])}`}
              onClick={() => {
                setIsArOpen(!isArOpen);
                setIsCommOpen(false);
              }}
            >
              AR <span className="arrow"></span>
            </button>
            {isArOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/ar-calibration" onClick={handleLinkClick}>
                    AR Calibration
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ar-tech" onClick={handleLinkClick}>
                    Future of Cooking
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/accessibility" onClick={handleLinkClick}>
                    Accessibility
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="Nav-link">
            <NavLink to="/contact-us" onClick={handleLinkClick}>
              Contact
            </NavLink>
          </li>

          <li className="Nav-link dropdown" ref={commDropdownRef}>
            <button
              className={`dropdown-trigger ${isActive(["/community", "/pantry", "/partner-with-us"])}`}
              onClick={() => {
                setIsCommOpen(!isCommOpen);
                setIsArOpen(false);
              }}
            >
              Community <span className="arrow"></span>
            </button>
            {isCommOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/community" onClick={handleLinkClick}>
                    Community Feed
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pantry" onClick={handleLinkClick}>
                    Pantry
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/partner-with-us" onClick={handleLinkClick}>
                    Partner with Us
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="Nav-link">
            <NavLink to="/feed" onClick={handleLinkClick}>
              Feed
            </NavLink>
          </li>
          <li className="Nav-link">
            <NavLink to="/careers" onClick={handleLinkClick}>
              Careers
            </NavLink>
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
