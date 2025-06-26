import { useCallback, useState } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import ExpensiveTask from "./components/ExpensiveTask";

function App() {
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }
  // at every rendered new reference is getting created

  // let handleClick = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]); 
  // Runs only once and gets freeze counter will also shows 1 coz function is freeze.

  // to make him generic add dependency[count]
  return (
    <>
      {/* <button onClick={handleClick}>Increment</button>
      <div>Count:{count}</div>

      <br />
      <ChildComponent buttonName="Click Me!" handleClick={handleClick} /> */}

      <ExpensiveTask/>
    </>
  );
}

export default App;
