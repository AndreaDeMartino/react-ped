import React from "react";
// STYLE
import Style from "./activities.module.scss";

// COMPONENTS
import Container from "../UI/Container/Container";
import Activity from "./Activity/Activity";

// MOTION
import { motion } from "framer-motion";

// UTILITY
import {pageAnimation} from "./../../utility";

const Activities = ({ activityList }) => {
  return (
    <Container>
      <motion.div
        className={Style.activities}
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {activityList.map((activity) => {
          return <Activity key={activity.id} activity={activity}></Activity>;
        })}
      </motion.div>
    </Container>
  );
};

export default Activities;
