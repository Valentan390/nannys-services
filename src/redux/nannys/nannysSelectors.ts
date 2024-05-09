import { RootState } from "../stor";
import { createSelector } from "@reduxjs/toolkit";

export const selectNannys = (state: RootState) => state.nannys.nannys;

export const selectCarrentPage = (state: RootState) => state.nannys.carrentPage;

export const selectIsLoadingNannys = (state: RootState) =>
  state.nannys.isLoadingNannys;

export const selectErrorNannys = (state: RootState) => state.nannys.error;

const selectFilterNannyValue = (state: RootState) =>
  state.filter.selectFilter.value;

export const sortNannys = createSelector(
  [selectNannys, selectFilterNannyValue],
  (nannys, value) =>
    [...nannys].sort((a, b) => {
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
