import React from "react";
import "./hero2.css";
import grid1 from "../../assets/grid1.png";
import grid2 from "../../assets/grid2.png";
import grid3 from "../../assets/grid3.png";
import grid4 from "../../assets/grid4.png";

const Hero2 = () => {
  return (
    <div className="hero2">
      <div className="hero2-cont">
        <div className="hero2-heading">
          <div className="hero2-heading-title">
            <h1>Explore most popular course</h1>
          </div>
          <div className="hero2-nav">
            <div className="all">
              <p>All</p>
            </div>
            <div className="line"></div>
            <div className="all">
              <p>Web Development</p>
            </div>
            <div className="line"></div>
            <div className="all">
              <p>UI/UX</p>
            </div>
            <div className="line"></div>
            <div className="all">
              <p>Data Science</p>
            </div>
            <div className="line"></div>
            <div className="all">
              <p>Graphics Design</p>
            </div>
            <div className="line"></div>
            <div className="all">
              <p>Mobile Development</p>
            </div>
          </div>
        </div>
        <div className="hero2-grid">
          <div className="grid">
            <div className="grid-image">
              <img src={grid1} alt="" />
            </div>
            <div className="grid-text one">
              <div className="h1-p">
                {" "}
                <h1>Frontend Web Development With ReactJS</h1>
                <p>
                  Hello guys, welcome to front-end web development with React!!
                  This course was made specifically for you, to take you f...
                </p>
              </div>

              <div className="h2-span">
                <h2>ESTIMATED TIME</h2>
                <span>55 minutes</span>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="grid-image">
              <img src={grid2} alt="" />
            </div>
            <div className="grid-text two">
              <div className="h1-p">
                <h1>Introduction to UI/UX Design</h1>
                <p>
                  In this short course, you will learn the basics of UI/UX
                  design, including design principles, color theory, typography,
                  and layout. You will also learn how to use design tools such
                  as Sketch, Adobe XD, or Figma, to create wireframes and
                  prototypes.
                </p>
              </div>

              <div className="h2-span">
                <h2>ESTIMATED TIME</h2>
                <span>2 hours</span>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="grid-image">
              <img src={grid3} alt="" />
            </div>
            <div className="grid-text three">
              <div className="h1-p">
                {" "}
                <h1>Web Development (ReactJS)</h1>
                <p>
                  ReactJS is a popular JavaScript library for building user
                  interfaces. In this short course, you will learn the basics of
                  ReactJS, including components, state, props, and lifecycle
                  methods..
                </p>
              </div>

              <div className="h2-span">
                <h2>ESTIMATED TIME</h2>
                <span>1 hour 30 mins</span>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="grid-image">
              <img src={grid4} alt="" />
            </div>
            <div className="grid-text four">
              <div className="h1-p">
                <h1>Javascript Basics</h1>
                <p>
                  JavaScript (JS) is a high-level programming language that is
                  commonly used for creating interactive web pages and web
                  applications.
                </p>
              </div>

              <div className="h2-span">
                <h2>ESTIMATED TIME</h2>
                <span>2 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
