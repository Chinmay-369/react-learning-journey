
import './App.css'
import EventBub from './components/EventBub';

function App() {
 
  function handleClick() {
      alert("Butotn is Clicked!!")
    }
    
  function handleMouseOver(){
    alert("Tum Paragraph k upar mouse leke aaye ho!")
  }

  function handleInputChange (e){
    console.log(`Input value is chnaged ${e.target.value}`)
  }

  function handleSubmit (e){
    e.preventDefault();
    //writing my custome behaviour
    alert("Form submit kr du kya")
  }
  return (
    <>
    <div>
    
    {/* <button onClick={ () => alert("Button is Cliked")}>
      click Me!
    </button> */}

    {/* <form onSubmit={handleSubmit}>
      <input type='text' onChange={ handleInputChange} placeholder='Input field'/>
      <br></br>
      <button type='submit'>Submit </button>
    </form> */}

{/* 
      <p onMouseOver={ handleMouseOver }>This is a paragraph</p>
      <button onClick={ handleClick }> click </button> */}


      <EventBub></EventBub>
    </div>

    
    </>
  )
}

export default App
