import React, { createContext, useState, useContext, useEffect } from "react";

// 1. Create the Context
const LanguageContext = createContext();

// 2. Create the Provider Component
export const LanguageProvider = ({ children }) => {
  // Check local storage so the user's preference is saved on refresh
  const [lang, setLang] = useState(localStorage.getItem("senet_lang") || "en");

  // Toggle function
  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    setLang(newLang);
    localStorage.setItem("senet_lang", newLang);
  };

  // 3. Update the HTML document attributes whenever language changes
  useEffect(() => {
    // This flips the entire website layout (Left-to-Right vs Right-to-Left)
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    
    // Optional: You can change the body font here if you have a specific Arabic font
    if (lang === "ar") {
      document.body.classList.add("rtl-mode");
    } else {
      document.body.classList.remove("rtl-mode");
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {/* We wrap the children in a div that carries the language class. 
        This allows you to write CSS like .ar .hero-title { ... } 
      */}
      <div className={`app-language-wrapper ${lang}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

// 4. Custom hook for easy access in your components (Nav, Home, etc.)
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};