import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./operations";

const initialState = {
  items: [],
  favorite: [],
  isLoading: false,
  error: null,
};

const handleFulfilledGet = (state, action) => {
  state.items = [...state.items, ...action.payload];
};

const handleRejected = (state, action) => {
  console.log(action);
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    clearCars: (state) => {
      state.items = [];
  },
  setPage: (state) => {
      state.page = state.page + 1;
  },
  setFavorite: (state, action) => {
    state.favorite.push(action.payload);
  },
  deleteFavorite: (state, action) => {
    state.favorite = state.favorite.filter(car => car.id !== action.payload.id)
  }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, handleFulfilledGet)
      .addCase(getCars.rejected, handleRejected);
  },
});

export const carsReducer = carSlice.reducer;
export const {
  clearCars, setPage, setFavorite, deleteFavorite
} = carSlice.actions;