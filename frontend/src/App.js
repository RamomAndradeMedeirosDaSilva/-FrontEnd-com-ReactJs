import {useState} from "react";

function App() {
  
  //let counter=0;
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1); 
    
    //console.log(counter)
    //counter++;
  }

  return (
    <div className="App">
      <div>
        contador:{counter}
      </div>
      <button onClick={increment}>Incremento</button>
      {/* <h1>Meu App</h1> */}
    </div>
  );
}

export default App;
