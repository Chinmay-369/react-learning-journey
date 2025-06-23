import { useState } from "react";
import "./App.css";
import { decrement, increment, incrementByAmount, reset } from "./Features/Counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleReset(){
    dispatch(reset())
  }

  function handleIncAmountCLick(){
    dispatch(incrementByAmount(Number(amount)))
  }
  return (
    <>
      <div>
        <button onClick={handleIncrement}>+</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrement}>-</button>
        <br/>
        <button onClick={handleReset}>Reset</button>
        <br/>
        <input
          type='number'
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <br/>
        <button onClick={handleIncAmountCLick}>Increment by amt</button>
      </div>
    </>
  );
}

export default App;
