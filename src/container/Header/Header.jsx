import React from "react";
import "./Header.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="#home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase The New Flavor" />
        <h1 className="app__header-h1">The Key To Find Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse libero
          veritatis sed quisquam temporibus voluptates earum eum obcaecati dolor
          aliquam!
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="Welcome" />
      </div>
    </div>
  );
};

export default Header;
