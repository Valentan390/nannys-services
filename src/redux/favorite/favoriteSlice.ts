import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Nanny } from "../../helpers/interfeceData";
import {
  addFaforiteNanny,
  deleteFavoriteNanny,
  getFavoriteNannys,
} from "./operationsFavorite";

interface InitialState {
  favotiteNannys: Nanny[];
  isLoadingFavoriteNannys: boolean;
  error: string | undefined;
}

const initialState: InitialState = {
  favotiteNannys: [],
  isLoadingFavoriteNannys: false,
  error: "",
};

const handlePendingAction: CaseReducer<InitialState> = (state) => {
  state.isLoadingFavoriteNannys = true;
  state.error = "";
};

const handleRejectedAction: CaseReducer<
  InitialState,
  PayloadAction<string | undefined>
> = (state, action) => {
  state.isLoadingFavoriteNannys = false;
  state.error = action.payload;
};

const favoriteNannysSlice = createSlice({
  name: "favoriteNannys",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFaforiteNanny.pending, handlePendingAction)
      .addCase(addFaforiteNanny.fulfilled, (state, action) => {
        state.isLoadingFavoriteNannys = false;
        // state.favotiteNannys = [...state.favotiteNannys, action.payload];
        state.favotiteNannys.push(action.payload);
      })
      .addCase(addFaforiteNanny.rejected, handleRejectedAction)

      .addCase(getFavoriteNannys.pending, handlePendingAction)
      .addCase(getFavoriteNannys.fulfilled, (state, action) => {
        state.isLoadingFavoriteNannys = false;
        state.favotiteNannys = action.payload;
      })
      .addCase(getFavoriteNannys.rejected, handleRejectedAction)

      .addCase(deleteFavoriteNanny.pending, handlePendingAction)
      .addCase(deleteFavoriteNanny.fulfilled, (state, action) => {
        state.isLoadingFavoriteNannys = false;
        state.favotiteNannys = state.favotiteNannys.filter(
          (nanny) => nanny.name !== action.payload.name
        );
      })
      .addCase(deleteFavoriteNanny.rejected, handleRejectedAction);
  },
});

export const favoriteNannysReducer = favoriteNannysSlice.reducer;
