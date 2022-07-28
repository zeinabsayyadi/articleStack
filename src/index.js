import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import theme from "./theme";
import './assets/CSS/styles.css'
import { BrowserRouter } from "react-router-dom";
import ContextsProvider from "./Contexts";
const root = document.getElementById("root");
render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <BrowserRouter>
    <ContextsProvider>
        <App />
    </ContextsProvider>
      </BrowserRouter>
  </ThemeProvider>
  ,
  root
);