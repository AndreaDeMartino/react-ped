// REACT
import React, { useState, useEffect } from "react";

// STYLE
import Style from "./filters.module.scss";

// COMPONENTS
import Date from "./Date/Date";
import Box from "../Box/Box";

// DATA
import { calendar } from "../../data/data";

// MOTION
import { motion } from "framer-motion";

// UTILITY
import { filterAnimation } from "./../../utility";
import { left } from "./../../utility";
import { right } from "./../../utility";

const Filters = ({
  activityList,
  setFilter,
  categoryList,
  nameList,
  clubList,
}) => {
  /****************************************************
   * HOOKS
   ****************************************************/

  // Hooks Actual Filter
  const [actualCategory, setActualCategory] = useState("Tutte le categorie");
  const [actualName, setActualName] = useState("Tutte le attivita");
  const [actualClub, setActualClub] = useState("Tutti i club");

  // Hooks Toggle
  const [categoryListToggle, setCategoryListToggle] = useState(false);
  const [nameListToggle, setNameListToggle] = useState(false);
  const [clubListToggle, setClubListToggle] = useState(false);

  // Hooks Mobile Toggle
  const [mobileFilterToggle, setMobileFilterToggle] = useState(true);

  /****************************************************
   * Functions
   ****************************************************/

  // Set Actual Category
  const SetCategoryHandler = (category) => {
    setActualCategory(category);
    setCategoryListToggle(false);
    setNameListToggle(false);
    setClubListToggle(false);
  };

  // Set Actual Name
  const SetNameHandler = (name) => {
    setActualName(name);
    setCategoryListToggle(false);
    setNameListToggle(false);
    setClubListToggle(false);
  };

  // Set Actual Club
  const SetClubHandler = (club) => {
    setActualClub(club);
    setCategoryListToggle(false);
    setNameListToggle(false);
    setClubListToggle(false);
  };

  // Run filter on changing selection from boxes or changing data entry
  useEffect(() => {
    setFilter(
      activityList.filter((item) => {
        return (
          (actualCategory !== "Tutte le categorie"
            ? item.category === actualCategory
            : item.category) &&
          (actualName !== "Tutte le attivita"
            ? item.name === actualName
            : item.name) &&
          (actualClub !== "Tutti i club" ? item.club === actualClub : item.club)
        );
      })
    );
  }, [actualCategory, actualName, actualClub, setFilter, activityList]);

  /****************************************************
   * JSX
   ****************************************************/

  return (
    <motion.div
      className={Style.filters}
      variants={filterAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div className={Style.filtersCalendarWrapper} variants={left}>
        <div className={Style.filtersCalendar}>
          <i className="fas fa-chevron-left"></i>
          {calendar.map((date) => {
            return (
              <Date day={date} key={`${date.dayDate}${date.dayMonth}`}></Date>
            );
          })}
          <i className="fas fa-chevron-right"></i>
        </div>
      </motion.div>
      <motion.div
        className={
          mobileFilterToggle
            ? Style.filtersActive + " " + Style.filtersSelectionWrapper
            : Style.filtersSelectionWrapper
        }
        variants={right}
      >
        <div className={Style.filtersSelection}>
          <div
            className={Style.filtersMobileToggle}
            onClick={() => {
              setMobileFilterToggle(!mobileFilterToggle);
            }}
          >
            <i className="fas fa-sliders-h"></i>
            <p>Filtri</p>
          </div>

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

          <div
            className={`${Style.selector} ${Style.selectionCategory}`}
            style={
              clubListToggle && window.matchMedia("(max-width: 575px)").matches
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          >
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
          <div
            className={`${Style.selector} ${Style.selectionActivity}`}
            style={
              (clubListToggle || categoryListToggle) &&
              window.matchMedia("(max-width: 575px)").matches
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          >
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
      </motion.div>
    </motion.div>
  );
};

export default Filters;
