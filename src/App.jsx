import { useState } from "react"
import Username from "./User"



function App(){
  
  const [count, setCount]=useState(0)

  return(
    <>
      <h1>Conditional Rendering</h1>
      <h1>count: {count}</h1>
      <button onClick={()=>setCount(count +1 )} >counter button</button>
      {
        count==0?<h2>Condition 0 </h2>
        :count==1?<h2>Condition 1 </h2>
        :count==2?<h2>Condition 2 </h2>
        :count==3?<h2>Condition 3 </h2>
        :count==4?<h2>Condition 4 </h2>
        :<h2>Other condition</h2>
      }
    </>
  )
}
export default App