import { createSlice } from "@reduxjs/toolkit";
import { login } from "./auth-operations";
import { register, logout, fetchCurrentUser } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggenIn: false,
  IsRefreshing: false,
  loginError: false,
  registrationError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggenIn = true;
      state.registrationError = false;
    },
    [register.rejected](state) {
      state.registrationError = true;
    },

    [login.fulfilled](state, action) {
      console.log(action);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggenIn = true;
      state.loginError = false;
    },
    [login.rejected](state) {
      state.loginError = true;
    },

    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggenIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.IsRefreshing = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggenIn = true;
      state.IsRefreshing = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.IsRefreshing = false;
    },
  },
});

export default authSlice.reducer;
