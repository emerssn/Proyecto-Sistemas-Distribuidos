import React from "react";
import useLogout from "../../hooks/useLogout";

const Logout = () => {
  const { loading, logout } = useLogout();

  return (
    <>
      {!loading ? (
        <img
          className="py-4 pb-4 w-12"
          src="\src\assets\favicon.svg"
          alt="logout"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </>
  );
};

export default Logout;
