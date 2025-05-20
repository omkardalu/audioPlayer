import { useState } from 'react';
import PlayerHeader from './components/PlayerHeader.jsx';
import PlayerLeftAside from './components/PlayerLeftAside.jsx';
import PlayerMain from './components/PlayerMain.jsx';
import PlayerRightAside from './components/PlayerRightAside.jsx';
import TrackPlayer from './components/TrackPlayer.jsx';
import PlayerContext from './context/PlayerContext.js';

const Player = () => {

  const [currentSong, setCurrentSong] = useState(null);
  console.log('Current song:', currentSong);
  
  return (
    <div className="super-container" id="super-container">
      <PlayerContext.Provider value={{ currentSong, setCurrentSong }}>
        <PlayerHeader />
        <PlayerLeftAside />
        <PlayerMain />
        <PlayerRightAside />
        <TrackPlayer />
      </PlayerContext.Provider>
    </div>
  )
};

export default Player;