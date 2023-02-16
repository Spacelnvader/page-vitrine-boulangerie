import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Suivez nous sur Facebook</h1>
      <p className="p__opensans">Et ne manquez plus nos dernières nouveautés!</p>
      <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      
    </div>
    
  </div>
);

export default Newsletter;
