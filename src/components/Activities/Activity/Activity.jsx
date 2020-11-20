import React from "react";

// STYLE
import Style from "./activity.module.scss";

// COMPONENTS
import Badge from "../../UI/Badge/Badge"
import Button from "../../UI/Button/Button";

const Activity = ({ activity }) => {
  return (
    <div className={Style.activity}>
      <Badge color={activity.color}></Badge>
      <img className={Style.activityLogo} src={activity.logo} alt={activity.name} />
      <h3 className={Style.activityTitle}>{activity.name}</h3>
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
        <h5>{activity.status}</h5>
      </div>
      <Button color={activity.status} text={activity.status}></Button>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

export default Activity;
