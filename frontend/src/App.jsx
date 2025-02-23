import './App.css'
import Albums from "./components/Albums.jsx";
import Authentication from "./components/Authentication.jsx";
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar.jsx';
import Dashboard from './pages/Dashboard.jsx';
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/authenticate" element={<Authentication />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path={"/albums"} element={<Albums />} />
      </Routes>

    </>
  )
}

export default App
