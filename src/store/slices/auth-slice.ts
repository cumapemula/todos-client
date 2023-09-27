/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../services/auth.services";

interface AuthState {
  token: any;
  isSuccess: boolean | null;
  message: string;
}

const initialState: AuthState = {
  token: localStorage.getItem("token") || null,
  isSuccess: null,
  message: "",
};

export const fetchLogin = createAsyncThunk("auth/fetchLogin", login);
export const fetchRegister = createAsyncThunk("auth/fetchRegister", register);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isSuccess = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      if (action.payload.access_token) {
        state.token = action.payload.access_token;
        state.isSuccess = true;
      } else {
        state.isSuccess = false;
      }
    });

    builder.addCase(fetchRegister.pending, (state) => {
      state.isSuccess = null;
    });

    builder.addCase(fetchRegister.fulfilled, (state, action: any) => {
      if (action.payload.id) {
        state.isSuccess = true;
      } else {
        state.isSuccess = false;
        state.message = "email is already registered";
      }
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
