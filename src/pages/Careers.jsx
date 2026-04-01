import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, Users, Heart, Lightbulb } from 'lucide-react';

// Assets (Using your project's local paths)
import imgSombrero from "../assets/Ingredients/Sombrero.png";
import imgChilli from "../assets/Ingredients/Chilli.png";
import imgOnion from "../assets/Ingredients/Onion.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import "./Careers.css";

const jobOpenings = [
  {
    title: "Senior AR Engineer",
    department: "Engineering",
    location: "Cairo, Egypt",
    type: "Full-time",
    color: "orange-grad",
    description: "Build cutting-edge augmented reality experiences that revolutionize how people cook.",
    requirements: ["5+ years AR/VR development", "Unity or ARKit/ARCore expertise"]
  },
  {
    title: "Product Designer (UI/UX)",
    department: "Design",
    location: "Remote / Cairo",
    type: "Full-time",
    color: "green-grad",
    description: "Design delightful user experiences for our recipe feed and AR cooking interface.",
    requirements: ["3+ years product design", "Strong portfolio"]
  },
  {
    title: "Culinary Content Creator",
    department: "Content",
    location: "Cairo, Egypt",
    type: "Full-time",
    color: "orange-grad",
    description: "Create authentic Egyptian recipes and develop AR-ready recipe content.",
    requirements: ["Professional cooking experience", "Knowledge of Egyptian cuisine"]
  }
];

const benefits = [
  { icon: "💰", title: "Competitive Salary", description: "Market-leading compensation packages" },
  { icon: "🏥", title: "Health Insurance", description: "Comprehensive health coverage" },
  { icon: "🌴", title: "Flexible Time Off", description: "Generous vacation and personal days" },
  { icon: "🍽️", title: "Free Meals", description: "Daily catered lunches and snacks" }
];

export function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const departments = ["All", "Engineering", "Design", "Content", "Marketing"];

  const filteredJobs = selectedDepartment === "All"
    ? jobOpenings
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <>
      <Nav />
      <div className="careers-page-wrapper">
        {/* Floating Decorative Elements */}
        <motion.img 
          src={imgChilli} className="deco-icon" style={{ top: '10%', left: '5%' }}
          animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }}
        />
        <motion.img 
          src={imgSombrero} className="deco-icon" style={{ top: '40%', right: '5%' }}
          animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }}
        />
        <motion.img 
          src={imgOnion} className="deco-icon" style={{ bottom: '20%', left: '10%' }}
          animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 6 }}
        />

        <div className="careers-container">
          {/* Hero Section */}
          <header className="careers-hero">
            <h1 className="Brigten">Join Our Culinary <br/> Tech Revolution</h1>
            <p className="careers-subtitle">
              Help us transform cooking with augmented reality. Build the future of food technology from Cairo 🇪🇬
            </p>
          </header>

          {/* Department Filter */}
          <div className="filter-tabs">
            {departments.map((dept) => (
              <button
                key={dept}
                className={`filter-btn ${selectedDepartment === dept ? 'active' : ''}`}
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="jobs-list">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`job-card ${job.color}`}
                >
                  <div className="job-header">
                    <div>
                      <h3 style={{ fontSize: '2rem' }}>{job.title}</h3>
                      <div className="job-tags">
                        <span className="job-tag"><Briefcase size={14} /> {job.department}</span>
                        <span className="job-tag"><MapPin size={14} /> {job.location}</span>
                        <span className="job-tag"><Clock size={14} /> {job.type}</span>
                      </div>
                    </div>
                    <button className="btn-apply">Apply Now</button>
                  </div>
                  <p style={{ opacity: 0.9, fontSize: '1.1rem' }}>{job.description}</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '15px' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Requirements:</p>
                    <ul style={{ listStyle: 'none' }}>
                      {job.requirements.map((req, i) => (
                        <li key={i} style={{ opacity: 0.8 }}>• {req}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Benefits Section */}
          <section className="benefits-section">
            <h2 className="Brigten" style={{ textAlign: 'center', fontSize: '3rem' }}>Why Join Senet?</h2>
            <div className="benefits-grid">
              {benefits.map((b, i) => (
                <div key={i} className="benefit-card">
                  <span className="benefit-icon">{b.icon}</span>
                  <h3>{b.title}</h3>
                  <p style={{ opacity: 0.7 }}>{b.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="careers-cta green-grad">
            <h2 className="Brigten" style={{ fontSize: '2.5rem' }}>Ready to Cook Up Something Amazing?</h2>
            <p style={{ marginTop: '15px', fontSize: '1.1rem' }}>
              Don't see the perfect role? Send us your CV anyway! <br/>
              We're always looking for talented people passionate about food.
            </p>
            <div className="btn-group">
              <button className="btn-apply" style={{ background: 'white', color: '#00804D' }}>Send Your CV 📧</button>
              <Link>
              <button className="btn-apply" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>Learn More 🌟</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}