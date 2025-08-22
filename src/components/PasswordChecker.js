// src/components/PasswordChecker.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  LinearProgress,
  Paper,
  IconButton,
  InputAdornment,
  Fab,
  Fade,
  styled,
} from "@mui/material";
import { keyframes } from "@mui/system";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyIcon from "@mui/icons-material/Key";  
import CloseIcon from "@mui/icons-material/Close";

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 206, 201, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 206, 201, 0.6); }
  100% { box-shadow: 0 0 5px rgba(0, 206, 201, 0.3); }
`;

const AnimatedPaper = styled(Paper)({
  padding: "24px",
  background: "linear-gradient(145deg, rgba(26,32,54,0.95) 0%, rgba(30,37,61,0.95) 100%)",
  border: "1px solid rgba(108, 92, 231, 0.3)",
  animation: `${glow} 3s ease-in-out infinite`,
  borderRadius: "16px",
  maxWidth: "420px",
  width: "90%",
});

const StrengthBar = styled(LinearProgress)(({ strength }) => ({
  height: 8,
  borderRadius: 4,
  marginTop: "8px",
  backgroundColor: "rgba(255,255,255,0.1)",
  "& .MuiLinearProgress-bar": {
    transition: "all 0.5s ease",
    backgroundColor:
      strength === "weak"
        ? "#ff5252"
        : strength === "medium"
        ? "#ffb142"
        : strength === "strong"
        ? "#2ed573"
        : strength === "very_strong"
        ? "#00cec9"
        : "#1e90ff",
  },
}));

const SectionHeader = styled(Typography)({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1.5rem",
  paddingBottom: "0.5rem",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "80px",
    height: "4px",
    background: "linear-gradient(90deg, #6c5ce7, #00cec9)",
    borderRadius: 2,
  },
});

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState({ score: 0, feedback: [] });
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  const checkPasswordStrength = (value) => {
    let score = 0;
    const feedback = [];

    if (value.length >= 8) score += 1;
    else feedback.push("Use at least 8 characters");

    if (/[A-Z]/.test(value)) score += 1;
    else feedback.push("Include uppercase letters");

    if (/[0-9]/.test(value)) score += 1;
    else feedback.push("Include numbers");

    if (/[^A-Za-z0-9]/.test(value)) score += 1;
    else feedback.push("Include special characters");

    if (value.length >= 12) score += 1;

    setStrength({ score, feedback });
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    checkPasswordStrength(value);
  };

  const getStrengthLabel = () => {
    if (password.length === 0) return "Enter a password";
    if (strength.score <= 1) return "Weak";
    if (strength.score <= 3) return "Medium";
    if (strength.score === 4) return "Strong";
    return "Very Strong";
  };

  const getStrengthValue = () => (strength.score / 5) * 100;
  const getStrengthKey = () => getStrengthLabel().toLowerCase().replace(" ", "_");

  return (
    <>
      {/* Floating Button — only shows when closed */}
      {!open && (
        <Fab
          color="secondary"
          sx={{
            position: "fixed",
            bottom: 160, 
            right: 24,
            zIndex: 2000,
            backgroundColor: "secondary.main",
            "&:hover": { backgroundColor: "primary" },
          }}
          onClick={() => setOpen(true)}
        >
          <KeyIcon />
        </Fab>
      )}

      {/* Floating Widget */}
      <Fade in={open} mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: "fixed",
            bottom: 90,
            right: 24,
            zIndex: 1500,
          }}
        >
          <AnimatedPaper elevation={0}>
         <SectionHeader variant="h6" sx={{ fontWeight: 800, color: "primary.main", textAlign: "center", position: "relative" }}>
  Password Strength Checker
  <IconButton
    size="small"
    onClick={() => setOpen(false)}
    sx={{
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      color: "text.secondary",
    }}
  >
    <CloseIcon />
  </IconButton>
</SectionHeader>

            {/* Input */}
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              label="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              variant="outlined"
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": {
                    borderColor: "rgba(108, 92, 231, 0.3)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(108, 92, 231, 0.5)",
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{
                        color: "#00cec9",
                        "&:hover": {
                          color: "#6c5ce7",
                          textShadow: "0 0 8px rgba(108, 92, 231, 0.8)",
                        },
                      }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Strength Indicator */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Strength: {getStrengthLabel()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {Math.round(getStrengthValue())}%
                </Typography>
              </Box>
              <StrengthBar variant="determinate" value={getStrengthValue()} strength={getStrengthKey()} />
            </Box>

            {/* Suggestions */}
            {strength.feedback.length > 0 && (
              <Box>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                  Suggestions:
                </Typography>
                <Box component="ul" sx={{ pl: 2, color: "text.secondary" }}>
                  {strength.feedback.map((item, index) => (
                    <li key={index}>
                      <Typography variant="body2">{item}</Typography>
                    </li>
                  ))}
                </Box>
              </Box>
            )}

            {/* Success Message */}
            {strength.score >= 4 && (
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  bgcolor: "rgba(46, 213, 115, 0.1)",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: strength.score === 5 ? "#00cec9" : "#2ed573",
                    fontWeight: 600,
                    textShadow: strength.score === 5 ? "0 0 10px rgba(0,206,201,0.8)" : "none",
                  }}
                >
                  ✓ {strength.score === 5 ? "Excellent! Very strong" : "Great! Secure password"}
                </Typography>
              </Box>
            )}
          </AnimatedPaper>
        </Box>
      </Fade>
    </>
  );
}

export default PasswordChecker;
