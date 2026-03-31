import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import Lang from '../assets/Icons/Lang-Icon.png'
import Profile from '../assets/Icons/Profile-Icon.png'
import Senet from '../assets/Icons/Senet-Icon.png'


const Nav = () => {
    return ( <>
    <nav>

    <ul className='Nav-Cont'>
        <li className='Nav-link'><Link to="/"><img src={Senet} alt="" /></Link></li>
        <li className='Nav-link'><Link to ="/ar-tech">AR</Link></li>
        <li className='Nav-link'><Link to ="/Contact">Contact</Link></li>
        <li className='Nav-link'><Link to="/Reviews-Page">Community</Link></li>
        <li className='Nav-link'><Link to="/Feed-Page">Feed</Link></li>
        <li className='Nav-link'><Link to ="/Careers-Page">Careers</Link></li>
        <li className='Nav-link'><Link to ="/Profile-Page"><img src={Profile} alt="Profile" /></Link></li>
    </ul>
    </nav>
    
    </> );
}
 
export default Nav;