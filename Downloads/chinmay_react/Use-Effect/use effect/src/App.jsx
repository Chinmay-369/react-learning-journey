import { useEffect, useState } from "react";
import "./App.css";
import TimerComponent from "./components/TimerComponent";
import DataFetcher from "./components/DataFetcher";
import ResizeComponents from "./components/ResizeComponents";

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(0);

  //first -> side efeect function/logic

  // second -> Clean-up function on unmount

  // third -> comma separated dependencies list

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  // ********
  // Variation: 1 (without empty [])
  // runs on every render

  // useEffect(() => {
  //   alert(" I will run on each render")
  // })

  // ********
  // Variation: 2     (with empty [])
  // runs on only first render

  //  useEffect(() => {
  //     alert("I will run on only first render")
  //  }, [])

  // ***************
  //Variation: 3
  // run Every time when count is updtaed

  // useEffect(()=> {
  //     alert("I will run Every time when count is updtaed.")
  // },[count])

  // *********
  //Variation: 4
  //Multiple Dependencies
  //will run every time when [ Multiple Dependencies ] is updated

  // useEffect(() => {
  //   alert("I will run every time when COUNT/TOTAL is updated")
  // }, [count,total]);

  // *********

  // Variation: 5
  //Using CleanUp function

  //  useEffect(() => {
  //    alert("Count is Updated")

  //    return () => {
  //     alert("Count is unmounted from UI")
  //    }
  //  }, [count])

  // function handleClick() {
  //   setCount(count + 1);
  // }

  // function handleClickTotal() {
  //   setTotal(total + 1);
  // }

  return (
    <>
      {/* <button onClick={handleClick}>Click Me!</button>
      <br />
      <h2>Count is: {count}</h2>
      <br />
      <button onClick={handleClickTotal}>Update Total!</button>
      <br />
      <h2>Total is: {total}</h2> */}

      {/* <TimerComponent /> */}

      {/* if we remove timer component it will unmount and get stop */}

      <DataFetcher />

      {/* <ResizeComponents/> */}
    </>
  );
}

export default App;
