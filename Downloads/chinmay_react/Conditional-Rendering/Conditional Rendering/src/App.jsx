import { useState } from "react";
import "./App.css";
import Logout from "./components/Logout";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <div><h2> Welcome Everyone</h2></div>

      <div>
        {isLoggedIn && <Logout setLoggedIn={setLoggedIn} />}
        {!isLoggedIn && <Login setLoggedIn={setLoggedIn} />}
      </div>
    </>
  );



  // return(
  //   <div>
  //     {isLoggedIn ? <Logout /> : <Login /> }
  //   </div>
  // )



  // if (isLoggedIn) {
  //   return <Logout />;
  // } else {
  //   return <Login />;
  // }
}

export default App;
