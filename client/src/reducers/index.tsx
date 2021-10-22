import { combineReducers } from "redux";
import greetingReducer from "./greetingReducer";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  greetings: greetingReducer,
});

const pReducer = (state: any, action: any) => {
  if (action.type === "persist/REHYDRATE") {
    return rootReducer(action.payload, action.payload);
  }

  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, pReducer);

export type RootState = ReturnType<typeof persistedReducer>;

export default persistedReducer;
