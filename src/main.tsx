import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "myApp",
  seed: "myApp",
});

const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StylesProvider generateClassName={generateClassName}>
        <App />
      </StylesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
