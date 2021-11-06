import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ff3366",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
