import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
// Note: Assuming 'theme' is imported and available, as in the original code.

function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = ""; // Leave as empty string. Canvas will inject the key.

  useEffect(() => {
    const apiKey = process.env.REACT_APP_SERPAPI_KEY;
    // Note: The CORS proxy is fine for development but not recommended for production.
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const serpApiUrl = `${proxy}https://serpapi.com/search.json?engine=google&q=cyber+crimes&gl=in&hl=en&tbm=nws&api_key=${apiKey}`;

    const fetchNews = async () => {
      try {
        const response = await fetch(serpApiUrl);
        const data = await response.json();
        setNews(data.news_results || []);
      } catch (error) {
        console.error("Failed to fetch news:", error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiKey]);

  return (
    <Box id="news" sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 3, color: "primary.main" }}
      >
        Latest Cybersecurity News
      </Typography>

      {loading ? (
        <LinearProgress />
      ) : (
        <Grid container spacing={3}>
          {news.map((article, idx) => (
            <Grid
              item
              xs={12}
              sm={6} // Two cards side by side for sm and up
              key={idx}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              >
                <CardActionArea
                  component="a"
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  {article.thumbnail ? (
                    <Box
                      sx={{
                        width: { xs: "100%", sm: "30%" },
                        height: { xs: 200, sm: "auto" },
                        // Added a gradient to the background to make it look better
                        background:
                          "linear-gradient(45deg, #1f2937, #374151)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain", // Use 'contain' to prevent blurring
                          display: "block",
                          borderRadius: "6px",
                          // Also adding a slight opacity to make the gradient more visible
                          opacity: 0.8,
                        }}
                      />
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        width: { xs: "100%", sm: "30%" },
                        height: { xs: 200, sm: "100%" },
                        // Added a gradient to the fallback background
                        background:
                          "linear-gradient(45deg, #1f2937, #374151)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "text.secondary",
                        borderRadius: "6px",
                      }}
                    >
                      <Typography variant="caption" sx={{ textAlign: "center", px: 1 }}>
                        No Image
                      </Typography>
                    </Box>
                  )}

                  <CardContent sx={{ flexGrow: 1, p: 2, pb: 0, display: "flex", flexDirection: "column" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {article.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {article.snippet}
                    </Typography>

                    <Typography variant="caption" color="text.secondary" sx={{ mt: "auto" }}>
                      {article.source?.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default NewsSection;
