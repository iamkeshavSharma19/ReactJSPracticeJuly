import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/Todo/todoSlice";
import buttonReducer from "./slices/Button/buttonSlice";

export const store = configureStore({
  reducer: todoReducer,
});
