import { createSlice } from "@reduxjs/toolkit";
import { getAllAdverts } from "./operations";

const initialState = {
  adverts: [],
  favorites:
    JSON.parse(localStorage.getItem("persist:favorites"))?.favorites ?? [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter((card) => card._id !== payload);
    },
  },
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
export const { addToFavorites, removeFromFavorites } = advertsSlice.actions;
