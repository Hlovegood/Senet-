import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { supabase } from "../supabase";
import { useLanguage } from "../LanguageContext"; 
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import CuisineCarousel from "../components/CuisineCarousel";
import "./Home.css";

import Logo from "../assets/Imgs/Senet Logo.png";
import Seneya from "../assets/Imgs/Seneya.png";
import video from "../assets/Videos/Marketing Video.mp4";

import UserIcon from "../assets/Icons/Profile-Icon.png";
import EditIcon from "../assets/Icons/Edit-Icon.png";
import LayersIcon from "../assets/Icons/Layers-Icon.png";
import FlavorsIcon from "../assets/Icons/Flavors-Icon.png";
import VarietyIcon from "../assets/Icons/Variety-Icon.png";
import SaltIcon from "../assets/Icons/Salt-Icon.png";

import P1 from "../assets/Imgs/Pic div 1.png";
import P2 from "../assets/Imgs/Pic div 2.png";
import P3 from "../assets/Imgs/Pic div 3.png";
import P4 from "../assets/Imgs/Pic div 4.png";
import P5 from "../assets/Imgs/Pic div 5.png";

import Cheese from "../assets/Ingredients/Cheese.png";
import CherryBlossom from "../assets/Ingredients/CherrBlossomTree.png";
import Chilli from "../assets/Ingredients/Chilli.png";
import Onion from "../assets/Ingredients/Onion.png";
import Pisa from "../assets/Ingredients/Pisa.png";
import Pyramids from "../assets/Ingredients/Pyramids.png";
import Rice from "../assets/Ingredients/Rice.png";
import Salmon from "../assets/Ingredients/Salmon.png";
import Shrimp from "../assets/Ingredients/Shrimp.png";
import Sombrero from "../assets/Ingredients/Sombrero.png";
import Tomato from "../assets/Ingredients/Tomato.png";
import Church from "../assets/Ingredients/Church.png";
import Clams from "../assets/Ingredients/Clams.png";

import FattahPlate from "../assets/Imgs/Carousel-img (4).png";
import SushiPlate from "../assets/Imgs/Carousel-img (5).png";
import TacoPlate from "../assets/Imgs/Carousel-img (7).png";
import SpaghettiPlate from "../assets/Imgs/Carousel-img (13).png";
import PaellaPlate from "../assets/Imgs/Carousel-img (1).png";

