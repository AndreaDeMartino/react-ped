//REACT
import React, { useState, useEffect } from "react";

//STYLE
import Style from "./home.module.scss";

//IMG
import Arco from "./../assets/img/arco.png";
import BannerApp from "./../assets/img/banner_app.png";

//COMPONENTS
import Banner from "./../components/Banner/Banner";
import Container from "./../components/UI/Container/Container";
import Alerts from "../components/Alerts/Alerts";

// MOTION
import { motion } from "framer-motion";

// UTILITY
import { homeAnimation } from "./../utility";
import { leftLong } from "./../utility";
import { rightLong } from "./../utility";

const Home = ({ activityList }) => {
  // DETECT BREAKPOINT
  /****************************************************/
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 880;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Remove the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  /****************************************************/
  return (
    <motion.div
      className={Style.home}
      variants={homeAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {width > breakpoint ? (
        <>
          <Banner activityList={activityList}></Banner>
          <Container>
            <motion.div className={Style.homeArc} variants={leftLong}>
              <img src={Arco} alt="Arco" />
            </motion.div>
            <Alerts></Alerts>
            <motion.div className={Style.HomeLogo} variants={rightLong}>
              <img src={BannerApp} alt="Arco" />
            </motion.div>
          </Container>
        </>
      ) : (
        <div className={Style.MobileAllert}>
          <h2>PAGINA HOME</h2>
          <h3>QUESTA PAGINA NON È ANCORA DISPONIBILE IN MOBILE</h3>
        </div>
      )}
    </motion.div>
  );
};

export default Home;
