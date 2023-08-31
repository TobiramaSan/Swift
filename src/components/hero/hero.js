import React from "react";
import "./hero.css";
import stars from "../../assets/stars.png";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import slider5 from "../../assets/slider5.png";
import udemy from "../../assets/Udemy.png";
import cousera from "../../assets/Coursera.png";
import skillshare from "../../assets/skill-share.png";
import squarespace from "../../assets/Squarespace.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-cont">
        <div className="stars">
          <div className="stars">
            <img src={stars} alt="" />
          </div>
        </div>
        <div className="hero-content">
          <div className="main-text">
            <p className="main-text-p">
              Gain knowledge from <span>expert instructors</span> at your own
              pace, anytime and anywhere
            </p>
            <p className="subtext-p">
              Unlock your potential with our engaging e-learning platform.
              Access high-quality courses anytime, anywhere and achieve your
              personal and professional goals with ease.
            </p>
          </div>
          <button>Start Learning</button>
        </div>
        <div className="absolute">
          <div className="oval"></div>
          <div className="slider-imgs">
            <img src={slider1} alt="" />
            <img src={slider2} alt="" />
            <img src={slider3} alt="" />
            <img src={slider4} alt="" />
            <img src={slider5} alt="" />
          </div>
          <div className="oval2"></div>
        </div>
        <div className="courses">
          <div className="inner-course">
            <img src={udemy} alt="" />
            <img src={cousera} alt="" />
            <img src={skillshare} alt="" />
            <img src={squarespace} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
