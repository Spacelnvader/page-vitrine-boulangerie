import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Retrouvez-nous
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          8 rue du Boulanger, 75010 Paris, France
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Heures d'ouverture
        </p>
        <p className="p__opensans">Lundi - Vendredi : 08h00 - 20h00</p>
        <p className="p__opensans">Samedi - Dimanche : 10h00 - 19h00</p>
      </div>
      
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
