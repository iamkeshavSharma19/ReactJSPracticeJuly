import React, { createContext, useState } from "react";

//?Step 1 ==> Creating The Context.
export const WrestlerContext = createContext();

//?Step 2 ==> Providing The Context Using WrestlerContext.Provider

const WrestlerContextProvider = (props) => {
  const [wrestlerFormData, setWrestlerFormData] = useState({
    wrestlerName: "",
    wrestlerDescription: "",
    wrestlerMoves: "",
    wrestlerAge: "",
  });

  const [allWrestlers, setAllWrestlers] = useState(() => {
    const savedWrestlers = localStorage.getItem("wrestlers");
    return savedWrestlers ? JSON.parse(savedWrestlers) : [];
  });

  const [editId, setEditId] = useState(null);

  const handleInputsChange = (e) => {
    const { name, value } = e.target;
    setWrestlerFormData({
      ...wrestlerFormData,
      [name]: value,
    });
  };

  const handleCreateWrestler = (e) => {
    e.preventDefault();
    if (editId) {
      const { wrestlerName, wrestlerDescription, wrestlerMoves, wrestlerAge } =
        wrestlerFormData;
      const updatedData = {
        wrestlerName,
        wrestlerDescription,
        wrestlerMoves,
        wrestlerAge,
      };
      const wrestlers = [...allWrestlers];
      const updatedWrestlers = wrestlers.map((wrestler) => {
        const { id } = wrestler;
        if (editId === id) {
          return {
            ...wrestler,
            ...updatedData,
          };
        } else {
          return wrestler;
        }
      });
      setAllWrestlers(updatedWrestlers);
      localStorage.setItem("wrestlers", JSON.stringify(updatedWrestlers));
      setEditId(null);
      setWrestlerFormData({
        wrestlerName: "",
        wrestlerDescription: "",
        wrestlerMoves: "",
        wrestlerAge: "",
      });
      return;
    }
    const { wrestlerName, wrestlerDescription, wrestlerMoves, wrestlerAge } =
      wrestlerFormData;
    if (
      !wrestlerName ||
      !wrestlerDescription ||
      !wrestlerMoves ||
      !wrestlerAge
    ) {
      alert("Filling Out All The Input Fields Are Mandatory");
      return;
    }

    if (wrestlerAge < 20 || wrestlerAge > 80) {
      alert("Wresler Age Should Only Lie Between 20 to 80 years");
      return;
    }

    const newWrestler = {
      id: Date.now(),
      wrestlerName: wrestlerName.trim(),
      wrestlerDescription: wrestlerDescription.trim(),
      wrestlerMoves: wrestlerMoves.trim(),
      wrestlerAge,
    };

    console.log(newWrestler);

    setAllWrestlers((prev) => [...prev, newWrestler]);

    const savedWrestlers = JSON.parse(localStorage.getItem("wrestlers")) || [];
    savedWrestlers.push(newWrestler);
    localStorage.setItem("wrestlers", JSON.stringify(savedWrestlers));

    setWrestlerFormData({
      wrestlerName: "",
      wrestlerDescription: "",
      wrestlerMoves: "",
      wrestlerAge: "",
    });
  };

  const handleDeleteWrestler = (id) => {
    console.log(id);
    const wrestlers = [...allWrestlers];
    const filteredWrestlers = wrestlers.filter(
      (wrestler) => wrestler.id !== id,
    );
    setAllWrestlers(filteredWrestlers);
    localStorage.setItem("wrestlers", JSON.stringify(filteredWrestlers));
  };

  const handleEditWrestler = (id) => {
    console.log(id);
    const wrestlers = [...allWrestlers];
    const wrestlerToBeUpdated = wrestlers.find(
      (wrestler) => wrestler.id === id,
    );
    const {
      wrestlerName: updatedWrestlerName,
      wrestlerDescription: updatedWrestlerDescription,
      wrestlerMoves: updatedWrestlerMoves,
      wrestlerAge: updatedWrestlerAge,
    } = wrestlerToBeUpdated;
    setWrestlerFormData({
      wrestlerName: updatedWrestlerName,
      wrestlerAge: updatedWrestlerAge,
      wrestlerMoves: updatedWrestlerMoves,
      wrestlerDescription: updatedWrestlerDescription,
    });
    setEditId(id);
  };

  return (
    <WrestlerContext.Provider
      value={{
        wrestlerFormData,
        handleInputsChange,
        handleCreateWrestler,
        allWrestlers,
        handleDeleteWrestler,
        handleEditWrestler,
        editId,
      }}
    >
      {props.children}
    </WrestlerContext.Provider>
  );
};

export default WrestlerContextProvider;
