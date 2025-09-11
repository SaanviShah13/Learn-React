import { useState } from "react"



function App(){
  
  const [display,setDisplay]=useState(true)

  return(
    <>
      <h1>Toggle button using usestate</h1>
      {
        display? <h2>Saanvi Shah</h2>:null
      }
      <button onClick={()=>setDisplay(!display)} >Show Name</button>
    </>
  )

}

export default App