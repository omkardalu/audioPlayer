const isAuthenticated = async () => {
  const isLoggedIn = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/check`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (isLoggedIn.ok) {
    const data = await isLoggedIn.json();
    return data.isAuthenticated;
  } else {
    return false;
  }
};

export default isAuthenticated;