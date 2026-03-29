import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return ( <>
    <nav>

    <ul className='Nav-Cont'>
        <li><Link to="/">Home</Link></li>
        <li><Link to ="/AR-Page">AR</Link></li>
        <li><Link to ="/Contact">Contact</Link></li>
        <li><Link to="/Reviews-Page">Community</Link></li>
        <li><Link to="/Feed-Page">Feed</Link></li>
        <li><Link to ="/Careers-Page">Careers</Link></li>
        <li><Link to ="/Profile-Page">Profile</Link></li>
    </ul>
    </nav>
    
    </> );
}
 
export default Nav;