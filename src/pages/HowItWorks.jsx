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

import { useLanguage } from "../LanguageContext";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import imgSombrero from "../assets/Ingredients/Sombrero.png";
import imgChilli from "../assets/Ingredients/Chilli.png";
import "./HowItWorks.css";

const steps = [
  {
    number: 1,
    title: "Pick a Recipe",
    titleAr: "اختر وصفة",
    description: "Browse through thousands of authentic Egyptian recipes. Filter by cuisine, dietary preferences, or difficulty level.",
    descriptionAr: "تصفح آلاف الوصفات المصرية الأصيلة. قم بالتصنيف حسب نوع المطبخ، التفضيلات الغذائية، أو مستوى الصعوبة.",
    icon: ChefHat,
    color: "orange-grad",
    image: "https://images.unsplash.com/photo-1634964485521-27c4276c10ec?auto=format&fit=crop&q=80&w=800&h=500",
    features: ["Search by ingredients", "Save favorites", "Prep & cook times"],
    featuresAr: ["البحث بالمكونات", "حفظ الوصفات المفضلة", "أوقات التحضير والطبخ"],
    tip: "Use voice search to find recipes hands-free!",
    tipAr: "استخدم البحث الصوتي للعثور على الوصفات دون استخدام اليدين!",
  },
  {
    number: 2,
    title: "Place Phone in Headset",
    titleAr: "ضع الهاتف في النظارة",
    description: "Insert your smartphone into a compatible VR/AR headset. Senet works with most mobile headsets including Google Cardboard.",
    descriptionAr: "ضع هاتفك الذكي في نظارة واقع معزز متوافقة. يعمل سنيت مع معظم النظارات بما في ذلك Google Cardboard.",
    icon: Glasses,
    color: "green-grad",
    image: "https://images.unsplash.com/photo-1713869782574-aa4cc08f4952?q=80&w=1471&auto=format&fit=crop",
    features: ["Auto-calibrates screen", "Comfortable sessions", "Universal fit"],
    featuresAr: ["معايرة تلقائية للشاشة", "مريح للاستخدام الطويل", "مقاس عالمي"],
    tip: "Make sure your phone is fully charged before starting!",
    tipAr: "تأكد من شحن هاتفك بالكامل قبل البدء!",
  },
  {
    number: 3,
    title: "Follow AR Holograms",
    titleAr: "اتبع الهولوجرام",
    description: "Watch as holographic cooking instructions appear in your kitchen! The AR overlays show you exactly what to do.",
    descriptionAr: "شاهد تعليمات الطبخ تظهر كـ هولوجرام في مطبخك! تظهر لك تراكبات الواقع المعزز ما يجب فعله بالضبط.",
    icon: PlayCircle,
    color: "orange-grad",
    image: "https://images.unsplash.com/photo-1721414207812-df0a2afb259d?auto=format&fit=crop&q=80&w=800&h=500",
    features: ["3D techniques", "Voice commands", "Interactive timers"],
    featuresAr: ["تقنيات ثلاثية الأبعاد", "أوامر صوتية", "مؤقتات تفاعلية"],
    tip: "Use commands like 'Next Step' to stay hands-free!",
    tipAr: "استخدم أوامر مثل 'الخطوة التالية' لتبقى يداك حرتين!",
  },
];

