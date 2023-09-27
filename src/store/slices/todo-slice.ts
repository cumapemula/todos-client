import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodo, updateTodo } from "../../services/todos.services";

interface TodoState {
  id: number;
  content: string;
  authorId: number;
  isUpdated: boolean;
}

const initialState: TodoState = {
  id: 0,
  content: "",
  authorId: 0,
  isUpdated: false,
};

export const fetchCreateTodo = createAsyncThunk(
  "todos/fetchCreateTodo",
  createTodo
);
export const fetchUpdateTodo = createAsyncThunk(
  "todos/fetchUpdateTodo",
  updateTodo
);
export const fetchDeleteTodo = createAsyncThunk(
  "todos/fetchDeleteTodo",
  deleteTodo
);

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodoUpdate: (state, action) => {
      state.isUpdated = true;
      state.id = action.payload.id;
      state.content = action.payload.content;
    },
    setTodoDelete: (state, action) => {
      state.id = action.payload.id;
      state.content = action.payload.content;
    },
  },
});

export const { setTodoUpdate, setTodoDelete } = todoSlice.actions;
export default todoSlice.reducer;
