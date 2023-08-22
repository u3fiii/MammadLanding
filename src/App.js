import React, { useEffect } from "react";
import "./App.css";

import TopBanner from "./components/TopBanner";
import TopSlider from "./components/TopSlider";
import Categories from "./components/Categories";
import SpecialAds from "./components/SpecialAds";
import TabsContainer from "./components/TabsContainer";
import BestSellers from "./components/BestSellers";

import Logo from "./assets/img/pindo-logo.svg";

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={Logo} alt="Pindo Logo" />
      </div>
      <TopSlider />
      <TopBanner />
      <Categories />
      <SpecialAds />
      <TabsContainer />
      <BestSellers />
    </div>
  );
}

export default App;
