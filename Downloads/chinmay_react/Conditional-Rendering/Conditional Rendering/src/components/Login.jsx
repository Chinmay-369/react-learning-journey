import React from 'react';

const Login = ({ setLoggedIn }) => {
  return (
    <>
    <h3>Log in to See more... </h3>
      <button onClick={() => setLoggedIn(true)}>
        Login
      </button>
    </>
  );
};

export default Login;
