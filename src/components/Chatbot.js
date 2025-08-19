import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="Chatbot">
        <Fab
          color="secondary"
          sx={{ position: "fixed", bottom: 24, right: 24, zIndex: 1500 }}
          onClick={() => setOpen(true)}
        >
          <SmartToyIcon />
        </Fab>
      </Tooltip>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 350, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Cyber Chatbot
          </Typography>
          {/* Embed your chatbot here, e.g. iframe or widget */}
          <Box sx={{ height: 400, bgcolor: "#222", borderRadius: 2, p: 2, color: "#fff" }}>
            <p>Chatbot goes here.</p>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Chatbot;