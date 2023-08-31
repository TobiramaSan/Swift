import React from "react";
import "./hero3.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import man from "../../assets/man.png";
const Hero3 = () => {
  return (
    <div className="hero3">
      <div className="hero3-cont">
        <div className="see-all">
          <div className="arrows">
            <div>
              <IoIosArrowBack />
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div>
          <span>See all</span>
        </div>
        <div className="bg">
          <div className="bg-text">
            <div className="bg-text-main">
              <h1>Transform yourself by learning at your convenience </h1>
              <p>
                Our goal is not only to provide students with education and
                experiences that prepare them for a successful career, but also
                to support them in achieving success in their chosen field by
                encouraging them to explore their passions and become leaders in
                their field.
              </p>
            </div>
            <div className="bg-text-sub">
              <h2>Applications are now open</h2>
              <button>Apply Now</button>
            </div>
          </div>
          <div className="bg-pic">
            <img src={man} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
