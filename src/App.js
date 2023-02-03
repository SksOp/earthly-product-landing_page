import {CssBaseline} from "@mui/material";
import LandingPage from "./scenes/Landingpage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './App.css';
import themeSettings from "./theme";
import { useMemo } from "react";

function App() {
  const theme  = useMemo(()=>createTheme(themeSettings()),[])
  return (
    <div className="app my-reset">
      <ThemeProvider theme = {theme}>
      <CssBaseline/>
        <LandingPage/>
      </ThemeProvider>
    </div>
  );
}

export default App;
