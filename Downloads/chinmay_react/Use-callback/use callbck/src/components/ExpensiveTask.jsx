import { useState, useMemo, useRef, useEffect } from "react";

// Function moved outside so it's not recreated on each render
function expensiveTask(num) {
  console.log("Inside Expensive Task");
  let result = num;
  for (let i = 0; i <= 100000000; i++) {
    result += 0; // Simulating heavy computation
  }
  return result * 2;
}

function ExpensiveTask() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  const previousFunction = useRef(null);

  const doubleValue = useMemo(() => expensiveTask(input), [input]);

  useEffect(() => {
    if (previousFunction.current) {
      if (previousFunction.current === expensiveTask) {
        console.log("Function is not re-created");
      } else {
        console.log("Function got re-created");
      }
    } else {
      previousFunction.current = expensiveTask;
    }
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <div>
        <input
          type="number"
          placeholder="Enter number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
      </div>

      <div>Count: {count}</div>
      <div>Double: {doubleValue}</div>
    </>
  );
}

export default ExpensiveTask;

//expensive task-> Takes more time/resources/space/memory
