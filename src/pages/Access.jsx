import React, { useState } from 'react';
import { 
  Mic, Eye, Hand, Volume2, Palette, Smartphone, 
  Zap, Heart, Users, CheckCircle, Award, Settings, AlertCircle, Languages
} from 'lucide-react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import "./accessibility.css";

const accessibilityFeatures = [
  {
    id: 'voice-control',
    title: "Voice Control & Commands",
    description: "Navigate the entire app and control AR experiences using voice commands. Perfect for hands-free cooking when your hands are messy or occupied.",
    icon: Mic,
    color: "feat-orange",
    image: "https://images.unsplash.com/photo-1770871820934-daf713c304af?w=800&q=80",
    benefits: [
      "Navigate steps: 'Next step', 'Repeat'",
      "Set timers: 'Set timer for 10 minutes'",
      "Search recipes: 'Find koshari recipe'",
      "Adjust volume: 'Increase volume'"
    ],
    userGroup: "Motor impairments, busy cooks, multitaskers"
  },
  {
    id: 'high-contrast',
    title: "High-Contrast AR Modes",
    description: "Enhanced visual modes with high contrast colors, larger text, and bold outlines for users with low vision or visual impairments.",
    icon: Eye,
    color: "feat-green",
    image: "https://images.unsplash.com/photo-1771167328266-72695a6f8470?w=800&q=80",
    benefits: [
      "4x larger text size options",
      "Yellow-on-black high contrast mode",
      "Bold AR hologram outlines",
      "Color-blind friendly palettes"
    ],
    userGroup: "Low vision, color blindness, light sensitivity"
  },
  {
    id: 'one-handed',
    title: "One-Handed Operation",
    description: "Optimized interface that allows complete app control with just one hand. All buttons and gestures are reachable from a single thumb position.",
    icon: Hand,
    color: "feat-purple",
    image: "https://images.unsplash.com/photo-1611244599603-d996203ff25b?w=800&q=80",
    benefits: [
      "Compact UI for thumb reach",
      "Swipe gestures for navigation",
      "Large tap targets (44x44px)",
      "Haptic feedback confirmation"
    ],
    userGroup: "Single-hand users, temporary injuries"
  },
  {
    id: 'audio-descriptions',
    title: "Audio Descriptions",
    description: "Complete audio narration of all recipe steps, ingredients, and AR guidance. Every visual element has an audio equivalent.",
    icon: Volume2,
    color: "feat-blue",
    image: "https://images.unsplash.com/photo-1758691032009-ed34ff84d0c8?w=800&q=80",
    benefits: [
      "Full recipe narration in Arabic & English",
      "Adjustable speech rate (0.5x - 2x)",
      "Natural-sounding AI voices",
      "Background noise filtering"
    ],
    userGroup: "Blind users, reading difficulties, elderly"
  },
  {
    id: 'customizable',
    title: "Customizable Interface",
    description: "Personalize every aspect of the app interface to match your needs. Adjust colors, sizes, layouts, and interaction methods.",
    icon: Palette,
    color: "feat-pink",
    image: "https://images.unsplash.com/photo-1768595701593-c84fd8143aea?w=800&q=80",
    benefits: [
      "Font size: Small to Extra Large",
      "Color themes: 8 preset options",
      "Button spacing adjustments",
      "Animation speed controls"
    ],
    userGroup: "All users with specific preferences"
  },
  {
    id: 'simplified-mode',
    title: "Simplified Mode",
    description: "A streamlined interface with fewer options, larger elements, and clearer instructions. Perfect for users new to technology.",
    icon: Zap,
    color: "feat-yellow",
    image: "https://images.unsplash.com/photo-1758874960868-eebf9d36d5d5?w=800&q=80",
    benefits: [
      "Reduced visual clutter",
      "Step-by-step linear flow",
      "Extra-large buttons and text",
      "Confirmation prompts for actions"
    ],
    userGroup: "Seniors, cognitive impairments, first-time users"
  }
];

