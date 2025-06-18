import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA';
import { useState } from 'react';

// Step 1: Create Context
const UserContext = createContext();

//Step 2: Wrap all the child inside a provider <UserContext.Provider>

//Step 3: pass the Value

//Step 4: Consume it through Consumer

function App() {
 
const [user,setUser] = useState({name:"HariPrabodham"})
  return (
    <>
    <UserContext.Provider  value={ user }>

      <ChildA/>

    </UserContext.Provider>
  
    </>
  )
}

export default App;
export { UserContext };


// hiearchy:
// App
// <>
//  <Provider>
//         |
//       ChildA
//         |
//       ChildB
//         |
//       ChildC
//  </Provider>
// </>