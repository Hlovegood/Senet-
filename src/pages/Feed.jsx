import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Heart,
  Filter,
  Utensils,
  Coins,
  ThermometerSnowflake,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./recipe-discovery.css";

const recipesData = [
  {
    id: 1,
    title: "Egyptian Koshari",
    titleAr: "كشري مصري",
    category: "Traditional",
    size: "card-tall",
    cost: "Low",
    time: 45,
    flavor: "Savory",
    temp: "Hot",
    cuisine: "Egyptian",
    meal: "Lunch",
    difficulty: "Medium",
    protein: 15,
    image: "https://images.unsplash.com/photo-1720807740685-d9cdcb0836a7?w=500",
  },
  {
    id: 2,
    title: "Baklava Jewels",
    titleAr: "جواهر البقلاوة",
    category: "Traditional",
    size: "card-medium",
    cost: "Medium",
    time: 60,
    flavor: "Sweet",
    temp: "Cold",
    cuisine: "Middle Eastern",
    meal: "Dessert",
    difficulty: "Hard",
    protein: 5,
    image: "https://images.unsplash.com/photo-1767796777227-32ef3200fab8?w=500",
  },
  {
    id: 3,
    title: "Protein Falafel",
    titleAr: "فلافل غنية بالبروتين",
    category: "High Protein",
    size: "card-short",
    cost: "Low",
    time: 20,
    flavor: "Savory",
    temp: "Hot",
    cuisine: "Egyptian",
    meal: "Breakfast",
    difficulty: "Easy",
    protein: 25,
    image: "https://images.unsplash.com/photo-1767114915896-ec0baace7d33?w=500",
  },
  {
    id: 4,
    title: "Lentil Power Soup",
    titleAr: "شوربة العدس المغذية",
    category: "Vegan",
    size: "card-medium",
    cost: "Low",
    time: 30,
    flavor: "Savory",
    temp: "Hot",
    cuisine: "Egyptian",
    meal: "Dinner",
    difficulty: "Easy",
    protein: 18,
    image: "https://images.unsplash.com/photo-1724856774356-99331a86866f?w=500",
  },
  {
    id: 5,
    title: "Grilled Za'atar Chicken",
    titleAr: "دجاج مشوي بالزعتر",
    category: "High Protein",
    size: "card-tall",
    cost: "High",
    time: 35,
    flavor: "Savory",
    temp: "Hot",
    cuisine: "Levantine",
    meal: "Dinner",
    difficulty: "Medium",
    protein: 40,
    image: "https://images.unsplash.com/photo-1762631934518-f75e233413ca?w=500",
  },
  {
    id: 6,
    title: "Mango Mahalabia",
    titleAr: "مهلبية بالمانجو",
    category: "Quick Meals",
    size: "card-short",
    cost: "Medium",
    time: 15,
    flavor: "Sweet",
    temp: "Cold",
    cuisine: "Egyptian",
    meal: "Dessert",
    difficulty: "Easy",
    protein: 4,
    image: "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/exotic-coconut-rice-and-beans-dessert-with-mango-2-rx-OFepULoAejPGIf5CyG.webp",
  },
  {
    id: 7,
    title: "Stuffed Vine Leaves",
    titleAr: "ورق عنب محشي",
    category: "Traditional",
    size: "card-tall",
    cost: "Medium",
    time: 90,
    flavor: "Savory",
    temp: "Cold",
    cuisine: "Mediterranean",
    meal: "Appetizer",
    difficulty: "Hard",
    protein: 8,
    image: "https://images.unsplash.com/photo-1621953723422-6023013f659d?w=500",
  },
  {
    id: 8,
    title: "Spicy Shawarma Wrap",
    titleAr: "لفائف شاورما حارة",
    category: "Quick Meals",
    size: "card-medium",
    cost: "Medium",
    time: 15,
    flavor: "Savory",
    temp: "Hot",
    cuisine: "Middle Eastern",
    meal: "Lunch",
    difficulty: "Easy",
    protein: 32,
    image: "https://images.unsplash.com/photo-1734468330969-93c69106993f?w=500",
  },
  {
    id: 9,
    title: "Berry Quinoa Bowl",
    titleAr: "وعاء الكينوا بالتوت",
    category: "Vegan",
    size: "card-short",
    cost: "High",
    time: 10,
    flavor: "Sweet",
    temp: "Cold",
    cuisine: "Fusion",
    meal: "Breakfast",
    difficulty: "Easy",
    protein: 12,
    image: "https://images.unsplash.com/photo-1728691192410-ae2ece584c7d?w=500",
  },
  {
    id: 10,
    title: "Beef Hawawshi",
    titleAr: "حواوشي لحم",
    category: "Traditional",
    size: "card-tall",
    cost: "Medium",
    time: 40,
    flavor: "Savory",
    temp: "Hot",
    cuisine: "Egyptian",
    meal: "Lunch",
    difficulty: "Medium",
    protein: 35,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
  },
  {
    id: 11,
    title: "Tashila Salad",
    titleAr: "سلطة تشيلة",
    category: "Quick Meals",
    size: "card-medium",
    cost: "Low",
    time: 10,
    flavor: "Savory",
    temp: "Cold",
    cuisine: "Mediterranean",
    meal: "Appetizer",
    difficulty: "Easy",
    protein: 5,
    image: "https://images.unsplash.com/photo-1769481614068-47cfb4d1f125?w=500",
  },
  {
    id: 12,
    title: "Pistachio Kunafa",
    titleAr: "كنافة بالفستق",
    category: "Traditional",
    size: "card-short",
    cost: "High",
    time: 50,
    flavor: "Sweet",
    temp: "Hot",
    cuisine: "Middle Eastern",
    meal: "Dessert",
    difficulty: "Medium",
    protein: 7,
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=500",
  },
  {
    id: 13,
    title: "Ful Medames Pot",
    titleAr: "قدر فول مدمس",
    category: "Traditional",
    size: "card-tall",
    cost: "Low",
    time: 20,
    flavor: "Savory",
    temp: "Hot",
    cuisine: "Egyptian",
    meal: "Breakfast",
    difficulty: "Easy",
    protein: 14,
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=500",
  },
  {
    id: 14,
    title: "Garlic Hummus Trio",
    titleAr: "ثلاثية حمص بالثوم",
    category: "Vegan",
    size: "card-short",
    cost: "Low",
    time: 15,
    flavor: "Savory",
    temp: "Cold",
    cuisine: "Levantine",
    meal: "Appetizer",
    difficulty: "Easy",
    protein: 9,
    image: "https://images.unsplash.com/photo-1767114915974-3481fa23cbb0?w=500",
  },
  {
    id: 15,
    title: "Shish Tawook",
    titleAr: "شيش طاووق",
    category: "High Protein",
    size: "card-medium",
    cost: "Medium",
    time: 30,
    flavor: "Savory",
    temp: "Hot",
    cuisine: "Middle Eastern",
    meal: "Dinner",
    difficulty: "Medium",
    protein: 38,
    image: "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/shish-kebab-on-a-skewer-with-vegetables-HUdbA2FbBwOy6QRXWcYcQ.webp",
  },
  {
    id: 16,
    title: "Om Ali Pudding",
    titleAr: "أم علي",
    category: "Traditional",
    size: "card-tall",
    cost: "Medium",
    time: 40,
    flavor: "Sweet",
    temp: "Hot",
    cuisine: "Egyptian",
    meal: "Dessert",
    difficulty: "Medium",
    protein: 10,
    image: "https://cleobuttera.com/wp-content/uploads/2015/07/no-nuts-wl.jpg",
  },
];

