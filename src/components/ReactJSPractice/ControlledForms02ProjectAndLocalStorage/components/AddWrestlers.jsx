import { useContext } from "react";
import { WrestlerContext } from "../context/ReactWrestlingContextProvider";

const AddWrestlers = () => {
  const { wrestlersData, handleWrestlerForm, handleFormSubmit } =
    useContext(WrestlerContext);
  const { wrestlerName, wrestlerDescription, wrestlerMoves, previewUrl } =
    wrestlersData;
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="wrestler-name">
          <b>Wrestler Name : </b>
        </label>
        <input
          type="text"
          placeholder="Enter Wrestler Name"
          id="wrestler-name"
          name="wrestlerName"
          value={wrestlerName}
          onChange={handleWrestlerForm}
        />
        <br /> <br />
        <label htmlFor="wrestler-description">
          <b>Wrestler Description : </b>
        </label>
        <input
          type="text"
          placeholder="Enter Wrestler Description"
          id="wrestler-description"
          name="wrestlerDescription"
          value={wrestlerDescription}
          onChange={handleWrestlerForm}
        />
        <br /> <br />
        <label htmlFor="wrestler-moves">
          <b>Wrestler Moves : </b>
        </label>
        <input
          type="text"
          placeholder="Enter Wrestler Moves"
          id="wrestler-moves"
          name="wrestlerMoves"
          value={wrestlerMoves}
          onChange={handleWrestlerForm}
        />
        <br /> <br />
        <label htmlFor="wrestler-image">
          <b>Upload Wrestler Image : </b>
        </label>
        {/* /* means ==> image/png, image/jpeg, image/webp, image/gif . * means anything like wildcard*/}
        <input
          type="file"
          accept="image/*"
          name="wrestlerImage"
          onChange={handleWrestlerForm}
        />
        <br />
        {/* preview */}
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Selected image preview"
            width="600"
            height="300"
            style={{
              objectFit: "contain",
              verticalAlign: "middle",
              backgroundColor: "#eee",
            }}
          />
        )}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddWrestlers;
