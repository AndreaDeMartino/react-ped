import React from "react";

// STYLE
import Style from "./navbar.module.scss";
//COMPONENTS
import Container from "../UI/Container/Container";
// IMG
import userLogo from "../../assets/img/user_logo.jpeg";
//ROUTER
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const url = location.pathname;
  return (
    <Container>
      <nav className={Style.navbar}>
        <div className={Style.navbarList}>
          {url === "/" && (
            <div className={`${Style.navbarItem} ${Style.active}`}>
              <Link to="/">
                <i className="fas fa-home"></i>
              </Link>
            </div>
          )}
          {url !== "/" && (
            <div className={Style.navbarItem}>
              <Link to="/">
                <i className="fas fa-home"></i>
              </Link>
            </div>
          )}
          {url === "/reservations" && (
            <div className={`${Style.navbarItem} ${Style.active}`}>
              <Link to="/reservations">
                <i className="far fa-calendar-alt"></i>
              </Link>
            </div>
          )}
          {url !== "/reservations" && (
            <div className={`${Style.navbarItem}`}>
              <Link to="/reservations">
                <i className="far fa-calendar-alt"></i>
              </Link>
            </div>
          )}
          <div className={Style.navbarItem}>
            <Link to="/allerts">
              <i className="far fa-bell"></i>
            </Link>
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

export default Navbar;
