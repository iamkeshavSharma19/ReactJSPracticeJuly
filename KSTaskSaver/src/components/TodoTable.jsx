import React, { useContext } from "react";
import { todoContext } from "../TodoContextProvider";

const TodoTable = () => {
  const { allTodos, handleDeleteTodo, handleEditTodo } =
    useContext(todoContext);
  return (
    <>
      <table className="table table-dark todo-table table-bordered border-grey glitter mx-auto">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        {allTodos.length !== 0 && (
          <tbody>
            {allTodos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td className="button-container">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => handleEditTodo(todo.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  );
};

export default TodoTable;
