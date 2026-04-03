import React, { useState } from 'react';
import { 
  Camera, Sun, Smartphone, Grid, CheckCircle, 
  MapPin, Monitor, Wifi, Thermometer, CheckSquare 
} from 'lucide-react';

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useLanguage } from "../LanguageContext";
import "./ar-calibration.css"; 

const ARCalibrationPage = () => {
  const { lang } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const translations = {
    en: {
      title: "Calibration Guide",
      subtitle: "Set up your kitchen for the best AR cooking experience. Follow these simple steps to calibrate your workspace.",
      progressLabel: "Setup Progress",
      needTitle: "What You'll Need",
      stepsTitle: "Setup Steps",
      stepOf: "Step {n} of 6",
      btnComplete: "Complete & Next Step",
      btnDone: "Step Completed",
      ctaTitle: "Ready to Cook?",
      ctaDesc: "Once calibration is complete, your workspace is ready for high-precision AR recipe guidance.",
      btnStart: "Start AR Cooking",
      btnReset: "Reset Guide",
      requirements: [
        { title: "Compatible Device", description: "iPhone 12+ or Android ARCore", status: 'required' },
        { title: "Stable Internet", description: "Wi-Fi or 4G for loading", status: 'required' },
        { title: "Good Lighting", description: "400-800 lux brightness", status: 'required' },
        { title: "Phone Stand", description: "Hands-free holder", status: 'recommended' },
        { title: "Clear Space", description: "Min 60x60cm area", status: 'required' },
        { title: "Environment", description: "Avoid extreme heat", status: 'recommended' }
      ],
      steps: [
        { title: "Prepare Your Workspace", description: "Clear your kitchen counter and create a clean, uncluttered workspace.", tips: ["Clear counter completely", "Wipe surface clean and dry", "Remove reflective objects", "Ensure stable, flat surface"] },
        { title: "Optimize Lighting", description: "Ensure your workspace has bright, even lighting. Natural daylight is best.", tips: ["Brightness: 400-800 lux recommended", "Use overhead + ambient lighting", "Avoid direct sunlight on surface", "No flickering lights"] },
        { title: "Position Phone Stand", description: "Place your phone or tablet stand 40-60cm away from your work surface.", tips: ["Distance: 40-60cm from surface", "Angle: 45-60 degrees downward", "Stable base - no wobbling", "Camera centered on workspace"] },
        { title: "Place Reference Object", description: "Position your cutting board or a standard A4 paper on the surface.", tips: ["Use cutting board or A4 paper", "Place in center of workspace", "Keep flat and stable", "Avoid patterned surfaces"] },
        { title: "Scan Your Surface", description: "Open the app and move your phone slowly in a circular pattern.", tips: ["Slow, steady movements", "Cover entire workspace area", "Keep camera focused", "Wait for green confirmation"] },
        { title: "Verify Calibration", description: "The app will display a grid overlay. Check that the 3D measurements align.", tips: ["Grid should be level", "Measurements accurate ±2mm", "No floating holograms", "Test with hand movement"] }
      ]
    },
    ar: {
      title: "دليل المعايرة",
      subtitle: "قم بإعداد مطبخك للحصول على أفضل تجربة طهي بالواقع المعزز. اتبع هذه الخطوات البسيطة لمعايرة مساحة عملك.",
      progressLabel: "تقدم الإعداد",
      needTitle: "ما سوف تحتاجه",
      stepsTitle: "خطوات الإعداد",
      stepOf: "الخطوة {n} من 6",
      btnComplete: "أكمل وانتقل للخطوة التالية",
      btnDone: "تمت الخطوة",
      ctaTitle: "جاهز للطهي؟",
      ctaDesc: "بمجرد اكتمال المعايرة، ستكون مساحة عملك جاهزة لإرشادات الوصفات عالية الدقة بالواقع المعزز.",
      btnStart: "ابدأ الطهي بالواقع المعزز",
      btnReset: "إعادة ضبط الدليل",
      requirements: [
        { title: "جهاز متوافق", description: "أيفون 12+ أو أندرويد يدعم ARCore", status: 'required' },
        { title: "إنترنت مستقر", description: "Wi-Fi أو 4G للتحميل", status: 'required' },
        { title: "إضاءة جيدة", description: "سطوع 400-800 لوكس", status: 'required' },
        { title: "حامل هاتف", description: "حامل لاستخدام يديك بحرية", status: 'recommended' },
        { title: "مساحة خالية", description: "مساحة 60x60 سم كحد أدنى", status: 'required' },
        { title: "البيئة المحيطة", description: "تجنب الحرارة الشديدة", status: 'recommended' }
      ],
      steps: [
        { title: "جهز مساحة عملك", description: "قم بتنظيف سطح المطبخ وإنشاء مساحة عمل مرتبة وخالية من الفوضى.", tips: ["تنظيف السطح تماماً", "مسح السطح وتجفيفه", "إزالة الأشياء العاكسة", "التأكد من استواء السطح"] },
        { title: "تحسين الإضاءة", description: "تأكد من أن مساحة عملك بها إضاءة ساطعة ومتساوية. ضوء النهار هو الأفضل.", tips: ["السطوع: ينصح بـ 400-800 لوكس", "استخدم إضاءة علوية ومحيطة", "تجنب ضوء الشمس المباشر", "تجنب الأضواء الوامضة"] },
        { title: "وضعية حامل الهاتف", description: "ضع حامل الهاتف أو الجهاز اللوحي على بعد 40-60 سم من سطح العمل.", tips: ["المسافة: 40-60 سم من السطح", "الزاوية: 45-60 درجة للأسفل", "قاعدة مستقرة - لا اهتزاز", "تمركز الكاميرا على المساحة"] },
        { title: "وضع جسم مرجعي", description: "ضع لوح التقطيع أو ورقة A4 قياسية على السطح لمساعدة النظام على فهم القياس.", tips: ["استخدم لوح تقطيع أو ورقة A4", "ضعها في منتصف مساحة العمل", "حافظ عليها مسطحة ومستقرة", "تجنب الأسطح المنقوشة"] },
        { title: "مسح السطح", description: "افتح التطبيق وحرك هاتفك ببطء في نمط دائري لرسم خريطة للمساحة.", tips: ["حركات بطيئة ومستقرة", "تغطية كامل مساحة العمل", "حافظ على تركيز الكاميرا", "انتظر التأكيد الأخضر"] },
        { title: "التحقق من المعايرة", description: "سيعرض التطبيق شبكة افتراضية. تحقق من محاذاة القياسات مع حواف اللوح.", tips: ["يجب أن تكون الشبكة مستوية", "دقة القياس ±2 مم", "لا وجود لهولوغرام عائم", "اختبار مع حركة اليد"] }
      ]
    }
  };

  const t = translations[lang];

  const calibrationSteps = [
    { id: 1, icon: Grid, image: "https://images.unsplash.com/photo-1758570161624-91976093c2b2?w=800", ...t.steps[0] },
    { id: 2, icon: Sun, image: "https://images.unsplash.com/photo-1758240689297-d8613ca753f3?w=800", ...t.steps[1] },
    { id: 3, icon: Smartphone, image: "https://images.unsplash.com/photo-1584658645175-90788b3347b3?w=800", ...t.steps[2] },
    { id: 4, icon: MapPin, image: "https://images.unsplash.com/photo-1666013942797-9daa4b8b3b4f?w=800", ...t.steps[3] },
    { id: 5, icon: Camera, image: "https://images.unsplash.com/photo-1658036680473-32c68142b2a7?w=800", ...t.steps[4] },
    { id: 6, icon: CheckCircle, image: "https://images.unsplash.com/photo-1758611974343-d51476aad72e?w=800", ...t.steps[5] }
  ];

  const requirements = [
    { icon: Smartphone, ...t.requirements[0] },
    { icon: Wifi, ...t.requirements[1] },
    { icon: Sun, ...t.requirements[2] },
    { icon: Monitor, ...t.requirements[3] },
    { icon: Grid, ...t.requirements[4] },
    { icon: Thermometer, ...t.requirements[5] }
  ];

  const activeStep = calibrationSteps.find(s => s.id === currentStep);

  const completeStep = (stepId) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
    if (stepId < calibrationSteps.length) {
      setCurrentStep(stepId + 1);
    }
  };

  const progressPercentage = (completedSteps.length / calibrationSteps.length) * 100;

  return (
    <div className="calibration-wrapper">
      <Nav />

      <main>
        <div className="text-center mb-20">
          <h1>{t.title}</h1>
          <p className="hero-description">{t.subtitle}</p>

          <div className="progress-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px' }}>
              <span style={{ fontWeight: '600' }}>{t.progressLabel}</span>
              <span style={{ fontWeight: '700', color: '#F0660C' }}>{Math.round(progressPercentage)}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progressPercentage}%` }} />
            </div>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-center mb-12" style={{ fontSize: '2.5rem' }}>{t.needTitle}</h2>
          <div className="requirements-grid">
            {requirements.map((req, index) => (
              <div key={index} className="req-card">
                <div className={`req-icon-box ${req.status === 'required' ? 'bg-orange-grad' : 'bg-green-grad'}`}>
                  <req.icon size={24} color="white" />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{req.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>{req.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-center mb-12" style={{ fontSize: '2.5rem' }}>{t.stepsTitle}</h2>
          
          <div className="step-nav-container">
            {calibrationSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`step-bubble ${
                  completedSteps.includes(step.id) ? 'step-done' : 
                  currentStep === step.id ? 'step-active' : 'step-inactive'
                }`}
              >
                {completedSteps.includes(step.id) ? <CheckCircle size={24} /> : step.id}
              </button>
            ))}
          </div>

          {activeStep && (
            <div className="glass-card-main animate-slide-up" key={activeStep.id}>
              <div className="step-image-container">
                <img src={activeStep.image} alt={activeStep.title} />
                <div className="step-count-badge">
                  {t.stepOf.replace("{n}", activeStep.id)}
                </div>
              </div>
              <div className="step-content">
                <h3>{activeStep.title}</h3>
                <p>{activeStep.description}</p>
                
                <div style={{ marginBottom: '2rem' }}>
                  {activeStep.tips.map((tip, i) => (
                    <div key={i} className="tip-item">
                      <div className="tip-dot" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => completeStep(activeStep.id)}
                  className="btn-primary"
                >
                  {completedSteps.includes(activeStep.id) ? t.btnDone : t.btnComplete}
                </button>
              </div>
            </div>
          )}
        </section>

        <section className="cta-card">
          <CheckSquare size={64} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
          <h2>{t.ctaTitle}</h2>
          <p className="hero-description" style={{ marginBottom: '2rem' }}>{t.ctaDesc}</p>
          <div className="cta-buttons">
            <button className="btn-white">{t.btnStart}</button>
            <button 
              onClick={() => {setCompletedSteps([]); setCurrentStep(1);}}
              className="btn-outline"
            >
              {t.btnReset}
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ARCalibrationPage;