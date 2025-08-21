import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  LinearProgress,
  Paper,
  Grid,
  Fade,
  styled
} from "@mui/material";
import { keyframes } from "@mui/system";
import SecurityIcon from '@mui/icons-material/Security';

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 206, 201, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 206, 201, 0.6); }
  100% { box-shadow: 0 0 5px rgba(0, 206, 201, 0.3); }
`;

const AnimatedPaper = styled(Paper)({
  padding: '24px',
  background: 'linear-gradient(145deg, rgba(26,32,54,0.95) 0%, rgba(30,37,61,0.95) 100%)',
  border: '1px solid rgba(108, 92, 231, 0.3)',
  animation: `${glow} 3s ease-in-out infinite`,
  borderRadius: '16px',
});

const StrengthBar = styled(LinearProgress)(({ strength }) => ({
  height: 8,
  borderRadius: 4,
  marginTop: '8px',
  backgroundColor: 'rgba(255,255,255,0.1)',
  '& .MuiLinearProgress-bar': {
    backgroundColor: strength === 'weak' ? '#ff5252' : 
                    strength === 'medium' ? '#ffb142' : 
                    strength === 'strong' ? '#2ed573' : '#1e90ff'
  }
}));

const SectionHeader = styled(Typography)({
  position: "relative",
  display: "inline-block",
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
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState({ score: 0, feedback: [] });

  const checkPasswordStrength = (value) => {
    let score = 0;
    const feedback = [];

    if (value.length >= 8) score += 1;
    else feedback.push('Use at least 8 characters');

    if (/[A-Z]/.test(value)) score += 1;
    else feedback.push('Include uppercase letters');

    if (/[0-9]/.test(value)) score += 1;
    else feedback.push('Include numbers');

    if (/[^A-Za-z0-9]/.test(value)) score += 1;
    else feedback.push('Include special characters');

    if (value.length >= 12) score += 1;

    setStrength({ score, feedback });
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    checkPasswordStrength(value);
  };

  const getStrengthLabel = () => {
    if (password.length === 0) return 'Enter a password';
    if (strength.score <= 1) return 'Weak';
    if (strength.score <= 3) return 'Medium';
    if (strength.score <= 4) return 'Strong';
    return 'Very Strong';
  };

  const getStrengthValue = () => {
    return (strength.score / 5) * 100;
  };

  return (
    <Fade in timeout={1000}>
      <Box id="password-checker" sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <SectionHeader variant="h3" sx={{ fontWeight: 800, color: "primary.main" }}>
            Password Strength Checker
          </SectionHeader>
          <Typography variant="h6" sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}>
            Test your password strength and get instant feedback
          </Typography>
        </Box>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={8} lg={6}>
            <AnimatedPaper elevation={0}>
              <TextField
                fullWidth
                type="password"
                label="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                variant="outlined"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(108, 92, 231, 0.3)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(108, 92, 231, 0.5)',
                    },
                  }
                }}
              />
              
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Strength: {getStrengthLabel()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {Math.round(getStrengthValue())}%
                  </Typography>
                </Box>
                <StrengthBar 
                  variant="determinate" 
                  value={getStrengthValue()} 
                  strength={getStrengthLabel().toLowerCase().replace(' ', '_')}
                />
              </Box>

              {strength.feedback.length > 0 && (
                <Box>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Suggestions to improve your password:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, color: 'text.secondary' }}>
                    {strength.feedback.map((item, index) => (
                      <li key={index}>
                        <Typography variant="body2">{item}</Typography>
                      </li>
                    ))}
                  </Box>
                </Box>
              )}

              {strength.score >= 4 && (
                <Box sx={{ mt: 2, p: 2, bgcolor: 'rgba(46, 213, 115, 0.1)', borderRadius: 2 }}>
                  <Typography variant="body2" sx={{ color: '#2ed573', textAlign: 'center' }}>
                    ✓ Excellent! Your password is secure
                  </Typography>
                </Box>
              )}
            </AnimatedPaper>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
}

export default PasswordChecker;