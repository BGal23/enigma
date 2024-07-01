import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "myApp",
  seed: "myApp",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StylesProvider generateClassName={generateClassName}>
      <App />
    </StylesProvider>
  </React.StrictMode>
);
