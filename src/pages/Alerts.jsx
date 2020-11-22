//REACT
import React from "react";

//STYLE
import Style from "./alerts.module.scss";

//IMG
import Work from "./../assets/img/work.png";

//COMPONENTS
import Container from "../components/UI/Container/Container";

// MOTION
import { motion } from "framer-motion";

// UTILITY
import { filterAnimation } from "./../utility";
import { left } from "./../utility";
import { right } from "./../utility";

const Alerts = () => {
  return (
    <Container>
      <motion.div
        className={Style.alerts}
        variants={filterAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.h2 variants={left}>WORK IN PROGRESS</motion.h2>
        <motion.img variants={right} src={Work} alt="Work" />
      </motion.div>
    </Container>
  );
};

export default Alerts;
