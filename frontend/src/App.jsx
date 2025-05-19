import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Authentication from './components/Authentication.jsx';
import isAuthenticated from '../utils/isAuthenticated.js';
import Player from './Player.jsx';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      isAuthenticated().then((result) => {
        setIsLoggedIn(result);
      });
    }
    checkLogin();
  }, [])

  return (
    <>
      <Routes >
        <Route path="*" element={isLoggedIn ? <Player /> : <Authentication />} />
      </Routes>
    </>
  )
};

export default App
