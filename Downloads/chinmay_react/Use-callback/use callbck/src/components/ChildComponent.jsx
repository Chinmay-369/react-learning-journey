import React from 'react'

const ChildComponent = React.memo(
  (props) => {

  console.log("Child Component got re-rendered again...")
  return (
   <>
     <div>Child Component</div>
     <button onClick={props.handleClick}>
      {props.buttonName}
     </button>
   </>
  )
}

)
export default ChildComponent;
// React.memo-> wrap your component it will not get re-rendered again

// it will only get re-rendered again when props get's change

//if you are sending a function then React.memo wont be able to save you from re-rendering