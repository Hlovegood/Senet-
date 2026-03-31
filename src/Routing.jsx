import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import PreLoader from './components/PreLoader';
import { AboutPage } from './pages/About';

const Routing = () => {
    return ( <>
    <BrowserRouter>
    <PreLoader/>
    <ScrollToTop/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutPage/>}/>

        </Routes>
    </BrowserRouter>
    
    
    </> );
}
 
export default Routing;