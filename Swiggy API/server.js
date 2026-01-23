import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

app.get("/api/menu", (req, res) => {
  try {
    const { restaurantId } = req.query;
    console.log(`Fetching menu for restaurant ID: ${restaurantId}`);

    // Read mock data from RestaurantsMenu.json
    const jsonFilePath = path.join(__dirname, "..", "RestaurantsMenu.json");
    
    if (!fs.existsSync(jsonFilePath)) {
      return res.status(404).json({ error: "Menu data file not found" });
    }

    const fileData = fs.readFileSync(jsonFilePath, "utf8");
    const data = JSON.parse(fileData);
    
    console.log(`✅ Served mock menu data for restaurant ${restaurantId}`);
    res.json(data);

  } catch (err) {
    console.error("Error serving menu:", err.message);
    res.status(500).json({
      error: "Failed to fetch menu",
      details: err.message
    });
  }
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
  console.log("✅ /api/swiggy - Fetch live restaurant data");
  console.log("✅ /api/menu - Serve mock menu from RestaurantsMenu.json");
});
