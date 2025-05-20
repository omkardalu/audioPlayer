import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/Profile.jsx';
import TopArtists from './Profile/TopArtists.jsx';
import TopTracks from './Profile/TopTracks.jsx';

const PlayerMain = () => {
  
  return (
    <div className='player-main-container'>
      <div className='player-main'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/top/artists' element={<TopArtists />} />
          <Route path='/top/Tracks' element={<TopTracks />} />
        </Routes>
      </div>
    </div>
  )
};

export default PlayerMain;