import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

const navigate = useNavigate();

  function handelClick(){
    navigate('/dashboard')
  }
  return (
    <>
    <h1>About Page</h1>
    <p> <p>This is about page</p></p>
    <button onClick={handelClick}>
      Move to Dsahboard Page
    </button>
    </>
  )
}

export default About