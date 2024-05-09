import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getNannysThunk } from "./operationsNannys";
import { Nanny } from "../../helpers/interfeceData";

export interface InitialState {
  nannys: Nanny[];
  carrentPage: number;
  isLoadingNannys: boolean;
  error: string | undefined;
}

const initialState: InitialState = {
  nannys: [],
  carrentPage: 0,
  isLoadingNannys: false,
  error: "",
};

const handlePendingAction: CaseReducer<InitialState> = (state) => {
  state.isLoadingNannys = true;
  state.error = "";
};

const handelFulfilledAction: CaseReducer<
  InitialState,
  PayloadAction<Nanny[]>
> = (state, action) => {
  state.isLoadingNannys = false;
  const nannys = action.payload.filter((nanny) => nanny !== null);
  state.nannys = [...state.nannys, ...nannys];
};

const handleRejectedAction: CaseReducer<
  InitialState,
  PayloadAction<string | undefined>
> = (state, action) => {
  state.isLoadingNannys = false;
  state.error = action.payload;
};

const nannysSlice = createSlice({
  name: "nannys",
  initialState,
  reducers: {
    setCarrentPage: (state) => {
      state.carrentPage = state.carrentPage + 3;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNannysThunk.pending, handlePendingAction)
      .addCase(getNannysThunk.fulfilled, handelFulfilledAction)
      .addCase(getNannysThunk.rejected, handleRejectedAction);
  },
});

export const { setCarrentPage } = nannysSlice.actions;

export const nannysReducer = nannysSlice.reducer;
