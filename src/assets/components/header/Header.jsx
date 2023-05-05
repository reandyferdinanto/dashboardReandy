import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../../assets/img/me_R.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
       <h3 className="logo">
          <span className="reandy">Reandy</span>&nbsp;
          <span className="ferdinanto">Ferdinanto</span>
        </h3>
      <div className="header__container">
      <h1 className="text-light">
          <span className="reandy">Reandy</span>&nbsp;
          <span className="ferdinanto">Ferdinanto</span>
        </h1>
        <h5 className="text-header">Cost Engineer | Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
