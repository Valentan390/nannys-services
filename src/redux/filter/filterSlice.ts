import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISelectOption } from "../../helpers/interfeceData";
import { options } from "../../helpers/componentsData";

interface InitialState {
  selectFilter: ISelectOption;
  selectFavoriteFilter: ISelectOption;
}

const initialState: InitialState = {
  selectFilter: options[6],
  selectFavoriteFilter: options[6],
};

const filterSlice = createSlice({
  name: "filterNanny",
  initialState,
  reducers: {
    setFilterNanny: (state, action: PayloadAction<ISelectOption>) => {
      state.selectFilter = action.payload;
    },
    setFavoriteFilterNanny: (state, action: PayloadAction<ISelectOption>) => {
      state.selectFavoriteFilter = action.payload;
    },
  },
});

export const { setFavoriteFilterNanny, setFilterNanny } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
