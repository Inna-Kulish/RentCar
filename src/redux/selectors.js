import { createSelector } from '@reduxjs/toolkit';

export const selectCars = (state) => state.cars.items;

export const selectFilter = (state) => state.filter.conditions;

export const selectPage = (state) => state.cars.page;

export const selectFavorite = (state) => state.cars.favorite;

export const selectFilteredCars = createSelector(
    [selectCars, selectFilter],
    (cars, filter) => {
        return cars.filter((car) => {
      
      if (filter.brand && !car.make.includes(filter.brand)) {
        return false;
      }

      if (filter.price && !(Number(car.rentalPrice.slice(1)) <= filter.price)) {
        return false;
      }

      if (filter.milefrom && !(Number(filter.milefrom) <= car.mileage)) {
        return false;
      }

        if (filter.mileto && !(Number(filter.mileto) >= car.mileage)) {
        return false;
      }

      return true;
    });
    }
);
 