import { Link } from "react-router-dom";

export const SignUpButton = () => {
  return <Link
    onClick={() => localStorage.setItem("isLoggedIn", JSON.stringify(true))}
    to={`${import.meta.env.VITE_BACKEND_URL}/login`}>
    <button>Sign up</button>
  </Link>
};

const Authentication = () => {

  localStorage.setItem("isLoggedIn", JSON.stringify(false));
  return (
    <div className="authentication-container">
      <div className="authentication">
        <div className="welcome">
          <p className="welcome-message">You're one step away to listen your favorite music</p>
          <div className="join-message">
            <span>Join into</span> AudioPlayer
          </div>
        </div>
        <SignUpButton />
      </div>
    </div>
  );
};

export default Authentication;