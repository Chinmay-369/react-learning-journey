
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
// create state
// manage state
//change state
//sync state in all child

const [name, setName] = useState("");
  return (
    <>
    <Card title="Card 1:" name={name} setName={setName} />
    <Card title="Card 2:" name={name} setName={setName} />

     <p> ( I am inside Parent Component and value of name is: {name} )</p>
    
    </>
  )
}

export default App
