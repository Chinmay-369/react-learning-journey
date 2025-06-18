import React from 'react'

const Button = (props) => {
  return (
   <>
     <button onClick={ props.handleClick }>
    {props.text}
    
    </button>
    <div>
      {props.children}
    </div>
    
   </>
  )
}

export default Button