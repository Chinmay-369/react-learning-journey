import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { UserContext } from "../App";

const ChildC = () => {
  const user = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    if (theme === "Light") {
      setTheme("dark");
    } else {
      setTheme("Light");
    }
  }

  return (
    <>
      <button onClick={toggleTheme}>Change Theme</button>
      <h5 style={{ color: "red" }}>data: {user.name}</h5>
    </>
  );
};

export default ChildC;
