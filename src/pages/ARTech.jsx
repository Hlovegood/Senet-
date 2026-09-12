import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Layers, Cpu, Radio, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from "../LanguageContext";

import imgSombrero from "../assets/Ingredients/Sombrero.png";
import imgChilli from "../assets/Ingredients/Chilli.png";
import "./ARTech.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export function ARTechnologyPage() {
  const { lang } = useLanguage();
  const [selectedMode, setSelectedMode] = useState(0);

  const translations = {
    en: {
      badge: "Future of Cooking",
      heroTitle: "The Magic Behind Senet",
      heroSubtitle: "Blending Augmented Reality and AI to revolutionize your kitchen experience.",
      fps: "60 FPS REAL-TIME",
      techPrefix: "Tech:",
      modes: [
        {
          title: "Stabilized Window Mode",
          description: "Fixed AR overlay that stays anchored to a specific surface in your kitchen.",
          features: ["Countertop Anchoring", "SLAM Mapping", "Plane Detection"],
          tech: "ARCore/ARKit + Plane Detection",
        },
        {
          title: "Eye-Tracking Mode",
          description: "Smart AR display that follows your gaze and adapts to where you're looking.",
          features: ["Gaze Estimation", "Context Aware", "Reduced Strain"],
          tech: "ML Gaze Estimation + Computer Vision",
        }
      ],
      specs: [
        { title: "Edge Computing", desc: "Instant AR rendering with latency under 50ms." },
        { title: "Spatial Audio", desc: "3D audio cues guide you to ingredients." },
        { title: "Haptic Feedback", desc: "Tactile alerts for cooking milestones." }
      ],
      archTitle: "System Architecture",
      stacks: [
        { title: "Frontend Stack", items: ["ARKit & ARCore Integration", "Unity 3D Engine", "TensorFlow Lite"] },
        { title: "Backend Infrastructure", items: ["Firebase Realtime DB", "Node.js API Gateway", "AWS Media Services"] }
      ]
    },
    ar: {
      badge: "مستقبل الطهي",
      heroTitle: "السحر وراء سنيت",
      heroSubtitle: "دمج الواقع المعزز والذكاء الاصطناعي لإحداث ثورة في تجربة مطبخك.",
      fps: "60 إطار في الثانية - وقت فعلي",
      techPrefix: "التقنية:",
      modes: [
        {
          title: "وضع النافذة المستقرة",
          description: "تراكب واقع معزز ثابت يظل مرسخًا على سطح معين في مطبخك.",
          features: ["تثبيت السطح", "خرائط SLAM", "كشف المستويات"],
          tech: "ARCore/ARKit + كشف المستويات",
        },
        {
          title: "وضع تتبع العين",
          description: "عرض واقع معزز ذكي يتبع نظراتك ويتكيف مع المكان الذي تنظر إليه.",
          features: ["تقدير النظرات", "إدراك السياق", "تقليل الإجهاد"],
          tech: "ML تقدير النظرات + رؤية الكمبيوتر",
        }
      ],
      specs: [
        { title: "حوسبة الحافة", desc: "عرض فوري للواقع المعزز بـتأخر أقل من 50 مللي ثانية." },
        { title: "الصوت المكاني", desc: "تنبيهات صوتية ثلاثية الأبعاد ترشدك للمكونات." },
        { title: "ردود الفعل اللمسية", desc: "تنبيهات حسية لمراحل الطهي الهامة." }
      ],
      archTitle: "بنية النظام",
      stacks: [
        { title: "تقنيات الواجهة الأمامية", items: ["تكامل ARKit و ARCore", "محرك Unity 3D", "TensorFlow Lite"] },
        { title: "البنية التحتية الخلفية", items: ["قاعدة بيانات Firebase", "بوابة Node.js API", "خدمات AWS للإعلام"] }
      ]
    }
  };

  const t = translations[lang];

  const trackingModes = [
    {
      ...t.modes[0],
      icon: Layers,
      color: "orange-grad",
      image: "https://images.unsplash.com/photo-1724908267988-63310819325c?q=80&w=1080"
    },
    {
      ...t.modes[1],
      icon: Eye,
      color: "green-grad",
      image: "https://images.unsplash.com/photo-1758598497889-05bf628874a7?q=80&w=1080"
    }
  ];

  return (
    <>
      <Nav />
      <div className="ar-page-wrapper">
        <motion.img src={imgChilli} className="deco-icon t-10 l-5" animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 3 }} />
        <motion.img src={imgSombrero} className="deco-icon t-30 r-10" animate={{ rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5 }} />

        <div className="ar-container">
          <section className="ar-hero">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              className="badge"
            >
              <Zap size={18} /> <span>{t.badge}</span>
            </motion.div>
            <h1 className="Brigten">{t.heroTitle}</h1>
            <p className="ar-subtitle">{t.heroSubtitle}</p>
          </section>

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
                  <div className="tech-tag">{t.techPrefix} {trackingModes[selectedMode].tech}</div>
                </div>
                <div className="mode-image">
                  <img src={trackingModes[selectedMode].image} alt="AR Tech" />
                  <div className="fps-counter">{t.fps}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </section>

          <section className="specs-grid">
            <div className="spec-card">
              <Cpu size={40} className="text-orange" />
              <h3>{t.specs[0].title}</h3>
              <p>{t.specs[0].desc}</p>
            </div>
            <div className="spec-card">
              <Radio size={40} className="text-green" />
              <h3>{t.specs[1].title}</h3>
              <p>{t.specs[1].desc}</p>
            </div>
            <div className="spec-card">
              <Sparkles size={40} className="text-orange" />
              <h3>{t.specs[2].title}</h3>
              <p>{t.specs[2].desc}</p>
            </div>
          </section>

          <section className="arch-section orange-grad">
            <h2 className="Brigten">{t.archTitle}</h2>
            <div className="arch-grid">
              {t.stacks.map((stack, idx) => (
                <div className="arch-column" key={idx}>
                  <h4>{stack.title}</h4>
                  <ul>
                    {stack.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}