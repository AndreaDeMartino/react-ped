import React from "react";
// STYLE
import Style from "./activities.module.scss";

// COMPONENTS
import Container from "../UI/Container/Container";
import Activity from "./Activity/Activity";

const Activities = ({ activityList }) => {
  return (
    <Container>
      <div className={Style.activities}>
        {activityList.map((activity) => {
          return <Activity key={activity.id} activity={activity}></Activity>;
        })}
      </div>
    </Container>
  );
};

export default Activities;
