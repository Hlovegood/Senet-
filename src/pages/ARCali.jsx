import React, { useState } from 'react';
import { 
  Camera, Sun, Smartphone, Grid, CheckCircle, 
  MapPin, Monitor, Wifi, Thermometer, CheckSquare 
} from 'lucide-react';

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./ar-calibration.css"; 

const calibrationSteps = [
  {
    id: 1,
    title: "Prepare Your Workspace",
    description: "Clear your kitchen counter and create a clean, uncluttered workspace. Remove unnecessary items and ensure you have at least 60x60cm of free space.",
    icon: Grid,
    tips: ["Clear counter completely", "Wipe surface clean and dry", "Remove reflective objects", "Ensure stable, flat surface"],
    image: "https://images.unsplash.com/photo-1758570161624-91976093c2b2?w=800",
  },
  {
    id: 2,
    title: "Optimize Lighting",
    description: "Ensure your workspace has bright, even lighting. Natural daylight is best, but avoid direct sunlight that creates harsh shadows.",
    icon: Sun,
    tips: ["Brightness: 400-800 lux recommended", "Use overhead + ambient lighting", "Avoid direct sunlight on surface", "No flickering lights"],
    image: "https://images.unsplash.com/photo-1758240689297-d8613ca753f3?w=800",
  },
  {
    id: 3,
    title: "Position Phone Stand",
    description: "Place your phone or tablet stand 40-60cm away from your work surface, angled at 45-60 degrees.",
    icon: Smartphone,
    tips: ["Distance: 40-60cm from surface", "Angle: 45-60 degrees downward", "Stable base - no wobbling", "Camera centered on workspace"],
    image: "https://images.unsplash.com/photo-1584658645175-90788b3347b3?w=800",
  },
  {
    id: 4,
    title: "Place Reference Object",
    description: "Position your cutting board or a standard A4 paper (21x29.7cm) on the surface to help the AR system understand scale.",
    icon: MapPin,
    tips: ["Use cutting board or A4 paper", "Place in center of workspace", "Keep flat and stable", "Avoid patterned surfaces"],
    image: "https://images.unsplash.com/photo-1666013942797-9daa4b8b3b4f?w=800",
  },
  {
    id: 5,
    title: "Scan Your Surface",
    description: "Open the app and move your phone slowly in a circular pattern to map the surface area.",
    icon: Camera,
    tips: ["Slow, steady movements", "Cover entire workspace area", "Keep camera focused", "Wait for green confirmation"],
    image: "https://images.unsplash.com/photo-1658036680473-32c68142b2a7?w=800",
  },
  {
    id: 6,
    title: "Verify Calibration",
    description: "The app will display a grid overlay. Check that the 3D measurements align correctly with your board edges.",
    icon: CheckCircle,
    tips: ["Grid should be level", "Measurements accurate ±2mm", "No floating holograms", "Test with hand movement"],
    image: "https://images.unsplash.com/photo-1758611974343-d51476aad72e?w=800",
  }
];

const requirements = [
  { icon: Smartphone, title: "Compatible Device", description: "iPhone 12+ or Android ARCore", status: 'required' },
  { icon: Wifi, title: "Stable Internet", description: "Wi-Fi or 4G for loading", status: 'required' },
  { icon: Sun, title: "Good Lighting", description: "400-800 lux brightness", status: 'required' },
  { icon: Monitor, title: "Phone Stand", description: "Hands-free holder", status: 'recommended' },
  { icon: Grid, title: "Clear Space", description: "Min 60x60cm area", status: 'required' },
  { icon: Thermometer, title: "Environment", description: "Avoid extreme heat", status: 'recommended' }
];

export default function ARCalibrationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const activeStep = calibrationSteps.find(s => s.id === currentStep);

  const completeStep = (stepId) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
    if (stepId < calibrationSteps.length) {
      setCurrentStep(stepId + 1);
    }
  };

  const progressPercentage = (completedSteps.length / calibrationSteps.length) * 100;

  return (
    <div className="calibration-wrapper">
      <Nav />

      <main>
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1>Calibration Guide</h1>
          <p className="hero-description">
            Set up your kitchen for the best AR cooking experience. Follow these simple steps to calibrate your workspace.
          </p>

          {/* Progress Container */}
          <div className="progress-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
              <span style={{ fontWeight: '600' }}>Setup Progress</span>
              <span style={{ fontWeight: '700', color: '#F0660C' }}>{Math.round(progressPercentage)}%</span>
            </div>
            <div className="progress-track">
              <div 
                className="progress-fill"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Requirements Grid */}
        <section className="mb-20">
          <h2 className="text-center mb-12" style={{ fontSize: '2.5rem' }}>What You'll Need</h2>
          <div className="requirements-grid">
            {requirements.map((req, index) => (
              <div key={index} className="req-card">
                <div className={`req-icon-box ${req.status === 'required' ? 'bg-orange-grad' : 'bg-green-grad'}`}>
                  <req.icon size={24} color="white" />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{req.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>{req.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calibration Steps */}
        <section>
          <h2 className="text-center mb-12" style={{ fontSize: '2.5rem' }}>Setup Steps</h2>
          
          <div className="step-nav-container">
            {calibrationSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`step-bubble ${
                  completedSteps.includes(step.id) ? 'step-done' : 
                  currentStep === step.id ? 'step-active' : 'step-inactive'
                }`}
              >
                {completedSteps.includes(step.id) ? <CheckCircle size={24} /> : step.id}
              </button>
            ))}
          </div>

          {activeStep && (
            <div className="glass-card-main animate-slide-up" key={activeStep.id}>
              <div className="step-image-container">
                <img src={activeStep.image} alt={activeStep.title} />
                <div className="step-count-badge">
                  Step {activeStep.id} of 6
                </div>
              </div>
              <div className="step-content">
                <h3>{activeStep.title}</h3>
                <p>{activeStep.description}</p>
                
                <div style={{ marginBottom: '2rem' }}>
                  {activeStep.tips.map((tip, i) => (
                    <div key={i} className="tip-item">
                      <div className="tip-dot" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => completeStep(activeStep.id)}
                  className="btn-primary"
                >
                  {completedSteps.includes(activeStep.id) ? "Step Completed" : "Complete & Next Step"}
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Final CTA */}
        <section className="cta-card">
          <CheckSquare size={64} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
          <h2>Ready to Cook?</h2>
          <p className="hero-description" style={{ marginBottom: '2rem' }}>
            Once calibration is complete, your workspace is ready for high-precision AR recipe guidance.
          </p>
          <div className="cta-buttons">
            <button className="btn-white">Start AR Cooking</button>
            <button 
              onClick={() => {setCompletedSteps([]); setCurrentStep(1);}}
              className="btn-outline"
            >
              Reset Guide
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}