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
      <PlayerContext.Provider value={{currentSong, setCurrentSong}}>
        <PlayerHeader />
        <PlayerLeftAside />
        <PlayerMain />
        <PlayerRightAside />
        <TrackPlayer token={'BQBf0zzTou2lAWNSdigaZGFrF4-2ek4X0D4kjFgXsIff4HSD5J4Dq9aVtJCcrM8kAJZ6JyiLxZhoW4C6QZMC4cAkSSShKbvsi9N5Yj9fz-j2esWEocaytHaebPLQkU9VMFTsGtd90dTjQ50UWhjR7OwFnXFBHMHMt6ES_3AqxN2YTkFuNYrAAah8NeajtaxQ-7-I4sB53FOETWvLPlGgrNqcivkMUtgPBM2PwF_JY5hwtexxl_Cw2fCnqWIBUAU14_oqrFR02J8NUg'} />
      </PlayerContext.Provider>
    </div>
  )
};

export default Player;