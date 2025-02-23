// server.js
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const axios = require("axios");
const querystring = require("querystring");
const app = express();
const port = process.env.PORT || 8000;
const { CLIENT_ID, CLIENT_SECRET, BACKEND_URL, FRONTEND_URL } = require("./envi.js");
const cookieParser = require("cookie-parser");

const corsOptions = {
  origin: FRONTEND_URL,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(cookieParser());

// Spotify credentials
const REDIRECT_URI = `${BACKEND_URL}/callback`;
// Redirect to Spotify for Login
app.get("/login", (req, res) => {
  const scope = "user-read-private user-read-email";
  const authUrl = `https://accounts.spotify.com/authorize?${querystring.stringify({
    response_type: "code",
    client_id: CLIENT_ID,
    scope: scope,
    redirect_uri: REDIRECT_URI,
  })}`;
  res.redirect(authUrl);
});

// Handle Callback and Get Access Token
const cookieOptions = {
  httpOnly: true,        // Prevents client-side access (secure)
  secure: true,          // Use HTTPS in production
  sameSite: "Lax",       // Allows cookies on cross-origin requests
};

app.get("/callback", async (req, res) => {
  const code = req.query.code || null;

  try {
    const response = await axios.post("https://accounts.spotify.com/api/token",
      querystring.stringify({
        code: code,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      }),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token, refresh_token } = response.data;

    // Set tokens in cookies
    res.cookie("accessToken", access_token, cookieOptions);
    res.cookie("refreshToken", refresh_token, cookieOptions);

    res.redirect(FRONTEND_URL);
  } catch (error) {
    console.error("Error exchanging code:", error.response.data);
    res.status(500).send("Authentication failed");
  }
});

// Refresh Access Token
app.get("/refresh", async (req, res) => {
  const { refresh_token } = req.query;

  try {
    const response = await axios.post("https://accounts.spotify.com/api/token",
      querystring.stringify({
        grant_type: "refresh_token",
        refresh_token: refresh_token,
      }),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error refreshing token:", error.response.data);
    res.status(500).send("Error refreshing token");
  }
});

// Dynamic Spotify API Proxy
app.get("/spotify/*", async (req, res) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) return res.status(401).json({ error: "Unauthorized" });

  const spotifyEndpoint = req.params[0];

  try {
    const spotifyResponse = await axios.get(`https://api.spotify.com/v1/${spotifyEndpoint}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    // console.log("Spotify Response:", spotifyResponse.data);
    res.json(spotifyResponse.data);
  } catch (error) {
    console.error("Error fetching Spotify API:", error.response?.data || error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));