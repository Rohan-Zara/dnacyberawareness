import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

// --- Add your arrays here ---
const attacks = [
  { title: "Phishing", desc: "Tricking users into giving up sensitive info.", img: "imgs/phishing.png" },
  { title: "Malware", desc: "Malicious software that damages or disables systems.", img: "imgs/malware.png" },
  { title: "Ransomware", desc: "Encrypts files and demands payment for decryption.", img: "imgs/ransomware.png" },
  { title: "DDoS Attack", desc: "Overwhelms a system with traffic to disrupt service.", img: "imgs/ddos.jpeg" },
  { title: "Man-in-the-Middle", desc: "Intercepts communication between two parties.", img: "imgs/mittm.png" },
  { title: "SQL Injection", desc: "Injects malicious SQL queries into databases.", img: "https://your-image-url.com/sqlinjection.png" },
  { title: "Zero-Day Exploit", desc: "Targets vulnerabilities before they are patched.", img: "https://your-image-url.com/zeroday.png" },
  { title: "Password Attack", desc: "Attempts to crack or steal passwords.", img: "https://your-image-url.com/passwordattack.png" },
  { title: "Drive-By Download", desc: "Downloads malware without user consent.", img: "https://your-image-url.com/driveby.png" },
  { title: "Cross-Site Scripting (XSS)", desc: "Injects malicious scripts into trusted websites.", img: "https://your-image-url.com/xss.png" },
  { title: "Social Engineering", desc: "Manipulates people into revealing confidential info.", img: "imgs/socialengineering.svg" },
  { title: "Spyware", desc: "Secretly monitors user activity.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLcm9WigouOyLIjWkk72yyl0LNZBgvFpd2Q&s" },
  { title: "Adware", desc: "Displays unwanted advertisements.", img: "https://www.medirect.com.mt/wp-content/uploads/What-is-adware-Header.jpg" },
  { title: "Trojan Horse", desc: "Disguises as legitimate software.", img: "https://your-image-url.com/trojan.png" },
  { title: "Rootkit", desc: "Hides malicious processes from detection.", img: "https://home.sophos.com/sites/default/files/2021-09/what-is-a-rootkit.jpeghttps://www.mcafee.com/blogs/wp-content/uploads/2021/04/614x300_Blog_trojan.png" },
  { title: "Session Hijacking", desc: "Takes over a user session.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThv4ljokjDxcft6i99N1jrgILbA8AebYVnyQ&s" }
];

const tips = [
  { img: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/06/20250606131298449.jpg" },
  { img: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/06/202506061905714583.jpg" },
  { img: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/06/20250606695410773.jpg" },
  { img: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/06/202506061444135532.jpg" },
  { img: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/06/20250606300963759.jpg" },
  { img: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/06/20250606774889926.jpg" },
  { img: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/06/202506061917168516.jpg" },
  { img: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/06/20250606250158044.jpg" },
  { img: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/06/2025060670433041.jpg" },
  { img: "https://cdnbbsr.s3waas.gov.in/s3dcf6070a4ab7f3afbfd2809173e0824b/uploads/2025/06/20250606328824219.jpg" },
  { img: "https://your-image-url.com/tip11.png" },
  { img: "https://your-image-url.com/tip12.png" },
  { img: "https://your-image-url.com/tip13.png" },
  { img: "https://your-image-url.com/tip14.png" },
  { img: "https://your-image-url.com/tip15.png" },
  { img: "https://your-image-url.com/tip16.png" }
];

function BentoGrid() {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Typography id="attacks" variant="h4" sx={{ fontWeight: 700, mb: 3, color: "primary.main" }}>
        Common Cyber Attacks
      </Typography>
      <Grid container spacing={2} sx={{ mb: 6 }}>
        {attacks.map((item, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Fade in timeout={500 + idx * 30}>
              <Card sx={{ height: "100%", bgcolor: "background.paper", borderRadius: 3 }}>
                <Box sx={{ height: 150, mb: 2, bgcolor: "#222", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {item.img ? (
                    <img src={item.img} alt={item.title} style={{ maxWidth: "95%", maxHeight: "95%" }} />
                  ) : (
                    <Typography variant="caption" color="text.secondary">Image here</Typography>
                  )}
                </Box>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
      <Typography id="tips" variant="h4" sx={{ fontWeight: 700, mb: 3, color: "secondary.main" }}>
        Security Tips
      </Typography>
      <Grid container spacing={2}>
        {tips.map((item, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Fade in timeout={500 + idx * 30}>
              <Card sx={{ height: "100%", bgcolor: "background.paper", borderRadius: 3 }}>
                <Box sx={{ height: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={item.img} alt={`Tip ${idx + 1}`} style={{ maxWidth: "95%", maxHeight: "95%" }} />
                </Box>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BentoGrid;
