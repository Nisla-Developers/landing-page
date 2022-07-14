import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { AboutUsPage } from "./containers/AboutUs";
import { HomePage } from "./containers/Home/Home";
import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="app_container">
        <ResponsiveAppBar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
