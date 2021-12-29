import {useContext} from 'react';
import Child2 from './Child2';
import {CountContext} from '../App'

 const Child1 = ()=> {
   const countCxt = useContext(CountContext);
  return (
    <div className="child1">
      <Child2 />
      <h2>{countCxt.count}</h2>
      <button onClick={countCxt.increment}>Increment</button>
      <button onClick={countCxt.decrement}>Decrement</button>
    </div>
  )
}

export default Child1;