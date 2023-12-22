import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "1rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          iusto? Magni saepe totam, voluptate delectus exercitationem veniam ab
          quos ducimus.
        </p>
        <p
          className="p__opensans"
          style={{ color: "#dcca87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__cormorant">Lorem ipsum dolor sit amet.</p>
        <p className="p__cormorant">Lorem ipsum dolor sit amet.</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="Find Us" />
    </div>
  </div>
);

export default FindUs;
