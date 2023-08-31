import React from "react";
import "./meet.css";
import image1 from "../../assets/IMAGE.png";
import image2 from "../../assets/IMAGE-1.png";
import image3 from "../../assets/IMAGE-2.png";
import image4 from "../../assets/IMAGE-3.png";
const Meet = () => {
  return (
    <div className="meet">
      <div className="meet-cont">
        <div className="meet-title">
          <h1>Meet Our Instructors</h1>
          <p>
            Benefiting from the expertise of the most accomplished professionals
            in your field.
          </p>
        </div>
        <div className="meet-body">
          <div className="image1">
            <img src={image1} alt="" />
            <div className="name-cont">
              <div className="name">
                <h1>Sobowale Goodluck</h1>
                <p>UI/UX Design Instructor</p>
              </div>
            </div>
          </div>
          <div className="image2">
            <img src={image2} alt="" />
            <div className="name-cont">
              <div className="name">
                <h1>David Ogbodo</h1>
                <p>Data Analysis Instructor</p>
              </div>
            </div>
          </div>
          <div className="image3">
            <img src={image3} alt="" />
            <div className="name-cont">
              <div className="name">
                <h1>Aje Success</h1>
                <p>Backend Instructor</p>
              </div>
            </div>
          </div>
          <div className="image4">
            <img src={image4} alt="" />
            <div className="name-cont">
              <div className="name">
                <h1>Sunmisola Adeyanju</h1>
                <p>Frontend Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
