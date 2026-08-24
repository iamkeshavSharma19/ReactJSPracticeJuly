import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../slices/todo/todoSlice";

const DisplayTodos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>All The Todos Will Be Displayed Here ...</h1>
        {todos.map((todo) => {
          return (
            <section
              key={todo.id}
              style={{
                border: "2px solid black",
                marginTop: "10px",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "aqua",
              }}
            >
              <h2>{todo.text}</h2>
              <button
                style={{
                  height: "40px",
                  width: "100px",
                  borderRadius: "10px",
                  fontSize: "15px",
                }}
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                Delete
              </button>
              <button
                style={{
                  height: "40px",
                  width: "100px",
                  borderRadius: "10px",
                  fontSize: "15px",
                }}
                onClick={() => dispatch(editTodo(todo.id))}
              >
                Edit
              </button>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayTodos;
