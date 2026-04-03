import React, { useState } from 'react';
import { 
  ShoppingCart, CheckCircle, AlertCircle, Plus, 
  Scan, Search, Package, RefreshCw, ArrowRight, TrendingUp,
  Clock, DollarSign, Lightbulb, X, Edit, ChefHat, FileText, Users
} from 'lucide-react';
import { useLanguage } from "../LanguageContext";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./Pantry.css";

const selectedRecipe = {
  name: "Classic Egyptian Koshari",
  nameAr: "كشري مصري أصيل",
  servings: 4,
  prepTime: "45 min",
  prepTimeAr: "٤٥ دقيقة",
  image: "https://images.unsplash.com/photo-1650223141282-220ad52c4e7a?w=800&q=80"
};

const recipeIngredients = [
  { id: '1', name: 'Rice', nameAr: 'أرز', needed: 300, unit: 'g', unitAr: 'جم', available: 800, status: 'enough', category: 'Grains', categoryAr: 'حبوب' },
  { id: '2', name: 'Lentils', nameAr: 'عدس بجبه', needed: 200, unit: 'g', unitAr: 'جم', available: 0, status: 'missing', category: 'Legumes', categoryAr: 'بقوليات' },
  { id: '3', name: 'Macaroni', nameAr: 'مكرونة', needed: 200, unit: 'g', unitAr: 'جم', available: 0, status: 'missing', category: 'Pasta', categoryAr: 'معجنات', substitute: 'Can substitute with penne', substituteAr: 'يمكن استبدالها ببنّه أو أي مكرونة قصيرة' },
  { id: '4', name: 'Chickpeas', nameAr: 'حمص', needed: 150, unit: 'g', unitAr: 'جم', available: 80, status: 'partial', category: 'Legumes', categoryAr: 'بقوليات' },
];

