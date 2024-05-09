import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  logInUserThunk,
  registerUserThunk,
  getUserDataThunk,
} from "./operationsUserAuth";
import { InitialState, UserData, UserLogin } from "../../helpers/interfeceData";

const initialState: InitialState = {
  user: {
    userName: "",
    userEmail: "",
    id: "",
  },
  idToken: "",
  isAuthUser: false,
  isLoadingUser: false,
  error: "",
};

const handlePendingAction: CaseReducer<InitialState> = (state) => {
  state.isLoadingUser = true;
  state.error = "";
};

const handleRejectedAction: CaseReducer<
  InitialState,
  PayloadAction<string | undefined>
> = (state, action) => {
  state.isLoadingUser = false;
  state.error = action.payload;
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setLogOut: (state) => {
      state.user = initialState.user;
      state.idToken = initialState.idToken;
      state.isAuthUser = initialState.isAuthUser;
      state.isLoadingUser = initialState.isLoadingUser;
      state.error = initialState.error;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.pending, handlePendingAction)
      .addCase(
        registerUserThunk.fulfilled,
        (state, action: PayloadAction<UserLogin>) => {
          state.isLoadingUser = false;
          state.isAuthUser = true;
          state.user.userName = action.payload.displayName;
          state.user.userEmail = action.payload.email;
          state.user.id = action.payload.localId;
          state.idToken = action.payload.idToken;
        }
      )
      .addCase(registerUserThunk.rejected, handleRejectedAction)

      .addCase(logInUserThunk.pending, handlePendingAction)
      .addCase(
        logInUserThunk.fulfilled,
        (state, action: PayloadAction<UserLogin>) => {
          state.isLoadingUser = false;
          state.isAuthUser = true;
          state.user.userName = action.payload.displayName;
          state.user.userEmail = action.payload.email;
          state.user.id = action.payload.localId;
          state.idToken = action.payload.idToken;
        }
      )
      .addCase(logInUserThunk.rejected, handleRejectedAction)

      .addCase(getUserDataThunk.pending, handlePendingAction)
      .addCase(
        getUserDataThunk.fulfilled,
        (state, action: PayloadAction<UserData>) => {
          state.isLoadingUser = false;
          state.isAuthUser = true;
          state.user.userName = action.payload.displayName;
          state.user.userEmail = action.payload.email;
          state.user.id = action.payload.localId;
        }
      )
      .addCase(getUserDataThunk.rejected, handleRejectedAction);
  },
});

export const { setLogOut } = userAuthSlice.actions;

export const userAuthReduсer = userAuthSlice.reducer;
