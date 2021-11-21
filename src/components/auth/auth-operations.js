import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      if (response.status !== 201) {
        throw new Error(response);
      }
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("/users/login", credentials);
      token.set(response.data.token);

      if (response.status !== 200) {
        throw new Error(response.status);
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");

    token.unset();
  } catch (error) {}
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/fecthUser",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkApi.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {}
  },
);
