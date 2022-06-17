import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./components/GlobalStyle";
import GlobalStyle from "./components/GlobalStyle";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </React.StrictMode>
);
reportWebVitals();
