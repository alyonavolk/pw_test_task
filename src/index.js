import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/global.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

const initApp = async () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

initApp();
