import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../stor";

export const selectFavoriteNannys = (state: RootState) =>
  state.nannysFaforit.favotiteNannys;

export const selectIsLoadingFavoriteNannys = (state: RootState) =>
  state.nannysFaforit.isLoadingFavoriteNannys;

export const selectFavoriteFilterNannyValue = (state: RootState) =>
  state.filter.selectFavoriteFilter.value;

export const sortFavoriteNannys = createSelector(
  [selectFavoriteNannys, selectFavoriteFilterNannyValue],
  (favoriteNannys, value) =>
    [...favoriteNannys].sort((a, b) => {
      const lastNameA = a.name.split(" ").pop() || "";
      const lastNameB = b.name.split(" ").pop() || "";
      switch (value) {
        case "A to Z":
          return lastNameA.toLowerCase().localeCompare(lastNameB.toLowerCase());
        case "Z to A":
          return lastNameB.toLowerCase().localeCompare(lastNameA.toLowerCase());
        case "Less than 10$":
          return a.price_per_hour - b.price_per_hour;
        case "Greater than 10$":
          return b.price_per_hour - a.price_per_hour;
        case "Not popular":
          return a.rating - b.rating;
        case "Popular":
          return b.rating - a.rating;
        case "Show all":
          return 0;
        default:
          return 0;
      }
    })
);
