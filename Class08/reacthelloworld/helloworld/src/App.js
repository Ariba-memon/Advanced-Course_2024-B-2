
import './App.css';
import { useState } from 'react';
function App() {
  let [Counter, setCounter] = useState(0);
  //arrow function
  const Inc = () =>{
  setCounter(Counter + 1)
  }
  //Decrement
  const Dec = () =>{
    setCounter(Counter - 1)
    }
  return (
   <div>
  <h1>Counter App </h1>
  <h1>{Counter}</h1>
  <button onClick={Inc}>Increment</button>
  <button onClick={Dec}>Decrement</button>
  
   </div>
  );
}

export default App;