const accessibilityStats = [
  { icon: Users, label: "Inclusive Design", value: "100%", desc: "WCAG 2.1 AAA" },
  { icon: Languages, label: "Languages", value: "12+", desc: "Arabic & English" },
  { icon: Smartphone, label: "Device Support", value: "All", desc: "iOS & Android" },
  { icon: Award, label: "Award 2025", value: "Winner", desc: "Tech Inclusion" }
];

export default function AccessibilityPage() {
  const [selectedFeature, setSelectedFeature] = useState('voice-control');
  const [isDemoMode, setIsDemoMode] = useState(false);

  const currentFeature = accessibilityFeatures.find(f => f.id === selectedFeature) || accessibilityFeatures[0];

  return (
    <div className="access-wrapper">
      <Nav />

      <main className="access-main">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="access-badge-pill">
            <Heart size={20} className="text-orange" />
            <span>Cooking for Everyone</span>
          </div>
          <h1 className="access-title">Accessibility Features</h1>
          <p className="access-subtitle">
            Senat is designed for everyone. We believe cooking should be accessible to all, regardless of ability.
          </p>
        </section>

        {/* Stats Grid */}
        <div className="stats-grid mb-20">
          {accessibilityStats.map((stat, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon-box">
                <stat.icon size={28} color="white" />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Feature Grid Section - Matches image_0.png */}
        <section className="mb-12">
          {/* Section heading matches image_0.png heading */}
          <h2 className="feature-section-title">Explore Our Features</h2>
          
          <div className="feature-tabs">
            {accessibilityFeatures.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFeature(f.id)}
                className={`tab-btn ${selectedFeature === f.id ? 'tab-active ' + f.color : ''}`}
              >
                {/* 1. Large Icons matching picture size */}
                <f.icon size={32} />
                {/* 2. Text stacks below */}
                <span>{f.title}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Detail Display Card */}
        <div className="glass-card-main animate-slide-up mb-20" key={currentFeature.id}>
          <div className="step-image-container">
            <img src={currentFeature.image} alt={currentFeature.title} />
            <div className="floating-user-group">
              <small>Designed For:</small>
              <p>{currentFeature.userGroup}</p>
            </div>
          </div>

          <div className="step-content">
            <div className={`feat-pill ${currentFeature.color}`}>
              <currentFeature.icon size={18} />
              <span>{currentFeature.title}</span>
            </div>
            <h3>Empowering Independence</h3>
            <p className="feat-description">{currentFeature.description}</p>

            <div className="benefits-list">
              <h4 className="mb-4 font-bold text-xl">Key Benefits:</h4>
              {currentFeature.benefits.map((benefit, i) => (
                <div key={i} className="tip-item">
                  <CheckCircle size={18} className="text-green" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <button 
              className={`btn-primary ${isDemoMode ? 'btn-success' : ''}`}
              onClick={() => setIsDemoMode(!isDemoMode)}
            >
              {isDemoMode ? '✓ Demo Mode Active' : 'Try Interactive Demo'}
            </button>
          </div>
        </div>

        {/* Standards & Compliance */}
        <section className="mb-20">
          <h2 className="section-heading">Standards & Compliance</h2>
          <div className="requirements-grid">
            <div className="req-card">
              <div className="req-icon-box bg-green-grad">
                <CheckCircle color="white" />
              </div>
              <div>
                <h3>WCAG 2.1 Level AAA</h3>
                <p>Perceivable, Operable, Understandable, and Robust content.</p>
              </div>
            </div>
            <div className="req-card">
              <div className="req-icon-box bg-orange-grad">
                <Smartphone color="white" />
              </div>
              <div>
                <h3>Platform Native</h3>
                <p>Full Apple VoiceOver and Android TalkBack integration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Commitment */}
        <section className="cta-card access-cta">
          <Award size={64} className="mb-6" />
          <h2>Our Commitment</h2>
          <p className="hero-description">
            Over 2,000 users with disabilities are now cooking independently thanks to Senat's inclusive design.
          </p>
          <div className="cta-buttons">
            <Link to="/community">
              <button className="btn-white">Join Community</button>
            </Link>
            <Link to="/contact-us">
              <button className="btn-outline">Share Feedback</button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}