import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const serpApiKey = process.env.REACT_APP_SERPAPI_KEY;

    // 👇 proxy for localhost (only for dev!)
  const proxy = "https://cors-anywhere.herokuapp.com/";

    const serpApiUrl = `${proxy}https://serpapi.com/search.json?engine=google&q=cyber+crimes&gl=in&hl=en&tbm=nws&api_key`;

    fetch(serpApiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("SerpAPI data:", data);
        setNews(data.news_results || []);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setNews([]);
      })
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
        <Grid container spacing={2}>
          {news.map((article, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{ height: "100%", bgcolor: "background.paper", borderRadius: 3 }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {article.snippet}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {article.source?.name}
                  </Typography>
                  {article.thumbnail && (
                    <Box sx={{ mt: 2 }}>
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        style={{ maxWidth: "100%" }}
                      />
                    </Box>
                  )}
                  {article.link && (
                    <Box sx={{ mt: 1 }}>
                      <a href={article.link} target="_blank" rel="noopener noreferrer">
                        Read more
                      </a>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default NewsSection;
