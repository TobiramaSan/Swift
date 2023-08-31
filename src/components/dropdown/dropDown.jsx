import React from "react";
import "./dropDown.css";
import ui from "../../assets/uiux.png";
import javascript from "../../assets/javascript (1).png";
import react from "../../assets/react.png";
import python from "../../assets/python.png";
import wordpress from "../../assets/wordpress.png";

const DropDown = ({ prop }) => {
  const testArray = [
    {
      link: "/Loan/group-lending-scheme",
      img: ui,
      firstText: "Introduction to UI/UX Design",
      secondText:
        "In this short course, you will learn the basics of UI/UX design, including design principles, color theory, typography, and layout.",
    },
    {
      link: "/Loan/sme",
      img: react,
      firstText: "Frontend Web Development With ReactJS",
      secondText:
        "Hello guys, welcome to front-end web development with React!! This course was made specifically for you, to take you f...",
    },
    {
      link: "/Loan/invoice",
      img: javascript,
      firstText: "Javascript Basics",
      secondText:
        "JavaScript (JS) is a high-level programming language that is commonly used for creating interactive web pages and...",
    },
  ];

  const testArray2 = [
    // Declare as const
    {
      link: "/Loan/buy-now-pay-later",
      img: python,
      firstText: "Introduction to Python",
      secondText:
        "Python is a high-level programming language that is known for its simplicity and readability.",
    },
    {
      link: "/Loan/sector",
      img: wordpress,
      firstText: "Introduction to Wordpress",
      secondText:
        "WordPress is a popular content management system (CMS) that allows users to easily create, manage, and publish digital ...",
    },
  ];

  return (
    <div className="dropdown">
      <div className="dropdown-cont">
        <div className="cont-1">
          {testArray.map((item, index) => {
            return (
              <div className="drop" key={index} onClick={prop}>
                <img src={item.img} alt="" />
                <div className="title">
                  <h1>{item.firstText}</h1>
                  <p>{item.secondText}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cont-2">
          {testArray2.map((item, index) => {
            return (
              <div className="drop" key={index} onClick={prop}>
                <img src={item.img} alt="" />
                <div className="title">
                  <h1>{item.firstText}</h1>
                  <p>{item.secondText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
