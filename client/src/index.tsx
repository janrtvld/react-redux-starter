import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Redux Setup
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import configureStore from "./utils/configureStore";

const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals(console.log());
