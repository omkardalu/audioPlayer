import { useEffect } from "react";
import useSpotifyApi from "../hooks/useSpotifyApi";
import styles from "../assets/styles/Profile.module.css";
const Profile = () => {
  const { data, loading, error, fetchSpotifyData } = useSpotifyApi();
  useEffect(() => {
    fetchSpotifyData('me');
  }, [])
  console.log(data);

  if (loading) return <loading>Loading...</loading>
  if (error) return <h1>{error}</h1>

  return (
    loading ? <h3>Loading...</h3> : <section id="profile-section">
      <div className={styles.profileHeader}>
        <img src={data.images[0].url} alt="profile-image" />
        <div className={styles.profileInfo}>
          <p className={styles.profile}>Profile</p>
          <p className={styles.profileName}>{data.display_name}</p>
          <p className={styles.followers}>{data.followers.total} followers</p>
        </div>
      </div>
    </section>
  )
}

export default Profile;