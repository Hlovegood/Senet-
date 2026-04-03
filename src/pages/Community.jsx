import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ThumbsUp, MessageCircle, Camera, TrendingUp, Award, Users } from 'lucide-react';
import { useLanguage } from "../LanguageContext";

// Supabase Import
import { supabase } from '../supabase';

// Components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// Styles
import "./community-page.css";

// Assets
import imgChilli from "../assets/Ingredients/Chilli.png"; 
import imgSombrero from "../assets/Ingredients/Sombrero.png";

export function CommunityPage() {
  const { lang } = useLanguage();
  const [reviews, setReviews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const translations = {
    en: {
      badge: "Join 10,000+ Home Chefs",
      heroTitle: "Community Reviews",
      heroSubtitle: "Real stories from real kitchens. See how Senet AR is bringing Egyptian flavors to life.",
      stats: [
        { label: "Dishes Shared", val: "15k+" },
        { label: "Avg Rating", val: "4.9/5" },
        { label: "Comments", val: "8k+" },
        { label: "Success Rate", val: "94%" }
      ],
      loading: "Loading delicious stories...",
      verified: "Verified Chef",
      date: "Recently",
      like: "Like",
      helpful: "Helpful",
      ctaTitle: "Share Your Journey",
      ctaDesc: "Inspire the community with your AR cooking photos!",
      ctaBtn: "Upload Your Dish"
    },
    ar: {
      badge: "انضم إلى +10,000 طاهٍ منزلي",
      heroTitle: "آراء المجتمع",
      heroSubtitle: "قصص حقيقية من مطابخ حقيقية. تعرف على كيف يحيي سنيت النكهات المصرية.",
      stats: [
        { label: "أطباق تمت مشاركتها", val: "15 ألف+" },
        { label: "متوسط التقييم", val: "4.9/5" },
        { label: "تعليقات", val: "8 آلاف+" },
        { label: "نسبة النجاح", val: "94%" }
      ],
      loading: "جاري تحميل قصص شهية...",
      verified: "طاهٍ موثق",
      date: "مؤخراً",
      like: "أعجبني",
      helpful: "مفيد",
      ctaTitle: "شارك رحلتك",
      ctaDesc: "ألهم المجتمع بصور طبخك عبر الواقع المعزز!",
      ctaBtn: "ارفع طبقك الآن"
    }
  };

  const t = translations[lang];

  // Fetch from Supabase Table: website_mock_data
  React.useEffect(() => {
    async function fetchReviews() {
      setLoading(true);
      try {
        // Dynamically select columns based on language
        const nameCol = lang === 'ar' ? 'mock_name_ar' : 'mock_name_en';
        const testimonialCol = lang === 'ar' ? 'testimonial_ar' : 'testimonial_en';

        const { data, error } = await supabase
          .from('website_mock_data')
          .select(`id, ${nameCol}, ${testimonialCol}`);

        if (error) throw error;
        
        const formattedData = data.map(item => ({
          id: item.id,
          userName: item[nameCol],
          comment: item[testimonialCol],
          rating: 5,
          date: t.date,
          dishPhoto: "https://images.unsplash.com/photo-1568759148083-6010cbb86bb5?auto=format&fit=crop&q=80&w=800"
        }));

        setReviews(formattedData);
      } catch (err) {
        console.error("Supabase Error:", err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [lang, t.date]); // Refetch when language changes to get correct columns

  return (
    <>
      <Nav />
      <div className="community-wrapper">
        
        <motion.img src={imgChilli} className="deco-asset-community" style={{ top: '10%', left: '5%', width: '80px' }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        <motion.img src={imgSombrero} className="deco-asset-community" style={{ top: '30%', right: '5%', width: '100px' }} animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} />

        <div className="community-container">
          
          {/* Hero Section */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '30px', color: 'white', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Users size={20} /> {t.badge}
            </motion.div>
            <h1 className="Brigten" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', color: 'white', marginBottom: '20px' }}>{t.heroTitle}</h1>
            <p style={{ color: '#FFD8BB', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              {t.heroSubtitle}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            {[Camera, Star, MessageCircle, TrendingUp].map((Icon, i) => (
              <div key={i} className={`contact-card ${i % 2 === 0 ? "orange-grad" : "green-grad"}`} style={{ padding: '30px', textAlign: 'center', color: 'white' }}>
                <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center' }}><Icon /></div>
                <h3 style={{ fontSize: '2rem', fontWeight: '800' }}>{t.stats[i].val}</h3>
                <p style={{ opacity: 0.9 }}>{t.stats[i].label}</p>
              </div>
            ))}
          </div>

          {/* Reviews List */}
          <div className="reviews-feed">
            {loading ? (
              <p style={{ color: 'white', textAlign: 'center', fontSize: '1.5rem' }}>{t.loading}</p>
            ) : (
              reviews.map((review) => (
                <motion.div 
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="review-card"
                >
                  <div className="review-grid">
                    <div className="review-img-container">
                      <img src={review.dishPhoto} alt="Recipe" className="review-dish-img" />
                      <div className="verified-badge"><Award size={14} /> {t.verified}</div>
                    </div>
                    
                    <div style={{ padding: '40px', color: 'white' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <div>
                          <h2 className="Brigten" style={{ fontSize: '2rem' }}>{review.userName}</h2>
                          <div style={{ display: 'flex', gap: '5px', color: '#FFD8BB', marginTop: '5px' }}>
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD8BB" />)}
                          </div>
                        </div>
                        <p style={{ opacity: 0.6 }}>{review.date}</p>
                      </div>

                      <p style={{ fontSize: '1.1rem', lineHeight: '1.7', opacity: 0.9, marginBottom: '30px' }}>
                        "{review.comment}"
                      </p>

                      <div style={{ display: 'flex', gap: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                        <button style={{ background: 'none', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <Heart size={18} /> {t.like}
                        </button>
                        <button style={{ background: 'none', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                          <ThumbsUp size={18} /> {t.helpful}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="green-grad" 
            style={{ borderRadius: '40px', padding: '60px', textAlign: 'center', color: 'white', marginTop: '60px' }}
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
          >
            <Camera size={50} style={{ marginBottom: '20px' }} />
            <h2 className="Brigten" style={{ fontSize: '3rem', marginBottom: '15px' }}>{t.ctaTitle}</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>{t.ctaDesc}</p>
            <button className="filter-btn active" style={{ background: 'white', color: '#00804D', padding: '15px 40px', fontSize: '1.1rem' }}>
                {t.ctaBtn}
            </button>
          </motion.div>

        </div>
      </div>
      <Footer />
    </>
  );
}