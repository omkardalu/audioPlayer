import { useEffect } from "react";
import useSpotifyApi from "../../hooks/useSpotifyApi"
import ArtistCard from "./ArtistCard";
import styles from '../../assets/styles/Profile.module.css';
const TopArtists = () => {
  const {data,loading,error,fetchSpotifyData} = useSpotifyApi();
  useEffect(()=>{
    fetchSpotifyData('me/top/artists');
  },[]);
  console.log(data);
  if(loading) return <p>Loading...</p>
  if(error) return <h1>{error}</h1>
  const artists = data.items.slice(0,4).map((item)=>{
    return(
      <ArtistCard image={item.images[0].url} name={item.name} type={item.type} key={item.id} href={item.href}/>
    )
  })
  return (
    <section id={styles.topArtistsSection} >
      <div className={styles.topArtistsHeader}>
      <h2>Top artists this month</h2>
      <p>Only visible to you</p>
      <p onClick={()=>{}}>Show all</p>
      </div>
      <div className={styles.topArtistsContainer} >
      {artists}
      </div>
    </section> 
  )
}

export default TopArtists