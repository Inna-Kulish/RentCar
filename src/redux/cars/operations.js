import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6555c0c784b36e3a431e3e6b.mockapi.io";

// GET
export const getCars = createAsyncThunk(
  "cars/getCars",
  async (page, thunkAPI) => {
    try {
      const res = await axios.get("/advert", {
        params: {
          page,
          limit: 12,
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterCars = createAsyncThunk(
  "cars/filter",
  async (page, thunkAPI) => {
    try {
      const res = await axios.get("/advert", {
        params: {
          page,
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
