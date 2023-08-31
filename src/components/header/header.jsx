import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import dark from "../../assets/dark-mode.png";
import search from "../../assets/search-logo.png";
import DropDown from "../dropdown/dropDown";
import menu from "../../assets/align-right.png";
import cancel from "../../assets/close-square.png";

const Header = () => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [isMobileActive, setIsMobileActive] = useState(false);
  const toggleDropDown = () => {
    setIsDropOpen(!isDropOpen);
  };

  return (
    <div className="header">
      <div className={isMobileActive ? "active-mobile" : "header-cont"}>
        <div className="logo-name">
          <div>
            <div className="img">
              <img src={logo} alt="" />
            </div>
            <div className="name">
              <h1>Swift</h1>
              <span>e-Learning</span>
            </div>
          </div>
          {isMobileActive ? (
            <img
              className="menu"
              src={cancel}
              alt=""
              onClick={() => {
                setIsMobileActive(false);
              }}
            />
          ) : (
            <img
              className="menu"
              src={menu}
              alt=""
              onClick={() => {
                setIsMobileActive(true);
              }}
            />
          )}
        </div>

        <div className="list-items">
          <p>Home</p>
          <div>
            <p onClick={toggleDropDown}>Courses</p>
            {isDropOpen && (
              <DropDown
                prop={() => {
                  setIsDropOpen(false);
                }}
              />
            )}
          </div>

          <p>Pricing</p>
          <p>Testimonials</p>
        </div>

        <div className="dark-search">
          <div className="dark">
            <img src={dark} alt="" />
          </div>
          <form action="">
            <div className="input-search">
              <img src={search} alt="" />
              <input type="text" placeholder="Search for course" />
            </div>

            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
