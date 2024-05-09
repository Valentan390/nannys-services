import { RootState } from "../stor";

export const selectSelectFilter = (state: RootState) =>
  state.filter.selectFilter;

export const selectSelectFavoriteFilter = (state: RootState) =>
  state.filter.selectFavoriteFilter;
