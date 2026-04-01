import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Smartphone, Utensils } from 'lucide-react';

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
  const [formData, setFormData] = React.useState({ 
    name: '', 
    email: '', 
    msg: '' 
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Sending data to your 'Contact-Us' table
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

      alert("Message sent successfully! 🚀");
      setFormData({ name: '', email: '', msg: '' }); // Reset form
      
    } catch (error) {
      console.error('Supabase Error:', error.message);
      alert("Error: Could not send message. Please try again.");
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
              Get in Touch
            </motion.h1>
            <p style={{ color: '#FFD8BB', fontSize: '1.2rem' }}>Questions about Senet? We're here to help!</p>
          </div>

          <div className="contact-grid">
            {/* Form Card */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} className="contact-card orange-grad">
              <h2 className="Brigten" style={{ fontSize: '2.5rem', color: 'white', marginBottom: '30px' }}>Send a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  className="contact-input-field" 
                  value={formData.name}
                  required 
                  onChange={handleChange} 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  className="contact-input-field" 
                  value={formData.email}
                  required 
                  onChange={handleChange} 
                />
                <textarea 
                  name="msg" 
                  placeholder="How can we help you?" 
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
                  {isSubmitting ? "Sending..." : "Send Message"} 
                  {!isSubmitting && <Send size={20} style={{ marginLeft: '10px', display: 'inline' }} />}
                </button>
              </form>

              <div style={{ marginTop: '40px', color: 'white', display: 'flex', gap: '30px', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={18} /> hello@senet-app.com</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} /> Cairo, Egypt</div>
              </div>
            </motion.div>

            {/* Right Side: Visuals */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} className="green-grad" style={{ padding: '35px', borderRadius: '40px', color: 'white' }}>
                <h3 className="Brigten" style={{ fontSize: '2rem' }}>Senet AR 🥙</h3>
                <p>Bringing authentic Egyptian flavors to your kitchen with augmented reality.</p>
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
                <span className="Brigten" style={{ color: 'white', fontSize: '1.5rem' }}>Join the community</span>
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