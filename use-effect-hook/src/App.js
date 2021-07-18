import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [timer, setTimer] = useState(0);

  useEffect(()=> {
    var updateTimer = setInterval(() => {
      setTimer(timer + 1)
    }, 1000);

    // return (()=> {
    //   clearInterval(updateTimer);
    // })

    //or

    return function cleanup() {
      clearInterval(updateTimer);
    }
  })

  return (
    <div className="App">
      <span>{timer}</span>
    </div>
  );
}

export default App;
