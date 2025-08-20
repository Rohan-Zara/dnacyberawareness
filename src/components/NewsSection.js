import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import theme from "../App.js";

function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
const apiKey = process.env.REACT_APP_SERPAPI_KEY;
  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const serpApiUrl = `${proxy}https://serpapi.com/search.json?engine=google&q=cyber+crimes&gl=in&hl=en&tbm=nws&api_key=${apiKey}`;

    fetch(serpApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.news_results || []);
      })
      .catch(() => setNews([]))
      .finally(() => setLoading(false));
  }, []);

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
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  height: "100%",
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <CardActionArea
                  component="a"
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ height: "100%" }}
                >
                  {article.thumbnail && (
  <Box
    sx={{
      width: "100%",
      bgcolor: "background.default", // matches card background
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      p: 2, // optional padding for breathing room
    }}
  >
    <img
      src={article.thumbnail}
      alt={article.title}
      loading="lazy"
      style={{
        maxWidth: "100%",     // never stretch beyond card
        maxHeight: "250px",   // cap height for uniformity
        objectFit: "contain", // scale image, keep aspect ratio
        display: "block",
        borderRadius: "6px",  // smooth edges so it blends nicely
        backgroundColor: "inherit", // makes padding blend with bg
      }}
    />
  </Box>
)}



                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
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

                    <Typography variant="caption" color="text.secondary">
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
