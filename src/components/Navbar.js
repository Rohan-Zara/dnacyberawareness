import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// Assuming you have your logo image in the src/assets folder
// Adjust the path to where your logo is located

function Navbar() {
  return (
    <AppBar position="sticky" color="primary" elevation={4}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src={"imgs/logo.jpg"} // Replace with your logo path
            alt="DNA GOA Logo"
            style={{ height: '50px', marginRight: '5px' }}
          />
        </Box>
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