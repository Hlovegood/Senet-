import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import PreLoader from './components/PreLoader';
import { AboutPage } from './pages/About';
import { ARTechnologyPage as ARTech } from './pages/ARTech';
import {CareersPage} from './pages/Careers';
import { FAQPage } from './pages/FAQPage';
import { HowItWorksPage } from './pages/HowItWorks';

const Routing = () => {
    return ( <>
    <BrowserRouter>
    <PreLoader/>
    <ScrollToTop/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/ar-tech' element={<ARTech/>}/>
            <Route path='/careers' element={<CareersPage/>}/>
            <Route path='/faq' element={<FAQPage/>}/>
            <Route path='/how-it-works' element={<HowItWorksPage/>}/>



        </Routes>
    </BrowserRouter>
    
    
    </> );
}
 
export default Routing;