// file: api/news.js
const { getJson } = require("serpapi");

export default async function handler(req, res) {
  const SerpApiKey = process.env.SERPAPI_KEY;

  if (!SerpApiKey) {
    res.status(500).json({ error: "SerpApi key not configured." });
    return;
  }

  try {
    // Wrap the getJson callback in a Promise to use async/await cleanly
    const json = await new Promise((resolve, reject) => {
      getJson({
        api_key: SerpApiKey,
        engine: "google_news",
        q: "cybersecurity news",
        google_domain: "google.com",
        gl: "in",
        hl: "en"
      }, (data) => {
        if (data) resolve(data);
        else reject(new Error("No data returned"));
      });
    });

    const newsResults = json.news_results || [];

    res.status(200).json(newsResults);
  } catch (error) {
    console.error("SerpApi call failed:", error);
    res.status(500).json({ error: "Failed to fetch news from the API." });
  }
}
