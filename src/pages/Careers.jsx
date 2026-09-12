import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { useLanguage } from "../LanguageContext";

// Assets (Using your project's local paths)
import imgSombrero from "../assets/Ingredients/Sombrero.png";
import imgChilli from "../assets/Ingredients/Chilli.png";
import imgOnion from "../assets/Ingredients/Onion.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import "./Careers.css";

export function CareersPage() {
  const { lang } = useLanguage();
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const translations = {
    en: {
      heroTitle: "Join Our Culinary \n Tech Revolution",
      heroSubtitle: "Help us transform cooking with augmented reality. Build the future of food technology from Cairo 🇪🇬",
      departments: ["All", "Engineering", "Design", "Content", "Marketing"],
      applyBtn: "Apply Now",
      reqTitle: "Requirements:",
      whyJoin: "Why Join Senet?",
      ctaTitle: "Ready to Cook Up Something Amazing?",
      ctaDesc: "Don't see the perfect role? Send us your CV anyway! \n We're always looking for talented people passionate about food.",
      ctaBtnCV: "Send Your CV 📧",
      ctaBtnMore: "Learn More 🌟",
      remote: "Remote",
      fullTime: "Full-time",
      jobs: [
        {
          title: "Senior AR Engineer",
          dept: "Engineering",
          loc: "Cairo, Egypt",
          desc: "Build cutting-edge augmented reality experiences that revolutionize how people cook.",
          reqs: ["5+ years AR/VR development", "Unity or ARKit/ARCore expertise"]
        },
        {
          title: "Product Designer (UI/UX)",
          dept: "Design",
          loc: "Remote / Cairo",
          desc: "Design delightful user experiences for our recipe feed and AR cooking interface.",
          reqs: ["3+ years product design", "Strong portfolio"]
        },
        {
          title: "Culinary Content Creator",
          dept: "Content",
          loc: "Cairo, Egypt",
          desc: "Create authentic Egyptian recipes and develop AR-ready recipe content.",
          reqs: ["Professional cooking experience", "Knowledge of Egyptian cuisine"]
        }
      ],
      benefits: [
        { icon: "💰", title: "Competitive Salary", desc: "Market-leading compensation packages" },
        { icon: "🏥", title: "Health Insurance", desc: "Comprehensive health coverage" },
        { icon: "🌴", title: "Flexible Time Off", desc: "Generous vacation and personal days" },
        { icon: "🍽️", title: "Free Meals", desc: "Daily catered lunches and snacks" }
      ]
    },
    ar: {
      heroTitle: "انضم إلى ثورتنا \n في تقنيات الطهي",
      heroSubtitle: "ساعدنا في تحويل تجربة الطهي عبر الواقع المعزز. ابدأ ببناء مستقبل تكنولوجيا الغذاء من القاهرة 🇪🇬",
      departments: ["الكل", "الهندسة", "التصميم", "المحتوى", "التسويق"],
      applyBtn: "قدم الآن",
      reqTitle: "المتطلبات:",
      whyJoin: "لماذا تنضم إلى سنيت؟",
      ctaTitle: "جاهز لابتكار شيء مذهل؟",
      ctaDesc: "لا تجد الوظيفة المناسبة؟ أرسل سيرتك الذاتية على أي حال! \n نحن نبحث دائماً عن الموهوبين الشغوفين بالطعام.",
      ctaBtnCV: "أرسل سيرتك الذاتية 📧",
      ctaBtnMore: "تعرف علينا 🌟",
      remote: "عن بعد",
      fullTime: "دوام كامل",
      jobs: [
        {
          title: "مهندس واقع معزز أول",
          dept: "Engineering", // Keep keys for filter logic if needed, or map back
          deptLabel: "الهندسة",
          loc: "القاهرة، مصر",
          desc: "بناء تجارب واقع معزز متطورة تحدث ثورة في طريقة طهي الناس للطعام.",
          reqs: ["خبرة 5+ سنوات في تطوير AR/VR", "خبرة في Unity أو ARKit/ARCore"]
        },
        {
          title: "مصمم منتجات (UI/UX)",
          dept: "Design",
          deptLabel: "التصميم",
          loc: "عن بعد / القاهرة",
          desc: "تصميم تجارب مستخدم ممتعة لواجهة الطهي بالواقع المعزز وخلاصة الوصفات.",
          reqs: ["خبرة 3+ سنوات في تصميم المنتجات", "بورتفوليو قوي"]
        },
        {
          title: "صانع محتوى طهي",
          dept: "Content",
          deptLabel: "المحتوى",
          loc: "القاهرة، مصر",
          desc: "ابتكار وصفات مصرية أصيلة وتطوير محتوى وصفات جاهز للواقع المعزز.",
          reqs: ["خبرة احترافية في الطهي", "معرفة عميقة بالمطبخ المصري"]
        }
      ],
      benefits: [
        { icon: "💰", title: "رواتب تنافسية", desc: "حزم تعويضات رائدة في السوق" },
        { icon: "🏥", title: "تأمين صحي", desc: "تغطية صحية شاملة" },
        { icon: "🌴", title: "إجازات مرنة", desc: "أيام عطلات وإجازات شخصية سخية" },
        { icon: "🍽️", title: "وجبات مجانية", desc: "وجبات غداء يومية ووجبات خفيفة" }
      ]
    }
  };

  const t = translations[lang];

  // Helper to filter: English array is used as the logic keys
  const jobOpenings = t.jobs.map((job, index) => ({
    ...job,
    type: t.fullTime,
    color: index % 2 === 0 ? "orange-grad" : "green-grad",
    department: translations.en.jobs[index].dept // Internal key for filtering
  }));

  const filteredJobs = selectedDepartment === "All" || selectedDepartment === "الكل"
    ? jobOpenings
    : jobOpenings.filter(job => job.department === translations.en.departments[t.departments.indexOf(selectedDepartment)]);

  return (
    <>
      <Nav />
      <div className="careers-page-wrapper">
        <motion.img 
          src={imgChilli} className="deco-icon" style={{ top: '10%', left: '5%' }}
          animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }}
        />
        <motion.img 
          src={imgSombrero} className="deco-icon" style={{ top: '40%', right: '5%' }}
          animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5 }}
        />
        <motion.img 
          src={imgOnion} className="deco-icon" style={{ bottom: '20%', left: '10%' }}
          animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 6 }}
        />

        <div className="careers-container">
          <header className="careers-hero">
            <h1 className="Brigten" style={{ whiteSpace: 'pre-line' }}>{t.heroTitle}</h1>
            <p className="careers-subtitle">{t.heroSubtitle}</p>
          </header>

          <div className="filter-tabs">
            {t.departments.map((dept) => (
              <button
                key={dept}
                className={`filter-btn ${selectedDepartment === dept ? 'active' : ''}`}
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="jobs-list">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`job-card ${job.color}`}
                >
                  <div className="job-header">
                    <div>
                      <h3 style={{ fontSize: '2rem' }}>{job.title}</h3>
                      <div className="job-tags">
                        <span className="job-tag"><Briefcase size={14} /> {lang === 'ar' ? job.deptLabel : job.dept}</span>
                        <span className="job-tag"><MapPin size={14} /> {job.loc}</span>
                        <span className="job-tag"><Clock size={14} /> {job.type}</span>
                      </div>
                    </div>
                    <button className="btn-apply">{t.applyBtn}</button>
                  </div>
                  <p style={{ opacity: 0.9, fontSize: '1.1rem' }}>{job.desc}</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '15px' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{t.reqTitle}</p>
                    <ul style={{ listStyle: 'none' }}>
                      {job.reqs.map((req, i) => (
                        <li key={i} style={{ opacity: 0.8 }}>• {req}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <section className="benefits-section">
            <h2 className="Brigten" style={{ textAlign: 'center', fontSize: '3rem' }}>{t.whyJoin}</h2>
            <div className="benefits-grid">
              {t.benefits.map((b, i) => (
                <div key={i} className="benefit-card">
                  <span className="benefit-icon">{b.icon}</span>
                  <h3>{b.title}</h3>
                  <p style={{ opacity: 0.7 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="careers-cta green-grad">
            <h2 className="Brigten" style={{ fontSize: '2.5rem' }}>{t.ctaTitle}</h2>
            <p style={{ marginTop: '15px', fontSize: '1.1rem', whiteSpace: 'pre-line' }}>
              {t.ctaDesc}
            </p>
            <div className="btn-group">
              <button className="btn-apply" style={{ background: 'white', color: '#00804D' }}>{t.ctaBtnCV}</button>
              <Link to="/faq">
                <button className="btn-apply" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>{t.ctaBtnMore}</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}