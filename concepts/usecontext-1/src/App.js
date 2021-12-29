import {createContext, useReducer} from "react";
import Child1 from './components/Child1';

export const CountContext = createContext();

function App() {

  const ACTIONS = {
    INCREMENT : 'increment',
    DECREMENT: 'decrement'
  }

  const CountReducer = (state, action)=> {
    switch(action.type) {
      case ACTIONS.INCREMENT: 
        return {count: state.count + 1};
      case ACTIONS.DECREMENT: 
        return {count: state.count - 1};
      default: 
        return state;
    }
  }

  const [state, dispatch] = useReducer(CountReducer, {count: 0});

  const increment = ()=> dispatch({type: ACTIONS.INCREMENT});
  const decrement = ()=> dispatch({type: ACTIONS.DECREMENT})

  return (
    <div className="app">
      <CountContext.Provider
       value={{count: state.count, increment, decrement}}>
        <Child1 />      
        <div className="counter-wrapper">
          <h1>{state.count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </CountContext.Provider>
    </div>
  );
}

export default App;
