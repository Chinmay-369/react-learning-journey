import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const TimerComponent = () => {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    
    const intervalId = setInterval(()=> {
      console.log("SetInterval Executed...")

      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000)
  
    return () => {
      console.log("Time to Stop!")
      clearInterval(intervalId);
    }
  }, [])
    // runs on only first renderf
  
  return (
    <>
      <h2>Seconds :-  {seconds} </h2>
    </>
  )
}

export default TimerComponent