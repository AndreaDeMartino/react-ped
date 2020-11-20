import React from "react";

// STYLE
import Style from "./footer.module.scss";

//COMPONENTS
import Container from "../UI/Container/Container";

//IMAGES
import facebook from "./../../assets/img/facebook.png";
import instagram from "./../../assets/img/instagram.png";
import youtube from "./../../assets/img/youtube.jpg";
import italy from "./../../assets/img/italy.png";

const Footer = () => {
  return (
    <Container>
      <div className={Style.footer}>
        <div className={Style.footerSocial}>
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={youtube} alt="youtube" />
        </div>

        <div className={Style.footerLanguage}>
          <img src={italy} alt="italy" />
          <p>ITA</p>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
