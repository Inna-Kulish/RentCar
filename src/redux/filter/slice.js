import { createSlice } from "@reduxjs/toolkit";
import { filterCars } from "../cars/operations";

const initialState = {
  conditions: {brand: '', price: 0, milefrom: 0, mileto: 0},
  filteredCars: [],
};

const handleFulfilledFilter = (state, action) => {
console.log(action.payload)
    state.filteredCars = action.payload.filter((car) => {
      
      if (state.conditions.brand && !car.make.includes(state.conditions.brand)) {
        return false;
      }

      if (state.conditions.price && !(Number(car.rentalPrice.slice(1)) <= state.conditions.price)) {
        return false;
      }

      if (state.conditions.milefrom && !(Number(state.conditions.milefrom) <= car.mileage)) {
        return false;
      }

        if (state.conditions.mileto && !(Number(state.conditions.mileto) >= car.mileage)) {
        return false;
      }

      return true;
    });
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
      changeFilter: (state, action) => {
     state.conditions = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filterCars.fulfilled, handleFulfilledFilter)
      .addCase(filterCars.rejected, (_, action) => console.log(action));
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;