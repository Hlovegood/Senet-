import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import Profile from '../assets/Icons/Profile-Icon.png'
import Senet from '../assets/Icons/Senet-Icon.png'

const Nav = () => {
    const [isArOpen, setIsArOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsArOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Helper to close dropdown when a link is clicked
    const handleLinkClick = () => {
        setIsArOpen(false);
    };

    return (
        <nav>
            <ul className='Nav-Cont'>
                <li className='Nav-link'>
                    <Link to="/"><img src={Senet} alt="Logo" /></Link>
                </li>
                
                {/* AR Dropdown Menu */}
                <li className='Nav-link dropdown' ref={dropdownRef}>
                    <button 
                        className={`dropdown-trigger ${isArOpen ? 'active' : ''}`}
                        onClick={() => setIsArOpen(!isArOpen)}
                        aria-expanded={isArOpen}
                    >
                        AR <span className="arrow"></span>
                    </button>
                    
                    {isArOpen && (
                        <ul className='dropdown-menu'>
                            <li>
                                <Link to="/ar-calibration" onClick={handleLinkClick}>
                                    AR Calibration
                                </Link>
                            </li>
                            <li>
                                <Link to="/ar-tech" onClick={handleLinkClick}>
                                    Future of Cooking
                                </Link>
                            </li>
                            {/* Added Accessibility Option */}
                            <li>
                                <Link to="/accessibility" onClick={handleLinkClick}>
                                    Accessibility
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li className='Nav-link'><Link to="/contact-us">Contact</Link></li>
                <li className='Nav-link'><Link to="/community">Community</Link></li>
                <li className='Nav-link'><Link to="/feed">Feed</Link></li>
                <li className='Nav-link'><Link to="/careers">Careers</Link></li>
                <li className='Nav-link'>
                    <Link to="/profile"><img src={Profile} alt="Profile" /></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;