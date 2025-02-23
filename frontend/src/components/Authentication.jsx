import { Link } from "react-router-dom";

const Authentication = () => {
  localStorage.setItem("isLoggedIn", JSON.stringify(false));
  return (
    <div>
      <Link
        onClick={() => localStorage.setItem("isLoggedIn", JSON.stringify(true))}
        to={`${import.meta.env.VITE_BACKEND_URL}/login`}>
        <button>Sign up</button>
      </Link>
    </div>
  );
}
export default Authentication;