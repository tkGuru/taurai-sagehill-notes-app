import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../http-common";


const initialState = [];


export const findNotesByTitle = createAsyncThunk(
  "notes/findByTitle",
  async ({ title }) => {
    const res = await axios.get(`/notes/find-all-notes?title=${title}`);
    return res.data;
  }
);

const notesSlice = createSlice({
  name: "notes",
  initialState,
  extraReducers: { 
    [findNotesByTitle.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = notesSlice;
export default reducer;