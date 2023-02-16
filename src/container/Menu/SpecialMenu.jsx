import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

// Лучше перезагрузить локал хост для тяги данных

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Nos créations pour vous" />
      <h1 className="headtext__cormorant">Spécialités</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Pâtisserie</p>
        <div className="app__specialMenu_menu_items">
          {data.patisseries.map((patisserie, index) => (
            <MenuItem
              key={patisserie.title + index}
              title={patisserie.title}
              price={patisserie.price}
              tags={patisserie.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Pains</p>
        <div className="app__specialMenu_menu_items">
          {data.pains.map((pain, index) => (
            <MenuItem
              key={pain.title + index}
              title={pain.title}
              price={pain.price}
              tags={pain.tags}
            />
          ))}
        </div>
      </div>
    </div>

  
  </div>
);

export default SpecialMenu;
