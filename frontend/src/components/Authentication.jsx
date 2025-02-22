const Authentication = () => {

  return (
    <div>
      <button onClick={
        () => {
          window.location.href = `${import.meta.env.VITE_BACKEND_URL}/login`;
        }}>Sign up
      </button>
    </div>
  );
}
export default Authentication;