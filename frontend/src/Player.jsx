import PlayerHeader from './components/PlayerHeader.jsx';
import PlayerLeftAside from './components/PlayerLeftAside.jsx';
import PlayerMain from './components/PlayerMain.jsx';
import PlayerRightAside from './components/PlayerRightAside.jsx';
import TrackPlayer from './components/TrackPlayer.jsx';
const Player = () => {
return (
    <div className="super-container" id="super-container">
      <PlayerHeader />
      <PlayerLeftAside />
      <PlayerMain />
      <PlayerRightAside />
      <TrackPlayer />
    </div>
)
};

export default Player;