//React
import React from "react";

//COMPONENTS
import Filters from "./../components/Filters/Filters";
import Activities from "./../components/Activities/Activities";

const Reservations = () => {
  return (
    <div className="Reservations">
      <Filters></Filters>
      <Activities></Activities>
    </div>
  );
};

export default Reservations;
