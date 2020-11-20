//React
import React from "react";

//STYLE
import "./style/main.scss";

//COMPONENTS
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//DATA
import { activityList } from "./data/data";

//ROUTER
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/reservations">
          <Reservations activityList={activityList}/>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
