import React, { useContext } from "react";
import { WrestlerContext } from "../context/WrestlerContextProvider";

const DisplayWrestlers = () => {
  const { allWrestlers, handleDeleteWrestler, handleEditWrestler } =
    useContext(WrestlerContext);
  return (
    <div>
      <h1>All The Wrestlers Will Be Displayed Here...</h1>
      {allWrestlers.length === 0 ? (
        <p>No Wrestlers Available ...</p>
      ) : (
        allWrestlers.map((wrestler) => {
          const {
            wrestlerName,
            wrestlerDescription,
            wrestlerMoves,
            wrestlerAge,
            id,
          } = wrestler;
          return (
            <section
              key={id}
              style={{
                border: "2px solid black",
                marginTop: "10px",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "wheat",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <h3>Name: {wrestlerName}</h3>
              <h3>Desc: {wrestlerDescription}</h3>
              <h3>Moves: {wrestlerMoves}</h3>
              <h3>Age: {wrestlerAge}</h3>
              <button
                style={{
                  height: "40px",
                  width: "100px",
                  borderRadius: "10px",
                  fontSize: "15px",
                }}
                onClick={() => handleDeleteWrestler(id)}
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
                onClick={() => handleEditWrestler(id)}
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

export default DisplayWrestlers;
