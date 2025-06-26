import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 900000000000000; i++) {
      return num * 2;
    }
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>
        <input
          type="number"
          placeholder="Enter number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div>Count : {count}</div>
      <div>Double : {doubleValue}</div>
    </>
  );
}

export default App;
//expensive task-> Takes more time/resources/space/memory