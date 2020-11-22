import React, { useState, useEffect } from "react";

// STYLE
import Style from "./activity.module.scss";

// COMPONENTS
import Badge from "../../UI/Badge/Badge";
import Button from "../../UI/Button/Button";

// MOTION
import { motion } from "framer-motion";

// UTILITY
import { top } from "./../../../utility";

const Activity = ({ activity }) => {
  /****************************************************
   * FUNCTIONS
   ****************************************************/

  const getText = () => {
    switch (activity.status) {
      case "Subscribed":
        return "ANNULLA";
      case "Avaible":
        return "ISCRIVITI";
      case "Waiting":
        return "IN ATTESA";
      case "NotAvaible":
        return "NON DISPONIBILE";
      default:
        return "ERRORE";
    }
  };
  const getDescription = () => {
    switch (getText()) {
      case "IN ATTESA":
        return "Prenota il tuo turno";
      case "ISCRIVITI":
        return "Posti Disponibili";
      case "ANNULLA":
        return "Posto Prenotato";
      case "NON DISPONIBILE":
        return "Non Disponibile";
      default:
        return "Errore";
    }
  };

  // DETECT BREAKPOINT
  /****************************************************/
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 575;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Remove the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  /****************************************************/

  return (
    <motion.div className={Style.activity} variants={top}>
      <Badge className={Style.activityBade} color={activity.color}></Badge>
      <img
        className={Style.activityLogo}
        src={activity.logo}
        alt={activity.name}
      />
      <h3 className={Style.activityTitle}>
        {activity.name}
        {width < breakpoint && <i className="fas fa-chevron-right"></i>}
      </h3>
      <div className={Style.activityDuration}>
        <i className="far fa-clock"></i>
        <h5>{activity.duration} min</h5>
      </div>
      <div className={Style.activityTiming}>
        <h4>{activity.startTime}</h4>
        <h5>{activity.endTime}</h5>
      </div>
      <div className={Style.activityStatus}>
        <h4>{activity.occupancy}</h4>
        <h5>{getDescription()}</h5>
      </div>
      <Button
        className={Style.activityButton}
        color={activity.status}
        text={getText()}
      ></Button>
      {width > breakpoint && <i className="fas fa-chevron-right"></i>}
    </motion.div>
  );
};

export default Activity;
