import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Smartphone, Utensils } from 'lucide-react';
import { useLanguage } from "../LanguageContext";

// Import your existing supabase client
import { supabase } from '../supabase'; 

// Components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// Styles
import "./contact-us.css";

// Assets
import imgChilli from "../assets/Ingredients/Chilli.png"; 
import imgSombrero from "../assets/Ingredients/Sombrero.png";

export function ContactPage() {
  const { lang } = useLanguage();
  const [formData, setFormData] = React.useState({ 
    name: '', 
    email: '', 
    msg: '' 
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const translations = {
    en: {
      heroTitle: "Get in Touch",
      heroSubtitle: "Questions about Senet? We're here to help!",
      formTitle: "Send a Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Email Address",
      msgPlaceholder: "How can we help you?",
      btnSend: "Send Message",
      btnSending: "Sending...",
      location: "Cairo, Egypt",
      arTitle: "Senet AR 🥙",
      arDesc: "Bringing authentic Egyptian flavors to your kitchen with augmented reality.",
      communityTitle: "Join the community",
      successMsg: "Message sent successfully! 🚀",
      errorMsg: "Error: Could not send message. Please try again."
    },
    ar: {
      heroTitle: "تواصل معنا",
      heroSubtitle: "لديك أسئلة عن سنيت؟ نحن هنا للمساعدة!",
      formTitle: "أرسل رسالة",
      namePlaceholder: "الاسم بالكامل",
      emailPlaceholder: "البريد الإلكتروني",
      msgPlaceholder: "كيف يمكننا مساعدتك؟",
      btnSend: "إرسال الرسالة",
      btnSending: "جاري الإرسال...",
      location: "القاهرة، مصر",
      arTitle: "سنيت واقع معزز 🥙",
      arDesc: "نقل النكهات المصرية الأصيلة إلى مطبخك باستخدام تقنية الواقع المعزز.",
      communityTitle: "انضم إلى المجتمع",
      successMsg: "تم إرسال الرسالة بنجاح! 🚀",
      errorMsg: "خطأ: لم يتم إرسال الرسالة. يرجى المحاولة مرة أخرى."
    }
  };

  const t = translations[lang];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('Contact-Us')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            msg: formData.msg 
          }
        ]);

      if (error) throw error;

      alert(t.successMsg);
      setFormData({ name: '', email: '', msg: '' });
      
    } catch (error) {
      console.error('Supabase Error:', error.message);
      alert(t.errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Nav />
      <div className="contact-wrapper">
        
        {/* Decorative Assets */}
        <motion.img src={imgChilli} className="deco-asset-contact" style={{ top: '15%', left: '3%', width: '85px' }} animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
        <motion.img src={imgSombrero} className="deco-asset-contact" style={{ top: '45%', right: '4%', width: '110px' }} animate={{ y: [0, -25, 0] }} transition={{ duration: 6, repeat: Infinity }} />

        <div className="contact-container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="Brigten" style={{ fontSize: 'clamp(3.5rem, 10vw, 6.5rem)', color: 'white' }}>
              {t.heroTitle}
            </motion.h1>
            <p style={{ color: '#FFD8BB', fontSize: '1.2rem' }}>{t.heroSubtitle}</p>
          </div>

          <div className="contact-grid">
            {/* Form Card */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} className="contact-card orange-grad">
              <h2 className="Brigten" style={{ fontSize: '2.5rem', color: 'white', marginBottom: '30px' }}>{t.formTitle}</h2>
              
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder={t.namePlaceholder} 
                  className="contact-input-field" 
                  value={formData.name}
                  required 
                  onChange={handleChange} 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder={t.emailPlaceholder} 
                  className="contact-input-field" 
                  value={formData.email}
                  required 
                  onChange={handleChange} 
                />
                <textarea 
                  name="msg" 
                  placeholder={t.msgPlaceholder} 
                  className="contact-input-field" 
                  style={{ height: '160px', resize: 'none' }} 
                  value={formData.msg}
                  required 
                  onChange={handleChange}
                ></textarea>
                
                <button 
                  type="submit" 
                  className="filter-btn active" 
                  disabled={isSubmitting}
                  style={{ 
                    background: 'white', 
                    color: '#F0660C', 
                    width: '100%', 
                    padding: '18px',
                    opacity: isSubmitting ? 0.6 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? t.btnSending : t.btnSend} 
                  {!isSubmitting && <Send size={20} style={{ marginLeft: '10px', marginRight: lang === 'ar' ? '10px' : '0', display: 'inline' }} />}
                </button>
              </form>

              <div style={{ marginTop: '40px', color: 'white', display: 'flex', gap: '30px', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={18} /> hello@senet-app.com</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} /> {t.location}</div>
              </div>
            </motion.div>

            {/* Right Side: Visuals */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} className="green-grad" style={{ padding: '35px', borderRadius: '40px', color: 'white' }}>
                <h3 className="Brigten" style={{ fontSize: '2rem' }}>{t.arTitle}</h3>
                <p>{t.arDesc}</p>
              </motion.div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div className="contact-img-wrapper" style={{ height: '180px' }}>
                  <img src="https://images.unsplash.com/photo-1628606338096-686cf7dba76a?auto=format&fit=crop&q=80&w=500" alt="Koshari" className="contact-food-img" />
                </div>
                <div className="contact-img-wrapper" style={{ height: '180px' }}>
                  <img src="https://images.unsplash.com/photo-1593001865061-075fad340aa3?auto=format&fit=crop&q=80&w=500" alt="Falafel" className="contact-food-img" />
                </div>
              </div>

              <div className="contact-card orange-grad" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px' }}>
                <span className="Brigten" style={{ color: 'white', fontSize: '1.5rem' }}>{t.communityTitle}</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="filter-btn active" style={{ background: 'white', color: '#F0660C' }}><Smartphone size={20} /></button>
                    <button className="filter-btn active" style={{ background: '#00804D' }}><Utensils size={20} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}