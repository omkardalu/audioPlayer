import { Link } from 'react-router-dom';
import styles from '../../assets/styles/Profile.module.css';
const ArtistCard = ({ image, name, type, href }) => {
  return (
    <div to={href} className={styles.artistCard}>
      <div className={styles.artistImage}>
        <img src={image} alt="artist" />
      </div>
      <p className={styles.artistName}>{name}</p>
      <p className={styles.artistType}>{type}</p>
    </div>
  )
}

export default ArtistCard