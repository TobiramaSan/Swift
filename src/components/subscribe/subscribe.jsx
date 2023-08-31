import React from "react";
import "./subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-cont">
        <div className="subtitle">
          <h1>Subscribe to our Newsletter</h1>
          <p>
            Our newsletter is the best way to stay up-to-date with everything
            that's going on our new and updated courses.
          </p>
        </div>
        <div className="subbody">
          <input type="text" placeholder="Type mail here" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
