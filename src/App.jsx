import { useState } from "react";
import User from "./User";
import College from "./College";
import Student from "./Student";

function App() {
  let userObject1={
    name:"Saanvi",
    age:22,
    email:"saanvi@dot.com"
  }

  let userObject2={
    name:"Avicii",
    age:28,
    email:"avicii@dot.com"
  }

  let userObject3={
    name:"Lorem",
    age:498,
    email:"ipsum@dot.com"
  }

  let collegeNames=['IIT','BITS','VIT','MIT','MUJ']

  const [student, setStudent] = useState();

  return (
    <div>
      <>
        <h1>Props in React</h1>
        <br></br>
        <h1>Passing props onClick</h1>
        <hr></hr>
        {student && <Student name={student}/>}
        <button onClick={()=>setStudent("Saanvi")}>Update Student name</button>
        <hr></hr>
        <br></br>
        <hr></hr>

        <h1>Passing Lists in props</h1>
        <hr></hr>
        <College names={collegeNames}/>
        <br></br>
        <hr></hr>
        
        <h1>passing objects in props</h1>
        <User user={userObject1} />
        <User user={userObject2} />
        <User user={userObject3} />
        <hr></hr>
      </>
    </div>
  );
}

export default App;
