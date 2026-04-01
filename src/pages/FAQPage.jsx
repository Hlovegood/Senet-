import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  MessageCircle,
  HelpCircle,
  PlayCircle,
} from "lucide-react";

// Assets
import imgSombrero from "../assets/Ingredients/Sombrero.png";
import imgChilli from "../assets/Ingredients/Chilli.png";
import imgOnion from "../assets/Ingredients/Onion.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./FAQPage.css";

const faqData = [
  {
    category: "Getting Started",
    emoji: "🚀",
    color: "orange-grad",
    questions: [
      {
        q: "What is Senat and how does it work?",
        a: (
          <div className="flex flex-col gap-4">
            <p>
              Senat is an innovative AR cooking companion app from Egypt! It combines a Pinterest-style recipe feed with augmented reality technology. Browse thousands of authentic Egyptian recipes, then use your phone's camera to see step-by-step AR instructions overlaid right in your kitchen.
            </p>
            <Link 
              to="/how-it-works" 
              className="filter-btn orange-grad" 
              style={{ 
                display: 'inline-block', 
                width: 'fit-content', 
                textDecoration: 'none', 
                textAlign: 'center',
                marginTop: '10px',
                border: 'none'
              }}
            >
              Learn How It Works ✨
            </Link>
          </div>
        )
      },
      {
        q: "How do I download and install the Senet app?",
        a: "You can download Senet from both the App Store (iOS) and Google Play Store (Android). Simply search for 'Senet AR Cooking' or click the download buttons on our website. The app is free to download with optional premium features available!",
      },
      {
        q: "Is Senet free to use?",
        a: "Yes! Senet offers a generous free tier with access to hundreds of recipes and basic AR features. Our premium subscription unlocks exclusive recipes, advanced AR features, offline mode, and personalized meal planning. Try it free for 30 days!",
      },
    ],
  },
  {
    category: "AR Features",
    emoji: "🥽",
    color: "green-grad",
    questions: [
      {
        q: "What devices support AR features?",
        a: "Senet's AR features work on most modern smartphones with ARCore (Android) or ARKit (iOS) support. This includes iPhone 6S and newer, and most Android devices from 2018 onwards. Check your device compatibility in the app settings!",
      },
      {
        q: "How does the AR step-by-step guidance work?",
        a: "Simply select a recipe and tap 'AR View.' Point your camera at your cooking surface, and watch as 3D instructions, ingredient measurements, and cooking tips appear right in your space. The AR adapts to your pace, moving to the next step when you're ready!",
      },
      {
        q: "Can I use AR features without an internet connection?",
        a: "Once you've downloaded a recipe with our premium subscription, you can use AR features offline! Just make sure to download your recipes while connected to Wi-Fi before you start cooking.",
      },
    ],
  },
  {
    category: "Recipes & Content",
    emoji: "📖",
    color: "orange-grad",
    questions: [
      {
        q: "What types of recipes are available?",
        a: "We specialize in authentic Egyptian cuisine - from classic koshari and ful medames to modern fusion dishes! You'll find appetizers, main courses, desserts, drinks, and even traditional bread recipes. New recipes are added weekly by our community and culinary experts!",
      },
      {
        q: "Can I submit my own recipes?",
        a: "Absolutely! 🎉 We love user-generated content. Premium members can create and share their own recipes with the community. Include photos, videos, and even create custom AR instructions. The most popular recipes get featured on our main feed!",
      },
      {
        q: "Are recipes available in multiple languages?",
        a: "Yes! Senet currently supports Arabic, English, French, and Spanish. More languages are coming soon. The app automatically detects your device language, but you can change it anytime in settings.",
      },
    ],
  },
  {
    category: "Community & Sharing",
    emoji: "👥",
    color: "green-grad",
    questions: [
      {
        q: "How does the Pinterest-style feed work?",
        a: "Our feed uses smart algorithms to show you recipes based on your preferences, dietary restrictions, and cooking history. Like, save, and comment on recipes to help us personalize your experience. Scroll endlessly through mouth-watering dishes!",
      },
      {
        q: "Can I share my cooking results?",
        a: "Yes! Share your culinary creations directly to social media or within the Senet community. Tag @SenetApp and use #CookWithSenet for a chance to be featured. Build your profile, gain followers, and become a Senet cooking star!",
      },
      {
        q: "Is there a way to connect with other cooks?",
        a: "Of course! Join cooking challenges, follow other users, send private messages, and even cook together using our Live Cook feature. Make friends, share tips, and celebrate Egyptian cuisine together!",
      },
    ],
  },
  {
    category: "Technical Support",
    emoji: "🛠️",
    color: "orange-grad",
    questions: [
      {
        q: "The AR isn't working properly. What should I do?",
        a: "First, make sure you have good lighting in your kitchen. Clean your camera lens and ensure the app has camera permissions. If issues persist, try calibrating AR in Settings > AR Calibration. Still stuck? Contact our support team - we usually respond within 24 hours!",
      },
      {
        q: "How do I update my app?",
        a: "Enable automatic updates in your App Store or Google Play settings for the latest features. You can also manually check for updates by visiting the store and searching for Senet. We release updates monthly with new features and bug fixes!",
      },
      {
        q: "My app keeps crashing. Help!",
        a: "Sorry to hear that! Try these steps: 1) Clear the app cache, 2) Restart your device, 3) Uninstall and reinstall the app, 4) Make sure your OS is up to date. If problems persist, email us at support@Senet-app.com with your device details.",
      },
    ],
  },
  {
    category: "Account & Billing",
    emoji: "💳",
    color: "green-grad",
    questions: [
      {
        q: "How do I upgrade to premium?",
        a: "Tap the crown icon in your profile, select your preferred plan (monthly or annual), and complete the purchase through your app store. Enjoy instant access to all premium features! Cancel anytime with no hidden fees.",
      },
      {
        q: "Can I cancel my subscription?",
        a: "Yes, you can cancel anytime from your device's subscription settings. You'll continue to have premium access until the end of your billing period. No cancellation fees, no questions asked!",
      },
      {
        q: "Is my payment information secure?",
        a: "Absolutely! All payments are processed through Apple App Store or Google Play Store, so we never see or store your payment information. Your data is protected with industry-standard encryption.",
      },
    ],
  },
];