export default function SmartKitchenPage() {
  const { lang } = useLanguage();
  const [ingredients] = useState(recipeIngredients);

  const uiLabels = {
    en: {
      badge: "Smart Kitchen Assistant",
      title: "Ingredient & Pantry Manager",
      subtitle: "Never wonder what you need to buy. Check your inventory, find smart substitutes, and generate your shopping list in seconds.",
      pantryReady: "Pantry Readiness",
      ready: "Ready",
      toBuy: "To Buy",
      servings: "Servings",
      scan: "Scan Barcode",
      scanSub: "Add items to your pantry instantly by scanning labels.",
      search: "Search Pantry",
      searchSub: "Quickly locate ingredients across your kitchen zones.",
      manual: "Add Manually",
      manualSub: "Input custom items and set their specific quantities.",
      reqIng: "Required Ingredients",
      need: "NEED",
      have: "HAVE",
      enough: "✓ Enough",
      missing: "✗ Missing",
      partial: "⚠ Need",
      tip: "Tip:",
      genList: "Generate Shopping List",
      genSub: (count) => `You have ${count} items to buy for this recipe.`,
      order: "Order Online",
      send: "Send to Phone"
    },
    ar: {
      badge: "مساعد المطبخ الذكي",
      title: "مدير المكونات والمخزن",
      subtitle: "لا تتساءل أبداً عما تحتاجه. تحقق من مخزونك، ابحث عن بدائل ذكية، وأنشئ قائمة التسوق في ثوانٍ.",
      pantryReady: "جاهزية المطبخ",
      ready: "جاهز",
      toBuy: "للشراء",
      servings: "أفراد",
      scan: "مسح الباركود",
      scanSub: "أضف الأصناف لمخزنك فوراً عن طريق مسح الملصقات.",
      search: "بحث في المخزن",
      searchSub: "حدد موقع المكونات بسرعة عبر مناطق مطبخك.",
      manual: "إضافة يدوية",
      manualSub: "أدخل أصنافاً مخصصة وحدد كمياتها الدقيقة.",
      reqIng: "المكونات المطلوبة",
      need: "تحتاج",
      have: "لديك",
      enough: "✓ كافٍ",
      missing: "✗ ناقص",
      partial: "⚠ تحتاج",
      tip: "نصيحة:",
      genList: "إنشاء قائمة التسوق",
      genSub: (count) => `لديك ${count} أصناف للشراء لهذه الوصفة.`,
      order: "طلب أونلاين",
      send: "إرسال للهاتف"
    }
  };

  const t = uiLabels[lang];
  const enoughCount = ingredients.filter(i => i.status === 'enough').length;
  const completionPercentage = Math.round((enoughCount / ingredients.length) * 100);
  const shoppingListCount = ingredients.filter(i => i.status !== 'enough').length;

  return (
    <div className={`kitchen-wrapper ${lang === 'ar' ? 'rtl-layout' : ''}`}>
      <Nav />
      <main className="kitchen-main" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
        
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="kitchen-badge-pill">
            <Package size={20} />
            <span>{t.badge}</span>
          </div>
          <h1 className="kitchen-title">{t.title}</h1>
          <p className="kitchen-subtitle">{t.subtitle}</p>
        </section>

        {/* Recipe Summary Card */}
        <section className="glass-card-main recipe-summary mb-12">
          <div className={`recipe-flex ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
            <div className="recipe-image-wrapper">
              <img src={selectedRecipe.image} alt={selectedRecipe.name} className="recipe-img-large" />
            </div>

            <div className="recipe-details">
              <div className="recipe-header-info">
                <h2 className="kitchen-title" style={{ fontSize: '3rem', textAlign: lang === 'ar' ? 'right' : 'left' }}>
                  {lang === 'ar' ? selectedRecipe.nameAr : selectedRecipe.name}
                </h2>
                <div className="recipe-meta" style={{ justifyContent: 'flex-start', gap: '20px' }}>
                  <span className="flex items-center gap-2"><Clock size={20} /> {lang === 'ar' ? selectedRecipe.prepTimeAr : selectedRecipe.prepTime}</span>
                  <span className="flex items-center gap-2"><Users size={20} /> {selectedRecipe.servings} {t.servings}</span>
                </div>
              </div>

              <div className="progress-container">
                <div className="progress-label" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span className="font-bold">{t.pantryReady}</span>
                  <span className="text-orange-500 font-black">{completionPercentage}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill" 
                    style={{ 
                      width: `${completionPercentage}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #F0660C, #FF8E42)',
                      transition: 'width 1s ease-in-out',
                      float: lang === 'ar' ? 'right' : 'left'
                    }}
                  ></div>
                </div>
                <div className="flex gap-6 mt-4 opacity-70 text-sm">
                  <span>{enoughCount} {t.ready}</span>
                  <span>{ingredients.length - enoughCount} {t.toBuy}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Grid */}
        <div className="feature-grid-3 mb-20">
          <div className="benefit-square-card">
            <div className="benefit-icon-box bg-orange-grad"><Scan size={32} /></div>
            <h3>{t.scan}</h3>
            <p>{t.scanSub}</p>
          </div>
          <div className="benefit-square-card">
            <div className="benefit-icon-box bg-green-grad"><Search size={32} /></div>
            <h3>{t.search}</h3>
            <p>{t.searchSub}</p>
          </div>
          <div className="benefit-square-card">
            <div className="benefit-icon-box bg-purple-grad"><Plus size={32} /></div>
            <h3>{t.manual}</h3>
            <p>{t.manualSub}</p>
          </div>
        </div>

        {/* Ingredients Checklist */}
        <section className="mb-20">
          <h2 className="section-title" style={{textAlign: lang === 'ar' ? 'right' : 'left'}}>{t.reqIng}</h2>
          <div className="ingredient-list">
            {ingredients.map((ing) => (
              <div key={ing.id} className={`ingredient-item ${ing.status}`}>
                <div className="ing-info-wrapper">
                  <div className="ing-check-column">
                    <button className={`ing-checkbox-btn ${ing.status === 'enough' ? 'checked' : ''}`}>
                      {ing.status === 'enough' && <CheckCircle size={24} />}
                    </button>
                  </div>

                  <div className="ing-details-column">
                    <div className="ing-header">
                      <h4>{lang === 'ar' ? ing.nameAr : ing.name}</h4>
                      <span className="ing-category-tag">{lang === 'ar' ? ing.categoryAr : ing.category}</span>
                    </div>

                    <div className="ing-amount-row" style={{flexDirection: lang === 'ar' ? 'row-reverse' : 'row'}}>
                      <div className="amount-stat">
                        <small>{t.need}</small>
                        <span>{ing.needed}{lang === 'ar' ? ing.unitAr : ing.unit}</span>
                      </div>
                      <div className="amount-stat">
                        <small>{t.have}</small>
                        <span className={`stat-value ${ing.status}`}>{ing.available}{lang === 'ar' ? ing.unitAr : ing.unit}</span>
                      </div>
                      
                      <div className={`status-pill ${ing.status}`}>
                        {ing.status === 'enough' ? t.enough : 
                         ing.status === 'partial' ? `${t.partial} ${ing.needed - ing.available}${lang === 'ar' ? ing.unitAr : ing.unit}` : 
                         t.missing}
                      </div>
                    </div>

                    {(ing.substitute || ing.substituteAr) && (
                      <div className="substitute-tip">
                        <Lightbulb size={16} className="text-orange" />
                        <p><strong>{t.tip}</strong> {lang === 'ar' ? ing.substituteAr : ing.substitute}</p>
                      </div>
                    )}
                  </div>
                </div>
                <button className="edit-ing-btn"><Edit size={20} /></button>
              </div>
            ))}
          </div>
        </section>

        {/* Shopping List CTA */}
        <section className="creator-cta text-center">
          <ShoppingCart size={60} style={{margin: '0 auto 20px'}} />
          <h2>{t.genList}</h2>
          <p>{t.genSub(shoppingListCount)}</p>
          <div className="cta-buttons" style={{display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '24px'}}>
            <button className="btn-white">{t.order}</button>
            <button className="btn-outline">{t.send}</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}