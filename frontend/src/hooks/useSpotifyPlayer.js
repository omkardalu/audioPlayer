import { useEffect, useState } from "react";

export default function useSpotifyPlayer(token) {
  const [player, setPlayer] = useState(null);
  const [deviceId, setDeviceId] = useState(null);

 useEffect(() => {
  if (!token) return;

  const script = document.createElement("script");
  script.src = "https://sdk.scdn.co/spotify-player.js";
  script.async = true;
  document.body.appendChild(script);

  window.onSpotifyWebPlaybackSDKReady = () => {
    const player = new window.Spotify.Player({
      name: "Omkar's Web Player 🎧",
      getOAuthToken: cb => cb(token),
      volume: 0.5,
    });

    player.addListener("ready", ({ device_id }) => {
      console.log("🎶 Player Ready, deviceId:", device_id);
      setDeviceId(device_id);
    });

    player.connect();
    setPlayer(player);
  };
}, [token]);


  return { player, deviceId };
}
