import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Chip,
  Alert,
  Collapse,
  IconButton,
  Grid,
  Card,
  CardContent
} from "@mui/material";
import {
  Close as CloseIcon,
  Security as SecurityIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Visibility as VisibilityIcon,
  Schedule as ScheduleIcon,
  Group as GroupIcon
} from "@mui/icons-material";
import { keyframes } from "@mui/system";

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 82, 82, 0.3); }
  50% { box-shadow: 0 0 20px rgba(255, 82, 82, 0.6); }
  100% { box-shadow: 0 0 5px rgba(255, 82, 82, 0.3); }
`;

const SMSDetector = () => {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [open, setOpen] = useState(true);

  const fraudPatterns = {
    financial: {
      keywords: ["bank", "account", "card", "payment", "transaction", "suspended", "frozen", "refund", "tax", "irs"],
      weight: 3,
      description: "Financial scam indicators"
    },
    urgency: {
      keywords: ["urgent", "immediate", "expires", "act now", "limited time", "hurry", "asap", "emergency"],
      weight: 2,
      description: "Urgency tactics"
    },
    prizes: {
      keywords: ["win", "won", "winner", "lottery", "prize", "congratulations", "selected", "lucky", "reward"],
      weight: 3,
      description: "Prize/lottery scams"
    },
    personal: {
      keywords: ["password", "pin", "ssn", "social security", "verify", "confirm", "update", "details"],
      weight: 4,
      description: "Personal information requests"
    },
    links: {
      keywords: ["click here", "link", "www", "http", "bit.ly", "tinyurl", "download"],
      weight: 2,
      description: "Suspicious links"
    },
    authority: {
      keywords: ["police", "government", "court", "legal", "arrest", "lawsuit", "fine", "penalty"],
      weight: 3,
      description: "Fake authority claims"
    }
  };

  const suspiciousPatterns = [
    /\b\d{4}\s*-?\s*\d{4}\s*-?\s*\d{4}\s*-?\s*\d{4}\b/, // Credit card pattern
    /\b\d{3}\s*-?\s*\d{2}\s*-?\s*\d{4}\b/, // SSN pattern
    /call\s+\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/i, // Phone number with "call"
    /reply\s+(stop|yes|y)\s+to/i, // Reply to continue/stop
    /\$\d+/g, // Money amounts
  ];

  const checkFraud = async () => {
    setIsAnalyzing(true);
    
    // Simulate analysis delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const lowerMessage = message.toLowerCase();
    let riskScore = 0;
    let foundIssues = [];
    let patternMatches = [];

    // Check keyword patterns
    Object.entries(fraudPatterns).forEach(([category, pattern]) => {
      const foundWords = pattern.keywords.filter(word => 
        lowerMessage.includes(word.toLowerCase())
      );
      
      if (foundWords.length > 0) {
        riskScore += pattern.weight * foundWords.length;
        foundIssues.push({
          category: pattern.description,
          words: foundWords,
          severity: pattern.weight
        });
      }
    });

    // Check suspicious patterns
    suspiciousPatterns.forEach((pattern, index) => {
      if (pattern.test(message)) {
        riskScore += 2;
        const patternNames = [
          "Credit card number detected",
          "SSN pattern detected", 
          "Suspicious phone number",
          "Reply trap detected",
          "Money amount mentioned"
        ];
        patternMatches.push(patternNames[index]);
      }
    });

    // Additional risk factors
    if (message.length < 50) riskScore += 1; // Very short messages
    if (/[A-Z]{5,}/.test(message)) riskScore += 1; // Excessive caps
    if ((message.match(/!/g) || []).length > 2) riskScore += 1; // Multiple exclamation marks

    setResult({
      score: riskScore,
      issues: foundIssues,
      patterns: patternMatches,
      level: riskScore >= 8 ? "high" : riskScore >= 4 ? "medium" : riskScore >= 1 ? "low" : "safe"
    });
    
    setIsAnalyzing(false);
    setOpen(true);
  };

  const getRiskColor = (level) => {
    switch (level) {
      case "high": return "error";
      case "medium": return "warning";
      case "low": return "info";
      default: return "success";
    }
  };

  const getRiskIcon = (level) => {
    switch (level) {
      case "high": return <WarningIcon />;
      case "medium": return <WarningIcon />;
      case "low": return <VisibilityIcon />;
      default: return <CheckCircleIcon />;
    }
  };

  const getRiskMessage = (level, score) => {
    switch (level) {
      case "high": return `HIGH RISK - This message shows strong fraud indicators (Risk Score: ${score})`;
      case "medium": return `MEDIUM RISK - This message has suspicious elements (Risk Score: ${score})`;
      case "low": return `LOW RISK - Minor concerns detected (Risk Score: ${score})`;
      default: return `SAFE - No fraud indicators detected`;
    }
  };

  const exampleMessages = [
    "CONGRATULATIONS! You've WON $5000! Click here to claim your prize now!",
    "Your bank account has been suspended. Verify your details immediately.",
    "Hey, are we still meeting for lunch tomorrow?",
  ];

  return (
  
  <Box
    id="sms-detector"
    sx={{
      minHeight: "100vh",         // full viewport height
      display: "flex",            // flexbox
      flexDirection: "column",    // stack vertically
      justifyContent: "center",   // center vertically
      alignItems: "center",       // center horizontally
      px: { xs: 2, md: 4 },
      py: 6,
    }}
  >
    <Box sx={{ width: "100%", maxWidth: 1000 }}>
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 1,
            color: "secondary.main",
          }}
        >
          SMS Fraud Detector
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
        >
          Protect yourself from SMS scams with AI-powered detection
        </Typography>
      </Box>

      {/* Feature Cards */}
      <Grid
        container
        spacing={3}
        sx={{ mb: 4 }}
        justifyContent="center"
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              bgcolor: "background.paper",
              backgroundImage: "none",
              height: "100%",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <ScheduleIcon color="warning" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Instant Analysis
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get immediate results with advanced pattern recognition
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              bgcolor: "background.paper",
              backgroundImage: "none",
              height: "100%",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <VisibilityIcon color="info" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Smart Detection
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Identifies multiple fraud indicators and suspicious patterns
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              bgcolor: "background.paper",
              backgroundImage: "none",
              height: "100%",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <GroupIcon color="success" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Stay Protected
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Avoid financial losses and identity thefts immediately. Act Fast
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* SMS Input Section */}
      <Paper
        sx={{
          p: 3,
          mb: 3,
          background: "linear-gradient(to bottom right, #1a2036, #1e253d)",
          backgroundImage: "none",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ color: "text.primary" }}>
          Paste your SMS message below:
        </Typography>

        <TextField
          multiline
          rows={4}
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter the SMS message you want to analyze for fraud..."
          sx={{
            mb: 2,
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
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Characters: {message.length}
          </Typography>

          <Button
            onClick={checkFraud}
            disabled={!message.trim() || isAnalyzing}
            variant="contained"
            startIcon={<SecurityIcon />}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            {isAnalyzing ? "Analyzing..." : "Analyze Message"}
          </Button>
        </Box>
      </Paper>

      {/* Results */}
      {result && (
        <Collapse in={open}>
          <Alert
            severity={getRiskColor(result.level)}
            sx={{ mb: 3 }}
            icon={getRiskIcon(result.level)}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => setOpen(false)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <Typography variant="h6" gutterBottom>
              {getRiskMessage(result.level, result.score)}
            </Typography>

            {result.issues.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" fontWeight="bold" gutterBottom>
                  Detected Issues:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {result.issues.map((issue, index) => (
                    <li key={index}>
                      <Typography variant="body2">
                        <Box component="span" fontWeight="bold">
                          {issue.category}:
                        </Box>{" "}
                        <Box component="span" fontStyle="italic">
                          {issue.words.join(", ")}
                        </Box>
                      </Typography>
                    </li>
                  ))}
                </Box>
              </Box>
            )}

            {result.patterns.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" fontWeight="bold" gutterBottom>
                  Suspicious Patterns:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {result.patterns.map((pattern, index) => (
                    <li key={index}>
                      <Typography variant="body2">{pattern}</Typography>
                    </li>
                  ))}
                </Box>
              </Box>
            )}

            <Box
              sx={{
                mt: 2,
                p: 1,
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: 1,
              }}
            >
              <Typography variant="body2" fontWeight="bold" gutterBottom>
                Safety Tips:
              </Typography>
              {result.level === "high" || result.level === "medium" ? (
                <Box component="ul" sx={{ pl: 2 }}>
                  <li>
                    <Typography variant="body2">
                      Never click suspicious links or download attachments
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Don't share personal information via SMS
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Verify with the organization through official channels
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Report the message to your carrier by forwarding to 7726
                    </Typography>
                  </li>
                </Box>
              ) : (
                <Typography variant="body2">
                  This message appears safe, but always stay vigilant with
                  unexpected messages.
                </Typography>
              )}
            </Box>
          </Alert>
        </Collapse>
      )}

      {/* Example Messages */}
      <Paper
        sx={{
          p: 3,
          background: "linear-gradient(to bottom right, #1a2036, #1e253d)",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ color: "text.primary" }}>
          Try These Examples:
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {exampleMessages.map((example, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                onClick={() => setMessage(example)}
                sx={{
                  p: 2,
                  cursor: "pointer",
                  bgcolor: "background.default",
                  "&:hover": {
                    borderColor: "primary.main",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  Example {index + 1}:
                </Typography>
                <Typography variant="body1" color="text.primary">
                  {example}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  </Box>
);

};

export default SMSDetector;