export function RecipeDiscoveryPage() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("All Recipes");
  const [filters, setFilters] = useState({
    cost: "All",
    flavor: "All",
    temp: "All",
    difficulty: "All",
    cuisine: "All",
    meal: "All",
  });

  const translations = {
    en: {
      filterTitle: "Filters",
      resetBtn: "Reset All",
      viewBtn: "VIEW RECIPE",
      categories: ["All Recipes", "Quick Meals", "Vegan", "High Protein", "Traditional"],
      filterGroups: [
        { label: "Cost Range", name: "cost", options: ["Low", "Medium", "High"], placeholder: "Any Price" },
        { label: "Flavor Profile", name: "flavor", options: ["Savory", "Sweet"], placeholder: "All Flavors" },
        { label: "Temperature", name: "temp", options: ["Hot", "Cold"], placeholder: "Any Temp" },
        { label: "Difficulty", name: "difficulty", options: ["Easy", "Medium", "Hard"], placeholder: "All Levels" },
        { label: "Cuisine", name: "cuisine", options: ["Egyptian", "Middle Eastern", "Mediterranean"], placeholder: "Global" },
      ],
      dataMap: {
        Hot: "Hot", Cold: "Cold", Low: "Low", Medium: "Medium", High: "High",
        Egyptian: "Egyptian", "Middle Eastern": "Middle Eastern", Mediterranean: "Mediterranean", Levantine: "Levantine", Fusion: "Fusion"
      }
    },
    ar: {
      filterTitle: "الفلاتر",
      resetBtn: "إعادة تعيين",
      viewBtn: "عرض الوصفة",
      categories: ["كل الوصفات", "وجبات سريعة", "نباتي", "بروتين عالٍ", "تقليدي"],
      filterGroups: [
        { label: "نطاق التكلفة", name: "cost", options: ["Low", "Medium", "High"], placeholder: "أي سعر" },
        { label: "نوع النكهة", name: "flavor", options: ["Savory", "Sweet"], placeholder: "كل النكهات" },
        { label: "الحرارة", name: "temp", options: ["Hot", "Cold"], placeholder: "أي حرارة" },
        { label: "الصعوبة", name: "difficulty", options: ["Easy", "Medium", "Hard"], placeholder: "كل المستويات" },
        { label: "المطبخ", name: "cuisine", options: ["Egyptian", "Middle Eastern", "Mediterranean"], placeholder: "عالمي" },
      ],
      dataMap: {
        Hot: "ساخن", Cold: "بارد", Low: "منخفض", Medium: "متوسط", High: "مرتفع",
        Egyptian: "مصري", "Middle Eastern": "شرق أوسطي", Mediterranean: "متوسطي", Levantine: "شامي", Fusion: "فيوجن",
        Savory: "مالح", Sweet: "حلو", Easy: "سهل", Hard: "صعب"
      }
    }
  };

  const t = translations[lang];

  const filteredRecipes = useMemo(() => {
    return recipesData.filter((r) => {
      const englishCategory = lang === 'en' 
        ? activeTab 
        : translations.en.categories[translations.ar.categories.indexOf(activeTab)];

      const matchTab = activeTab === (lang === 'en' ? "All Recipes" : "كل الوصفات") || r.category === englishCategory;
      const matchCost = filters.cost === "All" || r.cost === filters.cost;
      const matchFlavor = filters.flavor === "All" || r.flavor === filters.flavor;
      const matchTemp = filters.temp === "All" || r.temp === filters.temp;
      const matchDiff = filters.difficulty === "All" || r.difficulty === filters.difficulty;
      const matchCuisine = filters.cuisine === "All" || r.cuisine === filters.cuisine;
      const matchMeal = filters.meal === "All" || r.meal === filters.meal;
      
      return matchTab && matchCost && matchFlavor && matchTemp && matchDiff && matchCuisine && matchMeal;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, filters, lang]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const isFilterActive = (name) => filters[name] !== "All";

  return (
    <>
      <Nav />
      <div className="discovery-wrapper">
        <div className="discovery-layout">
          <aside className="filter-sidebar">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "30px" }}>
              <Filter size={20} color="#F0660C" />
              <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", color: "white" }}>{t.filterTitle}</h3>
            </div>

            {t.filterGroups.map((f) => (
              <div className="filter-group" key={f.name}>
                <h4 className={isFilterActive(f.name) ? "has-value" : ""}>{f.label}</h4>
                <select
                  name={f.name}
                  className={`filter-select ${isFilterActive(f.name) ? "has-value" : ""}`}
                  onChange={handleFilterChange}
                  value={filters[f.name]}
                >
                  <option value="All">{f.placeholder}</option>
                  {f.options.map((opt) => (
                    <option key={opt} value={opt}>{t.dataMap[opt] || opt}</option>
                  ))}
                </select>
              </div>
            ))}

            <button
              onClick={() => setFilters({ cost: "All", flavor: "All", temp: "All", difficulty: "All", cuisine: "All", meal: "All" })}
              className="reset-btn"
              style={{ width: "100%", padding: "12px", borderRadius: "12px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white", marginTop: "10px", cursor: "pointer" }}
            >
              {t.resetBtn}
            </button>
          </aside>

          <main className="main-content">
            <div className="category-bar">
              {t.categories.map((name) => (
                <button
                  key={name}
                  onClick={() => setActiveTab(name)}
                  className={`filter-btn ${activeTab === name ? "active" : ""}`}
                >
                  <span>{name}</span>
                </button>
              ))}
            </div>

            <motion.div layout className="recipes-grid">
              <AnimatePresence mode="popLayout">
                {filteredRecipes.map((recipe) => (
                  <motion.div
                    layout
                    key={recipe.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className={`recipe-card ${recipe.size}`}
                  >
                    <div className="image-container">
                      <img src={recipe.image} alt={lang === 'ar' ? recipe.titleAr : recipe.title} className="recipe-image" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="tag-badge" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(5px)", color: "white" }}>
                          {t.dataMap[recipe.cuisine] || recipe.cuisine}
                        </span>
                      </div>
                    </div>

                    <div className="recipe-content">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "white" }}>
                          {lang === 'ar' ? recipe.titleAr : recipe.title}
                        </h3>
                        <Heart size={16} color="rgba(255,255,255,0.5)" />
                      </div>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                        <span className="tag-badge flex items-center gap-1"><Clock size={10} /> {recipe.time}m</span>
                        <span className="tag-badge flex items-center gap-1"><Utensils size={10} /> {recipe.protein}g P</span>
                        <span className="tag-badge flex items-center gap-1"><Coins size={10} /> {t.dataMap[recipe.cost] || recipe.cost}</span>
                        {recipe.temp === "Cold" && (
                          <span className="tag-badge flex items-center gap-1">
                            <ThermometerSnowflake size={10} /> {t.dataMap.Cold}
                          </span>
                        )}
                      </div>

                      <button className="orange-grad" style={{ width: "100%", padding: "8px", borderRadius: "12px", border: "none", color: "white", marginTop: "15px", fontSize: "0.8rem", fontWeight: "600", cursor: "pointer" }}>
                        {t.viewBtn}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}