import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import Profile from '../assets/Icons/Profile-Icon.png'
import Senet from '../assets/Icons/Senet-Icon.png'

const Nav = () => {
    const [isArOpen, setIsArOpen] = useState(false);
    const [isCommOpen, setIsCommOpen] = useState(false);
    
    const arDropdownRef = useRef(null);
    const commDropdownRef = useRef(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (arDropdownRef.current && !arDropdownRef.current.contains(event.target)) {
                setIsArOpen(false);
            }
            if (commDropdownRef.current && !commDropdownRef.current.contains(event.target)) {
                setIsCommOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLinkClick = () => {
        setIsArOpen(false);
        setIsCommOpen(false);
    };

    return (
        <nav>
            <ul className='Nav-Cont'>
                <li className='Nav-link'>
                    <Link to="/"><img src={Senet} alt="Logo" /></Link>
                </li>
                
                {/* AR Dropdown Menu */}
                <li className='Nav-link dropdown' ref={arDropdownRef}>
                    <button 
                        className={`dropdown-trigger ${isArOpen ? 'active' : ''}`}
                        onClick={() => {
                            setIsArOpen(!isArOpen);
                            setIsCommOpen(false); // Close other dropdown
                        }}
                    >
                        AR <span className="arrow"></span>
                    </button>
                    
                    {isArOpen && (
                        <ul className='dropdown-menu'>
                            <li><Link to="/ar-calibration" onClick={handleLinkClick}>AR Calibration</Link></li>
                            <li><Link to="/ar-tech" onClick={handleLinkClick}>Future of Cooking</Link></li>
                            <li><Link to="/accessibility" onClick={handleLinkClick}>Accessibility</Link></li>
                        </ul>
                    )}
                </li>

                <li className='Nav-link'><Link to="/contact-us">Contact</Link></li>

                {/* Community Dropdown Menu */}
                <li className='Nav-link dropdown' ref={commDropdownRef}>
                    <button 
                        className={`dropdown-trigger ${isCommOpen ? 'active' : ''}`}
                        onClick={() => {
                            setIsCommOpen(!isCommOpen);
                            setIsArOpen(false); // Close other dropdown
                        }}
                    >
                        Community <span className="arrow"></span>
                    </button>
                    
                    {isCommOpen && (
                        <ul className='dropdown-menu'>
                            <li><Link to="/community" onClick={handleLinkClick}>Community Feed</Link></li>
                            <li><Link to="/pantry" onClick={handleLinkClick}>Pantry</Link></li>
                            <li>
                                <Link to="/partner-with-us" onClick={handleLinkClick}>
                                    Partner with Us
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

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