import React from "react";

import { Provider } from "react-redux";
import { store } from "./store";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <hr />
      <Todos />
    </Provider>
  );
};

export default ReduxApp;
