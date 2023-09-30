import React, { useState } from "react";
import logo from "../../assets/whitelogoo.png";
import wave from "../../assets/wave.png";
import google from "../../assets/Google.png";
import "./landing.css";
import { NavLink } from "react-router-dom";
import SideBar from "../../components/sidebar/sidebar";

const Landing = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 500) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="landing">
      <div className="navbar">
        <SideBar />
      </div>
      {isMobileView && (
        <div className="mobile-nav">
          <div className="nav">
            <div className="swift">
              <div className="logo-name">
                <div className="main-image">
                  <div className="img">
                    <img src={logo} alt="" />
                  </div>
                  <div className="name">
                    <h1>Swift</h1>
                    <span>e-Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="landing-content">
        <div className="welcome">
          <div className="wave">
            <h1>Welcome to Swift e-Learning</h1>
            <img src={wave} alt="" />
          </div>
          <p>Creating learning experiences to your doorstep!</p>
        </div>

        <form action="">
          <p>Let's meet you</p>
          <input type="text" placeholder="fullname" /> <br />
          <input type="text" placeholder="course" /> <br />
          <input type="text" placeholder="email" /> <br />
          <div className="agreement-policy">
            <div className="input-label">
              <input
                type="checkbox"
                id="email-agree"
                name="email"
                value="yes"
              />
              <label for="email">
                Yes, I would like to recieve emails about feature updates,
                emerging partnerships, community infomation and so on.
              </label>
            </div>
            <div className="input-label">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                value="agree"
              />
              <label for="agree">
                I agree to the <span>Terms of Use</span> and the
                <span>Privacy Policy</span>
              </label>
            </div>
          </div>
          <div className="btns">
            <NavLink to="/home">
              <button className="start">Get Started</button>
            </NavLink>
            <NavLink to="/signin">
              <button className="sign">SIgn In</button>
            </NavLink>

            <span>or</span>
          </div>
        </form>

        <NavLink to="">
          <button className="google">
            <img src={google} alt="" />
            Continue with Google
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
