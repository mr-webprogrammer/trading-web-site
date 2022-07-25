import React from "react";
import AboutUs from "./components/AboutUs";
import DailyPrices from "./components/DailyPrices";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Roadmap from "./components/Roadmap";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";

export default function App() {

  return (
    <div >
      <ScrollToTop />
      <Navbar />
      <Home />
      <DailyPrices />
      <AboutUs />
      <Services />
      <Roadmap />
      <Newsletter />
      <Footer />
    </div>
  );
}
