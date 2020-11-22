// REACT
import React, { useState, useEffect } from "react";

// STYLE
import Style from "./alerts.module.scss";

// DATA
import { alertsList } from "../../data/data";

//COMPONENTS
import Alert from "./Alert/Alert";

// MOTION
import { motion } from "framer-motion";

// UTILITY
import { right } from "./../../utility";

const Alerts = () => {
  const [alertsData, setAlertsData] = useState([]);

  useEffect(() => {
    setAlertsData(alertsList);
  }, []);

  return (
    <motion.div className={Style.alerts} variants={right}>
      <div className={Style.alertsCto}>
        <h3>
          <i className="fas fa-bell"></i>AVVISI
        </h3>
        <p>Mostra tutti</p>
      </div>
      <div className={Style.alertsList}>
        {alertsData.map((alert) => (
          <Alert message={alert} key={alert.id}></Alert>
        ))}
      </div>
    </motion.div>
  );
};

export default Alerts;
