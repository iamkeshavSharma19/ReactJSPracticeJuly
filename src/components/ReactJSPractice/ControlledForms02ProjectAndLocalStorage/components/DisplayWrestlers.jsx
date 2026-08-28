import { useContext } from "react";
import { WrestlerContext } from "../context/ReactWrestlingContextProvider";

const DisplayWrestlers = () => {
  const { allWrestlers } = useContext(WrestlerContext);
  return (
    <div>
      {allWrestlers.length === 0 ? (
        <h1>No Wrestlers Available</h1>
      ) : (
        allWrestlers.map((wrestler) => {
          const {
            wrestlerName,
            wrestlerDescription,
            wrestlerMoves,
            previewUrl,
          } = wrestler;
          return (
            <section
              style={{
                border: "2px solid black",
                marginTop: "10px",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center"
              }}
            >
              <h2>{wrestlerName}</h2>
              <h2>{wrestlerDescription}</h2>
              <h2>{wrestlerMoves}</h2>
              <img
                src={previewUrl}
                alt="Selected image preview"
                width="200"
                height="200"
                style={{
                  objectFit: "contain",
                  verticalAlign: "middle",
                  backgroundColor: "red",
                }}
              />
              <button
                style={{
                  height: "40px",
                  width: "100px",
                  borderRadius: "10px",
                  fontSize: "15px",
                }}
              >
                Delete
              </button>
            </section>
          );
        })
      )}
    </div>
  );
};

export default DisplayWrestlers;
