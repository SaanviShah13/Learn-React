import { useState } from "react";
import User from "./User";

function App() {
  return (
    <div>
      <>
        <h1>Props in React</h1>
        <User name="Saanvi Shah" age={22} email="saanvi@dot.com" />
      </>
    </div>
  );
}

export default App;
