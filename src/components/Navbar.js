import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Navbar() {
  return (
    <AppBar position="sticky" color="primary" elevation={4}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          DNA GOA
        </Typography>
        <Box>
          <Button color="inherit" component="a" href="#hero">Home</Button>
          <Button color="inherit" component="a" href="#attacks">Attacks</Button>
          <Button color="inherit" component="a" href="#tips">Tips</Button>
          <Button color="inherit" component="a" href="#news">News</Button>
          <Button color="inherit" component="a" href="#threatmap">Threat Map</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
