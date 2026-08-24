import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todosRedux")) || [],
    todo: "",
    editId: null,
  },

  reducers: {
    handleTodoInput: (state, action) => {
      state.todo = action.payload;
    },
    addTodo: (state, action) => {
      console.log(action.payload);
      if (state.editId) {
        state.todos = state.todos.map((todo) => {
          if (todo.id === state.editId) {
            return {
              ...todo,
              text: state.todo,
            };
          } else {
            return todo;
          }
        });
        localStorage.setItem("todosRedux", JSON.stringify(state.todos));
        state.editId = null;
        return;
      }
      const newTodo = {
        id: nanoid(),
        text: action.payload.trim(),
      };
      state.todos.push(newTodo);
      localStorage.setItem("todosRedux", JSON.stringify(state.todos));
      state.todo = "";
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todosRedux", JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      state.editId = action.payload;
      const todoToBeEdited = state.todos.find(
        (todo) => todo.id === action.payload,
      );
      state.todo = todoToBeEdited.text;
    },
  },
});

export const { addTodo, removeTodo, editTodo, handleTodoInput } =
  todoSlice.actions;

export default todoSlice.reducer;
