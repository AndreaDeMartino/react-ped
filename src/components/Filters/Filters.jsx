import React, { useState, useEffect } from "react";

// STYLE
import Style from "./filters.module.scss";

// COMPONENTS
import Date from "./Date/Date";
import Box from "../UI/Box/Box";

// DATA
import { calendar } from "../../data/data";

const Filters = ({
  activityList,
  setFilter,
  categoryList,
  nameList,
  clubList,
}) => {
  // Hooks Actual Filter
  const [actualCategory, setActualCategory] = useState("Tutte le categorie");
  const [actualName, setActualName] = useState("Tutte le attività");
  const [actualClub, setActualClub] = useState("Tutti i club");

  // Hooks Toggle
  const [categoryListToggle, setCategoryListToggle] = useState(false);
  const [nameListToggle, setNameListToggle] = useState(false);
  const [clubListToggle, setClubListToggle] = useState(false);

  /****************************************************
   * Functions
   ****************************************************/

  // Category
  const SetCategoryHandler = (category) => {
    setActualCategory(category);
  };

  useEffect(() => {
    if (actualCategory === "Tutte Le Categorie") {
      setFilter(activityList);
    } else {
      setFilter(
        activityList.filter((item) => {
          return item.category === actualCategory;
        })
      );
    }
    setCategoryListToggle(false);
  }, [actualCategory]);

  // Name
  const SetNameHandler = (name) => {
    setActualName(name);
  };

  useEffect(() => {
    if (actualName === "Tutte le Attivita") {
      setFilter(activityList);
    } else {
      setFilter(
        activityList.filter((item) => {
          return item.name === actualName;
        })
      );
    }
    setNameListToggle(false);
  }, [actualName]);

  // Club
  const SetClubHandler = (club) => {
    setActualClub(club);
  };

  useEffect(() => {
    if (actualClub === "Tutti I Club") {
      setFilter(activityList);
    } else {
      setFilter(
        activityList.filter((item) => {
          return item.club === actualClub;
        })
      );
    }
    setClubListToggle(false);
  }, [actualClub]);

  // Render
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
            <p className={Style.selectorText}>{actualClub}</p>
            <i
              className={
                !clubListToggle ? "fas fa-angle-down" : "fas fa-angle-up"
              }
              onClick={() => setClubListToggle(!clubListToggle)}
            ></i>
            {clubListToggle && (
              <Box
                list={clubList}
                colored={false}
                setItem={SetClubHandler}
              ></Box>
            )}
          </div>

          <div className={`${Style.selector} ${Style.selectionCategory}`}>
            <i className="fas fa-fire"></i>
            <p className={Style.selectorText}>{actualCategory}</p>
            <i
              className={
                !categoryListToggle ? "fas fa-angle-down" : "fas fa-angle-up"
              }
              onClick={() => setCategoryListToggle(!categoryListToggle)}
            ></i>
            {categoryListToggle && (
              <Box
                list={categoryList}
                colored={true}
                setItem={SetCategoryHandler}
              ></Box>
            )}
          </div>

          <div className={`${Style.selector} ${Style.selectionActivity}`}>
            <i className="fas fa-dumbbell"></i>
            <p className={Style.selectorText}>{actualName}</p>
            <i
              className={
                !nameListToggle ? "fas fa-angle-down" : "fas fa-angle-up"
              }
              onClick={() => setNameListToggle(!nameListToggle)}
            ></i>
            {nameListToggle && (
              <Box
                list={nameList}
                colored={false}
                setItem={SetNameHandler}
                toggle={setNameListToggle}
              ></Box>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
