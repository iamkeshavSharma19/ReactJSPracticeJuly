import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "button",
  initialState: {
    text: "Add Todo",
    editId: null,
  },

  reducers: {
    setEditId: (state, actions) => {},
  },
});

export const { setEditId } = buttonSlice.actions;

export default buttonSlice.reducer;
