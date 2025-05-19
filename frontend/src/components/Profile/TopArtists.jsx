import { useEffect } from "react";
import useSpotifyApi from "../../hooks/useSpotifyApi.js";
import ArtistCard from "./ArtistCard";
import styles from '../../assets/styles/Profile.module.css';
import { useNavigate } from "react-router-dom";
const TopArtists = () => {
  const {data,loading,error,fetchSpotifyData} = useSpotifyApi();
  const navigate = useNavigate();
  useEffect(()=>{
    fetchSpotifyData('me/top/artists');
  },[]);

  if(loading) return <p>Loading...</p>
  if(error) return <h1>{error}</h1>
  const isCurrentPath = window.location.pathname === '/top/artists';
  !isCurrentPath? data.items.splice(4):data.items;
  const artists = data.items.map((item)=>{
    return(
      <ArtistCard image={item.images[0].url} name={item.name} type={item.type} key={item.id} href={item.href}/>
    )
  });

  return (
    <section id={styles.topArtistsSection} >
      <div className={styles.topArtistsHeader}>
      <h2>Top artists this month</h2>
      <p>Only visible to you</p>
      {!isCurrentPath && <p onClick={()=>{navigate('/top/artists')}}>Show all</p>}
      </div>
      <div className={styles.topArtistsContainer} >
      {artists}
      </div>
    </section> 
  )
}

export default TopArtists;