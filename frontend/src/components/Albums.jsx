import { use, useEffect, useState } from "react";
import '../assets/styles/album.css';
import useSpotifyApi from "../hooks/useSpotifyApi";
const Albums = () => {
  const { data, loading, error, fetchSpotifyData } = useSpotifyApi();
  useEffect(() => {
    const getMusic = async () => {
      await fetchSpotifyData("https://api.spotify.com/v1/browse/new-releases");
    }
    getMusic();
  }, []);

  console.log(data);
  if (loading) return "Loading..."
  if (error) return error.message
  return (
    <div>
      <h1>Albums</h1>
      <div className="audio-album">
        {data && data.albums.items.map((item, index) => {
          return (
            <div key={index}>
              <p className="artist" >{item.name}</p>
              <img key={index} src={item.images[0].url} alt="music" />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Albums;
