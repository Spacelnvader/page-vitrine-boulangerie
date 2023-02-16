import React from "react";

import { SubHeading } from "../../components";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Découvrez de nouvelles saveurs" />
      <h1 className="app__header-h1">Un Goût Inimitable</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Nos pains sont tous fait à la main par nos artisans chevronés <br/>avec une recette familliale transmise depuis des générations{" "}
      </p>
      
    </div>

    
  </div>
);

export default Header;
