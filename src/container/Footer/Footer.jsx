import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactez nous</h1>
        <p className="p__opensans">+33 12 34 56 78</p>
        <p className="p__opensans">+33 98 76 54 32</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          &quot;Un savoir faire Inimitable depuis 1934&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horaire d'ouverture</h1>
        <p className="p__opensans">Lundi-Vendredi:</p>
        <p className="p__opensans">08h00 - 00h00</p>
        <p className="p__opensans">Samedi-Dimanche:</p>
        <p className="p__opensans">07h00 - 23h00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Boulangerie / Patisserie. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
