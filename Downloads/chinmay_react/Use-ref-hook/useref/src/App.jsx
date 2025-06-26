import { useEffect, useRef, useState } from "react";
import "./App.css";
import StopWatch from "./components/StopWatch";

function App() {
  // const [count, setCount] = useState(0);

  // let value=1

  // let value = useRef(0);
  // useRef returns a mutable ref object whose .current property is initialized to the passed argument

  // use ref persist its value and doesnt rerender

  // function handleClick() {
  //   // value= value+1;
  //   // console.log(value);
  //   // it will always return 2

  //   value.current = value.current + 1;
  //   console.log(`value is ${value.current}`);

  //   setCount(count + 1);
  // }
  // // it will run on every render
  // useEffect(() => {
  //   console.log("I have rendered agin!");
  // });

  // *****

  // let BtnRef = useRef();

  // function changeColor() {
  //   BtnRef.current.style.backgroundColor = "green";
  // }

  return (
    <>
      {/* <div>
        <button onClick={handleClick}>Increment</button>
        <br />
        <div>Count: {count} </div>
      </div>
      <br />

      <hr></hr> */}
{/*  you can directly modify DOM using Use ref */}
      {/* <button ref={BtnRef}>This is 1st Button</button> */}

      <br />
      
      {/* <button onClick={changeColor}>Change the colour of the 1st Button</button> */}



      <StopWatch/>
    </>
  );
}

export default App;

