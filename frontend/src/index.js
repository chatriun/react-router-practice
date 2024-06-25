import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import AppLazy from "./AppLazy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppLazy /> */}
  </React.StrictMode>
);
