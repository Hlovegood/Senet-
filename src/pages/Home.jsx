import React from "react";
import Nav from "../components/Nav";
import "./Home.css";
import Carousel from "../components/Carousel";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Nav />
        

        {/* NEW: Smooth Text Animation Layer */}
      <div className="hero-overlay">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hero-text"
        >
          <h1 className="hero-title">Senet</h1>
          <p className="hero-subtitle">Bringing Global Flavors to Your Kitchen with AR</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hero-btn"
          >
            Explore Recipes
          </motion.button>
        </motion.div>
      </div>
      
        
      <Carousel
        items={[
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/burger-with-melted-cheese-m-Y1i3jpYYJZYfOEfX5dX.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/pizza-salami-DGmC7UGytWmaeO5xx0fbK.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/colorful-sushi-variety-floating-in-mid-air-8bO9U9kBcZPj59cfNwXtf.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/colorful-breakfast-spread-on-a-rustic-plate-VGbHfppD0Pq-q4gtkxTDo.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/grilled-salmon-bowl-with-quinoa-and-colorful-veggies-e_nRLrswt6JcYBEXE_jqC.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/generated/webp/delicious-blt-sandwich-with-coffee-GlMDkxVCtNwtv0NDlfGoF.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/generated/webp/delicious-blt-sandwich-with-coffee-GlMDkxVCtNwtv0NDlfGoF.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/generated/webp/delicious-chicken-biryani-with-raita-and-garnishes-1sy5r7g4uBALOHij9PahA.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/generated/webp/delicious-asian-sticky-chicken-feast-xSDNza2BPNc9cLlCX1Z0k.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/generated/webp/creamy-rigatoni-with-savory-toppings-IXCieiesXCexwTWB0BjHf.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/generated/webp/delicious-raspberry-cheesecake-recipe-C_Q-umnegVt_Zj2OoQenP.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/uploads/webp/delicious-hot-dog-with-mustard-drizzle-xgqcEOGx5qWDZ14TElczv.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/colorful-taco-platter-with-eggs-and-sides-Y4kfLTjbX4vbz7JiavtRa.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/uploads/webp/delicious-yogurt-bowl-with-fresh-berries-zMGsjHioPiCV2tboR91Bt.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/grilled-steak-salad-with-sweet-potatoes-and-greens-gF43NZmO6LtolBw2mEL2a.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/delicious-pink-frosted-cupcakes-for-any-occasion--fJN8pFbALEKuY_sp297c.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/hearty-sweet-potato-chili-bowl-with-fresh-toppings-9UV_VWY0JEUsSnLqUKoc5.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/gingerbread-men-cookies-for-festive-celebrations-PO3sJt9g96Zb1AX03l4C9.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/delicious-churros-with-chocolate-sauce-delight-m7D5k6TnTjavt7kUo7kKz.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/french-pastry-with-berries-sYtXk4APtuAr9JQ3YOIH8.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/mediterranean-falafel-bowl-with-fresh-vegetables-vey-ycYrwgbFrFa2DHCMO.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/fresh-chickpea-salad-with-herbs-and-vegetables-YNG1GeXIQOhqYqjxJxhHG.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/baked-fish-with-potato-salad-H4uToc8tKBi1cS95Kd7h2.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/colorful-breakfast-spread-on-a-rustic-plate-VGbHfppD0Pq-q4gtkxTDo.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/rice-beans-meat-brazil-ZtuH3VQ5Y8jph_2nf9pOQ.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/chocolate-chip-cookie-dough-cheesecake-slice-YnrY1zPdVIjbsSL-H_naU.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/golden-crispy-chicken-nuggets-on-slate-7RhGNX90xPPcCvcpUEPaT.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/vibrant-vegetable-rice-stir-fry-delight-VpsT9Vry9EbsAvj4YbLCW.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/sizzling-garlic-butter-shrimp-with-lemon-ZCYreYAVZFh-c7U6uebC9.webp",
          "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/loaded-cheesy-bacon-fries-for-every-craving-qRw1BmG1F0CUfPyO-P-b2.webp",
        ]}
        gradientColor="#F0660C"
      />
    



    </>
  );
};

export default Home;
