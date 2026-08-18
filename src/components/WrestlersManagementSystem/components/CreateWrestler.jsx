import React, { useState, useContext } from "react";
import { WrestlerContext } from "../context/WrestlerContextProvider";

const CreateWrestler = () => {
  const { wrestlerFormData, handleInputsChange, handleCreateWrestler, editId } =
    useContext(WrestlerContext);

  const { wrestlerName, wrestlerDescription, wrestlerAge, wrestlerMoves } =
    wrestlerFormData;

  return (
    <div>
      <h1>Create Wrestler</h1>
      <form onSubmit={handleCreateWrestler}>
        <label htmlFor="WrestlerName">
          <b>WRESTLER NAME : </b>
        </label>
        <input
          type="text"
          placeholder="Enter The Wrestler Name"
          id="WrestlerName"
          name="wrestlerName"
          value={wrestlerName}
          onChange={handleInputsChange}
          required
        />
        <br /> <br />
        <label htmlFor="WrestlerDescription">
          <b>WRESTLER DESCRIPTION : </b>
        </label>
        <textarea
          name="wrestlerDescription"
          id="WrestlerDescription"
          rows={5}
          cols={50}
          value={wrestlerDescription}
          onChange={handleInputsChange}
          required
        ></textarea>
        <br /> <br />
        <label htmlFor="WrestlerMoves">
          <b>WRESTLER MOVES : </b>
        </label>
        <input
          type="text"
          id="WrestlerMoves"
          name="wrestlerMoves"
          value={wrestlerMoves}
          onChange={handleInputsChange}
          required
        />
        <br /> <br />
        <label htmlFor="WrestlerAge">
          <b>WRESTLER AGE : </b>
        </label>
        <input
          type="number"
          id="WrestlerAge"
          name="wrestlerAge"
          value={wrestlerAge}
          onChange={handleInputsChange}
          required
        />
        <br /> <br />
        <button>{editId ? "Update Wrestler" : "Create Wrestler"}</button>
      </form>
    </div>
  );
};

export default CreateWrestler;
