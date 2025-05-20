import { useContext } from 'react';
import { formatTime, truncate } from '../../../utils/functionalities.js';
import styles from '../../assets/styles/Profile.module.css';
import currentSongContext from '../../context/PlayerContext.js';
const TrackCard = ({ id, count, image, name, album, time }) => {
  const { setCurrentSong } = useContext(currentSongContext);
  const timeInMin = formatTime(time / 1000);

  const handleDoubleClick = () => {
    setCurrentSong(id);
  };

  return (
    <div onDoubleClick={handleDoubleClick} className={styles.trackCard}>
      <div>{count}</div>
      <div className={styles.trackCardInfo}>
        <div className={styles.trackImage}>
          <img src={image} alt="track" />
        </div>
        <div>{truncate(name, 15)}</div>
      </div>
      <div>{truncate(album, 15)}</div>
      <div className={styles.time}>{timeInMin}</div>
    </div>
  )
}

export default TrackCard;
