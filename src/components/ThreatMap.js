import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ThreatMap() {
  return (
    <Box id="threatmap" sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: "secondary.main" }}>
        Live Threat Map
      </Typography>
      <Box sx={{ width: "100%", height: { xs: 300, md: 500 }, borderRadius: 3, overflow: "hidden", boxShadow: 2 }}>
        <iframe
          src="https://threatmap.checkpoint.com/"
          title="Live Threat Map"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allowFullScreen
        />
      </Box>
    </Box>
  );
}

export default ThreatMap;
