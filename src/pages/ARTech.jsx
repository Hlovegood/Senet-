import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Mic, Layers, Cpu, Radio, Camera, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

// Local Assets (Using the ones from your previous uploads)
import imgSombrero from "../assets/Ingredients/Sombrero.png";
import imgChilli from "../assets/Ingredients/Chilli.png";
import "./ARTech.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const trackingModes = [
  {
    title: "Stabilized Window Mode",
    icon: Layers,
    color: "orange-grad",
    description: "Fixed AR overlay that stays anchored to a specific surface in your kitchen.",
    features: ["Countertop Anchoring", "SLAM Mapping", "Plane Detection"],
    tech: "ARCore/ARKit + Plane Detection",
    image: "https://images.unsplash.com/photo-1724908267988-63310819325c?q=80&w=1080"
  },
  {
    title: "Eye-Tracking Mode",
    icon: Eye,
    color: "green-grad",
    description: "Smart AR display that follows your gaze and adapts to where you're looking.",
    features: ["Gaze Estimation", "Context Aware", "Reduced Strain"],
    tech: "ML Gaze Estimation + Computer Vision",
    image: "https://images.unsplash.com/photo-1758598497889-05bf628874a7?q=80&w=1080"
  }
];

export function ARTechnologyPage() {
  const [selectedMode, setSelectedMode] = useState(0);

  return (<>

  <Nav/>
    <div className="ar-page-wrapper">
      {/* --- Floating Decor --- */}
      <motion.img src={imgChilli} className="deco-icon t-10 l-5" animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 3 }} />
      <motion.img src={imgSombrero} className="deco-icon t-30 r-10" animate={{ rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5 }} />

      <div className="ar-container">
        {/* Hero Section */}
        <section className="ar-hero">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="badge"
          >
            <Zap size={18} /> <span>Future of Cooking</span>
          </motion.div>
          <h1 className="Brigten">The Magic Behind Senet</h1>
          <p className="ar-subtitle">
            Blending Augmented Reality and AI to revolutionize your kitchen experience.
          </p>
        </section>

        {/* Tracking Systems */}
        <section className="tracking-section">
          <div className="mode-tabs">
            {trackingModes.map((mode, idx) => (
              <button 
                key={idx}
                className={`tab-btn ${selectedMode === idx ? 'active' : ''}`}
                onClick={() => setSelectedMode(idx)}
              >
                <mode.icon size={20} /> {mode.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedMode}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={`mode-card ${trackingModes[selectedMode].color}`}
            >
              <div className="mode-info">
                <div className="mode-icon-circle">
                  {React.createElement(trackingModes[selectedMode].icon, { size: 40 })}
                </div>
                <h2>{trackingModes[selectedMode].title}</h2>
                <p>{trackingModes[selectedMode].description}</p>
                
                <div className="features-list">
                  {trackingModes[selectedMode].features.map((f, i) => (
                    <div key={i} className="feature-item">
                      <CheckCircle2 size={18} /> <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="tech-tag">Tech: {trackingModes[selectedMode].tech}</div>
              </div>
              <div className="mode-image">
                <img src={trackingModes[selectedMode].image} alt="AR Tech" />
                <div className="fps-counter">60 FPS REAL-TIME</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Technical Grid */}
        <section className="specs-grid">
           <div className="spec-card">
              <Cpu size={40} className="text-orange" />
              <h3>Edge Computing</h3>
              <p>Instant AR rendering with latency under 50ms.</p>
           </div>
           <div className="spec-card">
              <Radio size={40} className="text-green" />
              <h3>Spatial Audio</h3>
              <p>3D audio cues guide you to ingredients.</p>
           </div>
           <div className="spec-card">
              <Sparkles size={40} className="text-orange" />
              <h3>Haptic Feedback</h3>
              <p>Tactile alerts for cooking milestones.</p>
           </div>
        </section>

        {/* Architecture Section */}
        <section className="arch-section orange-grad">
           <h2 className="Brigten">System Architecture</h2>
           <div className="arch-grid">
              <div className="arch-column">
                <h4>Frontend Stack</h4>
                <ul>
                  <li>• ARKit & ARCore Integration</li>
                  <li>• Unity 3D Engine</li>
                  <li>• TensorFlow Lite</li>
                </ul>
              </div>
              <div className="arch-column">
                <h4>Backend Infrastructure</h4>
                <ul>
                  <li>• Firebase Realtime DB</li>
                  <li>• Node.js API Gateway</li>
                  <li>• AWS Media Services</li>
                </ul>
              </div>
           </div>
        </section>
      </div>
    </div>

    <Footer/>
  </>

  );
}