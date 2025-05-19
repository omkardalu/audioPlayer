import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/Profile.jsx';

const PlayerMain = () => {
  return (
    <div className='playerMain'>
      <Routes>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
};

export default PlayerMain;