import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home'

const Routing = () => {
    return ( <>
    <BrowserRouter>
        <ScrollToTop/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    
    
    
    
    
    </BrowserRouter>
    
    
    </> );
}
 
export default Routing;