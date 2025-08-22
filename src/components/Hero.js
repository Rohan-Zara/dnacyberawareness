import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import { keyframes, useTheme } from "@mui/system";

// Keyframe animations for a polished aesthetic.
const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 8px currentColor, 0 0 16px currentColor;
  }
  50% {
    text-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

/**
 * A polished and visually striking hero section component that uses
 * colors from the provided Material-UI theme.
 */
function Hero() {
  const theme = useTheme();

  return (
    <Fade in timeout={900}>
      <Box
        id="home"
        sx={{
          position: "relative",
          overflow: "hidden",
          pt: { xs: 8, md: 12 },
          pb: 0,
          textAlign: "center",
          color: theme.palette.text.primary,
          background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.background.default} 100%)`,
          bgcolor: theme.palette.background.default,
          zIndex: 1,
        }}
      >
        {/* Animated Background Grid using secondary color */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `
              linear-gradient(${theme.palette.secondary.main} 1px, transparent 1px),
              linear-gradient(90deg, ${theme.palette.secondary.main} 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            opacity: 0.3,
            animation: `${scanline} 20s linear infinite`,
            zIndex: 0,
          }}
        />

        {/* Scanline overlay for a classic CRT/digital effect */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "repeating-linear-gradient(180deg, transparent, transparent 1px, rgba(0, 0, 0, 0.1) 1px, rgba(0, 0, 0, 0.1) 2px)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Floating Orbs with theme colors */}
        <Box
          sx={{
            position: "absolute",
            left: "15%",
            top: "20%",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.palette.secondary.light} 0%, transparent 70%)`,
            boxShadow: `0 0 15px ${theme.palette.secondary.main}`,
            animation: `${pulse} 4s ease-in-out infinite`,
            animationDelay: "0s",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: "70%",
            top: "50%",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, transparent 70%)`,
            boxShadow: `0 0 15px ${theme.palette.primary.main}`,
            animation: `${pulse} 4s ease-in-out infinite`,
            animationDelay: "1.5s",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            left: "40%",
            top: "80%",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${theme.palette.secondary.light} 0%, transparent 70%)`,
            boxShadow: `0 0 15px ${theme.palette.secondary.main}`,
            animation: `${pulse} 4s ease-in-out infinite`,
            animationDelay: "0.8s",
            zIndex: 0,
          }}
        />

        {/* Content with smooth glow animation */}
        <Box position="relative" zIndex={3}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              animation: `${glow} 3s ease-in-out infinite`,
            }}
          >
            Stay Ahead of Cyber Threats
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.85,
            }}
          >
            Learn, Protect, and Respond with Confidence.
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
}

export default Hero;
