import React from "react";
// import Map from "./map/Map";
import Component from "./components/Login/Component";

const App = () => {
  return (
    <div className="app">
      {/* <Map /> */}
      <Component
        headingLabel="Add Task"
        headingPlaceHolder="Task.."
        passwordLabel="name"
        passwordPlaceHolder="name.."
      />
    </div>
  );
};

export default App;
