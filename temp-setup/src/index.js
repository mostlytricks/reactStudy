import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Portfolio from "./pages/portfolio";

import reportWebVitals from "./reportWebVitals";
import Port2 from "./pages/portfolio2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Portfolio></Portfolio> */}
    <Port2></Port2>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
