import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user-slice";
import todoReducer from "./slices/todo-slice";
import authReducer from "./slices/auth-slice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    todos: todoReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
