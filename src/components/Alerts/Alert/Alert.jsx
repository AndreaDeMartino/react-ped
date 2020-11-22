import React, { useState } from "react";

// STYLE
import Style from "./alert.module.scss";

//MOTION
import { motion, AnimateSharedLayout } from "framer-motion";

const Alert = ({ message }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <AnimateSharedLayout>
      <motion.div
        layout
        className={Style.alert}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <motion.div className={Style.alertHeader} layout>
          <div className={Style.alertTitle}>
            <i className="fas fa-circle"></i>
            <h3>{message.title}</h3>
          </div>
          <h4>{message.date}</h4>
          <i
            className={
              toggle
                ? `fas fa-chevron-down ${Style.toggled}`
                : "fas fa-chevron-right"
            }
          ></i>
        </motion.div>
        {toggle && <p className={Style.alertBody}>{message.description}</p>}
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Alert;
