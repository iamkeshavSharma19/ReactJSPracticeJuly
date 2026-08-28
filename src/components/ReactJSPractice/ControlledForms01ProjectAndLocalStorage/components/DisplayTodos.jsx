import { useContext } from "react";
import { TodoContext } from "../Context/TodoContextProvider";

const DisplayTodos = () => {
  const { allTodos, handleDeleteTodo, handleEditTodo } =
    useContext(TodoContext);

  return (
    <div>
      <h1>All Todos Will Be Displayed Here..</h1>
      {allTodos.length === 0 ? (
        <h1>No Todos Available 😔</h1>
      ) : (
        allTodos.map((todo) => {
          return (
            <section
              style={{
                border: "2px solid black",
                marginTop: "10px",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "wheat",
              }}
              key={todo.id}
            >
              <h1>{todo.text}</h1>
              <button
                style={{
                  height: "40px",
                  width: "100px",
                  borderRadius: "10px",
                  fontSize: "15px",
                }}
                onClick={() => handleDeleteTodo(todo.id)}
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
                onClick={() => handleEditTodo(todo.id)}
              >
                Edit
              </button>
            </section>
          );
        })
      )}
    </div>
  );
};

export default DisplayTodos;
