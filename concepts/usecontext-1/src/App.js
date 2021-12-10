import {createContext, useState} from "react";
import Child1 from './components/Child1';

export const CountContext = createContext(0);

function App() {

  const [count, setCounter] = useState(0);
  const counter = ()=> setCounter(count + 1);

  return (
    <div className="app">
      <CountContext.Provider value={count}>
        <Child1 />      
        <div className="counter-wrapper">
          <h1>{count}</h1>
          <button onClick={counter}>ADD</button>
        </div>
      </CountContext.Provider>
    </div>
  );
}

export default App;
