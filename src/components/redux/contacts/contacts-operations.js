import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {} from "./contacts-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const { data } = await axios.get("/contacts");
    return data;
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const { data } = await axios.post("/contacts", contact);
    return data;
  },
);

export const removeContact = createAsyncThunk(
  "contacts/removeContact",
  async (id) => {
    await axios.delete(`/contacts/${id}`);
    return id;
  },
);
