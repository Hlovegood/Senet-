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

import { useLanguage } from "../LanguageContext";
import imgSombrero from "../assets/Ingredients/Sombrero.png";
import imgChilli from "../assets/Ingredients/Chilli.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./FAQPage.css";

const faqData = [
  {
    category: "Getting Started",
    categoryAr: "بداية الاستخدام",
    emoji: "🚀",
    color: "orange-grad",
    questions: [
      {
        q: "What is Senet and how does it work?",
        qAr: "ما هو تطبيق سنيت وكيف يعمل؟",
        a: (
          <div className="flex flex-col gap-4">
            <p>Senet is an innovative AR cooking companion app from Egypt! It combines a Pinterest-style recipe feed with augmented reality technology.</p>
            <Link to="/how-it-works" className="filter-btn orange-grad" style={{ display: 'inline-block', width: 'fit-content', textDecoration: 'none', border: 'none' }}>Learn How It Works ✨</Link>
          </div>
        ),
        aAr: (
          <div className="flex flex-col gap-4">
            <p>سنيت هو تطبيق مصري مبتكر لمساعدتك في المطبخ! يجمع بين تغذية وصفات تشبه ستايل بينترست وتقنية الواقع المعزز.</p>
            <Link to="/how-it-works" className="filter-btn orange-grad" style={{ display: 'inline-block', width: 'fit-content', textDecoration: 'none', border: 'none' }}>اكتشف كيف يعمل ✨</Link>
          </div>
        )
      },
      {
        q: "How do I download and install the Senet app?",
        qAr: "كيف يمكنني تحميل وتثبيت تطبيق سنيت؟",
        a: "You can download Senet from both the App Store (iOS) and Google Play Store (Android).",
        aAr: "يمكنك تحميل سنيت من متجر التطبيقات (iOS) ومتجر جوجل بلاي (Android)."
      },
      {
        q: "Is Senet free to use?",
        qAr: "هل سنيت مجاني للاستخدام؟",
        a: "Yes! Senet offers a generous free tier with access to hundreds of recipes.",
        aAr: "نعم! يوفر سنيت نسخة مجانية تتيح الوصول إلى مئات الوصفات."
      }
    ],
  },
  {
    category: "AR Features",
    categoryAr: "مميزات الواقع المعزز",
    emoji: "🥽",
    color: "green-grad",
    questions: [
      {
        q: "What devices support AR features?",
        qAr: "ما هي الأجهزة التي تدعم ميزات الواقع المعزز؟",
        a: "Senet's AR features work on most modern smartphones with ARCore or ARKit support.",
        aAr: "تعمل ميزات الواقع المعزز على معظم الهواتف الحديثة التي تدعم ARCore أو ARKit."
      },
      {
        q: "How does the AR step-by-step guidance work?",
        qAr: "كيف تعمل ميزة التوجيه خطوة بخطوة؟",
        a: "Select a recipe and tap 'AR View.' Watch as 3D instructions appear in your space.",
        aAr: "اختر وصفة واضغط على 'AR View'. شاهد التعليمات ثلاثية الأبعاد تظهر في مساحتك."
      },
      {
        q: "Can I use AR features without an internet connection?",
        qAr: "هل يمكنني استخدام ميزات الواقع المعزز بدون إنترنت؟",
        a: "With premium, you can download recipes and use AR features offline!",
        aAr: "مع النسخة المميزة، يمكنك تحميل الوصفات واستخدام ميزات الواقع المعزز بدون إنترنت!"
      }
    ],
  },
  {
    category: "Recipes & Content",
    categoryAr: "الوصفات والمحتوى",
    emoji: "📖",
    color: "orange-grad",
    questions: [
      {
        q: "What types of recipes are available?",
        qAr: "ما هي أنواع الوصفات المتاحة؟",
        a: "We specialize in authentic Egyptian cuisine - from koshari to modern fusion!",
        aAr: "نحن متخصصون في المطبخ المصري الأصيل - من الكشري إلى أطباق الفيوجن الحديثة!"
      },
      {
        q: "Can I submit my own recipes?",
        qAr: "هل يمكنني تقديم وصفاتي الخاصة؟",
        a: "Absolutely! Premium members can create and share their own recipes.",
        aAr: "بالتأكيد! يمكن للأعضاء المميزين إنشاء ومشاركة وصفاتهم الخاصة."
      },
      {
        q: "Are recipes available in multiple languages?",
        qAr: "هل الوصفات متوفرة بعدة لغات؟",
        a: "Yes! Senet currently supports Arabic, English, French, and Spanish.",
        aAr: "نعم! يدعم سنيت حالياً العربية، الإنجليزية، الفرنسية، والإسبانية."
      }
    ],
  },
  {
    category: "Community & Sharing",
    categoryAr: "المجتمع والمشاركة",
    emoji: "👥",
    color: "green-grad",
    questions: [
      {
        q: "How does the Pinterest-style feed work?",
        qAr: "كيف تعمل تغذية الوصفات (بأسلوب بينترست)؟",
        a: "Our feed shows recipes based on your preferences and cooking history.",
        aAr: "تعرض التغذية وصفات بناءً على تفضيلاتك وتاريخ الطبخ الخاص بك."
      },
      {
        q: "Can I share my cooking results?",
        qAr: "هل يمكنني مشاركة نتائج طبخي؟",
        a: "Yes! Share directly to social media or within the Senet community.",
        aAr: "نعم! شارك مباشرة على وسائل التواصل الاجتماعي أو داخل مجتمع سنيت."
      },
      {
        q: "Is there a way to connect with other cooks?",
        qAr: "هل هناك طريقة للتواصل مع طباخين آخرين؟",
        a: "Join challenges, follow users, and even cook together using Live Cook!",
        aAr: "انضم إلى التحديات، تابع المستخدمين، واطبخوا معاً باستخدام ميزة Live Cook!"
      }
    ],
  },
  {
    category: "Technical Support",
    categoryAr: "الدعم الفني",
    emoji: "🛠️",
    color: "orange-grad",
    questions: [
      {
        q: "The AR isn't working properly. What should I do?",
        qAr: "الواقع المعزز لا يعمل بشكل صحيح. ماذا أفعل؟",
        a: "Ensure good lighting and camera permissions. Try calibrating in settings.",
        aAr: "تأكد من وجود إضاءة جيدة وأذونات الكاميرا. حاول المعايرة في الإعدادات."
      },
      {
        q: "How do I update my app?",
        qAr: "كيف أقوم بتحديث التطبيق؟",
        a: "Enable automatic updates in your App Store or Google Play settings.",
        aAr: "قم بتمكين التحديثات التلقائية في إعدادات متجر التطبيقات الخاص بك."
      },
      {
        q: "My app keeps crashing. Help!",
        qAr: "التطبيق يتوقف عن العمل باستمرار. ساعدوني!",
        a: "Try clearing cache, restarting your device, or reinstalling the app.",
        aAr: "حاول مسح ذاكرة التخزين المؤقت، إعادة تشغيل الجهاز، أو إعادة تثبيت التطبيق."
      }
    ],
  },
  {
    category: "Account & Billing",
    categoryAr: "الحساب والفواتير",
    emoji: "💳",
    color: "green-grad",
    questions: [
      {
        q: "How do I upgrade to premium?",
        qAr: "كيف يمكنني الترقية إلى النسخة المميزة؟",
        a: "Tap the crown icon in your profile and select your preferred plan.",
        aAr: "اضغط على أيقونة التاج في ملفك الشخصي واختر خطتك المفضلة."
      },
      {
        q: "Can I cancel my subscription?",
        qAr: "هل يمكنني إلغاء اشتراكي؟",
        a: "Yes, you can cancel anytime from your device's subscription settings.",
        aAr: "نعم، يمكنك الإلغاء في أي وقت من إعدادات الاشتراك في جهازك."
      },
      {
        q: "Is my payment information secure?",
        qAr: "هل معلومات الدفع الخاصة بي آمنة؟",
        a: "Payments are processed through Apple or Google, ensuring top-tier security.",
        aAr: "تتم معالجة المدفوعات عبر آبل أو جوجل، مما يضمن أعلى مستويات الأمان."
      }
    ],
  },
];

