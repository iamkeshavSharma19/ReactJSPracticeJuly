import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContextProvider";

const DisplayTodos = () => {
  const { allTodos } = useContext(TodoContext);
  return (
    <div>
      <p>All Todos will be displayed here</p>
      {allTodos.length === 0 ? (
        <p>No Todos Available</p>
      ) : (
        <section>
          {allTodos.map((ele) => {
            return (
              <div
                key={ele.id}
                style={{
                  border: "2px solid black",
                  marginTop: "10px",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "wheat",
                }}
              >
                <h3>{ele.text}</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                  }}
                >
                  <button>edit</button>
                  <button>delete</button>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default DisplayTodos;
