import { ThemeProvider } from "@mui/material";
import React from "react";
import Home from "./pages/Home/Home";
import theme from "./theme/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
