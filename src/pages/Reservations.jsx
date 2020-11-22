//REACT
import React, { useState, useEffect } from "react";

//STYLE
import Style from "./reservation.module.scss";

//COMPONENTS
import Filters from "./../components/Filters/Filters";
import Activities from "./../components/Activities/Activities";

// UTILITY
import { getSelector, removeDuplicate } from "./../utility";

const Reservations = ({ activityList, changeList }) => {

  // All activity Hook
  const [filterData, setfilterData] = useState(activityList);

  // All type lists Hook
  const [categoryList, setCategoryList] = useState([]);
  const [nameList, setNameList] = useState([]);
  const [clubList, setClubList] = useState([]);

  // Get clean lists
  useEffect(() => {
    const categories = removeDuplicate(getSelector(activityList, "category"));
    const name = removeDuplicate(getSelector(activityList, "name"));
    const club = removeDuplicate(getSelector(activityList, "club"));

    setCategoryList(categories);
    setNameList(name);
    setClubList(club);
    setfilterData(activityList)
  }, [activityList]);

  return (
    <div className={Style.reservation}>
      <Filters 
        activityList={activityList}
        setFilter={setfilterData}
        categoryList={categoryList}
        nameList={nameList}
        clubList={clubList}
      ></Filters>
      <Activities activityList={filterData} changeList={changeList}></Activities>
    </div>
  );
};

export default Reservations;
