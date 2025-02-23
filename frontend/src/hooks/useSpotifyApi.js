import { useState } from "react";

const useSpotifyApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const fetchSpotifyData = async (endpoint) => {
    setLoading(true);
    setError(null);

    const cleanEndpoint = endpoint.replace("https://api.spotify.com/v1/", "");
    console.log(cleanEndpoint);
    
    try {
      const response = await fetch(`${backendUrl}/spotify/${cleanEndpoint}`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) throw new Error("Failed to fetch Spotify data");

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchSpotifyData };
};

export default useSpotifyApi;
