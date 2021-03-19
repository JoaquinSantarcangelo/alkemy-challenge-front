import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Normalizer
import "./normalize.css";

//Sass Imports
import "./sass/index.sass";

// -- Containers -- //
import "./sass/Login.sass";
import "./sass/Home.sass";
import "./sass/ABM.sass";

// -- Components -- //
import "./sass/Navbar.sass"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
