// Hero.js
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
          color: "#fff",
          // The key change is here: A gradient that fades into the background color
          background: "linear-gradient(180deg, rgba(29, 129, 229, 0.8) 0%, rgba(19, 22, 28, 1) 100%)",
          // The background color of your app's body
          bgcolor: "background.default",
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