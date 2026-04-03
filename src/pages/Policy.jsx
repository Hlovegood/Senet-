import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Share2, Settings, Lock, Mail } from 'lucide-react';
import { useLanguage } from "../LanguageContext";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./privacy-policy.css";

const sections = [
  {
    id: 1,
    title: "1. Information We Collect",
    titleAr: "١. المعلومات التي نجمعها",
    icon: <Eye size={20} />,
    content: [
      "Profile Preferences: Dietary restrictions, skill level, and flavor preferences (used to generate your custom tags).",
      "Camera Data: Our AR technology requires real-time access to your device's camera to overlay cooking instructions on your workspace.",
      "Note: We do not record, store, or transmit video footage of your home to our servers. All AR spatial processing happens locally on your device.",
      "Usage Analytics: Information on which recipes you view and how long it takes you to complete steps."
    ],
    contentAr: [
      "تفضيلات الملف الشخصي: القيود الغذائية، مستوى المهارة، وتفضيلات النكهة (تستخدم لإنشاء وسوم مخصصة لك).",
      "بيانات الكاميرا: تتطلب تقنية الواقع المعزز لدينا وصولاً مباشراً لكاميرا جهازك لعرض تعليمات الطبخ فوق مساحة العمل الخاصة بك.",
      "ملاحظة: نحن لا نسجل أو نخزن أو ننقل لقطات فيديو لمنزلك إلى خوادمنا. تتم جميع عمليات المعالجة المكانية للواقع المعزز محلياً على جهازك.",
      "تحليلات الاستخدام: معلومات حول الوصفات التي تشاهدها والوقت الذي تستغرقه لإكمال الخطوات."
    ]
  },
  {
    id: 2,
    title: "2. How We Use Your Data",
    titleAr: "٢. كيف نستخدم بياناتك",
    icon: <Settings size={20} />,
    content: [
      "Personalize your Pinterest-style feed so you see recipes that match your profile.",
      "Refine AR overlays to ensure measurements and timers appear accurately.",
      "Analyze trends to see which cooking tags are most popular among our community."
    ],
    contentAr: [
      "تخصيص تغذية الوصفات الخاصة بك حتى ترى الوصفات التي تطابق ملفك الشخصي.",
      "تحسين تراكبات الواقع المعزز لضمان ظهور القياسات والمؤقتات بدقة.",
      "تحليل الاتجاهات لمعرفة وسوم الطبخ الأكثر شهرة بين مجتمعنا."
    ]
  },
  {
    id: 3,
    title: "3. Third-Party Sharing",
    titleAr: "٣. المشاركة مع أطراف ثالثة",
    icon: <Share2 size={20} />,
    content: [
      "Cloud Storage: To sync your saved recipes across devices.",
      "Analytics Providers: To understand app performance and crash reports.",
      "Legal Requirements: If required by law to protect our rights or your safety."
    ],
    contentAr: [
      "التخزين السحابي: لمزامنة وصفاتك المحفوظة عبر أجهزتك المختلفة.",
      "مزودو التحليلات: لفهم أداء التطبيق وتقارير الأعطال.",
      "المتطلبات القانونية: إذا طلب ذلك بموجب القانون لحماية حقوقنا أو سلامتك."
    ]
  },
  {
    id: 4,
    title: "4. User Control & Opt-Out",
    titleAr: "٤. تحكم المستخدم وإلغاء الاشتراك",
    icon: <ShieldCheck size={20} />,
    content: [
      "Camera Permissions: You can revoke camera access at any time through your device settings.",
      "Profile Reset: You can update or delete your dietary tags within the 'Profile' section.",
      "Data Deletion: You may request a full deletion of your account and associated data."
    ],
    contentAr: [
      "أذونات الكاميرا: يمكنك إلغاء الوصول إلى الكاميرا في أي وقت من خلال إعدادات جهازك.",
      "إعادة تعيين الملف الشخصي: يمكنك تحديث أو حذف الوسوم الغذائية والتفضيلات داخل قسم 'الملف الشخصي'.",
      "حذف البيانات: يمكنك طلب حذف كامل لحسابك والبيانات المرتبطة به عن طريق الاتصال بفريق الدعم."
    ]
  },
  {
    id: 5,
    title: "5. Security",
    titleAr: "٥. الأمان",
    icon: <Lock size={20} />,
    content: [
      "We implement industry-standard security measures to protect your information. While no method is 100% secure, we take every precaution to keep your 'secret ingredients' safe."
    ],
    contentAr: [
      "نحن نطبق معايير أمنية قياسية لحماية معلوماتك. ورغم أنه لا توجد وسيلة تخزين إلكترونية آمنة بنسبة ١٠٠٪، إلا أننا نتخذ كل الاحتياطات للحفاظ على 'مكوناتك السرية' آمنة."
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PrivacyPolicy() {
  const { lang } = useLanguage();

  const labels = {
    en: {
      title: "Privacy Policy & Data Usage",
      effective: "Effective Date: 27/2/2026",
      updated: "Last Updated: 20/2/2026",
      intro: "Welcome to Senet. Your privacy is as important to us as a perfectly seasoned meal. This policy explains how we handle your data, especially concerning our Augmented Reality (AR) features and your personalized cooking profile.",
      contactTitle: "6. Contact Us",
      contactText: "If you have questions about this policy or how your data is handled within the AR environment, please reach out to us at:",
    },
    ar: {
      title: "سياسة الخصوصية واستخدام البيانات",
      effective: "تاريخ السريان: ٢٧/٢/٢٠٢٦",
      updated: "آخر تحديث: ٢٠/٢/٢٠٢٦",
      intro: "مرحباً بك في سنيت. خصوصيتك تهمنا بقدر أهمية وجبة متبلة بشكل مثالي. توضح هذه السياسة كيفية تعاملنا مع بياناتك، خاصة فيما يتعلق بميزات الواقع المعزز (AR) وملفك الشخصي المخصص للطبخ.",
      contactTitle: "٦. اتصل بنا",
      contactText: "إذا كانت لديك أسئلة حول هذه السياسة أو كيفية التعامل مع بياناتك داخل بيئة الواقع المعزز، يرجى التواصل معنا عبر:",
    }
  };

  const t = labels[lang];

  return (
    <>
      <Nav />
      <div className={`policy-wrapper ${lang === 'ar' ? 'rtl-layout' : ''}`}>
        <motion.div 
          className="policy-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}
        >
          <motion.header className="policy-header" variants={itemVariants}>
            <h1 className="Brigten">{t.title}</h1>
            <div className="policy-meta">
              <span>{t.effective}</span>
              <span className="separator">•</span>
              <span>{t.updated}</span>
            </div>
            <p className="intro-text">{t.intro}</p>
          </motion.header>

          <hr className="policy-divider" />

          <div className="policy-sections">
            {sections.map((section) => (
              <motion.section key={section.id} className="policy-card" variants={itemVariants}>
                <div className="section-title">
                  <span className="icon-box">{section.icon}</span>
                  <h2>{lang === 'ar' ? section.titleAr : section.title}</h2>
                </div>
                <div className="section-content">
                  {(lang === 'ar' ? section.contentAr : section.content).map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          <motion.section className="policy-contact" variants={itemVariants}>
            <div className="section-title">
              <span className="icon-box"><Mail size={20} /></span>
              <h2>{t.contactTitle}</h2>
            </div>
            <p>{t.contactText}</p>
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