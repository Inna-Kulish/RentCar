import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://cars-server-s3ze.onrender.com/api/cars";

// GET
export const getCars = createAsyncThunk(
  "cars/getCars",
  async (page, thunkAPI) => {
    try {
      const res = await axios.get("/");
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
      const res = await axios.get("/", {
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
