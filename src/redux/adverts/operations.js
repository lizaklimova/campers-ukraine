import { createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS, axiosInstance } from "api";

export const getAllAdverts = createAsyncThunk(
  "adverts/getAll",
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(
        `${ENDPOINTS.getAll}?page=${page}&limit=${limit}`
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
