//React
import React from 'react';

//STYLE
import "./style/main.scss"

//COMPONENTS
import AppNav from "./components/AppNav/AppNav"
import Filters from "./components/Filters/Filters"

function App() {
  return (
    <div className="App">
      <AppNav></AppNav>
      <Filters></Filters>
    </div>
  );
}

export default App;
