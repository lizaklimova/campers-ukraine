import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS, axiosInstance } from "api";

export const getAllAdverts = createAsyncThunk(
  "adverts/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(ENDPOINTS.getAll);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
