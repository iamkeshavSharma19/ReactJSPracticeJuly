import React from "react";
import CreateWrestler from "./components/CreateWrestler";
import DisplayWrestlers from "./components/DisplayWrestlers";

const WrestlersApp = () => {
  return (
    <div>
      <h1>Wrestlers Management System</h1>
      <br />
      <CreateWrestler />
      <br />
      <DisplayWrestlers />
    </div>
  );
};

export default WrestlersApp;
