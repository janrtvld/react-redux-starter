import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

import persistedReducer from "../reducers";

// Redux Setup
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  let store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(thunk))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
