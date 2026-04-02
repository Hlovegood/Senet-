import React, { useState } from 'react';
import { 
  Upload, DollarSign, Users, TrendingUp, CheckCircle, 
  Sparkles, Globe, BarChart3, Headphones, Shield, Rocket, Heart, FileText, Zap
} from 'lucide-react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import "./creator.css";

const creators = [
  {
    name: "Chef Amira Hassan",
    role: "Traditional Egyptian Cuisine",
    avatar: "https://images.unsplash.com/photo-1659354219212-b9ec7231ec6a?w=400&q=80",
    recipesCount: 87,
    earnings: "$12,400",
    followers: "45.2K"
  },
  {
    name: "Chef Mahmoud Saeed",
    role: "Modern Fusion Chef",
    avatar: "https://images.unsplash.com/photo-1678626667639-de9c676e8222?w=400&q=80",
    recipesCount: 124,
    earnings: "$18,750",
    followers: "68.9K"
  },
  {
    name: "Chef Yasmine Khalil",
    role: "Vegan & Healthy Cooking",
    avatar: "https://images.unsplash.com/photo-1585358682246-23acb1561f6b?q=80&w=762&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    recipesCount: 56,
    earnings: "$9,200",
    followers: "32.5K"
  }
];

const benefits = [
  { icon: DollarSign, title: "Earn Revenue", description: "Get paid for every recipe view and completion. 70% revenue share.", color: "feat-green" },
  { icon: Globe, title: "Global Reach", description: "Share your recipes with 10,000+ active users across the Middle East.", color: "feat-blue" },
  { icon: Sparkles, title: "AR Conversion", description: "We convert your recipes into immersive AR experiences automatically.", color: "feat-purple" },
  { icon: BarChart3, title: "Analytics", description: "Track views, completions, ratings, and earnings in real-time.", color: "feat-orange" },
  { icon: Headphones, title: "Support", description: "Get priority support from our creator success team.", color: "feat-pink" },
  { icon: Shield, title: "Protection", description: "Your recipes are protected with copyright and attribution.", color: "feat-yellow" }
];

const uploadSteps = [
  { number: 1, title: "Sign Up", icon: Users, description: "Create your creator account and complete your profile to join the network.", requirements: ["Portfolio", "Bio", "Socials"] },
  { number: 2, title: "Upload", icon: Upload, description: "Submit your recipe with detailed instructions and high-quality photos.", requirements: ["Recipe PDF", "Photos", "Tips"] },
  { number: 3, title: "AR AI", icon: Zap, description: "Our AI converts your recipe into an AR experience automatically.", requirements: ["AI Processing", "Final Review"] },
  { number: 4, title: "Earn", icon: Rocket, description: "Your recipe goes live! Start earning from every view and interaction.", requirements: ["Live Stats", "Monthly Payouts"] }
];

export default function CreatorPartnerPage() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = uploadSteps.find(s => s.number === activeStep);

  return (
    <div className="creator-wrapper">
      <Nav />

      <main className="creator-main">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="creator-badge-pill">
            <Sparkles size={20} />
            <span>Creator Partnership Program</span>
          </div>
          <h1 className="creator-title">Partner with Senet</h1>
          <p className="creator-subtitle">
            Share your culinary expertise with thousands. Turn your recipes into immersive AR experiences and earn revenue.
          </p>
          <div className="hero-btns" style={{display: 'flex', gap: '15px', justifyContent: 'center'}}>
            <button className="btn-primary-lg">Become a Creator</button>
            <button className="btn-outline-lg">Watch Demo</button>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-20">
          <h2 className="section-title">Why Join Senet?</h2>
          <div className="feature-grid-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="benefit-square-card">
                <div className={`benefit-icon-box ${benefit.color}`}>
                  <benefit.icon size={32} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fixed How It Works Container */}
        <section className="stepper-section">
          <h2 className="section-title">How It Works</h2>
          <div className="stepper-nav">
            {uploadSteps.map((step) => (
              <button 
                key={step.number}
                onClick={() => setActiveStep(step.number)}
                className={`step-btn ${activeStep === step.number ? 'active' : ''}`}
              >
                {step.number}
              </button>
            ))}
          </div>

          <div className="glass-card-main animate-fade-in">
            <div className="step-icon-large">
              {currentStep && <currentStep.icon size={40} />}
            </div>
            <small style={{color: '#F0660C', fontWeight: 'bold', letterSpacing: '2px'}}>
               STEP {activeStep} OF 4
            </small>
            <h3>{currentStep?.title}</h3>
            <p className="step-desc-large">{currentStep?.description}</p>
            <div className="req-pills">
              {currentStep?.requirements.map((r, i) => (
                <span key={i} className="req-pill"><CheckCircle size={14} /> {r}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Creators Spotlight */}
        <section className="mb-20">
          <h2 className="section-title">Meet Our Top Creators</h2>
          <div className="creator-grid">
            {creators.map((c, i) => (
              <div key={i} className="chef-card">
                <img src={c.avatar} alt={c.name} className="chef-img" />
                <div className="chef-info">
                  <h4>{c.name}</h4>
                  <p>{c.role}</p>
                  <div className="chef-stats">
                    <span><FileText size={14}/> {c.recipesCount}</span>
                    <span><Heart size={14}/> {c.followers}</span>
                    <span style={{color: '#22c55e'}}>{c.earnings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="creator-cta">
          <Rocket size={60} style={{margin: '0 auto 20px'}} />
          <h2>Ready to Get Started?</h2>
          <p style={{marginBottom: '30px'}}>Join creators already sharing their recipes and earning revenue on Senet.</p>
          <div className="cta-buttons" style={{display: 'flex', gap: '15px', justifyContent: 'center'}}>

            <Link to='/careers'>
            <button className="btn-white">Apply Now</button>
            
            </Link>

            <Link to='/contact-us'>
            <button className="btn-outline">Contact Support</button>
            
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}