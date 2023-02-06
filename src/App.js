import {CssBaseline} from "@mui/material";
import LandingPage from "./scenes/Landingpage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './App.css';
import themeSettings from "./theme";
import { useMemo } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./scenes/HomePage"

function App() {
  const theme  = useMemo(()=>createTheme(themeSettings()),[])
  return (
    <div className="app my-reset">
      <BrowserRouter>
      <ThemeProvider theme = {theme}>
      <CssBaseline/>
      <Routes>
          <Route path ="earthly-product-landing_page/" element={<HomePage/>}/>
          <Route path ="earthly-product-landing_page/store" element={<LandingPage/>}/>
        </Routes>
        
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
