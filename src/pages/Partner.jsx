import React, { useState } from 'react';
import { 
  Upload, DollarSign, Users, CheckCircle, 
  Sparkles, Globe, BarChart3, Headphones, Shield, Rocket, Heart, FileText, Zap
} from 'lucide-react';
import { useLanguage } from "../LanguageContext";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import "./creator.css";

const creators = [
  {
    name: "Chef Amira Hassan",
    nameAr: "شيف أميرة حسان",
    role: "Traditional Egyptian Cuisine",
    roleAr: "المطبخ المصري التقليدي",
    avatar: "https://images.unsplash.com/photo-1659354219212-b9ec7231ec6a?w=400&q=80",
    recipesCount: 87,
    earnings: "$12,400",
    earningsAr: "١٢,٤٠٠ دولار",
    followers: "45.2K",
    followersAr: "٤٥.٢ ألف"
  },
  {
    name: "Chef Mahmoud Saeed",
    nameAr: "شيف محمود سعيد",
    role: "Modern Fusion Chef",
    roleAr: "شيف فيوجن عصري",
    avatar: "https://images.unsplash.com/photo-1678626667639-de9c676e8222?w=400&q=80",
    recipesCount: 124,
    earnings: "$18,750",
    earningsAr: "١٨,٧٥٠ دولار",
    followers: "68.9K",
    followersAr: "٦٨.٩ ألف"
  },
  {
    name: "Chef Yasmine Khalil",
    nameAr: "شيف ياسمين خليل",
    role: "Vegan & Healthy Cooking",
    roleAr: "طبخ نباتي وصحي",
    avatar: "https://images.unsplash.com/photo-1585358682246-23acb1561f6b?q=80&w=762&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    recipesCount: 56,
    earnings: "$9,200",
    earningsAr: "٩,٢٠٠ دولار",
    followers: "32.5K",
    followersAr: "٣٢.٥ ألف"
  }
];

const benefits = [
  { icon: DollarSign, title: "Earn Revenue", titleAr: "حقق أرباحاً", description: "Get paid for every recipe view and completion. 70% revenue share.", descAr: "احصل على مقابل لكل مشاهدة وإكمال للوصفة. مشاركة أرباح بنسبة ٧٠٪.", color: "feat-green" },
  { icon: Globe, title: "Global Reach", titleAr: "وصول عالمي", description: "Share your recipes with 10,000+ active users across the Middle East.", descAr: "شارك وصفاتك مع أكثر من ١٠,٠٠٠ مستخدم نشط في الشرق الأوسط.", color: "feat-blue" },
  { icon: Sparkles, title: "AR Conversion", titleAr: "تحويل للواقع المعزز", description: "We convert your recipes into immersive AR experiences automatically.", descAr: "نقوم بتحويل وصفاتك إلى تجارب واقع معزز غامرة تلقائياً.", color: "feat-purple" },
  { icon: BarChart3, title: "Analytics", titleAr: "تحليلات دقيقة", description: "Track views, completions, ratings, and earnings in real-time.", descAr: "تتبع المشاهدات، التقييمات، والأرباح في الوقت الفعلي.", color: "feat-orange" },
  { icon: Headphones, title: "Support", titleAr: "دعم فني", description: "Get priority support from our creator success team.", descAr: "احصل على دعم ذو أولوية من فريق نجاح المبدعين لدينا.", color: "feat-pink" },
  { icon: Shield, title: "Protection", titleAr: "حماية الحقوق", description: "Your recipes are protected with copyright and attribution.", descAr: "وصفاتك محمية بموجب حقوق النشر والنسب الفكري.", color: "feat-yellow" }
];

const uploadSteps = [
  { number: 1, title: "Sign Up", titleAr: "سجل الآن", icon: Users, description: "Create your creator account and complete your profile to join the network.", descAr: "أنشئ حساب المبدع الخاص بك وأكمل ملفك الشخصي للانضمام للشبكة.", requirements: ["Portfolio", "Bio", "Socials"], reqAr: ["الملف الشخصي", "السيرة الذاتية", "حسابات التواصل"] },
  { number: 2, title: "Upload", titleAr: "ارفع وصفاتك", icon: Upload, description: "Submit your recipe with detailed instructions and high-quality photos.", descAr: "قدم وصفتك مع تعليمات مفصلة وصور عالية الجودة.", requirements: ["Recipe PDF", "Photos", "Tips"], reqAr: ["ملف الوصفة", "الصور", "نصائح إضافية"] },
  { number: 3, title: "AR AI", titleAr: "ذكاء AR", icon: Zap, description: "Our AI converts your recipe into an AR experience automatically.", descAr: "يقوم ذكاؤنا الاصطناعي بتحويل وصفتك إلى تجربة واقع معزز تلقائياً.", requirements: ["AI Processing", "Final Review"], reqAr: ["معالجة الذكاء", "المراجعة النهائية"] },
  { number: 4, title: "Earn", titleAr: "ابدأ الربح", icon: Rocket, description: "Your recipe goes live! Start earning from every view and interaction.", descAr: "وصفتك أصبحت مباشرة! ابدأ في كسب المال من كل تفاعل.", requirements: ["Live Stats", "Monthly Payouts"], reqAr: ["إحصائيات مباشرة", "دفعات شهرية"] }
];

