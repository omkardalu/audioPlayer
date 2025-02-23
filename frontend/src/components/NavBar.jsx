import { Link } from "react-router-dom";
import classes from '../assets/styles/NavBar.module.css';

const NavBar = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>AudioPlayer</Link>
        <ul className={classes.navLinks}>
          {
            isLoggedIn ? (
              <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/albums">Albums</Link></li>
                <li><Link to="/artists">Artists</Link></li>
                <li><Link to="/profile">Profile</Link></li>
              </>
            ) : (
              <li><Link to="/authenticate">Sign Up</Link></li>
            )
          }
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;