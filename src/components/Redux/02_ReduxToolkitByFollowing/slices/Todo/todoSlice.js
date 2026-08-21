import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todosRedux")) || [],
    editId: null,
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload.trim(),
      };
      state.todos.push(newTodo);
      localStorage.setItem("todosRedux", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todosRedux", JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      
    },
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
  },
});

export const { addTodo, removeTodo, editTodo, setEditId } = todoSlice.actions;

export default todoSlice.reducer;
