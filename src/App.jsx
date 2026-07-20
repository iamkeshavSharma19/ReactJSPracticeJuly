import React from "react";
import ControlledForms01 from "./components/ControlledFormsByFollowing/ControlledForms01";
import ControllerForms01PracticeOnMyOwn from "./components/ControlledFormsByFollowing/ControllerForms01PracticeOnMyOwn";
import TodoContextProvider from "./components/TodoAppContextAPIByFollowing/context/TodoContextProvider";
import TodoApp from "./components/TodoAppContextAPIByFollowing/TodoApp";
import ControlledForms02ByFollowing from "./components/ControlledFormsPart2UsingSingleState/ControlledForms02ByFollowing";
import LifeCycleCBCByFollowing from "./components/LifeCycleByFollowing/LifeCycleCBCByFollowing";

const App = () => {
  return (
    <div>
      {/* <ControlledForms01 /> */}
      {/* <ControllerForms01PracticeOnMyOwn /> */}
      {/* <TodoContextProvider>
        <TodoApp />
      </TodoContextProvider> */}
      {/* <ControlledForms02ByFollowing /> */}
      <LifeCycleCBCByFollowing />
    </div>
  );
};

export default App;
