import './App.css';
import React, { useState } from 'react';

function App() {

  const [val, setVal] = useState('0');

  setInputVal = (e)=> {
    setVal(val + e.target.innerHTML);
  }

  calculate = ()=> {
    try {
      setVal(pare(val)) 
    } 

    catch {
      console.log('Invalid input!')
      setVal('0');
    }
    
  }

    return (
      <div className="App">
        <div className="calculator">
  
          <div className="input-wrapper">
            <input defaultValue="0" value={val}/>
          </div>
        
          <div className="wrapper">
            <div className="num-wrapper">
              <button className="btn-square" onClick={setInputVal}>7</button>
              <button className="btn-square" onClick={setInputVal}>8</button>
              <button className="btn-square" onClick={setInputVal}>9</button>
              <button className="btn-square" onClick={setInputVal}>4</button>
              <button className="btn-square" onClick={setInputVal}>5</button>
              <button className="btn-square" onClick={setInputVal}>6</button>
              <button className="btn-square" onClick={setInputVal}>1</button>
              <button className="btn-square" onClick={setInputVal}>2</button>
              <button className="btn-square" onClick={setInputVal}>3</button>
            </div>
            <div className="btn-wrapper">          
              <button className="btn-square" onClick={setInputVal}>+</button>
              <button className="btn-square" onClick={setInputVal}>-</button>
              <button className="btn-square" onClick={setInputVal}>*</button>
              <button className="btn-square" onClick={setInputVal}>/</button>
              <button className="btn-rect" onClick={calculate}>=</button>
            </div>
          </div>
  
        </div>
      </div>
    );
  
}

export default App;
