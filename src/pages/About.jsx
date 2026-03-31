import React from "react";
import { motion } from "framer-motion";
import imgSombrero from "../assets/Ingredients/Sombrero.png";
import imgChilli from "../assets/Ingredients/Chilli.png";
import imgOnion from "../assets/Ingredients/Onion.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer"
import "./About.css";

export function AboutPage() {
  return (<>

 <Nav/>
    <div className="about-wrapper">
      {/* --- Floating Decorative Elements (Figma style but fixed) --- */}
      <motion.img 
        src={imgChilli} 
        className="deco-icon t-10 l-10" 
        animate={{ rotate: [-25, -15, -25] }} 
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.img 
        src={imgSombrero} 
        className="deco-icon t-40 r-20" 
        animate={{ y: [0, 20, 0] }} 
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <motion.img 
        src={imgOnion} 
        className="deco-icon b-20 l-32" 
      />

      <div className="about-container">
        {/* Header Section */}
        <header className="about-header">
          <h1 className="Brigten">About Senet</h1>
          <p className="subtitle">
            Bringing Egyptian Culinary Heritage to Life Through Augmented Reality
          </p>
        </header>

        {/* Main Story Section */}
        <div className="about-grid">
          <motion.div 
            className="story-card orange-grad"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2>Our Story</h2>
            <p>
              Senet is more than just a cooking app—it's a celebration of Egyptian cuisine and culture. 
              Born from the ancient land of the Pharaohs, Senat connects people through the universal 
              language of food, enhanced by cutting-edge augmented reality.
            </p>
            <p>
              Our name draws inspiration from one of the oldest board games in the world. 
              Just as Senet brought people together thousands of years ago, our app brings families 
              together today through the joy of cooking.
            </p>
          </motion.div>

          <div className="image-holder rot-left">
            <img 
              src="https://images.unsplash.com/photo-1661994215679-cde7c2c5c060?q=80&w=1080" 
              alt="Egyptian Food" 
            />
          </div>
        </div>

        {/* Features Row */}
        <div className="features-row">
          <div className="feature-box green-grad">
            <span className="emoji">🥽</span>
            <h3>AR Step-by-Step</h3>
            <p>Immersive augmented reality guides that overlay instructions right in your kitchen.</p>
          </div>

          <div className="feature-box orange-grad">
            <span className="emoji">📌</span>
            <h3>Discover & Inspire</h3>
            <p>Browse a Pinterest-like feed of authentic Egyptian recipes and fusion dishes.</p>
          </div>

          <div className="feature-box green-grad">
            <span className="emoji">👥</span>
            <h3>Connect</h3>
            <p>Join a vibrant community of food lovers sharing recipes and traditions.</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="cta-section green-grad">
          <h2>Download the Senat App Today</h2>
          <p>Start your culinary journey with thousands of recipes at your fingertips.</p>
          <div className="btn-group">
            <button className="btn-white">App Store</button>
            <button className="btn-white">Google Play</button>
          </div>
        </section>
      </div>
    </div>

    <Footer/>

  </>

  );
}