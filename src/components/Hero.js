import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";

function Hero() {
  return (
    <Fade in timeout={900}>
      <Box
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
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ fontWeight: 700, px: 4, borderRadius: 3 }}
        >
          Get Started
        </Button>
      </Box>
    </Fade>
  );
}

export default Hero;