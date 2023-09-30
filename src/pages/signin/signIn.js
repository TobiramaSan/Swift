import React, { useState } from "react";
import logo from "../../assets/whitelogoo.png";
import wave from "../../assets/wave.png";
import google from "../../assets/Google.png";
import { NavLink } from "react-router-dom";
import SideBar from "../../components/sidebar/sidebar";
import "./signIn.css";
const SignIn = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const handleMobileView = () => {
    if (window.innerwidth <= 500) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };
  React.useState(() => {
    window.addEventListener("resize", handleMobileView);
    handleMobileView();

    // clean up function
    return () => {
      window.removeEventListener("resize", handleMobileView);
    };
  }, []);

  return (
    <div className="signin">
      <div className="navigation">
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
            <h1>Welcome Back</h1>
            <img src={wave} alt="" />
          </div>
          <p>Creating learning experiences to your doorstep!</p>
        </div>

        <form action="">
          <p>Let's meet you</p>
          <input type="text" placeholder="email" /> <br />
          <input type="text" placeholder="password" /> <br />
          <div className="btns">
            <NavLink to="/signin">
              <button className="sign">SIgn In</button>
            </NavLink>
            <NavLink to="/home">
              <button className="start">SignUp</button>
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

export default SignIn;