export default function CreatorPartnerPage() {
  const { lang } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = uploadSteps.find(s => s.number === activeStep);

  const uiLabels = {
    en: {
      badge: "Creator Partnership Program",
      title: "Partner with Senet",
      subtitle: "Share your culinary expertise with thousands. Turn your recipes into immersive AR experiences and earn revenue.",
      btnJoin: "Become a Creator",
      btnDemo: "Watch Demo",
      whyJoin: "Why Join Senet?",
      howItWorks: "How It Works",
      stepOf: (cur) => `STEP ${cur} OF 4`,
      meetTop: "Meet Our Top Creators",
      ready: "Ready to Get Started?",
      readySub: "Join creators already sharing their recipes and earning revenue on Senet.",
      apply: "Apply Now",
      support: "Contact Support"
    },
    ar: {
      badge: "برنامج شراكة المبدعين",
      title: "كن شريكاً لسنيت",
      subtitle: "شارك خبرتك في الطهي مع الآلاف. حول وصفاتك إلى تجارب واقع معزز غامرة وحقق أرباحاً.",
      btnJoin: "كن مبدعاً معنا",
      btnDemo: "شاهد العرض",
      whyJoin: "لماذا تنضم إلى سنيت؟",
      howItWorks: "كيف يعمل البرنامج",
      stepOf: (cur) => `الخطوة ${cur} من ٤`,
      meetTop: "تعرف على أفضل المبدعين",
      ready: "هل أنت جاهز للبدء؟",
      readySub: "انضم إلى المبدعين الذين يشاركون وصفاتهم ويحققون أرباحاً في سنيت.",
      apply: "قدم الآن",
      support: "اتصل بالدعم"
    }
  };

  const t = uiLabels[lang];

  return (
    <div className={`creator-wrapper ${lang === 'ar' ? 'rtl-layout' : ''}`}>
      <Nav />
      <main className="creator-main" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
        
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="creator-badge-pill">
            <Sparkles size={20} />
            <span>{t.badge}</span>
          </div>
          <h1 className="creator-title">{t.title}</h1>
          <p className="creator-subtitle">{t.subtitle}</p>
          <div className="hero-btns" style={{display: 'flex', gap: '15px', justifyContent: 'center'}}>
            <button className="btn-primary-lg">{t.btnJoin}</button>
            <button className="btn-outline-lg">{t.btnDemo}</button>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-20">
          <h2 className="section-title">{t.whyJoin}</h2>
          <div className="feature-grid-3">
            {benefits.map((benefit, i) => (
              <div key={i} className="benefit-square-card">
                <div className={`benefit-icon-box ${benefit.color}`}>
                  <benefit.icon size={32} />
                </div>
                <h3>{lang === 'ar' ? benefit.titleAr : benefit.title}</h3>
                <p>{lang === 'ar' ? benefit.descAr : benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Container */}
        <section className="stepper-section">
          <h2 className="section-title">{t.howItWorks}</h2>
          <div className="stepper-nav" style={{flexDirection: lang === 'ar' ? 'row-reverse' : 'row'}}>
            {uploadSteps.map((step) => (
              <button 
                key={step.number}
                onClick={() => setActiveStep(step.number)}
                className={`step-btn ${activeStep === step.number ? 'active' : ''}`}
              >
                {lang === 'ar' ? step.number.toLocaleString('ar-EG') : step.number}
              </button>
            ))}
          </div>

          <div className="glass-card-main animate-fade-in text-center">
            <div className="step-icon-large" style={{margin: '0 auto 20px'}}>
              {currentStep && <currentStep.icon size={40} />}
            </div>
            <small style={{color: '#F0660C', fontWeight: 'bold', letterSpacing: '2px'}}>
                {t.stepOf(lang === 'ar' ? activeStep.toLocaleString('ar-EG') : activeStep)}
            </small>
            <h3 style={{fontSize: '2rem', marginTop: '10px'}}>
              {lang === 'ar' ? currentStep?.titleAr : currentStep?.title}
            </h3>
            <p className="step-desc-large">
              {lang === 'ar' ? currentStep?.descAr : currentStep?.description}
            </p>
            <div className="req-pills" style={{justifyContent: 'center'}}>
              {(lang === 'ar' ? currentStep?.reqAr : currentStep?.requirements).map((r, i) => (
                <span key={i} className="req-pill"><CheckCircle size={14} /> {r}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Creators Spotlight */}
        <section className="mb-20">
          <h2 className="section-title">{t.meetTop}</h2>
          <div className="creator-grid">
            {creators.map((c, i) => (
              <div key={i} className="chef-card">
                <img src={c.avatar} alt={c.name} className="chef-img" />
                <div className="chef-info">
                  <h4>{lang === 'ar' ? c.nameAr : c.name}</h4>
                  <p>{lang === 'ar' ? c.roleAr : c.role}</p>
                  <div className="chef-stats" style={{flexDirection: lang === 'ar' ? 'row-reverse' : 'row'}}>
                    <span><FileText size={14}/> {lang === 'ar' ? c.recipesCount.toLocaleString('ar-EG') : c.recipesCount}</span>
                    <span><Heart size={14}/> {lang === 'ar' ? c.followersAr : c.followers}</span>
                    <span style={{color: '#22c55e'}}>{lang === 'ar' ? c.earningsAr : c.earnings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="creator-cta text-center">
          <Rocket size={60} style={{margin: '0 auto 20px'}} />
          <h2>{t.ready}</h2>
          <p style={{marginBottom: '30px'}}>{t.readySub}</p>
          <div className="cta-buttons" style={{display: 'flex', gap: '15px', justifyContent: 'center'}}>
            <Link to='/careers'><button className="btn-white">{t.apply}</button></Link>
            <Link to='/contact-us'><button className="btn-outline">{t.support}</button></Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}