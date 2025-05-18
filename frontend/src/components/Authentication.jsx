const Authentication = () => {
  
  const authenticate =  () => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/login`;
    window.location.href = url;
    try{
      localStorage.setItem("isLoggedIn", false);
    }catch (error) {
      console.error("Error during authentication:", error);
    }
  } ;

  return (
    <div>
      <h1>Authentication</h1>
      <p>Please <b>Sign in</b> with your spotify account</p>
        <button onClick={authenticate}>Sign in</button>
    </div>
  );
};

export default Authentication;