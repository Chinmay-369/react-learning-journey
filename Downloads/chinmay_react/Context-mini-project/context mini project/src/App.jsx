import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";

const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("Light");
  const [user, setUser] = useState({ name: "Chinmay" });

  return (
    <>
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div
            id="container"
            style={{ backgroundColor: theme === "Light" ? "beige" : "black" }}
          >
            <ChildA />
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
export { ThemeContext };
