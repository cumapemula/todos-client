import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersById } from "../../services/users.services";

interface TodoState {
  id: number;
  content: string;
  finished: boolean;
  authorId: number;
}

interface UserState {
  id: number;
  name: string;
  todos: TodoState[];
}

const initialState: UserState = {
  id: 0,
  name: "",
  todos: [],
};

export const fetchUser = createAsyncThunk('users/fetchUser', getUsersById)

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setId: (state) => {
      state.id += 1
    },
  },
  extraReducers(builder) {
      builder.addCase(fetchUser.fulfilled, (state, action) => {
        if (action.payload.id) {
          state.id = action.payload.id
          state.name = action.payload.name
          state.todos = action.payload.todos
        }
      })
  },
});

export const { setId } = userSlice.actions;
export default userSlice.reducer