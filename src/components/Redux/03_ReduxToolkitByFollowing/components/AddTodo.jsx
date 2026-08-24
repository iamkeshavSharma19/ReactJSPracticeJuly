import { useSelector, useDispatch } from "react-redux";
import { handleTodoInput, addTodo } from "../slices/todo/todoSlice";

const AddTodo = () => {
  const todo = useSelector((state) => state.todo);
  const editId = useSelector((state) => state.editId);

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
  };
  return (
    <div>
      <h1>Add Your Todos Here ...</h1>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="todos">Enter Todo : </label>
        <input
          type="text"
          placeholder="Enter Your Todos"
          id="todos"
          value={todo}
          onChange={(e) => {
            dispatch(handleTodoInput(e.target.value));
          }}
          required
        />
        <br /> <br />
        <button>{editId ? "Update Todo" : "Create Todo"}</button>
      </form>
    </div>
  );
};

export default AddTodo;
