import styles from '../../assets/styles/Profile.module.css';
const TrackCard = ({ count, image, name, album, time, href }) => {

  function truncate(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
  }


  return (
    <div className={styles.trackCard}>
      <div>{count}</div>
      <div className={styles.trackCardInfo}>
        <div className={styles.trackImage}>
          <img src={image} alt="track" />
        </div>
        <div>{truncate(name,15)}</div>
      </div>
      <div>{truncate(album,15)}</div>
      <div className={styles.time}>{time}</div>
    </div>
  )
}

export default TrackCard;
