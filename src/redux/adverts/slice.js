import { createSlice } from "@reduxjs/toolkit";
import { getAllAdverts } from "./operations";

const initialState = {
  adverts: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllAdverts.fulfilled, (state, { payload }) => {
        state.adverts = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, { payload }) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
});

export const advertsReducer = advertsSlice.reducer;
