import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Share2, Settings, Lock, Mail } from 'lucide-react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./privacy-policy.css";

const sections = [
  {
    id: 1,
    title: "1. Information We Collect",
    icon: <Eye size={20} />,
    content: [
      "Profile Preferences: Dietary restrictions, skill level, and flavor preferences (used to generate your custom tags).",
      "Camera Data: Our AR technology requires real-time access to your device's camera to overlay cooking instructions on your workspace.",
      "Note: We do not record, store, or transmit video footage of your home to our servers. All AR spatial processing happens locally on your device.",
      "Usage Analytics: Information on which recipes you view and how long it takes you to complete steps, helping us improve our instructions."
    ]
  },
  {
    id: 2,
    title: "2. How We Use Your Data",
    icon: <Settings size={20} />,
    content: [
      "Personalize your Pinterest-style feed so you see recipes that match your profile.",
      "Refine AR overlays to ensure measurements and timers appear accurately in your physical environment.",
      "Analyze trends to see which cooking tags are most popular among our community."
    ]
  },
  {
    id: 3,
    title: "3. Third-Party Sharing",
    icon: <Share2 size={20} />,
    content: [
      "Cloud Storage: To sync your saved recipes across devices.",
      "Analytics Providers: To understand app performance and crash reports.",
      "Legal Requirements: If required by law to protect our rights or your safety."
    ]
  },
  {
    id: 4,
    title: "4. User Control & Opt-Out",
    icon: <ShieldCheck size={20} />,
    content: [
      "Camera Permissions: You can revoke camera access at any time through your device settings (though this will disable AR features).",
      "Profile Reset: You can update or delete your dietary tags and preferences within the 'Profile' section of the app.",
      "Data Deletion: You may request a full deletion of your account and associated data by contacting our support team."
    ]
  },
  {
    id: 5,
    title: "5. Security",
    icon: <Lock size={20} />,
    content: [
      "We implement industry-standard security measures to protect your information. While no method of electronic storage is 100% secure, we take every precaution to keep your 'secret ingredients' safe from unauthorized access."
    ]
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <div className="policy-wrapper">
        <motion.div 
          className="policy-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.header className="policy-header" variants={itemVariants}>
            <h1 className="Brigten">Privacy Policy & Data Usage</h1>
            <div className="policy-meta">
              <span>Effective Date: 27/2/2026</span>
              <span className="separator">•</span>
              <span>Last Updated: 20/2/2026</span>
            </div>
            <p className="intro-text">
              Welcome to Senet. Your privacy is as important to us as a perfectly seasoned meal. 
              This policy explains how we handle your data, especially concerning our 
              Augmented Reality (AR) features and your personalized cooking profile.
            </p>
          </motion.header>

          <hr className="policy-divider" />

          {/* Dynamic Sections */}
          <div className="policy-sections">
            {sections.map((section) => (
              <motion.section key={section.id} className="policy-card" variants={itemVariants}>
                <div className="section-title">
                  <span className="icon-box">{section.icon}</span>
                  <h2>{section.title}</h2>
                </div>
                <div className="section-content">
                  {section.content.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Contact Section */}
          <motion.section className="policy-contact" variants={itemVariants}>
            <div className="section-title">
              <span className="icon-box"><Mail size={20} /></span>
              <h2>6. Contact Us</h2>
            </div>
            <p>If you have questions about this policy or how your data is handled within the AR environment, please reach out to us at:</p>
            <a href="mailto:heshamabozaid@contact.com" className="contact-link">
              heshamabozaid@contact.com
            </a>
          </motion.section>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}