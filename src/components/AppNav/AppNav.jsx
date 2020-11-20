import React from "react";

// STYLE
import Style from "./appNav.module.scss";

//COMPONENTS
import Container from "../UI/Container/Container";

// IMG
import userLogo from "../../assets/img/user_logo.jpeg";

const AppNav = () => {
  return (
    <Container>
      <nav className={Style.navbar}>
        <div className={Style.navbarList}>
          <div className={Style.navbarItem}>
            <i className="fas fa-home"></i>
          </div>
          <div className={Style.navbarItem}>
            <i className="far fa-calendar-alt"></i>
          </div>
          <div className={Style.navbarItem}>
            <i className="far fa-bell"></i>
          </div>
          <div className={Style.navbarLogo}>
            <i className={`${Style.navbarLogoIcon} fas fa-chevron-down`}></i>
            <img src={userLogo} alt="user_logo" />
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default AppNav;
