import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import SecurityIcon from "@mui/icons-material/Security";
import { styled } from "@mui/material/styles";

// Styled components for enhanced visuals
const GlowButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: '0%',
    height: '2px',
    backgroundColor: theme.palette.secondary.main,
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover::after': {
    width: '80%',
  },
  margin: '0 4px',
  borderRadius: '20px',
  padding: '6px 16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 206, 201, 0.1)',
    transform: 'translateY(-2px)',
  }
}));

const AnimatedAppBar = styled(AppBar)({
  background: 'linear-gradient(90deg, rgba(26,32,54,0.95) 0%, rgba(26,32,54,0.98) 100%)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(108, 92, 231, 0.3)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
});

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = ["Home", "Attacks", "Tips", "News", "Threat Map"];

  return (
    <AnimatedAppBar position="sticky" elevation={0}>
      <Toolbar>
        {/* Logo and title section */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <SecurityIcon 
            sx={{ 
              fontSize: 32, 
              mr: 1, 
              color: 'secondary.main',
              filter: 'drop-shadow(0 0 5px rgba(0, 206, 201, 0.5))'
            }} 
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              background: 'linear-gradient(45deg, #6c5ce7 30%, #00cec9 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            CYBERSECURE
          </Typography>
        </Box>

        {/* Mobile menu (visible on extra-small screens) */}
        <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{
              border: '1px solid rgba(108, 92, 231, 0.3)',
              borderRadius: '8px'
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
              '& .MuiPaper-root': {
                backgroundColor: 'background.paper',
                backgroundImage: 'none',
                borderRadius: '12px',
                marginTop: '8px',
                border: '1px solid rgba(108, 92, 231, 0.2)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
              }
            }}
          >
            {pages.map((page) => (
              <MenuItem 
                key={page} 
                onClick={handleCloseNavMenu}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(108, 92, 231, 0.1)'
                  }
                }}
              >
                <Button 
                  color="inherit" 
                  component="a" 
                  href={`#${page.toLowerCase().replace(' ', '')}`}
                  fullWidth
                  sx={{ 
                    justifyContent: 'flex-start',
                    color: 'text.primary'
                  }}
                >
                  {page}
                </Button>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Desktop navigation links (visible on medium and up screens) */}
        <Box sx={{ 
          display: { xs: "none", md: "flex" },
          alignItems: 'center'
        }}>
          {pages.map((page) => (
            <GlowButton
              key={page}
              color="inherit"
              component="a"
              href={`#${page.toLowerCase().replace(' ', '')}`}
            >
              {page}
            </GlowButton>
          ))}
        </Box>
      </Toolbar>
    </AnimatedAppBar>
  );
}

export default Navbar;
