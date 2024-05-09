import { RootState } from "../stor";

export const selectUser = (state: RootState) => state.user.user;

export const selectIdToken = (state: RootState) => state.user.idToken;

export const selectIsAuthUser = (state: RootState) => state.user.isAuthUser;

export const selectIsLoadingUser = (state: RootState) =>
  state.user.isLoadingUser;

export const selectError = (state: RootState) => state.user.error;
