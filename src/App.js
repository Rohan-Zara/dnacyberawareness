import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import NewsSection from "./components/NewsSection";
import ThreatMap from "./components/ThreatMap";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1976d2" },
    secondary: { main: "#ff9800" },
    background: { default: "#10131a", paper: "#181c24" },
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",
    fontWeightBold: 800,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Navbar />
        <Hero />
        <BentoGrid />
        <ThreatMap />
        <NewsSection />
        <Chatbot />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;