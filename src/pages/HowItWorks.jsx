import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChefHat,
  Smartphone,
  Glasses,
  PlayCircle,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

// Components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// Assets
import imgSombrero from "../assets/Ingredients/Sombrero.png";
import imgChilli from "../assets/Ingredients/Chilli.png";
import "./HowItWorks.css";

const steps = [
  {
    number: 1,
    title: "Pick a Recipe",
    description:
      "Browse through thousands of authentic Egyptian recipes. Filter by cuisine, dietary preferences, or difficulty level. Each recipe includes detailed ingredient lists and user reviews.",
    icon: ChefHat,
    color: "orange-grad",
    // Added specific width/height to the URL for consistency
    image:
      "https://images.unsplash.com/photo-1634964485521-27c4276c10ec?auto=format&fit=crop&q=80&w=800&h=500",
    features: ["Search by ingredients", "Save favorites", "Prep & cook times"],
    tip: "Use voice search to find recipes hands-free while grocery shopping!",
  },
  {
    number: 2,
    title: "Place Phone in Headset",
    description:
      "Insert your smartphone into a compatible VR/AR headset. Senet works with most mobile headsets including Google Cardboard and Samsung Gear VR.",
    icon: Glasses,
    color: "green-grad",
    image:
      "https://images.unsplash.com/photo-1713869782574-aa4cc08f4952?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Auto-calibrates screen",
      "Comfortable for long sessions",
      "Universal fit",
    ],
    tip: "Make sure your phone is fully charged before starting!",
  },
  {
    number: 3,
    title: "Follow AR Holograms",
    description:
      "Watch as holographic cooking instructions appear in your kitchen! The AR overlays show you exactly what to do, highlighting ingredients in real-time.",
    icon: PlayCircle,
    color: "orange-grad",
    image:
      "https://images.unsplash.com/photo-1721414207812-df0a2afb259d?auto=format&fit=crop&q=80&w=800&h=500",
    features: ["3D techniques", "Voice commands", "Interactive timers"],
    tip: "Use commands like 'Next Step' or 'Repeat' to stay hands-free!",
  },
];

export function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = steps.find((s) => s.number === activeStep);

  return (
    <>
      <Nav />
      <div className="how-it-works-wrapper">
        {/* Background Decorations */}
        <motion.img
          src={imgSombrero}
          className="deco-icon-how"
          style={{ top: "20%", right: "5%" }}
          animate={{ rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <motion.img
          src={imgChilli}
          className="deco-icon-how"
          style={{ bottom: "15%", left: "5%" }}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        <div className="how-container">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h1
              className="Brigten"
              style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}
            >
              How It Works
            </h1>
            <p
              style={{
                color: "#ffd8bb",
                fontSize: "1.2rem",
                marginTop: "10px",
              }}
            >
              Master Egyptian cuisine in 3 simple steps with Senet AR.
            </p>
          </div>

          {/* Progress Tracker */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              marginBottom: "50px",
            }}
          >
            {steps.map((step, idx) => (
              <React.Fragment key={step.number}>
                <button
                  className={`step-number-btn ${activeStep === step.number ? "active" : "inactive"}`}
                  onClick={() => setActiveStep(step.number)}
                >
                  {activeStep > step.number ? (
                    <CheckCircle size={24} />
                  ) : (
                    step.number
                  )}
                </button>
                {idx < steps.length - 1 && (
                  <div
                    style={{
                      width: "50px",
                      h: "2px",
                      background:
                        activeStep > step.number
                          ? "#00804D"
                          : "rgba(255,255,255,0.2)",
                      height: "2px",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step Detail Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={`step-card ${currentStep.color}`}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                minHeight: "500px",
              }}
            >
              {/* Text Area */}
              <div
                style={{
                  padding: "50px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    marginBottom: "20px",
                  }}
                >
                  <currentStep.icon size={48} />
                  <h2 className="Brigten" style={{ fontSize: "2.5rem" }}>
                    {currentStep.title}
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    marginBottom: "30px",
                  }}
                >
                  {currentStep.description}
                </p>

                <div
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    padding: "20px",
                    borderRadius: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <h4 style={{ marginBottom: "10px" }}>Key Features:</h4>
                  {currentStep.features.map((f) => (
                    <div
                      key={f}
                      style={{
                        display: "flex",
                        gap: "10px",
                        marginBottom: "5px",
                        fontSize: "0.9rem",
                      }}
                    >
                      <CheckCircle size={16} color="#white" /> {f}
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    borderLeft: "4px solid white",
                    paddingLeft: "15px",
                    fontStyle: "italic",
                    opacity: 0.9,
                  }}
                >
                  💡 {currentStep.tip}
                </div>
              </div>

              {/* Image Area */}
              <div
                style={{
                  position: "relative",
                  height: "500px", // Fixed height to match the first image
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={currentStep.image}
                  alt={currentStep.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // This prevents stretching by cropping the edges
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    background: "white",
                    color: "#F0660C",
                    padding: "10px 20px",
                    borderRadius: "50px",
                    fontWeight: "bold",
                    zIndex: 10,
                  }}
                >
                  Step {activeStep} of 3
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <button
              className="filter-btn"
              style={{ visibility: activeStep === 1 ? "hidden" : "visible" }}
              onClick={() => setActiveStep((prev) => prev - 1)}
            >
              Previous Step
            </button>
            <button
              className="filter-btn active"
              onClick={() =>
                activeStep < 3
                  ? setActiveStep((prev) => prev + 1)
                  : alert("Redirecting to Recipes...")
              }
            >
              {activeStep === 3 ? "Start Cooking!" : "Next Step"}
            </button>
          </div>

          {/* CTA Section */}
          <section
            className="careers-cta orange-grad"
            style={{
              textAlign: "center",
              padding: "80px 20px",
              borderRadius: "40px",
              marginTop: "100px",
            }}
          >
            <h2 className="Brigten" style={{ fontSize: "3rem" }}>
              Ready to transform your kitchen?
            </h2>
            <p style={{ margin: "20px 0", fontSize: "1.2rem" }}>
              Join the future of Egyptian cooking today.
            </p>
            <button
              className="btn-apply"
              style={{
                background: "white",
                color: "#F0660C",
                padding: "15px 40px",
                fontSize: "1.1rem",
              }}
            >
              Download Senet Now 📱
            </button>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
