import React from "react";

// STYLE
import Style from "./filters.module.scss";

// COMPONENTS
import Date from "./Date/Date";

// DATA
import { calendar } from "../../data/data";

const Filters = () => {
  return (
    <div className={Style.filters}>
      <div className={Style.filtersCalendarWrapper}>
        <div className={Style.filtersCalendar}>
          <i className="fas fa-chevron-left"></i>
          {calendar.map((date) => {
            return (
              <Date day={date} key={`${date.dayDate}${date.dayMonth}`}></Date>
            );
          })}
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className={Style.filtersSelectionWrapper}>
        <div className={Style.filtersSelection}>
          <div className={`${Style.selector} ${Style.selectionClub}`}>
            <i className="fas fa-map-marker-alt"></i>
            <p className={Style.selectorText}>Club Ravizza</p>
            <i className="fas fa-angle-down"></i>
          </div>

          <div className={`${Style.selector} ${Style.selectionCategory}`}>
            <i className="fas fa-fire"></i>
            <p className={Style.selectorText}>Categoria 1</p>
            <i className="fas fa-angle-down"></i>
          </div>

          <div className={`${Style.selector} ${Style.selectionActivity}`}>
            <i className="fas fa-dumbbell"></i>
            <p className={Style.selectorText}>Tutte le attività</p>
            <i className="fas fa-angle-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
