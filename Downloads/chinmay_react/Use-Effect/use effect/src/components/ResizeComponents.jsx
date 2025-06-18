import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ResizeComponents = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [windowHeight, setWindowHeigth] = useState(window.innerHeight);

  useEffect(()=> {
    const handleResize =() => setWindowWidth(window.innerWidth);
    console.log("Event listener added..")
        window.addEventListener('resize', handleResize);

    return () => {
      console.log("Event Listener removed");
      window.addEventListener('resize',handleResize)
    }
  }, []);

  // it will runs only once
   useEffect(()=> {
    const handleResize =() => setWindowHeight(window.innerHeight);
    console.log("Event listener added..")
        window.addEventListener('resize', handleResize);

    return () => {
      console.log("Event Listener removed");
      window.addEventListener('resize',handleResize)
    }
  }, []);
  return (
    <>
        <h3>
          Window width : <p>{ windowWidth }px</p>
<br/>
          Window Height : <p>{ windowHeight }px</p>
        </h3>
    </>
  )
}

export default ResizeComponents