export function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? faqData
      : faqData.filter((cat) => cat.category === selectedCategory);

  return (
    <>
      <Nav />
      <div className="faq-page-wrapper">
        {/* Floating Icons */}
        <motion.img
          src={imgChilli}
          className="deco-icon"
          style={{ top: "15%", left: "5%" }}
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
        <motion.img
          src={imgSombrero}
          className="deco-icon"
          style={{ top: "45%", right: "5%" }}
          animate={{ rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />

        <div className="faq-container">
          {/* Header */}
          <header className="faq-header">
            <h1 className="Brigten">Frequently Asked Questions</h1>
            <p className="faq-subtitle">
              Everything you need to know about your AR cooking journey with
              Senet.
            </p>
          </header>

          {/* Category Filters */}
          <div className="category-filter">
            <button
              className={`filter-btn ${selectedCategory === "All" ? "active" : ""}`}
              onClick={() => setSelectedCategory("All")}
            >
              All Questions
            </button>
            {faqData.map((cat) => (
              <button
                key={cat.category}
                className={`filter-btn ${selectedCategory === cat.category ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat.category)}
              >
                {cat.emoji} {cat.category}
              </button>
            ))}
          </div>

          {/* FAQ Accordion Groups */}
          <div className="faq-list">
            <AnimatePresence mode="wait">
              {filteredData.map((category) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="faq-section"
                >
                  <div className={`cat-header ${category.color}`}>
                    <h2
                      style={{
                        fontSize: "1.8rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <span>{category.emoji}</span> {category.category}
                    </h2>
                  </div>

                  <Accordion.Root
                    type="single"
                    collapsible
                    className="AccordionRoot"
                  >
                    {category.questions.map((item, idx) => (
                      <Accordion.Item
                        key={idx}
                        value={`item-${idx}`}
                        className="accordion-item"
                      >
                        <Accordion.Header>
                          <Accordion.Trigger className="accordion-trigger">
                            {item.q}
                            <ChevronDown className="ChevronIcon" size={20} />
                          </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="accordion-content">
  <div className="content-inner">
    {typeof item.a === 'string' ? item.a : item.a}
  </div>
</Accordion.Content>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Help Section */}
          <section
            className="careers-cta orange-grad"
            style={{
              textAlign: "center",
              padding: "60px",
              borderRadius: "40px",
              marginTop: "60px",
            }}
          >
            <h2 className="Brigten" style={{ fontSize: "2.5rem" }}>
              Still Have Questions?
            </h2>
            <p style={{ margin: "20px 0" }}>
              Our support team is ready to help you whip up success in the
              kitchen.
            </p>
            <div
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                className="btn-apply"
                style={{
                  background: "white",
                  color: "#F0660C",
                  padding: "12px 30px",
                  borderRadius: "50px",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                Contact Support 📧
              </button>
            </div>
          </section>

          {/* Extra Resource Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <div
              className="benefit-card green-grad"
              style={{
                padding: "30px",
                borderRadius: "25px",
                textAlign: "center",
              }}
            >
              <PlayCircle size={40} style={{ marginBottom: "10px" }} />
              <h4>Video Tutorials</h4>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                Watch our AR quick-start guides.
              </p>
            </div>
            <div
              className="benefit-card green-grad"
              style={{
                padding: "30px",
                borderRadius: "25px",
                textAlign: "center",
              }}
            >
              <MessageCircle size={40} style={{ marginBottom: "10px" }} />
              <h4>Community Forum</h4>
              <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                Connect with other Egyptian food lovers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
