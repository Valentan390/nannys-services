import { configureStore } from "@reduxjs/toolkit";
import { modalReduser } from "./madal/madalSlise";
import { userAuthReduсer } from "./userAuth/userAuthSlice";
import { nannysReducer } from "./nannys/nannysSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoriteNannysReducer } from "./favorite/favoriteSlice";
import { filterReducer } from "./filter/filterSlice";

const authUserPersistConfig = {
  key: "authUser",
  storage,
  whitelist: ["idToken"],
};

const persistedAuthUserReducer = persistReducer(
  authUserPersistConfig,
  userAuthReduсer
);

export const store = configureStore({
  reducer: {
    modal: modalReduser,
    user: persistedAuthUserReducer,
    nannys: nannysReducer,
    nannysFaforit: favoriteNannysReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
