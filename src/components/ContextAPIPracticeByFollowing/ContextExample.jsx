import { createContext } from "react";

//?Step1 === Create a context using createContext().When we call this createContext,it returns us a context object which is our store room.It is basically a global space or a global Object.
export const myStore = createContext();

//?Step2 ==> Providing the context contextObject.Provider

const ContextExample = (props) => {
  let str = "Namaste Context API";
  let arr = [10, 20, 30];
  let obj = {
    name: "John",
  };
  return (
    <div>
      <myStore.Provider value={{ str, arr, obj }}>
        {props.children}
      </myStore.Provider>
    </div>
  );
};

export default ContextExample;