export function HowItWorksPage() {
  const { lang } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = steps.find((s) => s.number === activeStep);

  const uiLabels = {
    en: {
      title: "How It Works",
      subtitle: "Master Egyptian cuisine in 3 simple steps with Senet AR.",
      keyFeatures: "Key Features:",
      stepOf: "Step",
      of: "of",
      prev: "Previous Step",
      next: "Next Step",
      finish: "Start Cooking!",
      ctaTitle: "Ready to transform your kitchen?",
      ctaSubtitle: "Join the future of Egyptian cooking today.",
      ctaBtn: "Download Senet Now 📱"
    },
    ar: {
      title: "كيف يعمل؟",
      subtitle: "أتقن المطبخ المصري في 3 خطوات بسيطة مع سنيت.",
      keyFeatures: "المميزات الرئيسية:",
      stepOf: "الخطوة",
      of: "من",
      prev: "الخطوة السابقة",
      next: "الخطوة التالية",
      finish: "ابدأ الطبخ الآن!",
      ctaTitle: "مستعد لتغيير مطبخك؟",
      ctaSubtitle: "انضم إلى مستقبل الطبخ المصري اليوم.",
      ctaBtn: "حمل سنيت الآن 📱"
    }
  };

  const t = uiLabels[lang];

  return (
    <>
      <Nav />
      <div className={`how-it-works-wrapper ${lang === 'ar' ? 'rtl-layout' : ''}`}>
        <motion.img src={imgSombrero} className="deco-icon-how" style={{ top: "20%", right: "5%" }} animate={{ rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5 }} />
        <motion.img src={imgChilli} className="deco-icon-how" style={{ bottom: "15%", left: "5%" }} animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 3 }} />

        <div className="how-container" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h1 className="Brigten" style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}>{t.title}</h1>
            <p style={{ color: "#ffd8bb", fontSize: "1.2rem", marginTop: "10px" }}>{t.subtitle}</p>
          </div>

          {/* Progress Tracker */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginBottom: "50px", flexDirection: lang === 'ar' ? 'row-reverse' : 'row' }}>
            {steps.map((step, idx) => (
              <React.Fragment key={step.number}>
                <button className={`step-number-btn ${activeStep === step.number ? "active" : "inactive"}`} onClick={() => setActiveStep(step.number)}>
                  {activeStep > step.number ? <CheckCircle size={24} /> : step.number}
                </button>
                {idx < steps.length - 1 && (
                  <div style={{ width: "50px", background: activeStep > step.number ? "#00804D" : "rgba(255,255,255,0.2)", height: "2px" }} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step Detail Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: lang === 'ar' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
              className={`step-card ${currentStep.color}`}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", minHeight: "500px" }}
            >
              <div style={{ padding: "50px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                  <currentStep.icon size={48} />
                  <h2 className="Brigten" style={{ fontSize: "2.5rem" }}>{lang === 'ar' ? currentStep.titleAr : currentStep.title}</h2>
                </div>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px" }}>
                  {lang === 'ar' ? currentStep.descriptionAr : currentStep.description}
                </p>

                <div style={{ background: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "20px", marginBottom: "20px" }}>
                  <h4 style={{ marginBottom: "10px" }}>{t.keyFeatures}</h4>
                  {(lang === 'ar' ? currentStep.featuresAr : currentStep.features).map((f) => (
                    <div key={f} style={{ display: "flex", gap: "10px", marginBottom: "5px", fontSize: "0.9rem" }}>
                      <CheckCircle size={16} color="white" /> {f}
                    </div>
                  ))}
                </div>

                <div style={{ borderLeft: lang === 'ar' ? 'none' : "4px solid white", borderRight: lang === 'ar' ? "4px solid white" : 'none', paddingLeft: lang === 'ar' ? '0' : "15px", paddingRight: lang === 'ar' ? "15px" : '0', fontStyle: "italic", opacity: 0.9 }}>
                  💡 {lang === 'ar' ? currentStep.tipAr : currentStep.tip}
                </div>
              </div>

              <div style={{ position: "relative", height: "500px", width: "100%", overflow: "hidden" }}>
                <img src={currentStep.image} alt={currentStep.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: "20px", [lang === 'ar' ? 'left' : 'right']: "20px", background: "white", color: "#F0660C", padding: "10px 20px", borderRadius: "50px", fontWeight: "bold", zIndex: 10 }}>
                  {lang === 'ar' ? `${t.stepOf} ${activeStep} ${t.of} 3` : `${t.stepOf} ${activeStep} ${t.of} 3`}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px", flexDirection: lang === 'ar' ? 'row-reverse' : 'row' }}>
            <button className="filter-btn" style={{ visibility: activeStep === 1 ? "hidden" : "visible" }} onClick={() => setActiveStep((prev) => prev - 1)}>
              {t.prev}
            </button>
            <button className="filter-btn active" onClick={() => activeStep < 3 ? setActiveStep((prev) => prev + 1) : console.log("Finish")}>
              {activeStep === 3 ? t.finish : t.next}
            </button>
          </div>

          <section className="careers-cta orange-grad" style={{ textAlign: "center", padding: "80px 20px", borderRadius: "40px", marginTop: "100px" }}>
            <h2 className="Brigten" style={{ fontSize: "3rem" }}>{t.ctaTitle}</h2>
            <p style={{ margin: "20px 0", fontSize: "1.2rem" }}>{t.ctaSubtitle}</p>
            <button className="btn-apply" style={{ background: "white", color: "#F0660C", padding: "15px 40px", fontSize: "1.1rem" }}>
              {t.ctaBtn}
            </button>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}