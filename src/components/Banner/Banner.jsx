import React from "react";

// STYLE
import Style from "./banner.module.scss";

//COMPONENTS
import Activity from "./../Activities/Activity/Activity";

// MOTION
import { motion } from "framer-motion";

// UTILITY
import { leftLong } from "./../../utility";
import { rightLong } from "./../../utility";

const Banner = ({ activityList }) => {
  return (
    <div className={Style.banner}>
      <motion.div className={Style.bannerActivity} variants={leftLong}>
        <h2>
          <i className="fas fa-calendar-alt"></i>
          LE TUE PROSSIME ATTIVITÀ
        </h2>
        {activityList.length > 0 && (
          <Activity activity={activityList[0]} type="home"></Activity>
        )}
        {activityList.length > 0 && (
          <Activity activity={activityList[2]} type="home"></Activity>
        )}
      </motion.div>
      <motion.div className={Style.bannerPending} variants={rightLong}>
        <h2>
          HAI <span>1</span> ATTIVITÀ IN LISTA D'ATTESA
        </h2>
        {activityList.length > 0 && (
          <Activity activity={activityList[1]} type="home"></Activity>
        )}
      </motion.div>
    </div>
  );
};

export default Banner;