const Home = () => {
  const { lang } = useLanguage();

  const translations = {
    en: {
      heroSubtitle: "Bringing Global Flavors to Your Kitchen with AR",
      btnAndroid: "Download For Android",
      btnIos: "Download For IOS",
      discoverHero: "Discover the features of Senet",
      topFeatures: "Top Features",
      feat1: { title: "Personalized", desc: "Tailored culinary journey just for you." },
      feat2: { title: "Choice of Flavor", desc: "Adapt any recipe to your specific taste." },
      feat3: { title: "Many Options", desc: "Unlock AR guidance and diverse dishes." },
      feat4: { title: "Global Palette", desc: "Explore authentic ingredients worldwide." },
      feat5: { title: "Endless Variety", desc: "Perfect dishes for any mood or craving." },
      feat6: { title: "Perfect Seasoning", desc: "Master the art of balance with AR guidance." },
      commTitle: "Connect with the Community",
      commSubtitle: "Download Senet To Connect now",
      commBtn: "Hear the people's voice",
      cuisinesTitle: "Top 5 Cuisines",
      cuisines: [
        { label: "Egyptian Cuisine", name: "Egyptian Fattah" },
        { label: "Italian Cuisine", name: "Spaghetti" },
        { label: "Mexican Cuisine", name: "Fiesta Tacos" },
        { label: "Spanish Cuisine", name: "Paella" },
        { label: "Japanese Cuisine", name: "Sushi" }
      ]
    },
    ar: {
      heroSubtitle: "جلب النكهات العالمية إلى مطبخك باستخدام الواقع المعزز",
      btnAndroid: "تحميل للأندرويد",
      btnIos: "تحميل للأيفون",
      discoverHero: "اكتشف مميزات سنيت",
      topFeatures: "أبرز المميزات",
      feat1: { title: "شخصي", desc: "رحلة طهي مصممة خصيصًا لك." },
      feat2: { title: "اختيار النكهة", desc: "قم بتكييف أي وصفة حسب ذوقك الخاص." },
      feat3: { title: "خيارات متعددة", desc: "افتح إرشادات الواقع المعزز والأطباق المتنوعة." },
      feat4: { title: "لوحة عالمية", desc: "استكشف المكونات الأصلية من جميع أنحاء العالم." },
      feat5: { title: "تنوع لا ينتهي", desc: "أطباق مثالية لأي مزاج أو رغبة." },
      feat6: { title: "تتبيل مثالي", desc: "أتقن فن التوازن مع توجيهات الواقع المعزز." },
      commTitle: "تواصل مع المجتمع",
      commSubtitle: "قم بتحميل سنيت للتواصل الآن",
      commBtn: "استمع إلى صوت الناس",
      cuisinesTitle: "أفضل 5 مطابخ",
      cuisines: [
        { label: "المطبخ المصري", name: "فتة مصرية" },
        { label: "المطبخ الإيطالي", name: "سباغيتي" },
        { label: "المطبخ المكسيكي", name: "تاكو فيستا" },
        { label: "المطبخ الإسباني", name: "باييلا" },
        { label: "المطبخ الياباني", name: "سوشي" }
      ]
    }
  };

  const t = translations[lang];

  const discoverRef = useRef(null);
  const bottomTrayRef = useRef(null);
  const communityRef = useRef(null);

  const isCommunityInView = useInView(communityRef, { once: false, amount: 0.2 });

  const [carouselImages, setCarouselImages] = useState([]);
  const [isNear, setIsNear] = useState(true);
  const [isDiscoverNear, setIsDiscoverNear] = useState(false);
  const [isBottomTrayNear, setIsBottomTrayNear] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await supabase.from("Recipes_images").select("image_url");
      if (data) setCarouselImages(data.map((item) => item.image_url));
    };
    fetchImages();
  }, []);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
      setIsNear(distance < 600);

      if (discoverRef.current) {
        const rect = discoverRef.current.getBoundingClientRect();
        setIsDiscoverNear(e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom);
      }
      if (bottomTrayRef.current) {
        const rect = bottomTrayRef.current.getBoundingClientRect();
        setIsBottomTrayNear(e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom);
      }
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  const trayVariants = {
    hidden: { y: 150, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const dotVariants = {
    hidden: { strokeDashoffset: 0, opacity: 0 },
    visible: (i) => ({
      strokeDashoffset: -200,
      opacity: 1,
      transition: {
        strokeDashoffset: { duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 },
        opacity: { duration: 0.5, delay: i * 0.5 },
      },
    }),
  };

  const cuisineSlides = [
    { ...t.cuisines[0], plateImg: FattahPlate, lightColor: "#8b7d00", darkColor: "#4A0000", ingredients: [Tomato, Pyramids, Onion, Rice] },
    { ...t.cuisines[1], plateImg: SpaghettiPlate, lightColor: "#1e5d3b", darkColor: "#0a361f", ingredients: [Pisa, Onion, Tomato, Cheese] },
    { ...t.cuisines[2], plateImg: TacoPlate, lightColor: "#ce1126", darkColor: "#7e0a17", ingredients: [Sombrero, Chilli, Onion] },
    { ...t.cuisines[3], plateImg: PaellaPlate, lightColor: "#ce7c11", darkColor: "#aa8406", ingredients: [Shrimp, Clams, Onion, Church] },
    { ...t.cuisines[4], plateImg: SushiPlate, lightColor: "#ce1169", darkColor: "#7e0a17", ingredients: [Rice, CherryBlossom, Onion, Salmon] }
  ];

  return (
    <div className="home-wrapper">
      <Nav />

      <div className="hero-overlay">
        <motion.div
          animate={{ opacity: isNear ? 1 : 0, y: isNear ? 0 : 30, scale: isNear ? 1 : 0.9 }}
          transition={{ duration: 0.6 }}
          className="hero-text"
        >
          <div className="hero-title">
            <img src={Logo} alt="Logo" />
          </div>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
          <article className="Buttons">
            <button className="hero-btn">{t.btnAndroid}</button>
            <button className="hero-btn">{t.btnIos}</button>
          </article>
        </motion.div>
      </div>

      {carouselImages.length > 0 && (
        <Carousel items={carouselImages} gradientColor="#F0660C" />
      )}

      <section className="Dicover" ref={discoverRef}>
        <h2 className="Discover-hero-txt">{t.discoverHero}</h2>
        <motion.div
          className="features-tray-wrapper"
          variants={trayVariants}
          initial="hidden"
          animate={isDiscoverNear ? "visible" : "hidden"}
        >
          <img src={Seneya} className="tray-bg-img" alt="tray" />
          <div className="tray-content">
            <h2 className="tray-title">{t.topFeatures}</h2>
            <div className="features-grid">
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={UserIcon} alt="" className="card-icon" />
                <h3>{t.feat1.title}</h3>
                <p>{t.feat1.desc}</p>
              </motion.div>
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={EditIcon} alt="" className="card-icon" />
                <h3>{t.feat2.title}</h3>
                <p>{t.feat2.desc}</p>
              </motion.div>
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={LayersIcon} alt="" className="card-icon" />
                <h3>{t.feat3.title}</h3>
                <p>{t.feat3.desc}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="video-section">
        <motion.video
          src={video}
          controls
          autoPlay
          loop
          muted
          className="promo-video"
          initial={{ width: "80%", borderRadius: "20px" }}
          whileHover={{ width: "100%", height: "100vh", borderRadius: "0px", zIndex: 100 }}
          transition={{ duration: 0.5 }}
        />
      </section>

      <section className="Dicover Bottom-Tray-Section" ref={bottomTrayRef}>
        <motion.div
          className="features-tray-wrapper"
          variants={trayVariants}
          initial="hidden"
          animate={isBottomTrayNear ? "visible" : "hidden"}
        >
          <div className="tray-content">
            <div className="features-grid">
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={FlavorsIcon} alt="" className="card-icon" />
                <h3>{t.feat4.title}</h3>
                <p>{t.feat4.desc}</p>
              </motion.div>
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={VarietyIcon} alt="" className="card-icon" />
                <h3>{t.feat5.title}</h3>
                <p>{t.feat5.desc}</p>
              </motion.div>
              <motion.div className="feature-card" variants={itemVariants}>
                <img src={SaltIcon} alt="" className="card-icon" />
                <h3>{t.feat6.title}</h3>
                <p>{t.feat6.desc}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="CommunitySection" ref={communityRef}>
        <motion.div
          className="community-text-container"
          initial={{ opacity: 0, y: 20 }}
          animate={isCommunityInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className="community-main-title">{t.commTitle}</h1>
          <p className="community-subtitle-text">{t.commSubtitle}</p>
          <Link to='/community'>
            <motion.button className="hero-btn" whileHover={{ scale: 1.05 }}>
              {t.commBtn}
            </motion.button>
          </Link>
        </motion.div>

        <div className="community-composition">
          <svg className="connecting-lines-svg" viewBox="0 0 1000 800">
            <motion.path d="M150 150 L850 150" stroke="#F0660C" strokeWidth="4" strokeDasharray="1 100" strokeLinecap="round" fill="none" custom={0} variants={dotVariants} animate={isCommunityInView ? "visible" : "hidden"} />
            <motion.path d="M850 150 L850 650" stroke="#F0660C" strokeWidth="4" strokeDasharray="1 100" strokeLinecap="round" fill="none" custom={1} variants={dotVariants} animate={isCommunityInView ? "visible" : "hidden"} />
            <motion.path d="M850 650 L150 650" stroke="#F0660C" strokeWidth="4" strokeDasharray="1 100" strokeLinecap="round" fill="none" custom={2} variants={dotVariants} animate={isCommunityInView ? "visible" : "hidden"} />
            <motion.path d="M150 650 L150 150" stroke="#F0660C" strokeWidth="4" strokeDasharray="1 100" strokeLinecap="round" fill="none" custom={3} variants={dotVariants} animate={isCommunityInView ? "visible" : "hidden"} />
          </svg>

          <div className="polaroid-container">
            <motion.img src={P1} className="p p-tl" initial={{ opacity: 0 }} animate={isCommunityInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }} />
            <motion.img src={P2} className="p p-tr" initial={{ opacity: 0 }} animate={isCommunityInView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} />
            <motion.img src={P3} className="p p-br" initial={{ opacity: 0 }} animate={isCommunityInView ? { opacity: 1 } : {}} transition={{ delay: 1.2 }} />
            <motion.img src={P4} className="p p-bl" initial={{ opacity: 0 }} animate={isCommunityInView ? { opacity: 1 } : {}} transition={{ delay: 1.7 }} />
            <motion.img src={P5} className="p p-cb" initial={{ opacity: 0, scale: 0, x: "-50%" }} animate={isCommunityInView ? { opacity: 1, scale: 1, x: "-50%" } : {}} transition={{ delay: 2.2, type: "spring" }} />
          </div>
        </div>
      </section>

      <section className="CuisineCarousel">
        <h2>{t.cuisinesTitle}</h2>
        <CuisineCarousel slides={cuisineSlides} />
      </section>

      <Footer />
    </div>
  );
};

export default Home;