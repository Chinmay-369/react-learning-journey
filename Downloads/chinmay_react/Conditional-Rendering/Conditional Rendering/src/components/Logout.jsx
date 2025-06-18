import React from 'react';

const Logout = ({ setLoggedIn }) => {
  return (
    <>
    <h3>You are inside this page </h3>
      <button onClick={() => setLoggedIn(false)}>
        Log Out
      </button>
    </>
  );
};

export default Logout;
