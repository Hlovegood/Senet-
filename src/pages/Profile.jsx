import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, Heart, ChefHat, Trophy, TrendingUp, Target, 
  Calendar, Clock, Flame, Award, Settings, Edit, 
  Bookmark, CheckCircle, Mail, MapPin, ChevronRight
} from "lucide-react";

import { useLanguage } from "../LanguageContext";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./profile-page.css";

const dietaryTags = [
  { id: 'vegan', label: 'Vegan', labelAr: 'نباتي صرف', icon: '🌱' },
  { id: 'vegetarian', label: 'Vegetarian', labelAr: 'نباتي', icon: '🥗' },
  { id: 'gluten-free', label: 'Gluten-Free', labelAr: 'خالي من الجلوتين', icon: '🌾' },
  { id: 'high-protein', label: 'High Protein', labelAr: 'بروتين عالي', icon: '💪' },
  { id: 'traditional', label: 'Traditional', labelAr: 'شعبي أصيل', icon: '🇪🇬' },
];

const savedRecipes = [
  { id: 1, name: "Stuffed Grape Leaves", nameAr: "ورق عنب محشي", size: "card-tall", timesCooked: 3, image: "https://images.unsplash.com/photo-1621953723422-6023013f659d?w=500" },
  { id: 2, name: "Eggplant Moussaka", nameAr: "مسقعة باذنجان", size: "card-medium", timesCooked: 2, image: "https://images.unsplash.com/photo-1707339254292-69767a88096d?w=500" },
  { id: 3, name: "Lentil Soup", nameAr: "شوربة عدس", size: "card-short", timesCooked: 5, image: "https://images.unsplash.com/photo-1547516453-01c9910aafbf?w=500" },
  { id: 4, name: "Kofta Kebabs", nameAr: "كفتة مشوية", size: "card-medium", timesCooked: 0, image: "https://images.unsplash.com/photo-1660262849063-63c52a1fa2e5?w=500" },
];

export default function ProfilePage() {
  const { lang } = useLanguage();
  const [selectedTags, setSelectedTags] = useState(['vegan', 'traditional']);
  
  const toggleTag = (id) => {
    setSelectedTags(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]);
  };

  const uiLabels = {
    en: {
      location: "Cairo, Egypt",
      streak: "15 Day",
      streakSub: "Streak",
      recipes: "23",
      recipesSub: "Recipes",
      achievements: "Achievements",
      settings: "Account Settings",
      savedTitle: "Saved Recipes",
      viewAll: "View All",
      cooked: "Cooked",
      new: "New",
      cookBtn: "COOK AGAIN",
      recTitle: "Recommended for you",
      recSub: "Based on your preferences",
      explore: "Explore Now"
    },
    ar: {
      location: "القاهرة، مصر",
      streak: "١٥ يوم",
      streakSub: "تتابع",
      recipes: "٢٣",
      recipesSub: "وصفة",
      achievements: "الإنجازات",
      settings: "إعدادات الحساب",
      savedTitle: "وصفات محفوظة",
      viewAll: "عرض الكل",
      cooked: "تم طهيها",
      new: "جديد",
      cookBtn: "اطبخها مجدداً",
      recTitle: "مقترح لك",
      recSub: "بناءً على تفضيلاتك لـ",
      explore: "استكشف الآن"
    }
  };

  const t = uiLabels[lang];

  return (
    <>
      <Nav />
      <div className={`discovery-wrapper ${lang === 'ar' ? 'rtl-layout' : ''}`}>
        <div className="discovery-layout" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
          
          {/* LEFT SIDEBAR: Stats & Achievements */}
          <aside className="filter-sidebar">
            <div className="profile-mini-card">
              <div className="avatar-wrapper">
                <img src="https://images.unsplash.com/photo-1758874960868-eebf9d36d5d5?w=200" alt="Profile" />
                <div className="level-badge">12</div>
              </div>
              <h3 style={{marginTop: '10px'}}>نور أحمد</h3>
              <p><MapPin size={12} /> {t.location}</p>
            </div>

            <div className="sidebar-stats">
              <div className="stat-item">
                <Flame size={18} color="#F0660C" />
                <div><span>{t.streak}</span><p>{t.streakSub}</p></div>
              </div>
              <div className="stat-item">
                <ChefHat size={18} color="#F0660C" />
                <div><span>{t.recipes}</span><p>{t.recipesSub}</p></div>
              </div>
            </div>

            <div className="achievement-box">
              <h4>{t.achievements}</h4>
              <div className="badge-row">
                <Trophy size={20} className="unlocked" />
                <Award size={20} className="unlocked" />
                <Star size={20} />
              </div>
            </div>

            <button className="reset-btn" style={{marginTop: '20px', width: '100%', gap: '10px'}}>
              <Settings size={16} /> {t.settings}
            </button>
          </aside>

          {/* MAIN CONTENT */}
          <main className="main-content">
            
            {/* QUICK TAGS: Dietary Preferences */}
            <div className="category-bar">
              {dietaryTags.map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => toggleTag(tag.id)}
                  className={`filter-btn ${selectedTags.includes(tag.id) ? "active" : ""}`}
                >
                  <span>{tag.icon} {lang === 'ar' ? tag.labelAr : tag.label}</span>
                </button>
              ))}
              <button className="filter-btn add-tag">
                <Edit size={14} />
              </button>
            </div>

            <div className="section-header">
              <h2 className="Brigten">{t.savedTitle}</h2>
              <button className="view-all" style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                {t.viewAll} <ChevronRight size={16} style={{transform: lang === 'ar' ? 'rotate(180deg)' : 'none'}}/>
              </button>
            </div>

            {/* BENTO GRID: Saved Recipes */}
            <motion.div layout className="recipes-grid">
              <AnimatePresence mode="popLayout">
                {savedRecipes.map((recipe) => (
                  <motion.div
                    layout
                    key={recipe.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`recipe-card ${recipe.size}`}
                  >
                    <div className="image-container">
                      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                      <div className={`absolute top-3 ${lang === 'ar' ? 'left-3' : 'right-3'}`}>
                        {recipe.timesCooked > 0 ? (
                          <span className="tag-badge green-badge">
                            {t.cooked} {lang === 'ar' ? `x${recipe.timesCooked}` : `${recipe.timesCooked}x`}
                          </span>
                        ) : (
                          <span className="tag-badge orange-badge">{t.new}</span>
                        )}
                      </div>
                    </div>
                    <div className="recipe-content">
                      <div className="flex justify-between items-center">
                        <h3 className="recipe-title-text">{lang === 'ar' ? recipe.nameAr : recipe.name}</h3>
                        <Heart size={16} className="heart-filled" />
                      </div>
                      <button className="orange-grad profile-card-btn" style={{width: '100%'}}>{t.cookBtn}</button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Personalized Banner */}
            <div className="recommendation-banner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className="banner-info" style={{ display: 'flex', gap: '15px' }}>
                    <TrendingUp color="#F0660C" />
                    <div>
                        <h4 style={{fontSize: '1.2rem'}}>{t.recTitle}</h4>
                        <p>
                          {t.recSub} <strong>
                            {selectedTags.map(id => {
                              const tag = dietaryTags.find(t => t.id === id);
                              return lang === 'ar' ? tag.labelAr : tag.label;
                            }).join('، ')}
                          </strong>
                        </p>
                    </div>
                </div>
                <button className="banner-btn">{t.explore}</button>
            </div>

          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}