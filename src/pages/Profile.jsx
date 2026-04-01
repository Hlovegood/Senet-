import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, Heart, ChefHat, Trophy, TrendingUp, Target, 
  Calendar, Clock, Flame, Award, Settings, Edit, 
  Bookmark, CheckCircle, Mail, MapPin, ChevronRight
} from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./profile-page.css";

const dietaryTags = [
  { id: 'vegan', label: 'Vegan', icon: '🌱' },
  { id: 'vegetarian', label: 'Vegetarian', icon: '🥗' },
  { id: 'gluten-free', label: 'Gluten-Free', icon: '🌾' },
  { id: 'high-protein', label: 'High Protein', icon: '💪' },
  { id: 'traditional', label: 'Traditional', icon: '🇪🇬' },
];

const savedRecipes = [
  { id: 1, name: "Stuffed Grape Leaves", size: "card-tall", timesCooked: 3, image: "https://images.unsplash.com/photo-1621953723422-6023013f659d?w=500" },
  { id: 2, name: "Eggplant Moussaka", size: "card-medium", timesCooked: 2, image: "https://images.unsplash.com/photo-1707339254292-69767a88096d?w=500" },
  { id: 3, name: "Lentil Soup", size: "card-short", timesCooked: 5, image: "https://images.unsplash.com/photo-1547516453-01c9910aafbf?w=500" },
  { id: 4, name: "Kofta Kebabs", size: "card-medium", timesCooked: 0, image: "https://images.unsplash.com/photo-1660262849063-63c52a1fa2e5?w=500" },
];

export default function ProfilePage() {
  const [selectedTags, setSelectedTags] = useState(['vegan', 'traditional']);
  
  const toggleTag = (id) => {
    setSelectedTags(prev => prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]);
  };

  return (
    <>
      <Nav />
      <div className="discovery-wrapper">
        <div className="discovery-layout">
          
          {/* LEFT SIDEBAR: Stats & Achievements */}
          <aside className="filter-sidebar">
            <div className="profile-mini-card">
              <div className="avatar-wrapper">
                <img src="https://images.unsplash.com/photo-1758874960868-eebf9d36d5d5?w=200" alt="Profile" />
                <div className="level-badge">12</div>
              </div>
              <h3>Nour Ahmed</h3>
              <p><MapPin size={12} /> Cairo, Egypt</p>
            </div>

            <div className="sidebar-stats">
              <div className="stat-item">
                <Flame size={18} color="#F0660C" />
                <div><span>15 Day</span><p>Streak</p></div>
              </div>
              <div className="stat-item">
                <ChefHat size={18} color="#F0660C" />
                <div><span>23</span><p>Recipes</p></div>
              </div>
            </div>

            <div className="achievement-box">
              <h4>Achievements</h4>
              <div className="badge-row">
                <Trophy size={20} className="unlocked" />
                <Award size={20} className="unlocked" />
                <Star size={20} />
              </div>
            </div>

            <button className="reset-btn" style={{marginTop: '20px'}}>
              <Settings size={16} /> Account Settings
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
                  <span>{tag.icon} {tag.label}</span>
                </button>
              ))}
              <button className="filter-btn add-tag">
                <Edit size={14} />
              </button>
            </div>

            <div className="section-header">
              <h2 className="Brigten">Saved Recipes</h2>
              <button className="view-all">View All <ChevronRight size={16}/></button>
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
                      <div className="absolute top-3 right-3">
                        {recipe.timesCooked > 0 ? (
                          <span className="tag-badge green-badge">Cooked {recipe.timesCooked}x</span>
                        ) : (
                          <span className="tag-badge orange-badge">New</span>
                        )}
                      </div>
                    </div>
                    <div className="recipe-content">
                      <div className="flex justify-between items-center">
                        <h3 className="recipe-title-text">{recipe.name}</h3>
                        <Heart size={16} className="heart-filled" />
                      </div>
                      <button className="orange-grad profile-card-btn">COOK AGAIN</button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Personalized Banner */}
            <div className="recommendation-banner">
                <div className="banner-info">
                    <TrendingUp color="#F0660C" />
                    <div>
                        <h4>Recommended for you</h4>
                        <p>Based on your <strong>{selectedTags.join(', ')}</strong> preferences</p>
                    </div>
                </div>
                <button className="banner-btn">Explore Now</button>
            </div>

          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}