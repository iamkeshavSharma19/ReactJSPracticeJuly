import { createContext, useState } from "react";

export const WrestlerContext = createContext();

const ReactWrestlingContextProvider = (props) => {
  const [wrestlersData, setWrestlersData] = useState({
    wrestlerName: "",
    wrestlerDescription: "",
    wrestlerMoves: "",
    wrestlerImage: null,
    previewUrl: "",
  });

  const [allWrestlers, setAllWrestlers] = useState(() => {
    const savedWrestlers = localStorage.getItem("wrestlers");
    return savedWrestlers ? JSON.parse(savedWrestlers) : [];
  });

  const handleWrestlerForm = (e) => {
    const { name, value, files, type } = e.target;

    //?for image input
    if (type === "file") {
      const file = files ? files[0] : undefined;

      if (!file) return;

      const previewUrl = URL.createObjectURL(file);

      setWrestlersData((prev) => {
        return {
          ...prev,
          wrestlerImage: file,
          previewUrl,
        };
      });
      return;
    }

    //? for text inputs
    setWrestlersData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(wrestlersData);
    const {
      wrestlerName,
      wrestlerDescription,
      wrestlerMoves,
      wrestlerImage,
      previewUrl,
    } = wrestlersData;
    if (
      !wrestlerName ||
      !wrestlerDescription ||
      !wrestlerMoves ||
      !wrestlerImage ||
      !previewUrl
    ) {
      alert("It is mandatory to enter all input fields");
      return;
    }

    const newWrestler = {
      id: Date.now(),
      wrestlerName: wrestlerName.trim(),
      wrestlerDescription: wrestlerDescription.trim(),
      wrestlerMoves: wrestlerMoves.trim(),
      previewUrl: previewUrl,
    };

    setAllWrestlers((prev) => [...prev, newWrestler]);

    const savedWrestlers = JSON.parse(localStorage.getItem("wrestlers")) || [];

    savedWrestlers.push(newWrestler);

    localStorage.setItem("wrestlers", JSON.stringify(savedWrestlers));

    setWrestlersData({
      wrestlerName: "",
      wrestlerDescription: "",
      wrestlerMoves: "",
      wrestlerImage: null,
      previewUrl: "",
    });
  };
  return (
    <WrestlerContext.Provider
      value={{
        wrestlersData,
        handleWrestlerForm,
        handleFormSubmit,
        allWrestlers,
      }}
    >
      {props.children}
    </WrestlerContext.Provider>
  );
};

export default ReactWrestlingContextProvider;
