import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/Profile.jsx';

const PlayerMain = () => {
  return (
    <div className='player-main-container'>
      <div className='player-main'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  )
};

export default PlayerMain;