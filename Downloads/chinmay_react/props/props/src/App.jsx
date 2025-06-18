
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './Components/Card'

function App() {
  
  const [count,setCount] = useState(0)

  function handleClick(){
    setCount(count+1);
  }
  return (
    <>

    <Button handleClick = {handleClick} text="Press">
      <h1>count: {count}</h1>
    </Button>


   {/* <div>
       <Card name = "Chinmay Bhole">
      <h2>Best Web Developer</h2>
      <p>Very Consistent</p>
      <p>Woking as a Jr. Frontend Developer at Aurifex</p>
      </Card>

      <Card children ="I am a Children">
         Hello, Evryone.... (overwrite)
      </Card>
   </div> */}
    </>
  )
}

export default App
