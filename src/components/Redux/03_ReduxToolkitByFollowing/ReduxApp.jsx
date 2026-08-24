import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";
import { store } from "./store";
import { Provider } from "react-redux";

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <h1>Redux Toolkit + Local Storage</h1>
      <AddTodo />
      <br />
      <DisplayTodos />
    </Provider>
  );
};

export default ReduxApp;
