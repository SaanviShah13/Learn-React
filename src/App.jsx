import { useState } from "react"
import Username from "./User"



function App(){
  
  const [display,setDisplay]=useState(true)

  return(
    <>
      <h1>Toggle button using usestate</h1>
      
      <button onClick={()=>setDisplay(!display)} >Show Name</button>
      {
        display? <Username/>:null
      }
    </>
  )

}

export default App