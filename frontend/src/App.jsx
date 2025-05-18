import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Authentication from './components/Authentication.jsx';
import { useEffect } from 'react';
import isAuthenticated from '../utils/isAuthenticated.js';
import { useState } from 'react';
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
        <Route path="/" element={isLoggedIn ? <Home /> : <Authentication />} />
      </Routes>
    </>
  )
};

export default App
