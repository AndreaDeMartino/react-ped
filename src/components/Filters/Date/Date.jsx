import React from "react";

// STYLE
import Style from "./date.module.scss";

const Date = ({ day }) => {
  return (
    <div className={Style.date}>
      <div className={Style.dateText}>
        <p>{day.dayName}</p>
        <p className={Style.dateDay}>{day.dayDate}</p>
        <p>{day.dayMonth}</p>
      </div>
    </div>
  );
};

export default Date;
