import React, { useState } from "react";
import ControlledForms01 from "./components/ControlledFormsByFollowing/ControlledForms01";
import ControllerForms01PracticeOnMyOwn from "./components/ControlledFormsByFollowing/ControllerForms01PracticeOnMyOwn";
// import TodoContextProvider from "./components/TodoAppContextAPIByFollowing/context/TodoContextProvider";
// import TodoApp from "./components/TodoAppContextAPIByFollowing/TodoApp";
import ControlledForms02ByFollowing from "./components/ControlledFormsPart02AugPractice/ControlledForms02ByFollowing";
import LifeCycleCBCByFollowing from "./components/LifeCycleByFollowing/LifeCycleCBCByFollowing";
import ControlledForm01ByFollowing from "./ControlledFormsAugPractice/ControlledForm01ByFollowing";
import ControlledForms01OwnPractice from "./ControlledFormsAugPractice/ControlledForms01OwnPractice";
import ContextExample from "./components/ContextAPIPracticeByFollowing/ContextExample";
import Parent from "./components/ContextAPIPracticeByFollowing/Parent";
import TodoContextProvider from "./components/TodoAppContextAPIAugPractice/context/TodoContextProvider";
import TodoApp from "./components/TodoAppContextAPIAugPractice/TodoApp";
import WrestlerContextProvider, {
  WrestlerContext,
} from "./components/WrestlersManagementSystem/context/WrestlerContextProvider";
import WrestlersApp from "./components/WrestlersManagementSystem/WrestlersApp";
import UncontrolledFormsByFollowing from "./components/UncontrolledForms/UncontrolledFormsByFollowing";
import UncontrolledFormsPracticeOwnMyOwn from "./components/UncontrolledForms/UncontrolledFormsPracticeOwnMyOwn";
import LifeCycleInFBCByFollowing from "./components/LifeCycleByFollowing/LifeCycleInFBCByFollowing";
import LifeCycleInCBCPracticeOwnMyOwn from "./components/LifeMethodsPracticeOwnMyOwn/LifeCycleInCBCPracticeOwnMyOwn";
import LifeCycleInFBCPracticeOwnMyOwn from "./components/LifeMethodsPracticeOwnMyOwn/LifeCycleInFBCPracticeOwnMyOwn";
import FetchProductsByFollowing from "./components/Fetch/FetchProductsByFollowing";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);
  return (
    <div>
      {/* <ControlledForms01 /> */}
      {/* <ControllerForms01PracticeOnMyOwn /> */}
      {/* <TodoContextProvider>
        <TodoApp />
      </TodoContextProvider> */}
      {/* <ControlledForms02ByFollowing /> */}
      <button onClick={handleToggle}>Toggle Me</button>
      {toggle && <FetchProductsByFollowing />}

      {/* <LifeCycleInFBCByFollowing /> */}
      {/* <LifeCycleCBCByFollowing /> */}
      {/* <ControlledForm01ByFollowing /> */}
      {/* <ControlledForms01OwnPractice /> */}
      {/* <ContextExample>
        
        <Parent />
      </ContextExample> */}
      {/* <TodoContextProvider>
        <TodoApp />
      </TodoContextProvider> */}
      {/* <ControlledForms02ByFollowing /> */}
      {/* <WrestlerContextProvider>
        <WrestlersApp />
      </WrestlerContextProvider> */}
      {/* <UncontrolledFormsByFollowing /> */}
      {/* <UncontrolledFormsPracticeOwnMyOwn /> */}
    </div>
  );
};

export default App;
