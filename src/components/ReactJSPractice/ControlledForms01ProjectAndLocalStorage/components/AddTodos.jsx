import { useContext } from "react";
import { TodoContext } from "../Context/TodoContextProvider";

const AddTodos = () => {
  const { todo, handleTodos, handleFormSubmit, editId } =
    useContext(TodoContext);
  return (
    <div>
      <h1>Add Todos Here ...</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="todos">
          <b>Add Todos : </b>
        </label>
        <input
          type="text"
          placeholder="Add Your Todos Here..."
          id="todos"
          value={todo}
          onChange={handleTodos}
        />
        <br /> <br />
        <button>{editId ? "Edit" : "Submit"}</button>
      </form>
    </div>
  );
};

export default AddTodos;
