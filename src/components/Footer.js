import React from "react";
import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 3,
        textAlign: "center",
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Cybersecurity Awareness ·DNA GOA·{" "}
        <Link
          href="https://github.com/Rohan-Zara"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ fontWeight: 500 }}
        >
          Rohan
        </Link>{" "}
        &nbsp;|&nbsp; 
        <Link
          href="https://github.com/24nirbhay"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ fontWeight: 500 }}
        >
          Nirbhay
        </Link>{" "}
        &nbsp;|&nbsp; 
        <Link
          href="https://github.com/akash-0304"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ fontWeight: 500 }}
        >
          Akash
        </Link>{" "}
        &nbsp;|&nbsp; 
        <Link
          href="https://github.com/AASHVA-bit"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ fontWeight: 500 }}
        >
          Aashva
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
