import { useContext, useEffect } from "react";
import PlayerContext from "../context/PlayerContext.js";
import useSpotifyApi from "../hooks/useSpotifyApi.js";
import useSpotifyPlayer from "../hooks/useSpotifyPlayer.js";

const playSong = async (trackUri, token, deviceId) => {
  if (!token || !trackUri || !deviceId) {
    console.warn("Missing one of: token, trackUri, or deviceId");
    return;
  }

  try {
    await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
      method: "PUT",
      body: JSON.stringify({ uris: [trackUri] }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("🔊 Playing:", trackUri);
  } catch (err) {
    console.error("⚠️ Failed to play:", err);
  }
};


const TrackPlayer = ({ token }) => {
  const { currentSong } = useContext(PlayerContext);
  const { data, fetchSpotifyData } = useSpotifyApi();
  const { deviceId } = useSpotifyPlayer(token);

  // Fetch track data
  useEffect(() => {
    if (currentSong) {
      fetchSpotifyData(`tracks/${currentSong}`);
    }
  }, [currentSong]);

  // Auto-play when device + trackUri ready
  useEffect(() => {
    if (deviceId && data?.uri) {
      playSong(data.uri, token, deviceId);
    }
  }, [deviceId, data]);

  return (
    <div className="track-player">
      <p>🎵 Now Playing: {data?.name || "Loading..."}</p>
    </div>
  );
};

export default TrackPlayer;
