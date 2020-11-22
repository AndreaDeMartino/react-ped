//React
import React, { useState, useEffect } from "react";

//STYLE
import "./style/main.scss";

//COMPONENTS
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import Alerts from "./pages/Alerts";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";

//DATA
import { activityListData } from "./data/data";

//ROUTER
import { Switch, Route } from "react-router-dom";

function App() {
  const [activityList, setActivityList] = useState([]);

  // Set List from local data
  useEffect(() => {
    setActivityList(activityListData);
  }, []);

  // Change List status from from activity button
  const changeListHandler = (element) => {
    let newStatus = "";
    if (element.status === "Subscribed") {
      newStatus = "Avaible";
      setList(element, newStatus);
    } else if (element.status === "Avaible") {
      newStatus = "Subscribed";
      setList(element, newStatus);
    } else {
      console.log("Attesa non ancora gestita");
    }
  };

  const setList = (element, newStatus) => {
    const newList = [...activityList];
    newList[element.id - 1].status = newStatus;
    setActivityList(newList);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <Home activityList={activityList} />
        </Route>
        <Route path="/reservations">
          <Reservations
            activityList={activityList}
            changeList={changeListHandler}
          />
        </Route>
        <Route path="/alerts">
          <Alerts />
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
