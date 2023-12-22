import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__menu section__padding flex__center" id="menu">
      <div className="app__menu-title">
        <SubHeading title="Menu That Fit Your Palette" />
        <h1 className="headtext__cormorant">Today's Spacial</h1>
      </div>
      <div className="app__menu-menu">
        <div className="app__menu-menu_wine flex__center">
          <p className="app__menu-menu_heading">Wine & Beer</p>
          <div className="app__menu-menu_items">
            {data.wines.map((data, index) => (
              <MenuItem
                key={data.title + index}
                title={data.title}
                tags={data.tags}
                price={data.price}
              />
            ))}
          </div>
        </div>

        <div className="app__menu-menu-image">
          <img src={images.menu} alt="Menu Image" />
        </div>

        <div className="app__menu-menu_cocktails flex__center">
          <p className="app__menu-menu_heading">Cocktails</p>
          <div className="app__menu-menu_items">
            {data.cocktails.map((data, index) => (
              <MenuItem
                key={data.title + index}
                title={data.title}
                tags={data.tags}
                price={data.price}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
