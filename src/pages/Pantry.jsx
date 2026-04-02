import React, { useState } from 'react';
import { 
  ShoppingCart, CheckCircle, AlertCircle, Plus, 
  Scan, Search, Package, RefreshCw, ArrowRight, TrendingUp,
  Clock, DollarSign, Lightbulb, X, Edit, ChefHat, FileText, Users
} from 'lucide-react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./Pantry.css"; // We'll create this next

// Data remains the same as your snippet...
const selectedRecipe = {
  name: "Classic Egyptian Koshari",
  servings: 4,
  prepTime: "45 min",
  image: "https://images.unsplash.com/photo-1650223141282-220ad52c4e7a?w=800&q=80"
};

const recipeIngredients = [
  { id: '1', name: 'Rice', needed: 300, unit: 'g', available: 800, status: 'enough', category: 'Grains' },
  { id: '2', name: 'Lentils', needed: 200, unit: 'g', available: 0, status: 'missing', category: 'Legumes' },
  { id: '3', name: 'Macaroni', needed: 200, unit: 'g', available: 0, status: 'missing', category: 'Pasta', substitute: 'Can substitute with penne or any short pasta' },
  { id: '4', name: 'Chickpeas', needed: 150, unit: 'g', available: 80, status: 'partial', category: 'Legumes' },
];

export default function SmartKitchenPage() {
  const [ingredients, setIngredients] = useState(recipeIngredients);
  const [showShoppingList, setShowShoppingList] = useState(false);

  const enoughCount = ingredients.filter(i => i.status === 'enough').length;
  const totalCount = ingredients.length;
  const completionPercentage = Math.round((enoughCount / totalCount) * 100);
  const shoppingList = ingredients.filter(i => i.status === 'missing' || i.status === 'partial');

  return (
    <div className="kitchen-wrapper">
      <Nav />

      <main className="kitchen-main">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in">
          <div className="kitchen-badge-pill">
            <Package size={20} />
            <span>Smart Kitchen Assistant</span>
          </div>
          <h1 className="kitchen-title">Ingredient & Pantry Manager</h1>
          <p className="kitchen-subtitle">
            Never wonder what you need to buy. Check your inventory, find smart substitutes, and generate your shopping list in seconds.
          </p>
        </section>

        {/* Recipe Summary Card */}
       {/* Recipe Card */}
<section className="glass-card-main recipe-summary mb-12">
  <div className="recipe-flex">
    {/* Image Side */}
    <div className="recipe-image-wrapper">
      <img 
        src={selectedRecipe.image} 
        alt={selectedRecipe.name} 
        className="recipe-img-large" 
      />
    </div>

    {/* Content Side - This will now fill the rest of the card */}
    <div className="recipe-details">
      <div className="recipe-header-info">
        <h2 className="kitchen-title" style={{ fontSize: '3rem', textAlign: 'left' }}>
          {selectedRecipe.name}
        </h2>
        <div className="recipe-meta" style={{ justifyContent: 'flex-start' }}>
          <span className="flex items-center gap-2"><Clock size={20} /> {selectedRecipe.prepTime}</span>
          <span className="flex items-center gap-2"><Package size={20} /> {selectedRecipe.servings} Servings</span>
        </div>
      </div>

      <div className="progress-container">
        <div className="progress-label" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span className="font-bold">Pantry Readiness</span>
          <span className="text-orange-500 font-black">{completionPercentage}%</span>
        </div>
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ 
              width: `${completionPercentage}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #F0660C, #FF8E42)',
              transition: 'width 1s ease-in-out'
            }}
          ></div>
        </div>
        <div className="flex gap-6 mt-4 opacity-70 text-sm">
          <span>{enoughCount} Ready</span>
          <span>{ingredients.length - enoughCount} To Buy</span>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Action Grid */}
        <div className="feature-grid-3 mb-20">
          <div className="benefit-square-card">
            <div className="benefit-icon-box bg-orange-grad"><Scan size={32} /></div>
            <h3>Scan Barcode</h3>
            <p>Add items to your pantry instantly by scanning labels.</p>
          </div>
          <div className="benefit-square-card">
            <div className="benefit-icon-box bg-green-grad"><Search size={32} /></div>
            <h3>Search Pantry</h3>
            <p>Quickly locate ingredients across your kitchen zones.</p>
          </div>
          <div className="benefit-square-card">
            <div className="benefit-icon-box bg-purple-grad"><Plus size={32} /></div>
            <h3>Add Manually</h3>
            <p>Input custom items and set their specific quantities.</p>
          </div>
        </div>

        {/* Ingredients Checklist */}
        <section className="mb-20">
          <h2 className="section-title">Required Ingredients</h2>
          <div className="ingredient-list">
            {ingredients.map((ing) => (
              // ... inside the ingredients.map((ing) => (
<div key={ing.id} className={`ingredient-item ${ing.status}`}>
  <div className="ing-info-wrapper">
    <div className="ing-check-column">
      <button className={`ing-checkbox-btn ${ing.status === 'enough' ? 'checked' : ''}`}>
        {ing.status === 'enough' && <CheckCircle size={24} />}
      </button>
    </div>

    <div className="ing-details-column">
      <div className="ing-header">
        <h4>{ing.name}</h4>
        <span className="ing-category-tag">{ing.category}</span>
      </div>

      <div className="ing-amount-row">
        <div className="amount-stat">
          <small>NEED</small>
          <span>{ing.needed}{ing.unit}</span>
        </div>
        <div className="amount-stat">
          <small>HAVE</small>
          <span className={`stat-value ${ing.status}`}>{ing.available}{ing.unit}</span>
        </div>
        
        <div className={`status-pill ${ing.status}`}>
          {ing.status === 'enough' ? '✓ Enough' : 
           ing.status === 'partial' ? `⚠ Need ${ing.needed - ing.available}${ing.unit}` : 
           '✗ Missing'}
        </div>
      </div>

      {ing.substitute && (
        <div className="substitute-tip">
          <Lightbulb size={16} className="text-orange" />
          <p><strong>Tip:</strong> {ing.substitute}</p>
        </div>
      )}
    </div>
  </div>

  <button className="edit-ing-btn">
    <Edit size={20} />
  </button>
</div>
// ...
            ))}
          </div>
        </section>

        {/* Shopping List CTA */}
        <section className="creator-cta">
          <ShoppingCart size={60} style={{margin: '0 auto 20px'}} />
          <h2>Generate Shopping List</h2>
          <p>You have {shoppingList.length} items to buy for this recipe.</p>
          <div className="cta-buttons" style={{display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '24px'}}>
            <button className="btn-white">Order Online</button>
            <button className="btn-outline">Send to Phone</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}