import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import imgSombrero from "../assets/Ingredients/Sombrero.png";
import imgChilli from "../assets/Ingredients/Chilli.png";
import imgOnion from "../assets/Ingredients/Onion.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer"
import "./About.css";

export function AboutPage() {
  const { lang } = useLanguage();

  const translations = {
    en: {
      title: "About Senet",
      subtitle: "Bringing Egyptian Culinary Heritage to Life Through Augmented Reality",
      storyTitle: "Our Story",
      storyP1: "Senet is more than just a cooking app—it's a celebration of Egyptian cuisine and culture. Born from the ancient land of the Pharaohs, Senet connects people through the universal language of food, enhanced by cutting-edge augmented reality.",
      storyP2: "Our name draws inspiration from one of the oldest board games in the world. Just as Senet brought people together thousands of years ago, our app brings families together today through the joy of cooking.",
      features: [
        { 
          emoji: "🥽", 
          title: "AR Step-by-Step", 
          desc: "Immersive augmented reality guides that overlay instructions right in your kitchen." 
        },
        { 
          emoji: "📌", 
          title: "Discover & Inspire", 
          desc: "Browse a Pinterest-like feed of authentic Egyptian recipes and fusion dishes." 
        },
        { 
          emoji: "👥", 
          title: "Connect", 
          desc: "Join a vibrant community of food lovers sharing recipes and traditions." 
        }
      ],
      ctaTitle: "Download the Senet App Today",
      ctaDesc: "Start your culinary journey with thousands of recipes at your fingertips.",
      appStore: "App Store",
      googlePlay: "Google Play"
    },
    ar: {
      title: "عن سنيت",
      subtitle: "إحياء تراث الطهي المصري من خلال الواقع المعزز",
      storyTitle: "قصتنا",
      storyP1: "سنيت هو أكثر من مجرد تطبيق للطهي - إنه احتفال بالمطبخ والثقافة المصرية. وُلد سنيت من أرض الفراعنة القديمة، ليربط الناس من خلال لغة الطعام العالمية، معززة بأحدث تقنيات الواقع المعزز.",
      storyP2: "اسمنا مستوحى من واحدة من أقدم ألعاب الطاولة في العالم. تمامًا كما جمعت سنيت الناس معًا منذ آلاف السنين، يجمع تطبيقنا العائلات اليوم من خلال متعة الطهي.",
      features: [
        { 
          emoji: "🥽", 
          title: "خطوات بالواقع المعزز", 
          desc: "أدلة واقع معزز غامرة تعرض التعليمات مباشرة في مطبخك." 
        },
        { 
          emoji: "📌", 
          title: "اكتشف واستلهم", 
          desc: "تصفح خلاصة تشبه Pinterest للوصفات المصرية الأصيلة وأطباق الفيوجن." 
        },
        { 
          emoji: "👥", 
          title: "تواصل", 
          desc: "انضم إلى مجتمع حيوي من محبي الطعام الذين يشاركون الوصفات والتقاليد." 
        }
      ],
      ctaTitle: "حمل تطبيق سنيت اليوم",
      ctaDesc: "ابدأ رحلتك في عالم الطهي مع آلاف الوصفات بين يديك.",
      appStore: "آب ستور",
      googlePlay: "جوجل بلاي"
    }
  };

  const t = translations[lang];

  return (
    <>
      <Nav />
      <div className="about-wrapper">
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
          <header className="about-header">
            <h1 className="Brigten">{t.title}</h1>
            <p className="subtitle">{t.subtitle}</p>
          </header>

          <div className="about-grid">
            <motion.div 
              className="story-card orange-grad"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2>{t.storyTitle}</h2>
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
            </motion.div>

            <div className="image-holder rot-left">
              <img 
                src="https://images.unsplash.com/photo-1661994215679-cde7c2c5c060?q=80&w=1080" 
                alt="Egyptian Food" 
              />
            </div>
          </div>

          <div className="features-row">
            {t.features.map((feat, index) => (
              <div key={index} className={`feature-box ${index === 1 ? 'orange-grad' : 'green-grad'}`}>
                <span className="emoji">{feat.emoji}</span>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>

          <section className="cta-section green-grad">
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaDesc}</p>
            <div className="btn-group">
              <button className="btn-white">{t.appStore}</button>
              <button className="btn-white">{t.googlePlay}</button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}