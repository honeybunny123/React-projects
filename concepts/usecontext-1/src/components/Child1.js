import {useContext} from 'react';
import Child2 from './Child2';
import {CountContext} from '../App'

 const Child1 = ()=> {
   const count = useContext(CountContext);
  return (
    <div className="child1">
      <Child2 />
      <h2>{count}</h2>
    </div>
  )
}

export default Child1;