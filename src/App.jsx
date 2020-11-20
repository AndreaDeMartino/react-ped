//React
import React from "react";

//STYLE
import "./style/main.scss";

//COMPONENTS
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import Navbar from "./components/Navbar/Navbar";

//Router
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
          <Reservations />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
