import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsLetter">
    <div className="app__newsLetter-heading">
      <SubHeading title="News Letter" />
      <h1 className="headtext__cormorant">Subscribe To Our NewsLetter</h1>
      <p className="p__opensans">And Never Miss Latest Updates</p>
    </div>

    <div className="app__newsLetter-input flex__center">
      <input type="email" name="Email" placeholder="Enter Yore Email" />
      <button type="button" className="custom__button">
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
