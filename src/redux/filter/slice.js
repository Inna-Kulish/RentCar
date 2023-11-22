import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conditions: {brand: '', price: 0, milefrom: 0, mileto: 0},
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
      changeFilter: (state, action) => {
     state.conditions = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;