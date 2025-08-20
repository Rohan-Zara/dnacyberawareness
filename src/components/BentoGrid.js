import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

const attacks = [
  { title: "Phishing", desc: "Tricking users into giving up sensitive info.", img: "imgs/phishing.png", wiki: "https://en.wikipedia.org/wiki/Phishing" },
  { title: "Malware", desc: "Malicious software that damages or disables systems.", img: "imgs/malware.png", wiki: "https://en.wikipedia.org/wiki/Malware" },
  { title: "Ransomware", desc: "Encrypts files and demands payment for decryption.", img: "imgs/ransomware.png", wiki: "https://en.wikipedia.org/wiki/Ransomware" },
  { title: "DDoS Attack", desc: "Overwhelms a system with traffic to disrupt service.", img: "imgs/ddos.jpeg", wiki: "https://en.wikipedia.org/wiki/Denial-of-service_attack" },
  { title: "Man-in-the-Middle", desc: "Intercepts communication between two parties.", img: "imgs/mitm.jpg", wiki: "https://en.wikipedia.org/wiki/Man-in-the-middle_attack" },
  { title: "SQL Injection", desc: "Injects malicious SQL queries into databases.", img: "imgs/sqlinjection.jpg", wiki: "https://en.wikipedia.org/wiki/SQL_injection" },
  { title: "Zero-Day Exploit", desc: "Targets vulnerabilities before they are patched.", img: "imgs/zeroday.jpg", wiki: "https://en.wikipedia.org/wiki/Zero-day_(computing)" },
  { title: "Password Attack", desc: "Attempts to crack or steal passwords.", img: "imgs/passwordattack.jpg", wiki: "https://en.wikipedia.org/wiki/Password_cracking" },
  { title: "Drive-By Download", desc: "Downloads malware without user consent.", img: "imgs/dbd.jpg", wiki: "https://en.wikipedia.org/wiki/Drive-by_download" },
  { title: "Cross-Site Scripting (XSS)", desc: "Injects malicious scripts into trusted websites.", img: "imgs/xss.jpg", wiki: "https://en.wikipedia.org/wiki/Cross-site_scripting" },
  { title: "Social Engineering", desc: "Manipulates people into revealing confidential info.", img: "imgs/socialengineering.svg", wiki: "https://en.wikipedia.org/wiki/Social_engineering_(security)" },
  { title: "Spyware", desc: "Secretly monitors user activity.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLcm9WigouOyLIjWkk72yyl0LNZBgvFpd2Q&s", wiki: "https://en.wikipedia.org/wiki/Spyware" },
  { title: "Adware", desc: "Displays unwanted advertisements.", img: "https://www.medirect.com.mt/wp-content/uploads/What-is-adware-Header.jpg", wiki: "https://en.wikipedia.org/wiki/Adware" },
  { title: "Trojan Horse", desc: "Disguises as legitimate software.", img: "https://www.mcafee.com/blogs/wp-content/uploads/2021/04/614x300_Blog_trojan.png", wiki: "https://en.wikipedia.org/wiki/Trojan_horse_(computing)" },
  { title: "Rootkit", desc: "Hides malicious processes from detection.", img: "https://home.sophos.com/sites/default/files/2021-09/what-is-a-rootkit.jpeg", wiki: "https://en.wikipedia.org/wiki/Rootkit" },
  { title: "Session Hijacking", desc: "Takes over a user session.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThv4ljokjDxcft6i99N1jrgILbA8AebYVnyQ&s", wiki: "https://en.wikipedia.org/wiki/Session_hijacking" }
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
  { img: "imgs/tip11.jpg" },
  { img: "imgs/tip12.jpg" },
  { img: "imgs/tip13.jpg" },
  { img: "imgs/tip14.jpg" },
  { img: "imgs/tip15.jpg" },
  { img: "imgs/tip16.jpg" }
];

function BentoGrid() {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Typography id="attacks" variant="h4" sx={{ fontWeight: 700, mb: 3, color: "primary.main" }}>
        Cyber Attacks
      </Typography>
      <Grid container spacing={2} sx={{ mb: 6 }}>
        {attacks.map((item, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Fade in timeout={500 + idx * 30}>
              <a href={item.wiki} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Card sx={{ height: "100%", bgcolor: "background.paper", borderRadius: 3, transition: "transform 0.2s", "&:hover": { transform: "scale(1.03)" } }}>
                  <Box sx={{ height: 150, mb: 2, bgcolor: "#222", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                    {item.img ? (
                      <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
              </a>
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
                <Box
                  sx={{
                    height: 180,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.img}
                    alt={`Tip ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
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