import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import { keyframes } from "@mui/system";
import { styled } from "@mui/material/styles";

// Keyframe animations
const glow = keyframes`
  0% {
    text-shadow: 0 0 5px rgba(0, 206, 201, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(0, 206, 201, 0.8), 0 0 30px rgba(0, 206, 201, 0.6);
  }
  100% {
    text-shadow: 0 0 5px rgba(0, 206, 201, 0.5);
  }
`;

const scan = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100vh);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Styled components
const AnimatedBox = styled(Box)({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(0, 206, 201, 0.8), transparent)",
    animation: `${scan} 3s linear infinite`,
  },
});

const AnimatedTypography = styled(Typography)({
  animation: `${glow} 3s ease-in-out infinite, ${float} 4s ease-in-out infinite`,
});

const CyberGrid = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `
    linear-gradient(rgba(108, 92, 231, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(108, 92, 231, 0.1) 1px, transparent 1px)
  `,
  backgroundSize: "50px 50px",
  zIndex: 0,
  opacity: 0.3,
});

const FloatingOrb = styled(Box)(({ left, top, size, delay }) => ({
  position: "absolute",
  left: left,
  top: top,
  width: size,
  height: size,
  borderRadius: "50%",
  background: "radial-gradient(circle, rgba(0, 206, 201, 0.6) 0%, transparent 70%)",
  filter: "blur(5px)",
  animation: `${pulse} 4s ease-in-out infinite`,
  animationDelay: delay || "0s",
  zIndex: 0,
}));

function Hero() {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    // Delay the particle animation slightly for better performance
    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fade in timeout={900}>
      <AnimatedBox
        id="home"
        sx={{
          py: { xs: 8, md: 12 },
          textAlign: "center",
          color: "#fff",
          background: "linear-gradient(180deg, rgba(29, 129, 229, 0.8) 0%, rgba(19, 22, 28, 1) 100%)",
          bgcolor: "background.default",
          position: "relative",
        }}
      >
        {/* Background elements */}
        <CyberGrid />
        
        {/* Floating orbs/particles */}
        {showParticles && (
          <>
            <FloatingOrb left="10%" top="20%" size="80px" delay="0s" />
            <FloatingOrb left="80%" top="30%" size="60px" delay="1s" />
            <FloatingOrb left="25%" top="70%" size="100px" delay="2s" />
            <FloatingOrb left="70%" top="60%" size="40px" delay="0.5s" />
            <FloatingOrb left="50%" top="40%" size="70px" delay="1.5s" />
          </>
        )}

        {/* Content with higher z-index */}
        <Box position="relative" zIndex={1}>
          <AnimatedTypography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
            Stay Ahead of Cyber Threats
          </AnimatedTypography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4, 
              opacity: 0.85,
              animation: `${float} 5s ease-in-out infinite`,
            }}
          >
            Learn, Protect, and Respond with Confidence.
          </Typography>
        </Box>
      </AnimatedBox>
    </Fade>
  );
}

export default Hero;