export function FAQPage() {
  const { lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const uiLabels = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about your AR cooking journey with Senet.",
      allBtn: "All Questions",
      ctaTitle: "Still Have Questions?",
      ctaSubtitle: "Our support team is ready to help you whip up success in the kitchen.",
      ctaBtn: "Contact Support 📧",
    },
    ar: {
      title: "الأسئلة الشائعة",
      subtitle: "كل ما تحتاج لمعرفته حول رحلة الطبخ بالواقع المعزز مع سنيت.",
      allBtn: "كل الأسئلة",
      ctaTitle: "هل لا يزال لديك أسئلة؟",
      ctaSubtitle: "فريق الدعم لدينا مستعد لمساعدتك في تحقيق النجاح في المطبخ.",
      ctaBtn: "تواصل مع الدعم 📧",
    }
  };

  const t = uiLabels[lang];

  const filteredData =
    selectedCategory === "All" || selectedCategory === "كل الأسئلة"
      ? faqData
      : faqData.filter((cat) => (lang === 'ar' ? cat.categoryAr : cat.category) === selectedCategory);

  return (
    <>
      <Nav />
      <div className={`faq-page-wrapper ${lang === 'ar' ? 'rtl-layout' : ''}`}>
        <motion.img src={imgChilli} className="deco-icon" style={{ top: "15%", left: "5%" }} animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 4 }} />
        <motion.img src={imgSombrero} className="deco-icon" style={{ top: "45%", right: "5%" }} animate={{ rotate: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 6 }} />

        <div className="faq-container" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
          <header className="faq-header">
            <h1 className="Brigten">{t.title}</h1>
            <p className="faq-subtitle">{t.subtitle}</p>
          </header>

          <div className="category-filter">
            <button className={`filter-btn ${selectedCategory === "All" || selectedCategory === "كل الأسئلة" ? "active" : ""}`} onClick={() => setSelectedCategory(lang === 'ar' ? "كل الأسئلة" : "All")}>
              {t.allBtn}
            </button>
            {faqData.map((cat) => {
              const catName = lang === 'ar' ? cat.categoryAr : cat.category;
              return (
                <button key={cat.category} className={`filter-btn ${selectedCategory === catName ? "active" : ""}`} onClick={() => setSelectedCategory(catName)}>
                  {cat.emoji} {catName}
                </button>
              );
            })}
          </div>

          <div className="faq-list">
            <AnimatePresence mode="wait">
              {filteredData.map((category) => (
                <motion.div key={category.category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="faq-section">
                  <div className={`cat-header ${category.color}`}>
                    <h2 style={{ fontSize: "1.8rem", display: "flex", alignItems: "center", gap: "15px" }}>
                      <span>{category.emoji}</span> {lang === 'ar' ? category.categoryAr : category.category}
                    </h2>
                  </div>

                  <Accordion.Root type="single" collapsible className="AccordionRoot">
                    {category.questions.map((item, idx) => (
                      <Accordion.Item key={idx} value={`item-${idx}`} className="accordion-item">
                        <Accordion.Header>
                          <Accordion.Trigger className="accordion-trigger">
                            <span style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                              {lang === 'ar' ? item.qAr : item.q}
                            </span>
                            <ChevronDown className="ChevronIcon" size={20} />
                          </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="accordion-content">
                          <div className="content-inner" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                            {lang === 'ar' ? (item.aAr || item.a) : item.a}
                          </div>
                        </Accordion.Content>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <section className="careers-cta orange-grad" style={{ textAlign: "center", padding: "60px", borderRadius: "40px", marginTop: "60px" }}>
            <h2 className="Brigten" style={{ fontSize: "2.5rem" }}>{t.ctaTitle}</h2>
            <p style={{ margin: "20px 0" }}>{t.ctaSubtitle}</p>
            <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn-apply" style={{ background: "white", color: "#F0660C", padding: "12px 30px", borderRadius: "50px", border: "none", fontWeight: "bold" }}>
                {t.ctaBtn}
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}