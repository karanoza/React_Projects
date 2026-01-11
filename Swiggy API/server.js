import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/swiggy", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.738909&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      }
    );

    const data = await response.json();
    console.log("Fetched data sample:", JSON.stringify(data).slice(0, 2000));
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Swiggy API" });
  }
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
