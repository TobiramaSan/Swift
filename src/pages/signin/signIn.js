import React from "react";
import wave from "../../assets/wave.png";
import google from "../../assets/Google.png";
import { NavLink } from "react-router-dom";
import SideBar from "../../components/sidebar/sidebar";
import "./signIn.css";
const SignIn = () => {
  return (
    <div className="signin">
      <div className="navigation">
        <SideBar />
      </div>

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
