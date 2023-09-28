import React from "react";
import logo from "../../assets/whitelogoo.png";
import square1 from "../../assets/square1.png";
import square2 from "../../assets/square2.png";
import square3 from "../../assets/square3.png";
import square4 from "../../assets/square4.png";
import wave from "../../assets/wave.png";
import google from "../../assets/Google.png";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing">
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

        <div className="squares">
          <img className="square1" src={square1} alt="" />
          <img className="square2" src={square2} alt="" />
          <img className="square3" src={square3} alt="" />
          <img className="square4" src={square4} alt="" />
        </div>
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
            {" "}
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
            <button className="start">Get Started</button>
            <button className="sign">SIgn In</button>

            <span>or</span>
          </div>
        </form>

        <button className="google">
          <img src={google} alt="" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Landing;
