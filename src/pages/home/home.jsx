import React from "react";
import "./home.css";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Hero2 from "../../components/hero2/hero2";
import Hero3 from "../../components/hero3/hero3";
import Meet from "../../components/meet/meet";
import Pricing from "../../components/pricing/pricing";
import Testimonials from "../../components/testimonials/testimonials";
import Footer from "../../components/footer/footer";
import Subscribe from "../../components/subscribe/subscribe";

const Home = () => {
  return (
    <div className="home">
      <div className="navbar">
        <Header />
      </div>
      <div className="home-content">
        <Hero />
        <Hero2 />
        <Hero3 />
        <Meet />
        <Pricing />
        <Testimonials />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
