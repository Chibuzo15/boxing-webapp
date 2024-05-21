import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// import userReducer from "./reducers/userSlice";
import { userApi } from "./rtk-query/userApi";

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  //
  //   user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const makeStore = () => {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return makeConfiguredStore;
  } else {
    let store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
          immutableCheck: false,
        }).concat(userApi.middleware),
    });

    store.__persistor = persistStore(store);
    return store;
  }
};

export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
