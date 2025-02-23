import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">AudioPlayer</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/albums">Albums</Link></li>
          <li><Link to="/artists">Artists</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;