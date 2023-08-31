import React from "react";
import "./pricing.css";
import priceImage1 from "../../assets/priceImage1.png";
import priceImage2 from "../../assets/priceImage2.png";
import priceImage3 from "../../assets/priceImage3.png";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-cont">
        <div className="pricing-head">
          <h1>Our Pricing</h1>
          <p>
            Choose between pre-recorded courses or interactive classes led by an
            instructor in real-time.
          </p>
        </div>
        <div className="price-body">
          <div className="price-item">
            <div className="price-item-img">
              <img src={priceImage1} alt="" />
            </div>
            <div className="price-item-text">
              <div className="price-item-tile">
                <h1>Self-Paced Courses</h1>
                <span>$14.99 /month</span>
              </div>
              <div className="price-item-details">
                <ul>
                  <li>Access all Recorded courses</li>
                  <li>Certification</li>
                </ul>
              </div>
              <button>Explore Courses</button>
            </div>
          </div>
          <div className="price-item">
            <div className="price-item-img">
              <img src={priceImage2} alt="" />
            </div>

            <div className="price-item-text">
              <div className="price-item-tile">
                <h1>Incubator Program</h1>
                <span>$149.99 /Program</span>
              </div>
              <div className="price-item-details">
                <ul>
                  <li>5-7 months Intensive training</li>
                  <li>Skill-to-job program</li>
                  <li>3 months Internship placements</li>
                </ul>
              </div>
              <button>Explore Courses</button>
            </div>
          </div>
          <div className="price-item">
            <div className="price-item-img">
              <img src={priceImage3} alt="" />
            </div>
            <div className="price-item-text">
              <div className="price-item-tile">
                <h1>Personal Coaching</h1>
                <span>$249.99 /Cohort</span>
              </div>
              <div className="price-item-details">
                <ul>
                  <li>1:1 coaching</li>
                  <li>Decide what to learn with the instructor</li>
                  <li>Flexible class time</li>
                </ul>
              </div>
              <button>Explore Courses</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
