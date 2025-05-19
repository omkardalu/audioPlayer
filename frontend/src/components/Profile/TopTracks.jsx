import { useEffect } from "react";
import useSpotifyApi from "../../hooks/useSpotifyApi.js";
import TrackCard from "./TrackCard.jsx";
import styles from '../../assets/styles/Profile.module.css';
import { useNavigate } from "react-router-dom";

const TopTracks = () => {
  const { data, loading, error, fetchSpotifyData } = useSpotifyApi();
  const navigate = useNavigate();
  useEffect(() => {
    fetchSpotifyData('me/top/tracks');
  }, []);
console.log(data);

  if (loading) return <p>Loading...</p>
  if (error) return <h1>{error}</h1>
  const isCurrentPath = window.location.pathname === '/top/tracks';
  !isCurrentPath ? data.items.splice(4) : data.items;
  const tracks = data.items.map((item,index) => {
    const timeInMin = (item.duration_ms/60000).toFixed(2).replace('.',':');
    return (
      <TrackCard count={index + 1} image={item.album.images[2].url} name={item.name} album={item.album.name} time={timeInMin} key={item.id} href={item.href} />
    )
  });

  return (
    <section id={styles.topArtistsSection} >
      <div className={styles.topArtistsHeader}>
        <p> </p>
        <h2>Top tracks this month</h2>
        <p>Only visible to you</p>
        {!isCurrentPath && <p onClick={() => { navigate('/top/tracks') }}>Show all</p>}
      </div>
      <div className={styles.toptracksContainer} >
        {tracks}
      </div>
    </section>
  )
}

export default TopTracks