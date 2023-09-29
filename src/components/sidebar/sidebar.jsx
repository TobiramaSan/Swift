import React from "react";
import logo from "../../assets/whitelogoo.png";
import square1 from "../../assets/square1.png";
import square2 from "../../assets/square2.png";
import square3 from "../../assets/square3.png";
import square4 from "../../assets/square4.png";
import "./sidebar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
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
    </div>
  );
};
export default SideBar;
