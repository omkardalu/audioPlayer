import { useNavigate } from 'react-router-dom';

const checkAccess = async(navigate) => {
  const isLoggedIn = await JSON.parse(localStorage.getItem("isLoggedIn"));
  !isLoggedIn && navigate("/authenticate");
};

const Dashboard = () => {
  const navigate = useNavigate();
  checkAccess(navigate);

  return (
    <div>Dashboard</div>
  )
};

export default Dashboard;