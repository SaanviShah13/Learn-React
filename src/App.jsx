import User from "./User";

function App() {
  
  return (
    <div>
      <h1>Props in react js</h1>
      <h1>passing jsx with props</h1>
      <User>
        <h2>Saanvi Shah</h2>
      </User>

      <User>
        <h2>Saanvi Shah 2</h2>
        <p>This is a paragraph</p>
      </User>

      <User>
        <h2>Saanvi Shah 3</h2>
      </User>

    </div>
  )
}

export default App;
