import React from "react";
import ControlledForms01 from "./components/ControlledFormsByFollowing/ControlledForms01";
import ControllerForms01PracticeOnMyOwn from "./components/ControlledFormsByFollowing/ControllerForms01PracticeOnMyOwn";
import TodoContextProvider from "./components/TodoAppContextAPIByFollowing/context/TodoContextProvider";
import TodoApp from "./components/TodoAppContextAPIByFollowing/TodoApp";

const App = () => {
  return (
    <div>
      {/* <ControlledForms01 /> */}
      {/* <ControllerForms01PracticeOnMyOwn /> */}
      <TodoContextProvider>
        <TodoApp />
      </TodoContextProvider>
    </div>
  );
};

export default App;
