import React from "react";
import AddWrestlers from "./components/AddWrestlers";
import DisplayWrestlers from "./components/DisplayWrestlers";

const ReactWrestlingApp = () => {
  return (
    <div>
      <h1>Wrestling App</h1>
      <AddWrestlers />
      <hr />
      <DisplayWrestlers />
    </div>
  );
};

export default ReactWrestlingApp;
