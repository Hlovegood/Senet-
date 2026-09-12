import React, { useState } from 'react';
import { 
  Mic, Eye, Hand, Volume2, Palette, Smartphone, 
  Zap, Heart, Users, CheckCircle, Award, Languages
} from 'lucide-react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import { useLanguage } from "../LanguageContext";
import "./accessibility.css";

export default function AccessibilityPage() {
  const { lang } = useLanguage();
  const [selectedFeature, setSelectedFeature] = useState('voice-control');
  const [isDemoMode, setIsDemoMode] = useState(false);

  const translations = {
    en: {
      badge: "Cooking for Everyone",
      heroTitle: "Accessibility Features",
      heroSubtitle: "Senet is designed for everyone. We believe cooking should be accessible to all, regardless of ability.",
      stats: [
        { label: "Inclusive Design", value: "100%", desc: "WCAG 2.1 AAA" },
        { label: "Languages", value: "12+", desc: "Arabic & English" },
        { label: "Device Support", value: "All", desc: "iOS & Android" },
        { label: "Award 2025", value: "Winner", desc: "Tech Inclusion" }
      ],
      exploreTitle: "Explore Our Features",
      designFor: "Designed For:",
      empowerTitle: "Empowering Independence",
      keyBenefits: "Key Benefits:",
      demoBtn: "Try Interactive Demo",
      demoActive: "✓ Demo Mode Active",
      standardsTitle: "Standards & Compliance",
      standards: [
        { title: "WCAG 2.1 Level AAA", desc: "Perceivable, Operable, Understandable, and Robust content." },
        { title: "Platform Native", desc: "Full Apple VoiceOver and Android TalkBack integration." }
      ],
      commitmentTitle: "Our Commitment",
      commitmentDesc: "Over 2,000 users with disabilities are now cooking independently thanks to Senet's inclusive design.",
      btnJoin: "Join Community",
      btnFeedback: "Share Feedback",
      features: {
        'voice-control': {
          title: "Voice Control & Commands",
          description: "Navigate the entire app and control AR experiences using voice commands. Perfect for hands-free cooking.",
          userGroup: "Motor impairments, busy cooks, multitaskers",
          benefits: ["Navigate steps: 'Next step'", "Set timers by voice", "Search recipes", "Adjust volume"]
        },
        'high-contrast': {
          title: "High-Contrast AR Modes",
          description: "Enhanced visual modes with high contrast colors, larger text, and bold outlines for users with low vision.",
          userGroup: "Low vision, color blindness, light sensitivity",
          benefits: ["4x larger text size", "Yellow-on-black mode", "Bold hologram outlines", "Color-blind friendly"]
        },
        'one-handed': {
          title: "One-Handed Operation",
          description: "Optimized interface that allows complete app control with just one hand and thumb-reachable buttons.",
          userGroup: "Single-hand users, temporary injuries",
          benefits: ["Compact thumb-reach UI", "Swipe gestures", "Large tap targets", "Haptic confirmation"]
        },
        'audio-descriptions': {
          title: "Audio Descriptions",
          description: "Complete audio narration of all recipe steps and AR guidance. Every visual has an audio equivalent.",
          userGroup: "Blind users, reading difficulties, elderly",
          benefits: ["Full Arabic & English narration", "Adjustable speech rate", "Natural AI voices", "Noise filtering"]
        },
        'customizable': {
          title: "Customizable Interface",
          description: "Personalize every aspect of the app interface to match your needs. Adjust colors, sizes, and layouts.",
          userGroup: "All users with specific preferences",
          benefits: ["Small to Extra Large fonts", "8 preset color themes", "Adjustable button spacing", "Animation speed controls"]
        },
        'simplified-mode': {
          title: "Simplified Mode",
          description: "A streamlined interface with fewer options and clearer instructions for those new to technology.",
          userGroup: "Seniors, cognitive impairments, first-time users",
          benefits: ["Reduced visual clutter", "Step-by-step linear flow", "Extra-large buttons", "Action confirmation"]
        }
      }
    },
    ar: {
      badge: "الطبخ للجميع",
      heroTitle: "ميزات سهولة الوصول",
      heroSubtitle: "سنيت مصمم للجميع. نؤمن بأن الطبخ يجب أن يكون متاحاً للجميع بغض النظر عن القدرات.",
      stats: [
        { label: "تصميم شامل", value: "100%", desc: "WCAG 2.1 AAA" },
        { label: "اللغات", value: "12+", desc: "العربية والإنجليزية" },
        { label: "دعم الأجهزة", value: "الكل", desc: "iOS وأندرويد" },
        { label: "جائزة 2025", value: "فائز", desc: "الدمج التقني" }
      ],
      exploreTitle: "اكتشف ميزاتنا",
      designFor: "مصمم لـ:",
      empowerTitle: "تعزيز الاستقلالية",
      keyBenefits: "الفوائد الرئيسية:",
      demoBtn: "جرب العرض التفاعلي",
      demoActive: "✓ وضع العرض نشط",
      standardsTitle: "المعايير والامتثال",
      standards: [
        { title: "WCAG 2.1 مستوى AAA", desc: "محتوى قابل للإدراك والتشغيل والفهم والقوة." },
        { title: "دعم المنصات الأصلي", desc: "تكامل كامل مع Apple VoiceOver و Android TalkBack." }
      ],
      commitmentTitle: "التزامنا",
      commitmentDesc: "أكثر من 2000 مستخدم من ذوي الإعاقة يطبخون الآن بشكل مستقل بفضل تصميم سنيت الشامل.",
      btnJoin: "انضم للمجتمع",
      btnFeedback: "شاركنا رأيك",
      features: {
        'voice-control': {
          title: "التحكم بالأوامر الصوتية",
          description: "تصفح التطبيق بالكامل وتحكم في تجارب الواقع المعزز باستخدام الأوامر الصوتية. مثالي للطبخ دون استخدام اليدين.",
          userGroup: "الإعاقات الحركية، الطهاة المشغولون",
          benefits: ["التنقل بين الخطوات صوتياً", "ضبط المؤقت بالصوت", "البحث عن الوصفات", "تعديل مستوى الصوت"]
        },
        'high-contrast': {
          title: "أوضاع التباين العالي",
          description: "أوضاع بصرية معززة بألوان عالية التباين، نصوص أكبر، وحدود بارزة للمستخدمين ضعاف البصر.",
          userGroup: "ضعاف البصر، عما الألوان، الحساسية للضوء",
          benefits: ["نصوص أكبر بـ 4 أضعاف", "وضع التباين أصفر على أسود", "حدود هولوغرام بارزة", "باليتات صديقة لعمى الألوان"]
        },
        'one-handed': {
          title: "التشغيل بيد واحدة",
          description: "واجهة محسنة تسمح بالتحكم الكامل في التطبيق بيد واحدة فقط مع سهولة الوصول لجميع الأزرار.",
          userGroup: "مستخدمو اليد الواحدة، الإصابات المؤقتة",
          benefits: ["واجهة مدمجة لمدى الإبهام", "إيماءات السحب للتنقل", "أهداف لمس كبيرة", "تأكيد عبر الاهتزاز"]
        },
        'audio-descriptions': {
          title: "الأوصاف الصوتية",
          description: "سرد صوتي كامل لجميع خطوات الوصفات والمكونات وتوجيهات الواقع المعزز.",
          userGroup: "المكفوفون، صعوبات القراءة، كبار السن",
          benefits: ["سرد كامل بالعربية والإنجليزية", "سرعة كلام قابلة للتعديل", "أصوات ذكاء اصطناعي طبيعية", "تصفية ضوضاء الخلفية"]
        },
        'customizable': {
          title: "واجهة قابلة للتخصيص",
          description: "خصص كل جانب من جوانب واجهة التطبيق لتناسب احتياجاتك. عدل الألوان والأحجام والتخطيط.",
          userGroup: "جميع المستخدمين ذوي التفضيلات الخاصة",
          benefits: ["خطوط من صغيرة إلى ضخمة", "8 خيارات ألوان جاهزة", "تعديل المسافات بين الأزرار", "التحكم في سرعة الرسوم"]
        },
        'simplified-mode': {
          title: "الوضع المبسط",
          description: "واجهة انسيابية بخيارات أقل وعناصر أكبر وتعليمات أوضح. مثالية للمبتدئين في التكنولوجيا.",
          userGroup: "كبار السن، الإعاقات الإدراكية، المبتدئون",
          benefits: ["تقليل التشتت البصري", "تدفق خطي خطوة بخطوة", "أزرار ونصوص ضخمة", "طلبات تأكيد للإجراءات"]
        }
      }
    }
  };

  const t = translations[lang];

  const accessibilityFeatures = [
    { id: 'voice-control', icon: Mic, color: "feat-orange", image: "https://images.unsplash.com/photo-1770871820934-daf713c304af?w=800&q=80", ...t.features['voice-control'] },
    { id: 'high-contrast', icon: Eye, color: "feat-green", image: "https://images.unsplash.com/photo-1771167328266-72695a6f8470?w=800&q=80", ...t.features['high-contrast'] },
    { id: 'one-handed', icon: Hand, color: "feat-purple", image: "https://images.unsplash.com/photo-1611244599603-d996203ff25b?w=800&q=80", ...t.features['one-handed'] },
    { id: 'audio-descriptions', icon: Volume2, color: "feat-blue", image: "https://images.unsplash.com/photo-1758691032009-ed34ff84d0c8?w=800&q=80", ...t.features['audio-descriptions'] },
    { id: 'customizable', icon: Palette, color: "feat-pink", image: "https://images.unsplash.com/photo-1768595701593-c84fd8143aea?w=800&q=80", ...t.features['customizable'] },
    { id: 'simplified-mode', icon: Zap, color: "feat-yellow", image: "https://images.unsplash.com/photo-1758874960868-eebf9d36d5d5?w=800&q=80", ...t.features['simplified-mode'] }
  ];

  const currentFeature = accessibilityFeatures.find(f => f.id === selectedFeature) || accessibilityFeatures[0];

  return (
    <div className="access-wrapper">
      <Nav />
      <main className="access-main">
        <section className="text-center mb-20">
          <div className="access-badge-pill">
            <Heart size={20} className="text-orange" />
            <span>{t.badge}</span>
          </div>
          <h1 className="access-title">{t.heroTitle}</h1>
          <p className="access-subtitle">{t.heroSubtitle}</p>
        </section>

        <div className="stats-grid mb-20">
          {t.stats.map((stat, i) => {
            const icons = [Users, Languages, Smartphone, Award];
            const Icon = icons[i];
            return (
              <div key={i} className="stat-card">
                <div className="stat-icon-box">
                  <Icon size={28} color="white" />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            );
          })}
        </div>

        <section className="mb-12">
          <h2 className="feature-section-title">{t.exploreTitle}</h2>
          <div className="feature-tabs">
            {accessibilityFeatures.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFeature(f.id)}
                className={`tab-btn ${selectedFeature === f.id ? 'tab-active ' + f.color : ''}`}
              >
                <f.icon size={32} />
                <span>{f.title}</span>
              </button>
            ))}
          </div>
        </section>

        <div className="glass-card-main animate-slide-up mb-20" key={currentFeature.id}>
          <div className="step-image-container">
            <img src={currentFeature.image} alt={currentFeature.title} />
            <div className="floating-user-group">
              <small>{t.designFor}</small>
              <p>{currentFeature.userGroup}</p>
            </div>
          </div>

          <div className="step-content">
            <div className={`feat-pill ${currentFeature.color}`}>
              <currentFeature.icon size={18} />
              <span>{currentFeature.title}</span>
            </div>
            <h3>{t.empowerTitle}</h3>
            <p className="feat-description">{currentFeature.description}</p>

            <div className="benefits-list">
              <h4 className="mb-4 font-bold text-xl">{t.keyBenefits}</h4>
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
              {isDemoMode ? t.demoActive : t.demoBtn}
            </button>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="section-heading">{t.standardsTitle}</h2>
          <div className="requirements-grid">
            <div className="req-card">
              <div className="req-icon-box bg-green-grad">
                <CheckCircle color="white" />
              </div>
              <div>
                <h3>{t.standards[0].title}</h3>
                <p>{t.standards[0].desc}</p>
              </div>
            </div>
            <div className="req-card">
              <div className="req-icon-box bg-orange-grad">
                <Smartphone color="white" />
              </div>
              <div>
                <h3>{t.standards[1].title}</h3>
                <p>{t.standards[1].desc}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-card access-cta">
          <Award size={64} className="mb-6" />
          <h2>{t.commitmentTitle}</h2>
          <p className="hero-description">{t.commitmentDesc}</p>
          <div className="cta-buttons">
            <Link to="/community">
              <button className="btn-white">{t.btnJoin}</button>
            </Link>
            <Link to="/contact-us">
              <button className="btn-outline">{t.btnFeedback}</button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}