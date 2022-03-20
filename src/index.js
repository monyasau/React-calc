import "./styles/bootstrap.min.css";
import "./styles/global.css";

import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./pages/Calculator";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<Calculator />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
