import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import linkedIn from "../../assets/linkedIn.png";
import facebook from "../../assets/facebook.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cont">
        <div className="footer-main">
          <div className="swift">
            <div className="logo-name">
              <div className="img">
                <img src={logo} alt="" />
              </div>
              <div className="name">
                <h1>Swift</h1>
                <span>e-Learning</span>
              </div>
            </div>
            <p>Most affordable and friendly E-Learning Platform</p>
          </div>
          <div className="lists-cont">
            <div>
              <h1>Quick Links</h1>
              <ul>
                <li>Blog</li>
                <li>Pricing</li>
                <li>Instructors</li>
                <li>Careers</li>
                <li>Support</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
            <div>
              <h1>Learning Options</h1>
              <ul>
                <li>Self-paced Courses</li>
                <li>Incubator Programs</li>
                <li>Personal Coaching</li>
                <li>Enterprise Learning</li>
                <li>Career-building Paths</li>
              </ul>
            </div>
            <div>
              <h1>Courses</h1>
              <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>Power BI</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="socials">
          <div className="social-head">
            <h1>Visit us</h1>
          </div>
          <div className="social-logos">
            <div>
              <img src={facebook} alt="" />
            </div>
            <div>
              <img src={linkedIn} alt="" />
            </div>
            <div>
              <img src={youtube} alt="" />
            </div>
            <div>
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© Copyright 2023 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
