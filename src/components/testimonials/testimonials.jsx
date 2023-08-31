import React from "react";
import "./testimonials.css";
import rate from "../../assets/Frame 200.png";
import pic1 from "../../assets/Frame 353.png";
import pic2 from "../../assets/Frame 353-1.png";
import pic3 from "../../assets/Frame 353-2.png";
import pic4 from "../../assets/Frame 353-3.png";
import pic5 from "../../assets/Frame 353-4.png";
import pic6 from "../../assets/Frame 353-5.png";
import pic7 from "../../assets/Frame 353-6.png";
import pic8 from "../../assets/Frame 353-7.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-cont">
        <div className="test-text-cont">
          <span>Testimonials</span>
          <p>What they say about us</p>
        </div>
        <div className="flex-test">
          <div className="flex-1">
            <div className="prec-test-cont">
              <div className="testimonials-title">
                <div className="text-img">
                  <img src={pic8} alt="" />
                  <div className="name-title">
                    <span>Oore Opadokun</span>
                    <p>Student</p>
                  </div>
                </div>
                <img className="main-img" src={rate} alt="" />
              </div>

              <div className="main-text">
                <p>
                  I have been using this e-learning platform for a few months
                  now and have already seen significant improvement in my
                  skills. The courses are well-structured and easy to follow,
                  and the feedback from instructors is invaluable.
                </p>
              </div>
            </div>

            <div className="prec-test-cont">
              <div className="testimonials-title">
                <div className="text-img">
                  <img src={pic6} alt="" />
                  <div className="name-title">
                    <span>Akintunde Dave</span>
                    <p>Student</p>
                  </div>
                </div>
                <img className="main-img" src={rate} alt="" />
              </div>
              <div className="main-text">
                <p>
                  I highly recommend this e-learning platform to anyone looking
                  to learn new skills or advance their career. The platform
                  offers a wide range of courses and the pricing is very
                  reasonable.
                </p>
              </div>
            </div>
            <div className="prec-test-cont">
              <div className="testimonials-title">
                <div className="text-img">
                  <img src={pic5} alt="" />
                  <div className="name-title">
                    <span>David Otugbo</span>
                    <p>Student</p>
                  </div>
                </div>
                <img className="main-img" src={rate} alt="" />
              </div>
              <div className="main-text">
                <p>
                  The flexibility of this e-learning platform is fantastic. I
                  can learn at my own pace, on my own schedule, and the courses
                  are always available to me.
                </p>
              </div>
            </div>

            <div className="prec-test-cont background-grn">
              <div className="testimonials-title">
                <div className="text-img">
                  <img src={pic4} alt="" />
                  <div className="name-title">
                    <span>Ayo Odupe</span>
                    <p>Student</p>
                  </div>
                </div>
                <img className="main-img" src={rate} alt="" />
              </div>
              <div className="main-text">
                <p className="background-grn">
                  I absolutely love this e-learning platform! The interface is
                  user-friendly, the content is engaging, and the instructors
                  are knowledgeable and supportive
                </p>
              </div>
            </div>
          </div>
          <div className="flex-2">
            <div className="prec-test-cont">
              <div className="testimonials-title">
                <div className="text-img">
                  <img src={pic3} alt="" />
                  <div className="name-title">
                    <span>Matthew Kunle</span>
                    <p>Student</p>
                  </div>
                </div>
                <img className="main-img" src={rate} alt="" />
              </div>
              <div className="main-text">
                <p>
                  I absolutely love this e-learning platform! The interface is
                  user-friendly, the content is engaging, and the instructors
                  are knowledgeable and supportive
                </p>
              </div>
            </div>

            <div className="prec-test-cont">
              <div className="testimonials-title">
                <div className="text-img">
                  <img src={pic2} alt="" />
                  <div className="name-title">
                    <span>Aje Juliana</span>
                    <p>Student</p>
                  </div>
                </div>
                <img className="main-img" src={rate} alt="" />
              </div>
              <div className="main-text">
                <p>
                  I appreciate how interactive this e-learning platform is. The
                  quizzes and interactive exercises have helped me solidify my
                  understanding of the material.
                </p>
              </div>
            </div>

            <div className="prec-test-cont">
              <div className="testimonials-title">
                <div className="text-img">
                  <img src={pic1} alt="" />
                  <div className="name-title">
                    <span>Seun Folarin</span>
                    <p>Student</p>
                  </div>
                </div>
                <img className="main-img" src={rate} alt="" />
              </div>
              <div className="main-text">
                <p>
                  The community aspect of this e-learning platform is a huge
                  bonus. Being able to connect with other learners and share
                  ideas
                </p>
              </div>
            </div>
            <div className="prec-test-cont">
              <div className="testimonials-title">
                <div className="text-img">
                  <img src={pic7} alt="" />
                  <div className="name-title">
                    <span>Seun Folarin</span>
                    <p>Student</p>
                  </div>
                </div>
                <img className="main-img" src={rate} alt="" />
              </div>
              <div className="main-text">
                <p>
                  The instructors on this e-learning platform are top-notch.
                  They are experts in their fields and provide detailed feedback
                  that has helped me improve my skills significantly
                </p>
              </div>
            </div>
          </div>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Testimonials;
