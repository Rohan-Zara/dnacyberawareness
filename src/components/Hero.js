import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

function Hero() {
  return (
    <Fade in timeout={900}>
      <Box
        id="hero"
        sx={{
          py: { xs: 8, md: 12 },
          textAlign: "center",
          bgcolor: "background.paper",
          background: "linear-gradient(120deg, #1976d2 60%, #ff9800 100%)",
          color: "#fff",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
          Stay Ahead of Cyber Threats
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.85 }}>
          Learn, Protect, and Respond with Confidence.
        </Typography>
      </Box>
    </Fade>
  );
}

export default Hero;
