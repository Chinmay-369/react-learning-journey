import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const Navigate = useNavigate();
  function handleClick(){
    
        Navigate('/about')
  }
  return (
    <>
      <h1>Home Page </h1>
    <p>This is home page</p>
    <button onClick={handleClick}>
      move to about page
    </button>
    </>
  )
}

export default Home