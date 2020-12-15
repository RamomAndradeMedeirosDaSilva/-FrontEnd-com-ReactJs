import {useState} from "react";
import Routes from './routes';
/*import User from './pages/User';*/

function App() {
  /*//let counter=0;
  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1); 
    
    //console.log(counter)
    //counter++;
  }*/

  return (
    <div className="App">
      <Routes />
        {/*<User />*/}
        {/* <div>
          contador:{counter}
        </div>
        <button onClick={increment}>Incremento</button>
        <h1>Meu App</h1> esta linha já estava comentada */}
    </div>
  );
}

export default App;
