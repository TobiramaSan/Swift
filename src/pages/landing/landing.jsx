import React from "react";
import wave from "../../assets/wave.png";
import google from "../../assets/Google.png";
import "./landing.css";
import { NavLink } from "react-router-dom";
import SideBar from "../../components/sidebar/sidebar";

const Landing = () => {
  return (
    <div className="landing">
      <div className="navbar">
        <SideBar />
      </div>

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
